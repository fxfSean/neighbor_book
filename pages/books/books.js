// pages/books/books.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      title: [
        {
          name: '全部',
          second: [
          ]
        },
        {
          name: '小说',
          second:[
            {
              category:'侦探/悬疑/推理'
            },
            {
              category:'都市情感'
            },
            {
              category:'社会生活'
            }
          ]
        },
        {
          name:'青春文学',
          second:[
            {
              category:'爱情/情感'
            },
            {
              category:'玄幻/惊悚'
            }
          ]
        }
      ],
      books:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      books:app.globalData.category
    })
    wx.setNavigationBarTitle({
      title: '图书',
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ffffff',
    })
  },

  goSearch:function(e){
    wx.navigateTo({
      url: 'search/search',
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