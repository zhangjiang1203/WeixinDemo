Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'loading…………'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 上一个界面传递的值
    console.log(options);
    console.log('哈哈哈');
    // 加载显示数据
    const _this = this;
    const doubanAPI = 'https://api.github.com/search/repositories?q=language:' + options.type + '&sort=stars&page=1'
    wx.request({
      url: doubanAPI,
      data:{},
      // header:{
      //   'Content-Type':'application/json'
      // },
      success:function(res){
        _this.setData({
          list: res.data.items,
          message:options.type,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
    console.log('页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('页面卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

    console.log('开始下拉')
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('开始上拉')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})