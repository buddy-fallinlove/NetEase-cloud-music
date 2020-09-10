const {
  default: api
} = require("../../http/api")

// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    arr1: [],
    arr3: []
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
    api.getdetail().then(res => {
      this.setData({
        arr: res.list.slice(0, 4),
        arr1: res.list.slice(4, 7),
        arr3: res.list.slice(6, 33)
      })
      // console.log(res.list)
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