import api from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
imageUrl:[],
indicatorDots:"false",
autoplay:"true",
interval:"3000",
personalized:[],
albums:[],
newest:[],
newsong:[],
djprogram:[],
recommend:[]

  },
  //轮播图
  getbanner(){
    api.getbanner().then(res =>{
      
      // console.log(res)
      this.setData({imageUrl:res.banners})
    }
      ).catch(err =>{
        console.log(err)
      })
  },
  //推荐歌单
getpersonalized(){
api.getpersonalized().then(res =>{
this.setData({personalized:res.result.slice(0,6)})
console.log(this.data.personalized)
}).catch(err =>{
  console.log(err)
})
},
//新碟
getalbum(){
  api.getalbum().then(res =>{
    this.setData({albums:res.albums.slice(0,6)})
// console.log(res)
  }).catch(err =>{
    console.log(err)
  })
},

//新歌
getnewest(){
  api.getnewest().then(res =>{
    this.setData({newest:res.albums.slice(0,6)})
// console.log(res)
  }).catch(err =>{
    console.log(err)
  })
},

//新势力
getnewsong(){
  api.getnewsong().then(res =>{
    this.setData({newsong:res.result.slice(0,6)})
// console.log(res)
  }).catch(err =>{
console.log(err)
  })
},
//推荐电台
getdjprogram(){
  api.getdjprogram().then(res =>{
    console.log(res)
    this.setData({djprogram:res.result.slice(0,6)})
// console.log(res)
  }).catch(err=>{
console.log(err)
  })
},
//推荐节目
getrecommend(){
api.getrecommend().then(res =>{
  this.setData({recommend:res.programs.slice(0,6)})
// console.log(res)
}).catch(err=>{
  console.log(err)
})
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.getbanner()
this.getpersonalized()
this.getalbum()
this.getnewest()
this.getnewsong()
this.getdjprogram()
this.getrecommend()
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