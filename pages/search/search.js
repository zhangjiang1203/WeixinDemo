Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'Hello 小程序'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载显示数据
    const _this = this;
    wx.request({
      url: 'https://api.github.com/search/repositories?q=afn&sort=stars&page=1',
      data:{},
      // header:{
      //   'Content-Type':'application/json'
      // },
      success:function(res){
        console.log(res.data.items[0].owner.avatar_url);
        _this.setData({
          list: res.data.items,
          image: res.data.items[0].owner.avatar_url,
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
  onShareAppMessage: function () {
    
  }
})