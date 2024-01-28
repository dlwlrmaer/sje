// pages/3.6/3.6.js
Page({
  data:{
    score:0
  },
  scoreInput:function(e){
    this.setData({
      score:e.detail.value
    })
  }
})