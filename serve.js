// Serves AL21 Studio on http://localhost:8421 (WebHID needs a secure context; localhost qualifies).
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 8421;
const page = path.join(__dirname, 'index.html');

http
  .createServer((req, res) => {
    if (req.url !== '/' && req.url !== '/index.html') {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(page).pipe(res);
  })
  .listen(PORT, '127.0.0.1', () => console.log(`AL21 Studio: http://localhost:${PORT}  (open in Chrome or Edge)`));
