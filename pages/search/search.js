const { default: api } = require("../../http/api")

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
keywords:"",
arr:[],
arr1:[],
historys:[]

  },
  // 热词列表
  getsearchhot(){
    api.getsearchhot().then(res =>{
      // console.log(res)
      this.setData({arr:res.result.hots})
    }).catch(err =>{})
  },
  // 搜索建议
  getsearchsuggest(){
    api.getsearchsuggest(this.data.keywords).then(res =>{
      console.log(res)
this.setData({arr1:res.result.songs,

})
    }).catch(err =>{})
  },


// input搜索
  search(e){
    // console.log(e)
    this.setData({keywords:e.detail.value,
    })
this.getsearchsuggest()

  },
  // 回车搜索
  entersearch(e){
// console.log(e)
let keywords=e.detail.value

  //  //如果没有加入 historys
  if (!wx.getStorageSync("historys")) {
    let arr = [] //自己定义一个
    //并且把点击加入的 都放在 定义的数组里面
    arr.push(keywords)
    wx.setStorageSync('historys', arr) //存起来 加入书架

  } else { //如果有存起来的 historys
    //也是定义隔空数组把  historys  存起来
    let arr = wx.getStorageSync("historys")
    //把之后点击加入的也放在 空数组里面 
    arr.push(keywords)
    let arr1=[]
    for(let i=0;i<arr.length;i++){
      if(arr1.indexOf(arr[i])===-1){
        arr1.push(arr[i])
      }
    }

    wx.setStorageSync('historys', arr1) //存起来 加入书架

  }
wx.navigateTo({
  url: `/pages/songdetail/songdetail?keywords=${keywords}`,
})
  },
// 取消回到首页
quxiao(){
 wx.switchTab({
   url: '/pages/home/home',
 })
},
// 点击搜素建搜索
sousuo(){
  //  //如果没有加入 historys
  if (!wx.getStorageSync("historys")) {
    let arr = [] //自己定义一个
    //并且把点击加入的 都放在 定义的数组里面
    arr.push(this.data.keywords)
    wx.setStorageSync('historys', arr) //存起来 加入书架

  } else { //如果有存起来的 historys
    //也是定义隔空数组把  historys  存起来
    let arr = wx.getStorageSync("historys")
    //把之后点击加入的也放在 空数组里面 
    arr.push(this.data.keywords)
    let arr1=[]
    for(let i=0;i<arr.length;i++){
      if(arr1.indexOf(arr[i])===-1){
        arr1.push(arr[i])
      }
    }
    
    wx.setStorageSync('historys', arr1) //存起来 加入书架

  }



 wx.navigateTo({
   url: `/pages/songdetail/songdetail?keywords=${this.data.keywords}`,
 })
},
// 删除历史
del(){
  wx.removeStorageSync('historys')
  this.setData({historys:wx.getStorageSync('historys')})
},
// 点击热搜榜去详情页
tolist(e){
console.log(e)
let keywords=e.currentTarget.dataset.item.first
//  //如果没有加入 historys
if (!wx.getStorageSync("historys")) {
  let arr = [] //自己定义一个
  //并且把点击加入的 都放在 定义的数组里面
  arr.push(keywords)
  wx.setStorageSync('historys', arr) //存起来 加入书架

} else { //如果有存起来的 historys
  //也是定义隔空数组把  historys  存起来
  let arr = wx.getStorageSync("historys")
  //把之后点击加入的也放在 空数组里面 
  arr.push(keywords)
  let arr1=[]
  for(let i=0;i<arr.length;i++){
    if(arr1.indexOf(arr[i])===-1){
      arr1.push(arr[i])
    }
  }
  wx.setStorageSync('historys', arr1) //存起来 加入书架

}

wx.navigateTo({
  url: `/pages/songdetail/songdetail?keywords=${keywords}`,
})
},
// 点击建议搜索列表去详情页
click(e){
console.log(e)
let keywords=e.currentTarget.dataset.item.first
//  //如果没有加入 historys
if (!wx.getStorageSync("historys")) {
  let arr = [] //自己定义一个
  //并且把点击加入的 都放在 定义的数组里面
  arr.push(keywords)
  wx.setStorageSync('historys', arr) //存起来 加入书架

} else { //如果有存起来的 historys
  //也是定义隔空数组把  historys  存起来
  let arr = wx.getStorageSync("historys")
  //把之后点击加入的也放在 空数组里面 
  arr.push(keywords)
  let arr1=[]
  for(let i=0;i<arr.length;i++){
    if(arr1.indexOf(arr[i])===-1){
      arr1.push(arr[i])
    }
  }
  wx.setStorageSync('historys', arr1) //存起来 加入书架

}

wx.navigateTo({
  url: `/pages/songdetail/songdetail?keywords=${keywords}`,
})
},
lishi(e){
  console.log(e)
  let keywords=e.currentTarget.dataset.item
  wx.navigateTo({
    url: `/pages/songdetail/songdetail?keywords=${keywords}`,
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.getsearchhot()
this.setData({historys:wx.getStorageSync('historys')})

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