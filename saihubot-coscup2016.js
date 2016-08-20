'use strict';
// plugin to provide sinica traffic information
document.addEventListener('DOMContentLoaded', function() {
  SaihuBot.prototype.catchAll = { action: function(robot, msg) {
    var randomMsg = [
      '我只好回你一個404了, 你是要問`議程`，`攤位資訊`, 還是`交通`?',
      '梅林的鬍子阿, 你用對命令沒? 用個 / 捲軸試試?',
      '我就當真你在跟我聊天了(灑花)',
      '你收到幾個錯誤訊息了？再試一個',
      '你怎麼不問問神奇的五樓呢？',
      '人生哪~要浪費在美好的事物上，我就當你在跟我聊天了（幸福）',
      '我想你應該不是在跟我講話，我都不知道要怎麼回你',
      '你想知道什麼？',
      '至少你是認真在跟我聊天, 不是在玩皮卡丘',
      '人文館附近鯉魚王跟可達鴉有點多阿...啥，你不是在跟我聊天嗎？'
    ];
    var msgLen = randomMsg.length;
    robot.send(randomMsg[Math.floor(Math.random() * msgLen)]);
  }};

  SaihuBot.prototype.responses.push(
    { name: 'map1', rule: /人文*/i, action: function(robot, msg) {
      var img = document.createElement('img');
      img.src = 'http://i.imgur.com/yOoxARF.png';
      robot.chatHistory.push(img);
      robot.render();
    }});
  SaihuBot.prototype.responses.push(
    { name: 'map2', rule: /活動*/i, action: function(robot, msg) {
      var img = document.createElement('img');
      img.src = 'http://i.imgur.com/zfiQt0o.png';
      robot.chatHistory.push(img);
      robot.render();
    }});

  SaihuBot.prototype.responses.push(
    { name: 'question', rule: /問題*/i, action: function(robot, msg) {
      robot.confirm('什麼樣的問題?',
        ['* 機器人錯誤或建議', function() {
          robot.send('請將錯誤或建議回報到 https://github.com/gasolin/cosbot/issues');
          robot.render();
          window.location = 'https://github.com/gasolin/cosbot/issues';
        }]
      );
    }});

  SaihuBot.prototype.responses.push(
    { name: 'map', rule: /地圖*|map*/i, action: function(robot, msg) {
      var img = document.createElement('img');
      robot.confirm('請問你想看哪個地圖?',
        ['* 人文館', function() {
          img.src = 'http://i.imgur.com/yOoxARF.png';
          robot.chatHistory.push(img);
          robot.render();
        }],
        ['* 活動中心', function() {
          img.src = 'http://i.imgur.com/zfiQt0o.png';
          robot.chatHistory.push(img);
          robot.render();
        }]
      );
    }});

  SaihuBot.prototype.responses.push(
    { name: 'go', rule: /首頁|home*|議程*|schedule/i, action: function(robot, msg) {
      robot.confirm('前往 Coscup 網站', ['前往網站', function() {
          robot.send('開啟 Coscup 網站 http://coscup.org/2016/schedules.html');
          robot.render();
          window.location = 'http://coscup.org/2016/schedules.html';
        }]
      );
    }});
  SaihuBot.prototype.responses.push(
    { name: 'go', rule: /贊助*|sponsor*/i, action: function(robot, msg) {
      robot.confirm('前往 Coscup 贊助連結', ['前往網站', function() {
          robot.send('開啟 Coscup 贊助連結 http://coscup.org/2016/sponsors.html');
          robot.render();
          window.location = 'http://coscup.org/2016/sponsors.html';
        }]
      );
    }});

  SaihuBot.prototype.responses.push(
    { name: 'stand', rule: /攤位*|stand*/i, action: function(robot, msg) {
      robot.confirm('stand', ['顯示攤位資訊', function() {
          robot.send('顯示攤位資訊 http://blog.coscup.org/2016/08/coscup-2016.html');
          robot.render();
          window.location = 'http://blog.coscup.org/2016/08/coscup-2016.html';
        }]
      );
    }});
});
