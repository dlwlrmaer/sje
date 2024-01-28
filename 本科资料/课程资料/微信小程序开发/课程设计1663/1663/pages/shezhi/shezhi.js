Page({
  data: {
    myFontsize: '25px',
    r: 50,
    g: 100,
    b: 150,
    a: 1
  },
  checkboxChange: function (e) {
    var text = [];
    var mybold = '';
    var myitalic = '';
    var myunderline = '';
    text = e.detail.value;
    for (var i = 0; i <= text.length; i++) {
      if (text[i] == 'isBold') {
        mybold = 'bold';
      }
      if (text[i] == 'isItalic') {
        myitalic = 'italic';
      }
      if (text[i] == 'isUnderline') {
        myunderline = 'underline';
      }
    }
    this.setData({
      myBold: mybold,
      myItalic: myitalic,
      myUnderline: myunderline,
    })
    console.log(text[0])
  },
  radioChange: function (e) {
    this.setData({
      myFontSize: e.detail.value,
    })
    console.log(e.detail.value)
  },
  colorChanging(e) {
    let color = e.currentTarget.dataset.color
    let value = e.detail.value;
    console.log(color, value)
    this.setData({
      [color]: value
    })
  }
})