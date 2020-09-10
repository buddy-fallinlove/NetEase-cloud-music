const fly = require("./index")

export default {
  // 轮播图
  getbanner() {
    return fly.get(`/banner`)
  },
  //推荐歌单
  personalized() {
    return fly.get(`/personalized`)
  },
  //新碟
  getNewDisc() {
    return fly.get(`/album/newest`)
  },
  // 新音乐
  getalbum() {
    return fly.get(`/top/album`)
  },
  // 音乐新势力
  getnewsong() {
    return fly.get(`/personalized/newsong`)
  },
  // 推荐电台
  getdjprogram() {
    return fly.get(`/personalized/djprogram`)
  },
  // 推荐节目
  getrecommend() {
    return fly.get(`/program/recommend`)
  },
  // --------------------------------------------------------------------------------------------------------------
  //1.手机登录
  cellphone(phone, password) {
    return fly.get(`/login/cellphone?phone=${phone}&password=${password}`)
  },
  //2.邮箱登录
  login(email, password) {
    return fly.get(`/login?email=${email}&password=${password}`)
  },

  //3.刷新登录 
  refresh() {
    return fly.get('/login/refresh')
  },
  //4. 发送验证码
  sent(phone) {
    return fly.get(`/captcha/sent?phone=${phone}`)
  },
  //5.验证验证码
  verify(phone, captcha) {
    return fly.get(`/captcha/verify?phone=${phone}&captcha=${captcha}`)
  },
  //6.注册(修改密码)
  register(phone, captcha, password, nickname) {
    return fly.get(`/register/cellphone?phone=${phone}&captcha=${captcha}&password=${password}&nickname=${nickname}`)
  },
  //7.检测手机号码是否已注册
  check(phone) {
    return fly.get(`/cellphone/existence/check?phone=${phone}`)
  },
  //8.初始化昵称
  profile(nickname) {
    return fly.get(`/activate/init/profile?nickname=${nickname}`)
  },
  //9.更换绑定手机
  rebind(oldcaptcha, captcha, phone, ctcode) {
    return fly.get(`/rebind?phone=${phone}&captcha=${captcha}&oldcaptcha=${oldcaptcha}&ctcode=${ctcode}`)
  },
  //10.章节内容
  chapterContent(link) {
    return fly.get(`https://api.zhuishushenqi.com/chapter/${encodeURIComponent(link)}`)
  },
  //11.退出登录
  logout() {
    return fly.get(`/logout`)
  },
  //12.登录状态
  status() {
    return fly.get(`/login/status`)
  },
  //13.获取用户详情
  detail(uid) {
    return fly.get(`/user/detail?uid=${uid}`)
  },
  //14.获取用户信息 , 歌单，收藏，mv, dj 数量
  subcount() {
    return fly.get(`/user/subcount`)
  },
  //15.更新用户信息
  // gender: 性别 0:保密 1:男性 2:女性

  // birthday: 出生日期,时间戳 unix timestamp

  // nickname: 用户昵称

  // province: 省份id

  // city: 城市id
  //歌手
  getlist(type, area, initial) {
    return fly.get(`/artist/list?type=${type}&area=${area}&initial=${initial}`)
  },
  // signature：用户签名
  update(gender, birthday, nickname, province, city, signature) {
    return fly.get(`/user/update?gender=${gender}&birthday=${birthday}&nickname=${nickname}&province=${province}&city=${city}&signature=${signature}`)
  },
  //16.banner
  banner() {
    return fly.get(`/banner?type=2`)
  },
  //17.推荐歌单
  personalized() {
    return fly.get(`/personalized`)
  },
  //18.新碟
  album() {
    return fly.get(`/top/album`)
  },
  //19.新势力
  getnewsong() {
    return fly.get(`/personalized/newsong`)
  },
  //20.华语新歌
  song() {
    return fly.get(`/top/song?type=7`)
  },
  //21.推荐电台
  restiations() {
    return fly.get(`/personalized/djprogram`)
  },
  //22.推荐节目
  getrecommend() {
    return fly.get(`/program/recommend`)
  },
  //23.推荐歌单/top/playlist/highquality
  personalized() {
    return fly.get(`/personalized`)
  },
  //24.精品歌单
  highquality() {
    return fly.get(`/top/playlist/highquality`)
  },
  //25.歌单 ( 网友精选碟 )/toplist/detail
  playlist() {
    return fly.get(`/top/playlist`)
  },
  //26.所有榜单内容摘要
  getdetail() {
    return fly.get(`/toplist/detail`)
  },
  //27.电台banner
  djbanner() {
    return fly.get(`/dj/banner`)
  },
  //28.电台 - 推荐
  djrecommend() {
    return fly.get(`/dj/recommend`)
  },
  //29.电台 - 分类（情感分类、音乐故事)
  djcatelist() {
    return fly.get(`/dj/program/toplist`)
  },
  //30.获取电台付费精选
  paygift() {
    return fly.get(`/dj/paygift?limit=10`)
  },
  //31.电台分类
  getcatelist() {
    return fly.get(`/dj/catelist`)
  },
  //32首页详情
  getdsa(id) {
    return fly.get(`/playlist/detail?id=${id}`)
  },
  //33.新碟
  album1(id) {
    return fly.get(`/album?id=${id}`)
  },
  //34.获取音乐 url
  yui(id) {
    return fly.get(`/song/url?id=${id}`)
  },
  // 新歌速递/全部
  allsong() {
    return fly.get(`/top/song?type=0`)
  },
  // 新歌速递/华语
  allchina() {
    return fly.get(`/top/song?type=7`)
  },
  // 新歌速递/欧美
  allusa() {
    return fly.get(`/top/song?type=96`)
  }, // 新歌速递/日本
  alljanpan() {
    return fly.get(`/top/song?type=8`)
  },
  // 新歌速递/韩国
  allkorea() {
    return fly.get(`/top/song?type=16`)
  },
  //36.获取歌手单曲
  getartists(id) {
    return fly.get(`/artists?id=${id}`)
  },
  // 默认搜索关键词
  defaultsearch() {
    return fly.get(`/search/default`)
  },
  // 热搜列表(详细)
  hotsearch() {
    return fly.get(`/search/hot/detail`)
  },
  // 搜索得值
  search(keywords) {
    return fly.get(`/search?keywords=${keywords}`)
  },
  //搜索推荐
  suggest(keywords) {
    return fly.get(`/search/suggest?keywords=${keywords}&type=mobile`)
  },
  // 搜索详情
  getsearch(keywords, type) {
    return fly.get(`/search?keywords=${keywords}&type=${type}`)
  },
  //专辑详情
  album(id) {
    return fly.get(`/album?id=${id}`)
  },
  // 获取歌手单曲
  artists(id) {
    return fly.get(`/artists?id=${id}`)
  },
  //获取歌单 
  playlistdetail(id) {
    return fly.get(`/playlist/detail?id=${id}`)
  },

  // 获取用户详情
  userdetail(uid) {
    return fly.get(`/user/detail?uid=${uid}`)
  },
  // 获取用户歌单
  userplaylist(uid) {
    return fly.get(`/user/playlist?uid=${uid}`)
  },
  // 电台详情
  djdetail(rid) {
    return fly.get(`/dj/detail?rid=${rid}`)
  },
  djprogram(rid) {
    return fly.get(`/dj/program?rid=${rid}`)
  },
  // -------------------------
  // 视频详情---没数据
  videodetail(id) {
    return fly.get(`/video/detail?id=${id}`)
  },
// 获取歌曲详情  
songdetail(ids){
  return fly.get(`/song/detail?ids=${ids}`)
},
// 获取歌词 /lyric
lyric(id){
  return fly.get(`/lyric?id=${id}`)
},
// 歌曲评论
comment(id){
  return fly.get(`/comment/music?id=${id}`)
},
// 获取音乐 url
url(id){
  return fly.get(`/song/url?id=${id}`)
},
  
}