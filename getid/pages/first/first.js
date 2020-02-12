// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ids: [],
    bu: "rgb(246, 246, 246)",
    box: "rgb(254, 254, 254)",
    line:"black",
    text: "gray",
    txt: "red",
    introtext: "红色",
    introcolor: "blue",
    onekeydarktext: "暗",
    onekeydarkColor: "white",
    onekeydarkBKcolor: "black",
    // ~~~~~~~~~~~~~~~~~~~~
    bu1: "#272727",
    box1: "rgb(0, 0, 0)",
    line:"gray",
    text1: "gray",
    txt1: "darkgreen",
    introtext1: "绿色",
    introcolor1: "whitesmoke",
    onekeydarktext1: "亮",
    onekeydarkColor1: "black",
    onekeydarkBKcolor1: "#777"
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
    var temp = null;

    temp = self.data.bu;
    self.setData({
      bu: self.data.bu1
    });
    self.data.bu1 = temp;

    temp = self.data.box;
    self.setData({
      box: self.data.box1
    });
    self.data.box1 = temp;

    temp = self.data.text;
    self.setData({
      text: self.data.text1
    });
    self.data.text1 = temp;

    temp = self.data.txt;
    self.setData({
      txt: self.data.txt1
    });
    self.data.txt1 = temp;

    temp = self.data.introcolor;
    self.setData({
      introcolor: self.data.introcolor1
    });
    self.data.introcolor1 = temp;

    temp = self.data.introtext;
    self.setData({
      introtext: self.data.introtext1
    });
    self.data.introtext1 = temp;

    temp = self.data.onekeydarktext;
    self.setData({
      onekeydarktext: self.data.onekeydarktext1
    });
    self.data.onekeydarktext1 = temp;

    temp = self.data.onekeydarkColor;
    self.setData({
      onekeydarkColor: self.data.onekeydarkColor1
    });
    self.data.onekeydarkColor1 = temp;

    temp = self.data.onekeydarkBKcolor;
    self.setData({
      onekeydarkBKcolor: self.data.onekeydarkBKcolor1
    })
    self.data.onekeydarkBKcolor1 = temp;

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this
    wx: wx.request({
      url: 'https://jokeme.top/id.json',
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
    })

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
    setTimeout(function () {
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