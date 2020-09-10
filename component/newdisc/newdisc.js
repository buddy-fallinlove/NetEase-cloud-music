// component/newdisc/newdisc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    albums:{
      type:Array
    },
    newest:{
      type:Array
    },
 
  },

  /**
   * 组件的初始数据
   */
  data: {
num:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
albums(e){
  console.log(e)
  let id=e.currentTarget.dataset.item.id
  wx.navigateTo({
    url: `/pages/songlist/songlist?id=${id}`,
  })
},
newest(e){
  let id=e.currentTarget.dataset.item.id
  wx.navigateTo({
    url: `/pages/songlist/songlist?id=${id}`,
  })
},
dianji1(){this.setData({num:1})},
  
dianji2(){this.setData({num:2})}
  },
})
