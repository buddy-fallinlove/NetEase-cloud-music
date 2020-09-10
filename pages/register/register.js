Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    verify: '',
    nickname: '',
  },
  login() {
    wx.navigateTo({
      url: '../../pages/login/login',
    })
  },
  input(e) {
    this.setData({
      phone: e.detail
    })
  },
  bindinput(e) {
    this.setData({
      password: e.detail
    })
  },
  verify(e) {
    this.setData({
      verify: e.detail
    })
  },
  nickname(e) {
    this.setData({
      nickname: e.detail
    })
  },
  captcha() {
    api.sent(this.data.phone).then(res => {
      if(res.code === 200){
        wx.showToast({
          title: '发送成功',
          icon:'success'
        })
      }
      console.log(res)

    }).catch(err => {

    })
  },
  register() {
    api.check(this.data.phone).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    api.verify(this.data.phone, this.data.verify).then(res => {
      console.log(res)
    }).catch(err => {
      if(err.response.data.code === 503){
        wx.showToast({
          title: '验证码错误',
          icon:'none'
        })
      }
      console.log(err)
    })
    api.register(this.data.phone, this.data.verify, this.data.password, this.data.nickname).then(res => {
      if(res.data.code === 200){
        wx.showToast({
          title: '注册成功',
          icon:'success'
        })
       
      }
      console.log(res)
    }).catch(err => {
      if(err.response.data.code === 505){
        wx.showToast({
          title: '该昵称已被占用',
          icon:'none'
          
        })
      }
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