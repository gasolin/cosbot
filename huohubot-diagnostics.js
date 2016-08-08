'use strict';
// addon that provide confirm dialog function
document.addEventListener('DOMContentLoaded', function() {
  HuohuBot.prototype.responses.push(
    { name: 'ping', rule: /PING$/i, action: function(robot, msg) {
      robot.send('PONG');
    }});
  HuohuBot.prototype.responses.push(
    { name: 'echo [string]', rule: /ECHO (.*)$/i, action: function(robot, msg) {
      robot.send(msg);
    }});
  HuohuBot.prototype.responses.push(
    { name: 'time', rule: /TIME$/i, action: function(robot, msg) {
      robot.send('Device time is ' + new Date());
    }});
});
