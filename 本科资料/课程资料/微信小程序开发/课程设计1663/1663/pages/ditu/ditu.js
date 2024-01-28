// pages/ditu/ditu.js
Page({
  data: {
    latitude: 31.32144,
    longitude: 121.39903, 
    markers: [{
      id: 1,
      latitude: 31.32144,
      longitude: 121.39903,
      iconPath: '/images/location.png',
      label: {
        content: '我的位置',
        color: '#0000FF',
        bgcolor: '#FFFF00',
        fontSize: 20
      }
    }, {
        latitude: 31.32144,
        longitude: 121.39903,
      iconPath: '/images/location.png'
    }]
  },
  chooseLocation: function () {
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
      },
    })
  },
  openLocation: function () {
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale:28,
        })
      },
    })
  }
})