const { default: api } = require("../../http/api")
import dayjs from '../../lib/dayjs/dayjs.min'
// pages/searchsongdetail/searchsongdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
id:'',
type:"",
album:"",
arr:[],
name:""
  },

  // 播放

  bofang(e){
    console.log(e)
    let id=e.currentTarget.dataset.item.id
    let name=e.currentTarget.dataset.item.name
    wx.navigateTo({
      url: `/pages/bofang/bofang?id=${id}&name=${name}`,
    })
  },

  detail(e){
let id=e.currentTarget.dataset.item.id
wx.navigateTo({
  url: `/pages/songlist/songlist?id=${id}`,
})
  },
  // 专辑详情
album(){
  api.album(this.data.id).then(res =>{
    console.log(res)
    res.album.publishTime=dayjs(res.album.publishTime).format('YYYY-MM-DD')
    this.setData({album:res.album,arr:res.songs})

  }).catch(err =>{
    console.log(err)
  })
},
// 歌手详情
artists(){
api.artists(this.data.id).then(res =>{
  console.log(res)
  res.artist.publishTime=dayjs(res.artist.publishTime).format('YYYY-MM-DD')
  this.setData({album:res.artist,arr:res.hotSongs})
}).catch(err =>{
    console.log(err)
  })
},
// 歌单详情
playlistdetail(){
  api.playlistdetail(this.data.id).then(res =>{
    console.log(res)
    res.playlist.updateTime=dayjs(res.playlist.updateTime).format('YYYY-MM-DD')
    this.setData({album:res.playlist,arr:res.playlist.tracks})
  }).catch(err =>{
    console.log(err)
  })
},
// 用户详情
userdetail(){
  api.userdetail(this.data.id).then(res =>{
    console.log(res)
    res.profile.birthday=dayjs(res.profile.birthday).format('YYYY')
    this.setData({album:res.profile})
  }).catch(err =>{
    console.log(err)
  })
},
userplaylist(){
  api.userplaylist(this.data.id).then(res =>{
    console.log(res)
    this.setData({arr:res.playlist})
  }).catch(err =>{
    console.log(err)
  })
},
// 电台详情
djdetail(){
  api.djdetail(this.data.id).then(res =>{
    console.log(res)
    
    this.setData({album:res.djRadio})
  }).catch(err =>{console.log(err)})
},
djprogram(){
  api.djprogram(this.data.id).then(res =>{
    console.log(res)
    res.programs.map(item =>{
      item.createTime=dayjs(item.createTime).format('YYYY-MM-DD')
    })
    this.setData({arr:res.programs})
  }).catch(err=>{console.log(err)})
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  
this.setData({id:options.id,
  type:options.type,

})
if(this.data.type==="10"){
  wx.setNavigationBarTitle({
    title: "专辑"
  })
  this.album()
}
if(this.data.type==="100"){
  wx.setNavigationBarTitle({
    title: "歌手"
  })

this.artists()
}
if(this.data.type==="1000"){
  wx.setNavigationBarTitle({
    title: "歌单"
  })
  this.playlistdetail()

}

if(this.data.type==="1002"){
  wx.setNavigationBarTitle({
    title: "用户"
  })
  this.userdetail()
this.userplaylist()
}
if(this.data.type==="1014"){
  wx.setNavigationBarTitle({
    title: "视频"
  })

}
if(this.data.type==="1009"){
  wx.setNavigationBarTitle({
    title: "电台"
  })
  this.djdetail()
  this.djprogram()

}

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