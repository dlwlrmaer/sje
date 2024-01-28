// pages/time/time.js
var num = 60;
var timerID;
Page({
  data: {
    hidden: true,
    num: num
  },
  onLoad: function (options) {
    var that = this;
    setTimeout(() => {
      that.show()
    }, 2000)
  },
  show: function () {
    var that = this;
    that.setData({
      hidden: false
    })
  },
  start: function () {
    var that = this;
    timerID = setInterval(() => {
      that.timer()
    }, 1000)
  },
  stop: function () {
    clearInterval(timerID)
  },
  timer: function () {
    var that = this;
    console.log(num)
    if (num > 0) {
      that.setData({
        num: num--
      })
    } else {
      that.setData({
        num: 0
      })
    }
    console.log(num)
  },
  onShow: function () {
    var that = this;
    wx.onAccelerometerChange(function (res) {
      if (res.x > 0.5 || res.y > 0.5 || res.z > 0.5) {
        wx.showToast({
          title: '摇一摇成功',
          icon: 'success',
          duration: 2000
        })
        that.start()
      }
    })
  }
})