// pages/4.4/4.4.js
Page({
  data:{
    r:50,
    g:100,
    b:150,
    a:1
  },
  colorChanging(e){
    let color=e.currentTarget.dataset.color
    let value=e.detail.value;
    console.log(color,value)
    this.setData({
      [color]:value
    })
  }
})