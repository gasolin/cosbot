# huohubot
client side chatbot that can be embedded in any web site

Check [Online Demo](https://gasolin.github.io/huohubot/)

## Features

* Chat bot works in your browser without setup a server
* Tiny size (80 lines that contain the core with 3 plugins in init version) that easy to understand and suit for embed in any web site
* Structure is inspired by [hubot](https://github.com/github/hubot/), which is a server side chatbot framework
  * Provide plugin architecture that able to expand functions
  * Regex based message matching
  * Plugin callbacks are extremely flexible, you can control in-page elements, execute local command, fetch remote data, trigger remote actions...
  * can extend bot functionality by import addons


## How to Install

### Method 1

If you just want to try how the bot looks like, Check [Online Demo](https://gasolin.github.io/huohubot/)

### Method 2

If you want to modify it locally, clone the project, then drag index.html to your browser, now you have a working bot!

### Method 3

If you want embed bot into your web site, clone the project then include the `huohubot.js` in your html file with 2 extra tags:

```html
<div id="history"></div>
<input id="message"><button id="send">Send</button>
<script defer src="huohubot.js"></script>
```

## Usage

Huohubot provide 3 build-in plugins `ping`, `time`, `echo`:

### Ping plugin

```
me: ping
bot: PONG
```

### Time plugin:

```
me: time
bot: Device time is Fri Aug 05 2016 21:22:11 GMT+0800 (CST)
```

### Echo plugin:

```
me: echo Hello World!
bot: Hello World!
```

![Imgur](http://i.imgur.com/Ljjf0Fw.png)

## Developer

Open browser's devtool and you can start manipulate `Huohubot` object.
Plugins are located in `Huohubot.rules`, and that is the place all you need to deal with.

### Make an addon

You can extend Huohubot's functionality by import extra `huohubot-[addonName].js`:

```js
'use strict';
if (!Huohubot) {
  return
}

Huohubot.prototype.addonName = {
  ...
};
```

then include the js file after `huohubot.js`.

```html
...
<script defer src="huohubot.js"></script>
<script defer src="huohubot-addonName.js"></script>
```

## License

Huohubot use MIT License

## ChangeLog

* 0.1 2016/8/5 init version
