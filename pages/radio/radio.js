const {
  default: api
} = require("../../http/api")

// pages/radio/radio.js
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
    arr1:[],
    arr2:[],
    arr3:[]
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
      //27.电台banner
    api.djbanner().then(res => {
      this.setData({
        arr:res.data
      })
      console.log(res)
    }).catch(err => {

    })
      //28.电台 - 推荐
    api.djrecommend().then(res => {
      this.setData({
        arr1:res.djRadios.slice(0,3)
      })
      console.log(res)
    }).catch(err => {

    })
      //29.电台 - 分类（情感分类、音乐故事)
    api.djcatelist().then(res => {
      res.toplist.map(item => {
        item.score = ((item.score)/10000).toFixed(2)
      })
      this.setData({
        arr2:res.toplist.slice(1,8)
      })

      console.log(this.data.arr2)
    }).catch(err => {

    })
     //30.获取电台付费精选
    api.paygift().then(res => {
      this.setData({
        arr3:res.data.list.slice(0,3)
        
      })
      console.log(res)
    }).catch(err => {

    })
      //31.电台分类
    api.getcatelist().then(res => {
      this.setData({
        arr4:res.categories.slice(0,4),
        arr5:res.categories.slice(4)
        
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