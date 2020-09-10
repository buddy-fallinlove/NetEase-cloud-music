// components/station/station.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr4: {
      type: Array
    },
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
    radio(){
      wx.navigateTo({
        url: '../../pages/radio/radio',
      })
    }
  }
})
