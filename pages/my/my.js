// pages/my/my.js
import api from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
username:"",
uid:"",
arr:[]
  },
  denglu(){
wx.redirectTo({
  url: '/pages/login/login',
})
  },
  detail(){
    api.detail(this.data.uid).then(res=>{
      this.setData({arr:res})
    }).catch(err=>{
      console.log(err)
    })
  },
  edit(){
    let gender = this.data.arr.profile.gender
    let birthday = this.data.arr.profile.birthday
    let nickname = this.data.arr.profile.nickname
    let province = this.data.arr.profile.province
    let city = this.data.arr.profile.city
    let signature = this.data.arr.profile.signature
    console.log(nickname)
    wx.navigateTo({
      url: `../../pages/edit/edit?gender=${gender}&birthday=${birthday}&nickname=${nickname}&province=${province}&city=${city}&signature=${signature}`,
    })
  },
  button(){
   api.logout().then(res => {
     if(res.code === 200 ){
      wx.showToast({
        title: '退出成功',
        icon: 'success'
      })
      wx.removeStorageSync('username')
      wx.removeStorageSync('uid')
   wx.switchTab({
    url: '/pages/home/home',
   })
     }
  
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
    let username=wx.getStorageSync('username')
    let uid=wx.getStorageSync('uid')
    this.setData({username:username,uid:uid})
    this.detail()
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