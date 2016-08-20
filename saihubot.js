'use strict';
function SaihuBot() {
  this.myAlias = '我';
  this.botAlias = '小啄';
  this.messageHistoryElement = 'history';
  this.inputElement = 'message';
  this.sendButtonElement = 'send';
  this.defaultMessage = document.createElement('p');
  this.defaultMessage.textContent = this.botAlias + ': COSCUP是由一群熱情於社群活動的志工管理。' +
    '小啄不會儲存或傳送您的任何個人資訊到您所使用的裝置外，請放心玩弄我吧:3';

  this.init();
}

SaihuBot.prototype = {
  responses: [],

  catchAll: { action: function(robot, msg) {
    robot.send('what do you say?');
  }},

  init: function() {
    this.chatHistory = [this.defaultMessage];

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
    this.responses.forEach((item) => {
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
    this.chatHistory.forEach((element) => {
      this.history.appendChild(element);
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
    var sendMsg = document.createElement('p');
    sendMsg.textContent = charactor + ': ' + msg;
    this.chatHistory.push(sendMsg);
  }
};

var saihubot = new SaihuBot();
