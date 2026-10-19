# AL21 Studio

A vibe-coded browser app for the **YUNZII AL21** numpad. 
Allows you to remap keys, configure the knob, record macros, customize lighting, and adjust other settings from your browser.

## Use it through GitHub Pages

**[Open AL21 Studio](https://wouterapts.github.io/yunzii-al21-studio/)** in desktop **Chrome or Edge**. No installation is needed. Bookmark the page for next time ;)

1. Plug in your AL21's **2.4 GHz USB receiver**, switch the numpad to 2.4 GHz mode, and wake it with a keypress.
2. Click **Connect** and choose **2.4G Wireless Keyboard** in the browser's device picker.

GitHub Pages serves the app files. The browser communicates directly with your numpad. Device settings are never sent to a server.

## Use it locally

Install **Node.js** and use the **Chrome or Edge** browser.

1. Download this repository using **Code > Download ZIP** and extract it, or clone it with Git.
2. On **Windows**, double-click **Start AL21 Studio.cmd**. It starts the server and opens Chrome or Edge automatically.
3. Connect your numpad using the steps above. The default local address is **http://localhost:8421**.

## Preview

![Key and shortcut editor with the AL21 numpad layout](preview/Preview%201.png)

![Fn layer and macro sequence editor](preview/Preview%202.png)

![Custom lighting effects, color palette, and image import and export](preview/Preview%203.png)

## Connection support

The app has been developed with an AL21 using its 2.4 GHz receiver. USB cable support is implemented but has not been properly tested. Configuration over Bluetooth is not supported; Bluetooth sleep timers can be configured through the receiver.

Firefox and Safari are not supported because the app requires WebHID. If the device is missing or fails to connect, check its wireless mode, wake it, and close other configuration software that may be using it.

## Files

- `index.html` - the complete browser app, including embedded graphics.
- `serve.js` - a small local server using only Node.js built-in modules.
- `fonts/` - bundled interface fonts and their licenses.
- `preview/` - screenshots of key assignments, macros, and lighting.
- `Start AL21 Studio.cmd` - a double-click Windows launcher for local use.
- `.nojekyll` - tells GitHub Pages to serve the files directly.

## Project notice

This is an independent project and is not affiliated with or endorsed by YUNZII. Device communication was implemented from observations of the AL21 and its vendor driver.
