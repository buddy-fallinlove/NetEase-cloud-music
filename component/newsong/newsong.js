// component/newsong/newsong.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
newsong:{
  type:Array
}
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
    newsong(e){
      let id=e.currentTarget.dataset.item.id

wx.navigateTo({
  url: `/pages/songlist/songlist?id=${{id}}`,
})
    }
  }
})
