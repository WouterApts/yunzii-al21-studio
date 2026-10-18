# AL21 Studio

A vibe-coded browser app for the **YUNZII AL21** numpad. Remap keys and the knob, record macros, customize lighting, and adjust other settings from your browser.

## Use it through GitHub Pages

**[Open AL21 Studio](https://wouterapts.github.io/yunzii-al21-studio/)** in desktop **Chrome or Edge**. No installation is needed. Bookmark the page for next time ;)

1. Plug in your AL21's **2.4 GHz USB receiver**, switch the numpad to 2.4 GHz mode, and wake it with a keypress.
2. Click **Connect** and choose **2.4G Wireless Keyboard** in the browser's device picker.

GitHub Pages serves the app files. The browser communicates directly with your numpad; device settings are not sent to a server.

## Use it locally

Install **Node.js** and use desktop **Chrome or Edge**.

1. Download this repository using **Code > Download ZIP** and extract it, or clone it with Git.
2. On **Windows**, double-click **Start AL21 Studio.cmd**. It starts the server and opens Chrome or Edge automatically.
3. Connect your numpad using the steps above. The default local address is **http://localhost:8421**.

## Features

- **Three profiles:** edit profiles and use **Activate** to switch between them. Use the file menu beside the profile name to import or export a profile.
- **Keys and knob:** assign keys, shortcuts, media controls, mouse buttons, or macros, or disable an input. Double-click a keycap or knob input to capture a key or shortcut.
- **Fn layer:** edit the shared Fn layer and see which inputs act as Fn in the active profile.
- **Macros:** record macros or import them in QMK format, then assign them to your chosen keys.
- **Lighting:** choose effects and color presets, create custom patterns, or turn lighting off.
- **Advanced settings:** click the gear beside the battery to adjust debounce and wireless sleep timers.

Key assignments, macros, lighting, and advanced settings are saved to the numpad. Profile names, macro names, and interface preferences are stored in your browser.

## Connection support

The app has been developed with an AL21 using its 2.4 GHz receiver. USB cable support is implemented but has not been verified on hardware. Configuration over Bluetooth is not supported; Bluetooth sleep timers can be configured through the receiver.

Firefox and Safari are not supported because the app requires WebHID. If the device is missing or fails to connect, check its wireless mode, wake it, and close other configuration software that may be using it.

## Files

- `index.html` - the complete browser app, including embedded graphics.
- `serve.js` - a small local server using only Node.js built-in modules.
- `Start AL21 Studio.cmd` - a double-click Windows launcher for local use.
- `.nojekyll` - tells GitHub Pages to serve the files directly.

## Project notice

This is an independent project and is not affiliated with or endorsed by YUNZII. Device communication was implemented from observations of the AL21 and its vendor driver.
