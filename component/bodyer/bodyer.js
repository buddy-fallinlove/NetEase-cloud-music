// component/bodyer/bodyer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
tuijian(){
wx.switchTab({
  url: '/pages/singer/singer',
})
},
rank(){
wx.navigateTo({
  url: '/pages/rank/rank',
})
},
category(){
  wx.navigateTo({
    url: '/pages/category/category',
  })
},
radio(){
  wx.navigateTo({
    url: '/pages/radio/radio',
  })
},
listen(){
  wx.navigateTo({
    url: '/pages/listen/listen',
  })
}


  }
})
