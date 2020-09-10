// components/song/song.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr3: {
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
    gonewsong(){
      wx.navigateTo({
        url: '../../pages/newsong/newsong',
      })
    },
    read(e){
      // console.log(e)
      let id = e.currentTarget.dataset.item.id
      let name = e.currentTarget.dataset.item.name
      wx.navigateTo({
        url: `/pages/read/read?id=${id}&name=${name}`,
      })
    },
  }
  
})
