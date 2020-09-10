import api from '../../http/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
 name: 0,
 namet: 0,
list:[],
type:"-1",
area:"-1",
initial:"-1",
flag:false,

zimu:[
  {name:"热",
  initial:"-1",
},
{name:"A",
initial:"a",
},
{name:"B",
initial:"b",
},
{name:"C",
initial:"c",
},
{name:"D",
initial:"d",
},
{name:"E",
initial:"e",
},
{name:"F",
initial:"f",
},
{name:"G",
initial:"g",
},
{name:"H",
initial:"h",
},
{name:"I",
initial:"i",
},
{name:"J",
initial:"j",
},
{name:"K",
initial:"k",
},
{name:"L",
initial:"l",
},
{name:"M",
initial:"m",
},
{name:"N",
initial:"n",
},
{name:"O",
initial:"o",
},
{name:"P",
initial:"p",
},
{name:"Q",
initial:"q",
},
{name:"R",
initial:"r",
},
{name:"S",
initial:"s",
},
{name:"T",
initial:"t",
},
{name:"U",
initial:"u",
},
{name:"V",
initial:"v",
},
{name:"W",
initial:"w",
},
{name:"X",
initial:"x",
},
{name:"Y",
initial:"y",
},
{name:"Z",
initial:"z",
},
],
singerlist:[
{
  name:'入驻歌手',
  type:'-1',
  area:'-1',
},
{
  name:'华语男歌手',
  type:'1',
  area:'7'
},
{
  name:'华语女歌手',
  type:'2',
  area:'7'
},
{
  name:'华语组合/乐队',
  type:'3',
  area:'7'
},
{
  name:'欧美男歌手',
  type:'1',
  area:'96'
},
{
  name:'欧美女歌手',
  type:'2',
  area:'96'
},
{
  name:'欧美组合/乐队',
  type:'3',
  area:'96'
},
{
  name:'日本男歌手',
  type:'1',
  area:'8'
},
{
  name:'日本女歌手',
  type:'2',
  area:'8'
},
{
  name:'日本组合/乐队',
  type:'3',
  area:'8'
},
{
  name:'韩国男歌手',
  type:'1',
  area:'16'
},
{
  name:'韩国女歌手',
  type:'2',
  area:'16'
},
{
  name:'韩国组合/乐队',
  type:'3',
  area:'16'
},
{
  name:'其他男歌手',
  type:'1',
  area:'0'
},
{
  name:'其他女歌手',
  type:'2',
  area:'0'
},
{
  name:'其他组合',
  type:'3',
  area:'0'
},
],
  },
getlist(){
  wx.showLoading({
    title: '加载中...'
  });
  api.getlist(this.data.type,this.data.area,this.data.initial).then(res =>{
    wx.hideLoading()
    this.setData({list:res.artists})
    // console.log(res)
  }
  ).catch(err =>{
    wx.hideLoading()
    console.log(err)
  })
},
dianji1(e){
  console.log(e)
  if(e.currentTarget.dataset.index > 0){
    this.setData({flag:true})
  }else{
    this.setData({flag:false})
  }
  this.setData({
    name: e.currentTarget.dataset.index,
    index1:e.currentTarget.dataset.index,
    type:e.currentTarget.dataset.item.type,
    area:e.currentTarget.dataset.item.area
  })
  this.getlist()
},
dianji2(e){
console.log(e)
this.setData({
  initial:e.currentTarget.dataset.item.initial,
  namet: e.currentTarget.dataset.index
})
this.getlist()
},
song(e){
  console.log(e)
  let name =e.currentTarget.dataset.item.name
  let id=e.currentTarget.dataset.item.id
  let picUrl=e.currentTarget.dataset.item.picUrl
  wx.navigateTo({

    url: `/pages/singersong/singersong?name=${name}&id=${id}&picUrl=${picUrl}`,
    
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.getlist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})