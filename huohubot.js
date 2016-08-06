'use strict';
var HuohuBot = {
  rules: [{name: 'ping', rule: /PING$/i, action: function(robot, msg) {
      robot.send('PONG');
    }},
    {name: 'echo [string]', rule: /ECHO (.*)$/i, action: function(robot, msg) {
      robot.send(msg);
    }},
    {name: 'time', rule: /TIME$/i, action: function(robot, msg) {
      robot.send('Device time is ' + new Date());
    }}],

  catchAll: {action: function(robot, msg) {
    robot.send('what do you say?');
  }},

  init: function() {
    this.myAlias = 'me';
    this.botAlias = 'bot';
    this.messageHistoryElement = 'history';
    this.inputElement = 'message';
    this.sendButtonElement = 'send';
    this.chatHistory = [{type: 'normal', role: 'bot',
      message: 'type something to chat with me'}];

    this.history = document.getElementById(this.messageHistoryElement);
    this.message = document.getElementById(this.inputElement);
    this.btn = document.getElementById(this.sendButtonElement);

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
    var receivedMsg = this.message.value;
    this.send(receivedMsg, this.myAlias);
    this.processListeners(receivedMsg);
  },

  processListeners: function(msg) {
    var len = this.chatHistory.length;
    this.rules.forEach((item) => {
      if (item.rule.test(msg)) {
        console.log('matched!');
        item.action(this, msg);
      }
    });

    if (len === this.chatHistory.length) {
      console.log('wildcard');
      this.catchAll.action(this, msg);
    }
    this.render();
  },

  render: function() {
    console.log('render!');
    this.cleanUp();
    this.chatHistory.forEach((meta) => {
      var response = document.createElement('p');
      response.textContent = meta.role + ': ' + meta.message;
      this.history.appendChild(response);
    });
  },

  cleanUp: function() {
    while (this.history.firstChild) {
      this.history.removeChild(this.history.firstChild);
    }
    this.message.value = '';
    this.message.focus();
  },

  send: function(msg, role) {
    var charactor = role ? role : this.botAlias;
    this.chatHistory.push({type: 'normal', role: charactor, message: msg});
  }
};

HuohuBot.init();
