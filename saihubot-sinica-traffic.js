'use strict';
// plugin to provide sinica traffic information
document.addEventListener('DOMContentLoaded', function() {
  var mrtMsg = '搭乘捷運板南線至南港站(2號出口)換乘公車212, 270或藍25至中研院站, 步行入院內至人文館';
  var bikeMsg = '在南港展覽館附近租借 YouBike 後，騎乘至研究路2段歸還後步行入院內至人文館';
  var busMsg = '搭乘212, 276, 306, 620, 645, 679, 205, 小5, 小1, 小12 等公車至中研院站, 步行入院內至人文館';
  var trainMsg = '至南港站(2號出口)換乘公車212, 270或藍25至中研院站, 步行入院內至人文館';
  var driveMsg = '由國道三號，南深路-中研院匝道(16km)出國道三號後, 左轉接南深路，再左轉接舊莊路一段直走，' +
    '遇到與研究院路叉路口，即可看到中研院。車輛進入院區請持證件向大門警衛室換取臨時通行證。假日換證不收費，並請停車於院內道路旁停車格';

  SaihuBot.prototype.responses.push(
    { name: 'mrt', rule: /捷運*|mrt*/i, action: function(robot, msg) {
      robot.send(mrtMsg);
    }});
  SaihuBot.prototype.responses.push(
    { name: 'youbike', rule: /腳踏車*|bike*/i, action: function(robot, msg) {
      robot.send(bikeMsg);
    }});
  SaihuBot.prototype.responses.push(
    { name: 'bus', rule: /公車*|bus*/i, action: function(robot, msg) {
      robot.send(busMsg);
    }});
  SaihuBot.prototype.responses.push(
    { name: 'bus', rule: /火車*|train*/i, action: function(robot, msg) {
      robot.send(trainMsg);
    }});
  SaihuBot.prototype.responses.push(
    { name: 'drive', rule: /開車*|drive*/i, action: function(robot, msg) {
      robot.send(driveMsg);
    }});

  SaihuBot.prototype.responses.push(
    { name: 'traffic', rule: /交通*/i, action: function(robot, msg) {
      robot.confirm('請問你會用哪種交通方式來Coscup?',
        ['* 搭乘捷運', function() {
          robot.send(mrtMsg);
          robot.render();
        }],
        ['* YouBike', function() {
          robot.send(bikeMsg);
          robot.render();
        }],
        ['* 搭乘公車', function() {
          robot.send(busMsg);
          robot.render();
        }],
        ['* 搭乘火車', function() {
          robot.send(trainMsg);
          robot.render();
        }],
        ['* 自行開車', function() {
          robot.send(driveMsg);
          robot.render();
        }]
      );
    }});
});
