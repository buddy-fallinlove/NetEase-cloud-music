// pages/single/single.js
import api from "../../http/api"
import dayjs from "../../lib/dayjs/dayjs.min"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywords:'',
    flag: 0,
    app: [],
    arr:[],
    value:'',
    type: 1,
    active: 0,
    list: [],
    navs: [{
        name: "单曲",
        type: 1
      },
      {
        name: "专辑",
        type: 10
      },
      {
        name: "歌手",
        type: 100
      },
      {
        name: "歌单",
        type: 1000
      },
      {
        name: "用户",
        type: 1002
      },
      {
        name: "视频",
        type: 1014
      },
      {
        name: "电台",
        type: 1009
      },
    ]
  },
  // 搜索详情
  getsearch() {
    // console.log(this.data.type)
    api.getsearch(this.data.keywords,this.data.type).then(res => {
      console.log(res)
      console.log(this.data.type)
      // 点击单曲时
      if (this.data.type === 1) {
        this.setData({
          list: res.result.songs
        })
      }
      // 点击专辑时
      if (this.data.type === 10) {
        res.result.albums.map(item => {
          item.publishTime = dayjs(item.publishTime).format('YYYY-MM-DD')
        })
        this.setData({
          list: res.result.albums
        })
      }
        // 点击歌手时
        if (this.data.type === 100) {
          this.setData({
            list: res.result.artists
          })
        }
        // //点击歌单时
        if (this.data.type === 1000) {
          this.setData({
            list: res.result.playlists
          })
        }
        // // 点击用户时
        if (this.data.type === 1002) {
          this.setData({
            list: res.result.userprofiles
          })
        }
        // // 点击电台时
        if (this.data.type === 1009) {
          this.setData({
            list: res.result.djRadios
          })
        }
        // // 点击视频时
        if (this.data.type === 1014) {
          res.result.videos.map(item =>{
            item.playTime =	(item.playTime /10000).toFixed(0)
             item.durationms= dayjs(item.durationms).format('mm:ss')
  
          })
          this.setData({
            list: res.result.videos
          })
        }
      
    }).catch(err => {
      console.log(err)
    })
  },
  //搜索框事件
  change(e) {
    // console.log(e)
    this.setData({
      value: e.detail
    })
    // 判断 赋值 
    if (this.data.value !== '') {
      this.setData({
        flag: 1
      })
      // 发搜索请求
      api.suggest(e.detail).then(res => {
        this.setData({
          app: res.result.allMatch
        })
        console.log(this.data.app)
      }).catch(err => {})
    } else {
      this.setData({
        flag: 0,
      })
    }
  },
  // top导航栏
  click(e) {
    this.setData({
      active: e.currentTarget.dataset.index,
      type: e.currentTarget.dataset.item.type
    })
    this.getsearch()
  },
  // 取消搜索
  onCancel() {
    wx.switchTab({
      url: `/pages/index/index`,
    })
  },
  //专辑详情
  Album(e){
    console.log(e)
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/Album/Album?id=${id}&type=${this.data.type}`,
    }) 
  },
  // 歌手详情
  singer(e){
    // console.log(e)
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/Album/Album?id=${id}&type=${this.data.type}`,
    }) 
  },
  // 歌单详情
  sheet(e){
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/Album/Album?id=${id}&type=${this.data.type}`,
    }) 
  },
  //用户详情
  user(e){

  //  console.log(e)
    let id=e.currentTarget.dataset.item.userId
    wx.navigateTo({
      url: `/pages/Album/Album?id=${id}&type=${this.data.type}`,
    }) 
  },
  //视频详情
  video(e){
  //  console.log(e)
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/Album/Album?id=${id}&type=${this.data.type}`,
    }) 
  },
  //电台详情
  station(e){
// console.log(e)
    let id=e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/Album/Album?id=${id}&type=${this.data.type}`,
    }) 
  },
  sert(e){
    // console.log(e)
    let keywords=e.currentTarget.dataset.item.keyword
    wx.navigateTo({
      url: `/pages/single/single?keywords=${keywords}`,
    })
  },
   //播放页
   read(e){
    // console.log(e)
    let id = e.currentTarget.dataset.item.id
    let name = e.currentTarget.dataset.item.name
    wx.navigateTo({
      url: `/pages/read/read?id=${id}&name=${name}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      keywords: options.keywords



    })
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