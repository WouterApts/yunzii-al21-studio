// Serves AL21 Studio on http://localhost:8421 (WebHID needs a secure context; localhost qualifies).
const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = Number(process.env.PORT) || 8421;
const page = path.join(__dirname, 'index.html');
const fonts = path.join(__dirname, 'fonts');
const url = `http://localhost:${PORT}`;
const shouldOpen = process.argv.includes('--open');

function openBrowser() {
  let command, args;
  if (process.platform === 'win32') {
    const roots = [process.env.PROGRAMFILES, process.env['PROGRAMFILES(X86)'], process.env.LOCALAPPDATA].filter(Boolean);
    const browsers = ['Google/Chrome/Application/chrome.exe', 'Microsoft/Edge/Application/msedge.exe'];
    command = browsers.flatMap(browser => roots.map(root => path.join(root, browser))).find(file => fs.existsSync(file));
    args = [url];
    if (!command) {
      command = 'cmd.exe';
      args = ['/d', '/c', 'start', '', `microsoft-edge:${url}`];
    }
  } else {
    command = process.platform === 'darwin' ? 'open' : 'xdg-open';
    args = [url];
  }
  const child = spawn(command, args, { detached: true, stdio: 'ignore', windowsHide: true });
  child.on('error', () => console.log(`Open ${url} in Chrome or Edge.`));
  child.unref();
}

function reportError(error) {
  console.error(error.code === 'EADDRINUSE'
    ? `Port ${PORT} is already in use. Close the other server or set PORT to another number.`
    : `Could not start AL21 Studio: ${error.message}`);
  process.exitCode = 1;
}

http
  .createServer((req, res) => {
    // Bundled fonts are served by exact file name only, so no path can escape the folder.
    const font = /^\/fonts\/([a-z-]+\.woff2)$/.exec(req.url);
    if (font && fs.existsSync(path.join(fonts, font[1]))) {
      res.writeHead(200, { 'Content-Type': 'font/woff2', 'Cache-Control': 'max-age=86400' });
      fs.createReadStream(path.join(fonts, font[1])).pipe(res);
      return;
    }
    if (req.url !== '/' && req.url !== '/index.html') {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(page).pipe(res);
  })
  .on('error', error => {
    if (error.code !== 'EADDRINUSE' || !shouldOpen) return reportError(error);
    // Reuse an already-running copy of this app when the launcher is clicked again.
    const request = http.get({ hostname: '127.0.0.1', port: PORT, path: '/' }, response => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', chunk => {
        body += chunk;
        if (body.length > 1024 * 1024) request.destroy(new Error('Unexpected response'));
      });
      response.on('error', () => reportError(error));
      response.on('end', () => {
        if (response.statusCode === 200 && body === fs.readFileSync(page, 'utf8')) {
          console.log(`AL21 Studio is already running at ${url}`);
          openBrowser();
        } else reportError(error);
      });
    });
    request.setTimeout(2000, () => request.destroy(new Error('Connection timed out')));
    request.on('error', () => reportError(error));
  })
  .listen(PORT, '127.0.0.1', () => {
    console.log(`AL21 Studio: ${url}  (open in Chrome or Edge)`);
    console.log('Keep this window open. Press Ctrl+C to stop the server.');
    if (shouldOpen) openBrowser();
  });
