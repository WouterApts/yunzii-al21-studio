# AL21 Studio

A lightweight browser configuration app for the **YUNZII AL21** numpad. Remap keys and the knob, record macros, customize lighting, and adjust wireless sleep settings from your browser.

The app is a single HTML file with its styles, scripts, logo, and icons included. No npm packages, build step, account, or cloud service are needed.

## Use it online

**[Open AL21 Studio](https://wouterapts.github.io/yunzii-al21-studio/)** in desktop **Chrome or Edge**. No installation is needed. Bookmark the page for next time.

1. Plug in your AL21's **2.4 GHz USB receiver**, switch the numpad to 2.4 GHz mode, and wake it with a keypress.
2. Click **Connect** and choose **2.4G Wireless Keyboard** in the browser's device picker.

GitHub Pages serves the app files. The browser communicates directly with your numpad; device settings are not sent to a server.

## Run it locally

Prefer a local copy? Install **Node.js** and use desktop **Chrome or Edge**.

1. Download this repository using **Code > Download ZIP** and extract it, or clone it with Git.
2. On **Windows**, double-click **Start AL21 Studio.cmd**. It starts the server and opens Chrome or Edge automatically.

   Alternatively, open a terminal in the extracted folder and run:

   ```sh
   node serve.js --open
   ```

3. Connect your numpad using the steps above. The local address is **http://localhost:8421**.

Keep the terminal open while using the app. Press **Ctrl+C** in the terminal to stop the server. To start without opening a browser, run `node serve.js`. On macOS and Linux, `--open` uses your default browser; if that is not Chrome or Edge, open the local address in one of those browsers instead.

The server listens only on your own computer, and local use works without an internet connection once the files and Node.js are installed. Serve the app through localhost as above so the browser can access WebHID.

The browser can reconnect automatically after you grant device access. The online and local versions have separate browser permissions and saved names/preferences; settings stored on the numpad remain available in either version.

## Features

- **Three profiles:** edit assignments and use **Activate** to switch the active profile.
- **Keys and knob:** assign keys, shortcuts, media controls, mouse buttons, macros, or disable an input. Double-click a keycap or knob input to capture a key or shortcut.
- **Fn layer:** edit the shared Fn layer and see which inputs act as Fn in the active profile.
- **Macros:** record keystrokes and timing, edit delays, and add keyboard or mouse steps. Play a fixed number of times, toggle playback, or repeat while held.
- **Lighting:** choose effects and color presets, create custom patterns, or turn lighting off.
- **Advanced settings:** click the gear beside the battery to adjust debounce and wireless sleep timers. Settings load from the numpad and save with read-back verification.
- **Light and dark themes.**

Key assignments, macros, lighting, and advanced settings are saved to the numpad. Profile names, macro names, and interface preferences are stored in this browser.

## Connection support

The app has been developed with an AL21 using its 2.4 GHz receiver. USB cable support is implemented but has not been verified on hardware. Configuration over Bluetooth is not supported; Bluetooth sleep timers can be configured through the receiver.

Firefox and Safari are not supported because the app requires WebHID. If the device is missing or fails to connect, check its wireless mode, wake it, and close other configuration software that may be using it.

Debounce uses the device's native **1-10** range. Its units have not been confirmed, so the app does not label it in milliseconds. Sleep timers are displayed in minutes and read from your device rather than filled with assumed factory defaults.

## Files

- `index.html` - the complete browser app, including embedded graphics.
- `serve.js` - a small local server using only Node.js built-in modules.
- `Start AL21 Studio.cmd` - a double-click Windows launcher for local use.
- `.nojekyll` - tells GitHub Pages to serve the files directly.

The app includes no analytics and makes no external requests after loading. Whether hosted on GitHub Pages or served locally, device communication happens directly in the browser through WebHID.

This is an independent project and is not affiliated with or endorsed by YUNZII. Device communication was implemented from observations of the AL21 and its vendor driver.
