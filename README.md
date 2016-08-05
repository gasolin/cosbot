# huohubot
client side chatbot that can be embedded in any web site

Check [Online Demo](https://gasolin.github.io/huohubot/)

## Features

* Tiny size (80 lines that contain the core with 3 plugins in init version) that suit for embed in any web site
* Structure is inspired by [hubot](https://github.com/github/hubot/), which is a server side chatbot framework
  * Provide plugin architecture that able to expand functions
  * Regex based message matching
  * Plugin callbacks are extremely flexible, you can control in-page elements, execute local command, fetch remote data, trigger remote actions...

[Imgur](http://i.imgur.com/Ljjf0Fw.png)

## How to Install

Clone the project then include the huohubot.js in your html file with 2 extra tags:

```html
<div id="history"></div>
<input id="message"><button id="send">Send</button>
<script defer src="huohubot.js"></script>
```
