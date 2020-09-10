// import api from '../../http/api'
import dayjs from "../../lib/dayjs.min.js"
import utils from "../../utils/util"

const {
  default: api
} = require("../../http/api")
// pages/edit/edit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date((new Date().getFullYear() - 120), 0, 1).getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    dateVal:"",
   gender:"",
   birthday:"",
   nickname:"",
   province:"",
   city:"",
   signature:"",
   show: false,
   showday: false,
   showcity:false,
   columns: ['保密', '男', '女'],
  },
  name1(){
    this.setData({ show: true });
  },
  name2(){
    this.setData({ showday: true });

  },
  confirm(e){
    // console.log(e)
   this.setData({
     birthday:dayjs(parseInt(e.detail)).format("YYYY-MM-DD"),
     showday: false
   })
  },
  Close() {
    this.setData({ showday: false });
  },
  cancel(){
    this.setData({ showday: false });
  },
  onClose() {
    this.setData({ show: false });
  },
  onconfirm(e){
   console.log(e)
   this.setData({
     gender:e.detail.value,
     show:false
   })
  },
  oncancel(){
    this.setData({ show: false });
    
  },
  name(){
    wx.showModal({
      title: '昵称',
      content: this.data.nickname,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  click(){
    api.update(this.data.gender,this.data.birthday,this.data.nickname,0,100,this.data.signature).then(res => {
      console.log(res)
    }).catch(err => {
    console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.gender)
    this.setData({
   birthday:dayjs(parseInt(options.birthday)).format("YYYY-MM-DD"),
   nickname:options.nickname,
   province:options.province,
   city:options.city,
   signature:options.signature
    })
    if(parseInt(options.gender) === 0 ){
      this.setData({
        gender:"保密"
      })
    }
    if(parseInt(options.gender) === 1 ){
      this.setData({
        gender:"男"
      })
    }
    if(parseInt(options.gender) === 2 ){
      this.setData({
        gender:"女"
      })
    }
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