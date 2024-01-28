// pages/xiaoyuan/xiaoyuan.js
const app = getApp()

Page({
  data: {
    servers: []
  },

  onLoad: function () {
    var listService = [
      {
        title: '教育',
        items: [{
          name: '绩点换算器',
          url: '/pages/jisuanqi/jisuanqi',
          icon: '/images/jisuanqi.png',
          code: '11'
        },
        {
          isBind: true,
          name: '课表',
          url: '/pages/kebiao/kebiao',
          icon: '/images/kebiao.png',
          code: '11'
        },
        {
          isBind: true,
          name: '考试信息填写',
          url: '/pages/kaoshi/kaoshi',
          icon: '/images/kaoshi.png',
          code: '11'
        }
       ]
      },

      {
        title: '生活',
        items: [{
          name: '3D地图',
          url: '/pages/ditu/ditu',
          icon: '/images/ditu.png',
          code: '11'
        },
        {
          isBind: true,
          name: '运动音乐',
          url: '/pages/yinyue/yinyue',
          icon: '/images/yinyue.png',
          code: '11'
        }, {
          isBind: true,
          name: '倒计时',
          url: '/pages/time/time',
          icon: '/images/time.png',
          code: '11'
        },
        ]
      },
      {
        title: '防疫情',
        items: [{
          isBind: true,
          name: '每日一报',
          url: '/pages/bao/bao',
          icon: '/images/bao.png',
          code: '11'
        }
        ]
      }, {
        title: '其他服务',
        items: []
      }
    ]
    this.setData({
      servers: listService
    })
  },

  /**
   * 当点击Item的时候传递过来
   */
  bindNavigator: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })

  },
})
