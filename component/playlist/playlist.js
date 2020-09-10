// component/playlist/playlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    personalized:{
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
    playlist(e){
      console.log(e)
      let id=e.currentTarget.dataset.item.id
  wx.navigateTo({
    url:`/pages/songlist/songlist?id=${id}`,
  })
    }
  }
})
