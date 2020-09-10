const { default: api } = require("../../http/api")
import dayjs from '../../lib/dayjs/dayjs.min.js'
// pages/songdetail/songdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywords:"",
    type:1,
    active:0,
  list:[],
    
    nav:[
      {name:"单曲",
      type:1
      },
      {name:"专辑",
      type:10
      },
      {name:"歌手",
      type:100
      },
      {name:"歌单",
      type:1000
      },
      {name:"用户",
      type:1002
      },
      // {name:"MV",
      // type:1004
      // },
      // {name:"歌词",
      // type:1006
      // },

      {name:"视频",
      type:1014
      },
      {name:"电台",
      type:1009
      },
    
      // {name:"综合",
      // type:1018
      // },
    ]

  },
  getsearch(){
    api.getsearch(this.data.keywords,this.data.type).then(res =>{
console.log(res)
// 点击单曲时
if(this.data.type===1){
  this.setData({list:res.result.songs})
}
// 点击专辑时
if(this.data.type===10){
 
  res.result.albums.map(item =>{
    item.publishTime=dayjs(item.publishTime).format('YYYY-MM-DD')
  })
  this.setData({list:res.result.albums})
}
// 点击歌手时
if(this.data.type===100){
  this.setData({list:res.result.artists})
}
//点击歌单时
if(this.data.type===1000){
  this.setData({list:res.result.playlists})
}
// 点击用户时
if(this.data.type===1002){
  this.setData({list:res.result.userprofiles})
}
// 点击电台时
if(this.data.type===1009){
  this.setData({list:res.result.djRadios})
}
// 点击视频时
if(this.data.type===1014){
  this.setData({list:res.result.videos})
}




    }).catch(err =>{
      console.log(err)
    })
  },
  dianji(e){
    // console.log(e)
    this.setData({active:e.currentTarget.dataset.index,
    type:e.currentTarget.dataset.item.type
    })
    this.getsearch()
  },
  bofang(e){
    // console.log(e)
    let id=e.currentTarget.dataset.item.id
    let name=e.currentTarget.dataset.item.name
    wx.navigateTo({
      url: `/pages/bofang/bofang?id=${id}&name=${name}`,
    })
  },
  chacha(){
    wx.navigateTo({
      url: '/pages/search/search',
    })  
  },
  zhuanji(e){
    console.log(e)
    let id=e.currentTarget.dataset.item.id

    wx.navigateTo({
      url: `/pages/searchsongdetail/searchsongdetail?id=${id}&type=${this.data.type}`,
    }) 
  },
  geshou(e){
    console.log(e)
  
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/searchsongdetail/searchsongdetail?id=${id}&type=${this.data.type}`,
    }) 
  },
  gedan(e){
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/searchsongdetail/searchsongdetail?id=${id}&type=${this.data.type}`,
    }) 

  
  },
  yonghu(e){
   console.log(e)
    let id=e.currentTarget.dataset.item.userId
    wx.navigateTo({
      url: `/pages/searchsongdetail/searchsongdetail?id=${id}&type=${this.data.type}`,
    }) 
  },
  shipin(e){
   console.log(e)
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/searchsongdetail/searchsongdetail?id=${id}&type=${this.data.type}`,
    }) 
  },
  diantai(e){
console.log(e)
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/searchsongdetail/searchsongdetail?id=${id}&type=${this.data.type}`,
    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
this.setData({keywords:options.keywords})
    this.getsearch()
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