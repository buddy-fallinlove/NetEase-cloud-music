import api from "../../http/api"
Page({


  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: [],
    arr:[],
    arr1:[],
    arr2:[],
    arr3:[],
    arr4:[],
    arr5:[]
  },
  //搜索
  login(){
    wx.navigateTo({
      url: `../../pages/inbut/inbut`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //轮播图
    api.getbanner().then(res => {
      this.data.imageUrl = res.banners
      // console.log(this.data.imageUrl)
      this.setData({
        imageUrl: this.data.imageUrl
      })
    }).catch(err => {
      console.log(err)
    })
    // 每日推荐
    api.personalized().then(res=>{
      res.result.map(item=>{
        item.playCount=parseInt(item.playCount/10000)
      })
      // console.log(res)
      this.setData({
        arr:res.result.slice(0,6)
      })
      // console.log(this.data.arr)
   }).catch(err=>{
     console.log(err)
   })
  //新碟
  api.getNewDisc().then(res=>{
    // res.result.map(item=>{
    //   item.playCount=parseInt(item.playCount/10000)
    // })
    // console.log(res)
    this.setData({
      arr1:res.albums.slice(0,6)
    })
    // console.log(this.data.arr1)
  }).catch(err=>{
    console(err)
  })
  // 新歌
  api.getalbum().then(res=>{
// res.result.map(item=>{
//   item.playCount =parseInt(item.playCount/10000)
// })
// console.log(res)
this.setData({
  arr2:res.albums.slice(0,6)
})
// console.log(this.data.arr2)
  }).catch(err=>{
    console.log(err)
  })
    // 音乐新势力
    api.getnewsong().then(res=>{
      // res.result.map(item=>{
      //   item.playCount =parseInt(item.playCount/10000)
      // })
      // console.log(res)
      this.setData({
        arr3:res.result.slice(0,6)
      })
      // console.log(this.data.arr3)
    })
      // 推荐电台
  api.getdjprogram().then(res=>{
    // res.result.map(item=>{
    //   item.playCount = parseInt(item.playCount/10000)
    // })
    // console.log(res)
    this.setData({
      arr4:res.result.slice(0,6)
    })
    // console.log(this.data.arr4)
  })
    // 推荐节目
    api.getrecommend().then(res=>{
      // res.result.map(item=>{
      //   item.playCount =parseInt(item.playCount/10000)
      // })
      // console.log(res)
      this.setData({
        arr5:res.programs.slice(0,6)
      })
      // console.log(this.data.arr5)
    }).catch(err=>{
      console.log(err)
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