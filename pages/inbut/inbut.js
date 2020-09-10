const {
  default: api
} = require("../../http/api")

// pages/inbut/inbut.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    default: {},
    value: '',
    newkey: '',
    flag: 0,
    app: [],
    keywords: [],
  },
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
        flag: 0
      })
    }
  },
  // 取消搜索
  onCancel(){
    wx.switchTab({
      url: `/pages/index/index`,
    })
  },
  //
  sert(e){
    // console.log(e)
    let keywords=e.currentTarget.dataset.item.keyword
    wx.navigateTo({
      url: `/pages/single/single?keywords=${keywords}`,
    })
  },
  //热搜榜
  fgd(e){
    // console.log(e)
    let keywords=e.currentTarget.dataset.item.searchWord
    wx.navigateTo({
      url: `/pages/single/single?keywords=${keywords}`,
    })
  },
  //历史跳转
  cisa(e){
    // console.log(e)
    let keywords=e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/single/single?keywords=${keywords}`,
    })
  },
  // 确定搜索时触发
  onSearch(e) {
    // console.log(e)
    // 当搜索框为空时就得到搜索的值
    if(this.data.value === ''){
      e.detail = this.data.newkey,
      this.setData({
        value:this.data.newkey
      })
    }
    let arr = e.detail
    this.data.keywords.push(arr)
    //过滤 去重
    this.data.keywords = this.data.keywords.filter((item, index, arr) => {
      return arr.indexOf(item) === index
    })
    //赋值
    this.setData({
      keywords: this.data.keywords
    })
    // 保存到本地 存 localStorage
    wx.setStorageSync('keywords', this.data.keywords)
       // 跳转路由
       let keywords = e.detail
       wx.navigateTo({
         url: `/pages/single/single?keywords=${keywords}`,
       })
  },
  // 删除历史记录
  history() {
    wx.showModal({
      title: '提示',
      content: '确定删除全部历史记录?',
      success: (res) => {
        if (res.confirm) {
          // 清空
          wx.removeStorageSync('keywords')
          // 清空 在取出来  赋值  实时更新
          let keywords = wx.getStorageSync('keywords')
          this.setData({
            keywords: keywords
          })
          // console.log('用户点击确定')
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
  },
    // 取出 localStorage 的数据
    ready() {
      let ars = wx.getStorageSync('keywords')
      if (ars) {
        this.setData({
          keywords: ars
        })
      }
      // console.log(this.data.keywords)
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //搜索框值
    api.defaultsearch().then(res => {
      // console.log(res)
      this.setData({
        default: res.data,
        newkey: res.data.showKeyword
      })
    }).catch(err => {
      console.log(err)
    })
    //热搜榜
    api.hotsearch().then(res => {
      this.setData({
        arr: res.data.slice(0, 20)
      })
      // console.log(res)
    }).catch(err => {
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