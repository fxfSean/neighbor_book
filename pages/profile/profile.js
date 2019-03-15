// pages/profile/profile.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    userInfo: {},
    canIUse: wx.canIUse('block.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的',
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

  getPromission: function (e) {
    const that = this;
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              withCredentials: false,
              success: function (data) {
                console.info("1成功获取用户返回数据");
                console.info(data.userInfo);
                that.setData({
                  isLogin:true,
                  userInfo:data.userInfo
                })
              },
              fail: function () {
                console.info("1授权失败返回数据");
                // 显示提示弹窗
                wx.showModal({
                  title: '授权失败',
                  content: '请正确授权小程序权限',
                  success: function (res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success: function (data) {
                          if (data) {
                            if (data.authSetting["scope.userInfo"] == true) {
                              
                              wx.getUserInfo({
                                withCredentials: false,
                                success: function (data) {
                                  console.info("3成功获取用户返回数据");
                                  console.info(data.userInfo);
                                  that.setData({
                                    isLogin: true,
                                    userInfo: data.userInfo
                                  })
                                },
                                fail: function () {
                                  console.info("3授权失败返回数据");
                                }
                              });
                            }
                          }
                        },
                        fail: function () {
                          console.info("设置失败返回数据");
                        }
                      });
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                });
              }
            });
          }
        },
        fail: function () {
          console.info("登录失败返回数据");
        }
      });
  },

  logout: function (e) {
    this.setData({
      isLogin: false
    })
  }
})