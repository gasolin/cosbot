# Saihubot
Compact Chat bot runs in the Browser, you can add new vary kinds of dialect via plugins and extend its ability via addons

Check [Online Demo](https://gasolin.github.io/saihubot/)

Saihubot's API is very similar to [hubot]((https://github.com/github/hubot/)'s API, so developer could port hubot-plugins to Saihubot-plugins with less effort.

saihu (`師傅`) means `master` in Taiwanese, its origin goal is provide a code sample that make learning [hubot](https://github.com/github/hubot/) and its ES6 variant [Webbybot](https://github.com/gasolin/webbybot/) easier.

## Features

* Tiny size (80 lines that contain the core with 3 plugins in init version)
* Written in plain Javascript
* Chat bot works in your browser without setup a server, which won't send private message elsewhere.
* Structure is inspired by [hubot](https://github.com/github/hubot/)
  * Provide plugin architecture that able to expand functions
  * Regex based message matching
  * Plugin callbacks are extremely flexible, you can control in-page elements, execute local command, fetch remote data, trigger remote actions...
  * can extend bot functionality by import addons

## How to use

### Try online

If you just want to try how the bot looks like, Check [Online Demo](https://gasolin.github.io/saihubot/)

### Try on github

Fork the project, edit index.html with github editor, save it and see the result on https://[yourname].github.io/saihubot

### Modify locally

Clone the project, then drag index.html to your browser, now you have a working bot!

### Embed in your web site

Clone the project then include the `saihubot.js` in your html file with 2 extra tags:

```html
<div id="history"></div>
<input id="message"><button id="send">Send</button>
<script defer src="saihubot.js"></script>
<script defer src="saihubot-diagnostics.js"></script>
```

## Usage

Saihubot provide 3 default plugins `ping`, `time`, `echo` that you can include via:

```html
<script defer src="saihubot-diagnostics.js"></script>
```

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

### Make an plugin

Plugin denotes rules and responses that the bot use to match and respond to the user.

Open browser's devtool and you can start manipulate `Saihubot` object.
Plugins are located in `Saihubot.responses`, and that is the place all you need to deal with.

Check [Plugin Demo](https://gasolin.github.io/saihubot/plugin) for example.

![Imgur](http://i.imgur.com/mbhTwf6.png)

### Make an addon

Addon denotes extra function that can expand Saihubot's functionality.

You can extend Saihubot's functionality by import extra `saihubot-[addonName].js`:

```js
document.addEventListener('DOMContentLoaded', function() {
  Saihubot.prototype.addonName = {
    ...
  };
});
```

then include the js file after `saihubot.js`.

```html
...
<script defer src="saihubot.js"></script>
<script defer src="saihubot-addonName.js"></script>
```

Check [Addon Demo](https://gasolin.github.io/saihubot/addon) for example.

![Imgur](http://i.imgur.com/qYCES6M.png)

## License

Saihubot use MIT License

## ChangeLog

* 0.3 2016/8/17 rename from HuohuBot to Saihubot, turn Saihubot to constructor, separate saihubot-dialog.js from addon
* 0.2 2016/8/6 change to robot.send method in plugin, add plugin and addon examples
* 0.1 2016/8/5 init version
