// components/recommendation/recommendation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr: {
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
    sing(){
      wx.navigateTo({
        url: '../../pages/listforsong/listforsong',
      })
    },
    id(e){
      console.log(e)
      let id = e.currentTarget.dataset.item.id
      wx.navigateTo({
        url: `../../pages/Unknown/Unknown?id=${id}`,
      })
    }
  }
})
