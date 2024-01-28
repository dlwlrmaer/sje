// pages/5.11/5.11.js
var tempFilePaths,tempFilePath;
Page({
  data:{
    msg:'',
    hidden:true
  },
  openFile:function(){
    var that=this;
    wx.chooseImage({
      success(res){
        tempFilePaths=res.tempFilePaths
        console.log('打开文件路径：'+tempFilePath)
        that.setData({
          imgPath:tempFilePaths[0],
          hidden:false,
          msg:'文件打开成功！'
        })
      }
    })
  },
  saveFile:function(){
    var that=this;
    wx.saveFile({
      tempFilePath:tempFilePaths[0],
      success(res){
        console.log('保存文件路径：'+res.savedFilePath);
        that.setData({
          hidden:false,
          msg:'文件保存成功!'
        })
      }
    })
  },
  getSavedFileInfo: function () { //获取已经保存的文件信息
    var i, file;
    var that = this;
    wx.getSavedFileList({ //获取所有已保存的文件
      success: function (res) { //将获取的所有文件赋值给res.fileList
        if (res.fileList.length == 0) { //如果没有保存的文件
          that.setData({
            hidden: false, //显示文件信息
            msg: '没有文件信息' //文件信息
          })
        } else {
          for (i = 0; i < res.fileList.length; i++) {
            file = res.fileList[i];
            console.log('第' + (i + 1) + '个文件路径：' + file.filePath)
            let j = i
            wx.getSavedFileInfo({ //获取已保存的文件信息
              filePath: file.filePath,
              success: function (res) { //将文件信息赋值给res
                console.log('第' + (j + 1) + '个文件大小为：' + res.size)
                that.setData({
                  hidden: false, //显示文件信息
                  msg: '文件数量：' + i + '\n最后一个文件的大小：' + res.size +
                    '\n最后一个文件的创建时间：' + res.createTime
                })
              }
            })
          }
        }
      }
    })
  },
  removedSavedFile: function () { //删除文件
    var i, file;
    var that = this;
    wx.getSavedFileList({ //获取已保存文件的列表
      success: function (res) { //将所有文件赋值给res.fileList
        for (i = 0; i < res.fileList.length; i++) { //遍历文件列表
          file = res.fileList[i];
          wx.removeSavedFile({ //删除已经保存的文件
            filePath: file.filePath,
          })
          console.log('第' + (i + 1) + '个文件被删除！')
        }
        that.setData({
          hidden: false,
          msg: '文件被全部删除'
        })
      }
    })
  }
})
