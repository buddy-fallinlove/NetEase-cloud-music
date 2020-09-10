const { default: api } = require("../../http/api")
// pages/listforsong/listforsong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    active: 0,
    arr:[],
    arr1:[],
    arr2:[],
    swp:[],
    arr3:[]
  },
  id(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `../../pages/Unknown/Unknown?id=${id}`,
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
   api.personalized().then(res => {
     this.setData({
       arr:res.result
     })
     console.log(res)
   }).catch(err => {

   })
   api.highquality().then(res => {
     this.setData({
       arr1:res.playlists
     })
     console.log(res)
   }).catch(err => {

   })
   api.playlist().then(res => {
    this.setData({
      swp:res.playlists.slice(0,3),
      arr2:res.playlists.slice(3)
    })
    console.log(res)
  }).catch(err => {

  })
  api.song().then(res => {
    this.setData({
      arr3:res.data
    })
    console.log(res)
  }).catch(err => {

  })
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