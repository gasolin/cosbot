'use strict';
var HuohuBot = {
  rules: [{name: 'ping', rule: /PING$/i, action: function(robot, msg) {
      return robot.botAlias + ': PONG';
    }},
    {name: 'echo', rule: /ECHO (.*)$/i, action: function(robot, msg) {
      return robot.botAlias + ': ' + msg;
    }},
    {name: 'time', rule: /TIME$/i, action: function(robot, msg) {
      return robot.botAlias + ': Device time is ' + new Date();
    }}],

  catchAll: {action: function(robot, msg) {
    return robot.botAlias + ': what do you say?';
  }},

  init: function() {
    this.myAlias = 'me';
    this.botAlias = 'bot';
    this.chatHistory = ["bot: type something to chat with me"];

    this.history = document.getElementById('history');
    this.message = document.getElementById('message');
    this.btn = document.getElementById('send');

    this.btn.addEventListener('click', this.onReceive.bind(this));
    this.message.addEventListener('keydown', this.onKeydown.bind(this));
    this.render();
  },

  onKeydown: function(e) {
    if(e.keyCode == 13) { // enter
		  this.onReceive();
    }
  },

  onReceive: function() {
    var receiveMsg = this.message.value;
    this.chatHistory.push(this.myAlias + ': ' + receiveMsg);
    this.processListeners(receiveMsg);
  },

  processListeners: function(msg) {
    var len = this.chatHistory.length;
    this.rules.forEach((item) => {
      if (item.rule.test(msg)) {
        console.log('matched!');
        var response = item.action(this, msg);
        this.chatHistory.push(response);
      }
    });

    if (len == this.chatHistory.length) {
      console.log('wildcard');
      var response = this.catchAll.action(this, msg);
      this.chatHistory.push(response);
    }
    this.render();
  },

  render: function() {
    console.log('render!');
    this.cleanUp();
    this.chatHistory.forEach((msg) => {
      var response = document.createElement('p');
      response.textContent = msg;
      this.history.appendChild(response);
    });
    this.message.value = '';
    this.message.focus();
  },

  cleanUp: function() {
    while (this.history.firstChild) {
      this.history.removeChild(this.history.firstChild);
    }
  }
};

HuohuBot.init();
