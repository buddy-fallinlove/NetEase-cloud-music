import api from "../../http/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    mail: '',
    pin: '',
    phone: '',
    password: '',
  },
  register() {
    wx.navigateTo({
      url: `../../pages/register/register`,
    })
  },
  input(e) {
    // console.log(e)
    this.setData({
      phone: e.detail,

    })
  },
  bindinput(e) {
    // console.log(e)
    this.setData({
      password: e.detail
    })
  },
  mail(e) {
    this.setData({
      mail: e.detail
    })
  },
  pin(e) {
    this.setData({
      pin: e.detail
    })
  },
  login() {
    api.cellphone(this.data.phone, this.data.password).then(res => {
      if (res.code === 200) {
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
        wx.setStorageSync('username', this.data.phone)
        wx.setStorageSync('UID', res.bindings[0].userId)
      }
      wx.switchTab({
        url: '/pages/book/book'
      });
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  loginemail() {
    api.login(this.data.mail, this.data.pin).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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