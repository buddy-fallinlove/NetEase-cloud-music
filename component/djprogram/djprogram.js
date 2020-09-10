// component/djprogram/djprogram.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
djprogram:{
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
djprogram(e){
  console.log(e)
  let id=e.currentTarget.dataset.item.id

wx.navigateTo({
  url: `/pages/songlist/songlist?id=${{id}}`,
})
}
  }
})
