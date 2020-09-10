const { default: api } = require("../../http/api")

// pages/bofang/bofang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
ids:"",

songs:[],
active:1,
num:1,
flag:1
  },
  // 获取歌曲的详情
  getsongdetail(){
    api.getsongdetail(this.data.ids).then(res =>{
      console.log(res)
this.setData({songs:res.songs})

    }).catch()
  },
  // 点击变成随机播放
  huan1(){
    this.setData({active:2})
  },
  // 点击切花成顺序播放
  huan2(){
    this.setData({active:3})
  },
  // 点击切换成单曲循环
  huan3(){
    this.setData({active:1})
  },
  // 开始播放
  bofang(){
this.getsongurl()
    this.setData({num:2})
  },
  // 暂停播放
  zanting(){
    this.setData({num:1})
  },
  // 添加收藏
  shoucang(){
    this.setData({flag:2})
  },
  // 取消收藏
  quxiaoshoucang(){
    this.setData({flag:1})
  },
//  定义播放歌曲的方法
getsongurl(){
api.getsongurl(this.data.id).then(res =>{
  console.log(res)
}).catch()
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.name,
    })
this.setData({ids:options.id})
this.getsongdetail()

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