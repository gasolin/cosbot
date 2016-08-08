'use strict';
// addon that provide confirm dialog function
document.addEventListener('DOMContentLoaded', function() {
  // if (!Huohubot) {
  //   console.error('Huohubot is not imported, please import it first');
  //   return;
  // }

  // confirm and selection dialog
  HuohuBot.prototype.confirm = function() {
    var confirmDlg = document.createElement('p');
    var args = Array.prototype.slice.call(arguments);
    var that = this;

    function handleEvent(cb, idx) {
      return function(e) {
        that.confirmSelected(idx, args);
        cb();
      };
    }

    args.forEach((item, idx) => {
      // first arg is title
      if (typeof item === 'string' && idx === 0) {
        this.send(item);
        return;
      }

      var confirmBtn = document.createElement('a');
      confirmBtn.textContent = item[0];
      confirmBtn.href = '#';
      if (item[1]) {
        confirmBtn.addEventListener('click', handleEvent(item[1], idx));
      }
      confirmDlg.appendChild(confirmBtn);

      if (idx !== args.length - 1) {
        confirmDlg.appendChild(document.createElement('br'));
      }
    });
    this.chatHistory.push(confirmDlg);
  };

  HuohuBot.prototype.confirmSelected = function(selected, args) {
    this.chatHistory.pop();
    this.chatHistory.pop();
    var confirmDlg = document.createElement('p');
    args.forEach((item, idx) => {
      if (typeof item === 'string') {
        this.send(item);
        return;
      }

      var confirmBtn = document.createElement('span');
      confirmBtn.textContent = (idx === selected) ? 'v ' + item[0] : item[0];
      confirmDlg.appendChild(confirmBtn);

      if (idx !== args.length - 1) {
        confirmDlg.appendChild(document.createElement('br'));
      }
    });

    this.chatHistory.push(confirmDlg);
  }
});
