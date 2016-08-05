# huohubot
client side chatbot that can be embedded in any web site

Check [Online Demo](https://gasolin.github.io/huohubot/)

## Features

* Tiny size (80 lines that contain the core with 3 plugins in init version) that easy to understand and suit for embed in any web site
* Structure is inspired by [hubot](https://github.com/github/hubot/), which is a server side chatbot framework
  * Provide plugin architecture that able to expand functions
  * Regex based message matching
  * Plugin callbacks are extremely flexible, you can control in-page elements, execute local command, fetch remote data, trigger remote actions...


## How to Install

Clone the project then include the huohubot.js in your html file with 2 extra tags:

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

## License

Huohubot use MIT License
