
// 创建一个页面对象用于控制页面的逻辑
Page({
  data: {
    title: '',
    loading: true,
    detail: {}
  },

  onLoad (params) {
    var that = this
    var info = JSON.parse(params.item)
    this.setData({
      detail:info
    })
    console.log(info)
    setTimeout(function(){
      that.setData({loading:false})
    },1000)
  },

  onReady () {
    wx.setNavigationBarTitle({ title: '详情' })
  }
})
