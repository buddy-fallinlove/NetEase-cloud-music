// components/ification/ification.js
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
    click1(){
      wx.navigateTo({
        url: '/pages/put/put',
      })
    },
    click2(){
      wx.navigateTo({
        url: '/pages/listforsong/listforsong',
      })
    },
    click3(){
      wx.navigateTo({
        url: '/pages/ranking/ranking',
      })
    },
    click4(){
      wx.navigateTo({
        url: '/pages/radio/radio',
      })
    },
    click5(){
      wx.navigateTo({
        url: '/pages/liveing/liveing',
      })
    },
  }
})
