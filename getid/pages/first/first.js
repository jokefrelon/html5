// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ids: [],
    style: ["#f6f6f6", "#fefefe", "black", "gray", "#ff0000", "红色", "#0000ff", "暗", "white", "#000"],
    fongo: ["#272727", "#000000", "gray", "gray", "#006400", "绿色", "#f5f5f5", "亮", "black", "#777"],
  },
  cpa: function(e) {
    var str = e.currentTarget.dataset['index'];
    var self = this;
    var account = self.data.ids[str].account
    wx.setClipboardData({
      data: account,
    })
  },
  cpp: function(e) {
    var str = e.currentTarget.dataset['index'];
    var self = this;
    var passcode = self.data.ids[str].passcode
    wx.setClipboardData({
      data: passcode,
    })
  },
  onekeydark: function(e) {
    var self = this;
    var logo;
    var style = wx.getStorageSync("style");
    var fongo = wx.getStorageSync("fongo");

    if(!style){
      wx.setStorageSync("style", self.data.style);
      for (logo in self.data.style) {
        self.setData({
          ['style' + '[' + logo + ']']: self.data.fongo[logo]
        });
      };
      self.data.fongo=wx.getStorageSync("style")
      wx.clearStorage()
      wx.setStorageSync("style",self.data.style)
      wx.setStorageSync("fongo",self.data.fongo)
    }else{

      for (logo in style){
        self.setData({
          ['style'+'['+logo+']']:fongo[logo]
        });
      };
      wx.setStorageSync("fongo", style);
      wx.setStorageSync("style", fongo);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this
    wx: wx.request({
      url: 'https://jokeme.top/ids.json',
      header: {
        "UserAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_1_1 like Mac OS X) AppleWebKit/604.3.5 (KHTML, like Gecko) Mobile/15B150 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN"
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        self.setData({
          ids: res.data.ida,
        })
        console.log(res)
        console.log(self.data.ids)
      },
      fail: function(res) {
        console.log("error")
      },
      complete: function(res) {},
    });

    var tempdata = wx.getStorageSync("style")
    if(tempdata){
      var soso;
      for (soso in self.data.style){
        self.setData({
          ['style'+'['+soso+']']: tempdata[soso]
        })
      }
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showNavigationBarLoading()
    this.onLoad()
    setTimeout(function() {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})