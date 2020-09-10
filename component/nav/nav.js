// component/nav/nav.js
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
search(){
wx.navigateTo({
  url: '/pages/search/search',
})
},
ting(){
  wx.showToast({
    title: '听歌识别功能敬请期待',
    icon: 'none',
    duration: 1500
  })
}


  }
})
