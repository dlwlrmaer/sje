// pages/2.8/2.8.js
Page({
  calc: function (e) {
    var C,F;
    C = e.detail.value;
    this.setData({
      F: C * 9 / 5 + 32
    })
  }
})