// components/disc/disc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr1: {
      type: Array
    },
    arr2: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    go() {
      this.setData({
        flag: 0
      })
    },
    goBack() {
      this.setData({
        flag: 1
      })
    },
    songer(e) {
      console.log(e)
      let id = e.currentTarget.dataset.item.id
      wx.navigateTo({
        url: `../../pages/junchai/junchai?id=${id}`,
      })
    },
    //播放页
read(e){
  console.log(e)
  let id = e.currentTarget.dataset.item.id
  let name = e.currentTarget.dataset.item.name
  wx.navigateTo({
    url: `/pages/read/read?id=${id}&name=${name}`,
  })
},
    gonewsong(){
      wx.navigateTo({
        url: '../../pages/newsong/newsong',
      })
    }
  }
})