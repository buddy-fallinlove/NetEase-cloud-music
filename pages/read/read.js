// pages/song/song.js
const {
  default: api
} = require("../../http/api")
const play = wx.getBackgroundAudioManager()
Page({

  onChange(event) { 

  },

  /**
   * 页面的初始数据
   */
  data: {
    ids: '',
    song: {},
    singerid: '',
    url: {},
    name: '',
    flag:'0',
    num:'0',
    words:'0',
    playtime:'00:00',
    endtime:'00:00',
    max:100,
    move:0
  },

  // 获取路径
  geturl(ids){
    api.url(ids).then(res => {
      play.src = res.data[0].url
    }).catch(err => {})
  },
  // 详情
  details(ids){
    api.songdetail(ids).then(res => {
      this.setData({
        song: res.songs[0],
        singerid: res.songs[0].ar[0].id,
        name: res.songs[0].al.name
      })
      play.title = this.data.name
    }).catch(err => {}) 
  },
    // 进度条拖动
  drag(e){
    console.log(e)
    let value = e.detail.value
    this.setData({
      move:value,
    })
    play.seek(this.data.move)
  },
// 歌词
getlyric(ids){
  api.lyric(ids).then(res => {
    this.setData({
      lyric:res.lrc.lyric
    })
    //调用解析歌词的方法
    let result = this.analysisOfLyrics(this.data.lyric)
    //调用去掉空歌词的方法
    let finalResult = this.sliceNUll(result)
    this.setData({
      lyricArray: finalResult
    })
  }).catch(err => {}) 
},

// 解析歌词
analysisOfLyrics(lyric){
  //定义一个数组，存储时间和歌词，让歌词时间一一对应
  let lyricResult =[]
    //将所有歌词组成的字符串组成每句歌词的数据
    //使用split（切割）对换行字符进行切割（\n,\r回车，\t一个type键位）
    //split:切割返回数组，slice:截取
    let lyricArray = lyric.split("\n")
    //判断最后一个元素（歌词和时间）是否为空？如果为空就删除
    if (lyricArray[lyricArray.length - 1] === "") {
      
      //删除元素
      lyricArray.pop();
    }
        //时间与歌词分别存储
    //时间满足格式【xx:xx:xxx】规律 ，正则表达式检测符合模式的的文本
    //书写时间正则表达式,\[：]使用转义表示中括号 数字【0-9】=== \d (m):的字符串为m个
    //点 . ：匹配除了换行以外的任意单个字符
    let pattern = /\[\d{2}:\d{2}\.\d{2,3}\]/g
    //遍历数组的每一个元素 for each循环
    //v:数组中的每一个元素，i:数组中元素对应的下标，a:正在遍历的数组
    lyricArray.forEach(function (v, i, a) {
      //使用正则表达式进行正则转换
      let relyric = v.replace(pattern, "");

      //提取时间
      let time = v.match(pattern) //歌曲播放进度是按照分秒进行渲染的【00：00：000】-> 00:00.000（字符串）-> 0秒
      // console.log(time)
      // 去除中括号
      //js中最后一个元素的的长度的事length-1或者-1 ，java只能是length-1
      //判断time是否为空
      if (time != null) {
        let result = time[0].slice(1, -1)
        //对result进行切割，得到一个数组
        let timearry = result.split(":");
        //将时间转为秒
        let finalTime = parseFloat(timearry[0]) * 60 + parseFloat(timearry[1])
        // console.log(finalTime)
        //将歌词和对应的时间添加到数组
        lyricResult.push([finalTime, relyric])
      }
    })
     //返回数组
    //  console.log(lyricResult)
     return lyricResult;
},

  //去掉空歌词
  sliceNUll:function(lyricArray) {
    //定义一个数组
    let result = []
    //遍历每一元素
    for (let i = 0; i < lyricArray.length; i++) {
      //判断是否为空
      if (lyricArray[i][1] != "") {
        result.push(lyricArray[i])
      }
    }
    // console.log(result)
    return result
  },

  // 歌词出现
  goword(){
    this.setData({
      words:1
    })
  },

   // 歌词消失
   noword(){
    this.setData({
      words:0
    })
  },

  onChange(event) {
    wx.showToast({
      icon: 'none',
      title: `当前值：${event.detail}`,
    });
  },

  // 歌手详情
  gostar(e) {
    wx.navigateTo({
      url: `../../pages/star/star?id=${this.data.singerid}`,
    })
  },

  // 歌曲评论
  gocomment(e) {
    wx.navigateTo({
      url: `../../pages/comment/comment?id=${this.data.ids}`,
    })
  },

  // 停止播放
  stop(){
    this.setData({
      flag:1
    })
    play.pause()
  },

  // 播放音乐
  playmusic(){
    this.setData({
      flag:0
    })
    play.play()
  },

  // 随机播放
  suiji(){
    this.setData({
      num:1
    })
    wx.showToast({
      title: '随机播放',
    })
  },

   // 单曲循环
   one(){
    this.setData({
      num:2
    })
    wx.showToast({
      title: '单曲循环',
    })
  },

   // 心动模式
   heart(){
    this.setData({
      num:3
    })
    wx.showToast({
      title: '心动模式',
    })
  },

   // 列表循环
   xunhuan(){
    this.setData({
      num:0
    })
    wx.showToast({
      title: '列表循环',
    })
  },

  // 上一首
  last(){
    this.setData({
      index:this.data.index - 1
    })
    // console.log(this.data.index)
    let last = this.data.arr4[this.data.index]
    this.setData({
      ids:last.id
    })
        // 获取歌曲详情  
        this.details(this.data.ids)
       // 获取歌曲url 
       this.geturl(this.data.ids)
              // 获取歌词
    this.getlyric(this.data.ids)
  },

  // 下一首
  next(){
    this.setData({
      index:this.data.index * 1 + 1
    })
    // console.log(this.data.index)
    let next = this.data.arr4[this.data.index]
    this.setData({
      ids:next.id
    })
        // 获取歌曲详情  
        this.details(this.data.ids)
       // 获取歌曲url 
       this.geturl(this.data.ids)
              // 获取歌词
    this.getlyric(this.data.ids)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ids: options.id,
      index:options.index,
      arr4:wx.getStorageSync('arr4')
    })

    if(this.data.ids){
      // 获取歌曲url 
    this.geturl(this.data.ids)
    // 获取歌曲详情  
    this.details(this.data.ids)
        // 获取歌词
     this.getlyric(this.data.ids)
    }
    else{
      this.setData({
        ids:this.data.arr4[0].id
      })
       //获取歌曲url 
    this.geturl(this.data.ids)
    // 获取歌曲详情  
    this.details(this.data.ids)
        // 获取歌词
    this.getlyric(this.data.ids)
    }

    //监听播放进度更新事件
    play.onTimeUpdate(() => {
      // console.log(play.currentTime)
      let currentTime = play.currentTime
      // 获取歌曲总时长
      let duration = play.duration
      // 将播放进度转换为分秒
      let playMinutes =Math.floor( currentTime/60)
      let playSeconds =Math.floor(currentTime%60)
      // console.log(playMinutes +"----"+playSeconds)
      // 计算总时长分钟数
      let endMinutes =Math.floor(duration/60)
      // 计算总时长秒数
      let endSeconds =Math.floor(duration%60)
      // console.log(endMinutes +"----"+endSeconds)
      // 计算进度条最大值
      let max = duration
       // 计算进度条move的值
       let move = currentTime
      // 判断分秒是否小于10
      if(playMinutes <10){
        playMinutes = "0"+playMinutes
        if(playSeconds < 10){
          playSeconds = "0"+playSeconds
        }
        if(endMinutes < 10){
          endMinutes = "0"+endMinutes
          if(endSeconds < 10){
            endSeconds = "0"+endSeconds
          }
        }
        this.setData({
          playtime:playMinutes+":"+playSeconds,
          endtime:endMinutes+":"+endSeconds,
          max:max,
          move:move
        })
      }
      //取出歌词数组
      // let that = this
      let lyricArray = this.data.lyricArray
      //遍历数组
      for (let i = 0; i < lyricArray.length; i++) {
        //将每个歌曲进度进行数组中的比较，在当前时间到下一句歌词之间的范围之内
        if (currentTime >= lyricArray[i][0] && currentTime < lyricArray[i + 1][0]) {
          //设置当前播放行号
          this.setData({
            currentIndex: i
          })
          // console.log(this.data.currentIndex)
          break;
        }
      }
      //计算滚动条的位置
      if (this.data.currentIndex >= 0) {
        this.setData({
          scrollTop: this.data.currentIndex * 30
        })
        // console.log(this.data.scrollTop)
      }
    })
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