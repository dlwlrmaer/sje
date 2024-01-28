// pages/bao/bao.js
Page({
  data: {
    array1: [
      '男',
      '女',
    ],
    array2: [
      '是',
      '否',
    ]
  },
  formSubmit: function (e) {
    var name = e.detail.value.name;
    var id = e.detail.value.id;
    var time = e.detail.value.time;
    var tem= e.detail.value.tem;
    wx.showModal({
      title: '确认信息',
      content: e.detail.value.name + "同学，你的学号是:" + id + ",你的今日体温是:" + tem + ",请确认填报信息准确无误!",
      success: function (res) {
        if (res.confirm) {
          wx.showModal({
            title: '信息确认',
            content: '你的体温信息已经确认',
          })
          wx.navigateTo({
            url: '../kaoshi/kaoshi',
          })
        } else {
          console.log('用户点击取消')
        }
      }
    })
  },
  chooseSex: function (e) {
    var index = e.detail.value
    this.setData({
      index: index
    })
  },
  chooseTime: function (e) {
    var index = e.detail.value
    this.setData({
      index: index
    })
  }
})