// pages/first/first.js
Page({

  data: {
  },
  // onShareAppMessage: function () {

  // },


showNextPage: function (event) {
  var url = event.currentTarget.dataset.arturl
  console.log(url)
  wx.navigateTo({
    url: "/pages/aitrcle/aitrcle?url="+url,
    success: function () { 
      console.log("Success! Congratulate!")
    },
    fail: function () { console.log("faild!!!") },
  })
},  
  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var _self = this
    wx.request({
      url: "http://172.17.150.251:8080/as.json",
      success: function (qum) {
        _self.setData({
          heloi: qum.data.page,
          
        })
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //   this.setData({
    //     color0:'rgb(80, 80, 150)',
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */

})