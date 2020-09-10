const { default: api } = require("../../http/api")

// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
id:"",
uid:"",
listname:"",
songs:[],
picUrl:"",
subscribedCount:""
  },


  getplaylistdetail(){
    api.getplaylistdetail(this.data.id).then(res =>{
// console.log(res)
this.setData({listname:res.playlist.name,
songs:res.playlist.tracks,
picUrl:res.playlist.coverImgUrl,
subscribedCount:res.playlist.subscribedCount
})

    }).catch(err =>{
      console.log(err)
    })
  },

  bofang(e){
    console.log(e)
    let id=e.currentTarget.dataset.item.id
    let name=e.currentTarget.dataset.item.name  
 
wx.navigateTo({
  url: `/pages/bofang/bofang?id=${id}&name=${name}`,
})

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.setData({id:options.id})
this.getplaylistdetail()

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