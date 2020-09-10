// pages/newsong/newsong.js
const { default: api } = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr1:[],
    arr2:[],
    arr3:[],
    arr4:[],
    arr5:[]
  },

  onChange(event) {
    wx.showLoading({
      title: '加载中...'
    });
    if(event.detail.name == 0){
      api.allsong().then(res => {
        console.log(res)
        wx.hideLoading()
        this.setData({
          arr1:res.data,
        })
      }).catch(err => {
        wx.hideLoading()
      })
    }
    if(event.detail.name == 1){
      wx.showLoading({
        title: '加载中...'
      });
      api.allchina().then(res => {
        console.log(res)
        wx.hideLoading()
        this.setData({
          arr2:res.data.slice(0,50)
        })
      }).catch(err => { wx.hideLoading()})
    }
    if(event.detail.name == 2){
      wx.showLoading({
        title: '加载中...'
      });
      api.allusa().then(res => {
        wx.hideLoading()
        console.log(res)
        this.setData({
          arr3:res.data.slice(0,50)
        })
      }).catch(err => {    wx.hideLoading()})
    }
    if(event.detail.name == 3){
      wx.showLoading({
        title: '加载中...'
      });
      api.allkorea().then(res => {
        console.log(res)
        wx.hideLoading()
        this.setData({
          arr4:res.data.slice(0,50)
        })
      }).catch(err => {wx.hideLoading()})
    }
    if(event.detail.name == 4){
      wx.showLoading({
        title: '加载中...'
      });
      api.alljanpan().then(res => {
        console.log(res)
        wx.hideLoading()
        this.setData({
          arr5:res.data.slice(0,50)
        })
      }).catch(err => {wx.hideLoading()})
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...'
    });
    api.allsong().then(res => {
      console.log(res)
      wx.hideLoading()
      this.setData({
        arr1:res.data.slice(0,50)
      })
    }).catch(err => {wx.hideLoading()})
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