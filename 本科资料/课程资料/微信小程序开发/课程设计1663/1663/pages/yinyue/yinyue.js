// pages/yinyue/yinyue.js
Page({
  data: {
    poster: 'http://p2.music.126.net/k86CukGM6lT-82KIsElKgQ==/109951163785631493.jpg?param=130y130',
    name: '길',
    author: 'God',
    src: 'http://music.163.com/song/media/outer/url?id=1338701842.mp3',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(60)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  onLoad: function (options) {
    this.audioCtx = wx.createAudioContext('myAudio')
  }
})