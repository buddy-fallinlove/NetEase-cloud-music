const Fly = require("../lib/fly/wx")
const fly = new Fly()
fly.config.baseURL = 'http://49.233.66.125:3000'

// 响应拦截器
fly.interceptors.response.use((response) => {
    //只将请求结果的data字段返回
    return response.data
  }
)

module.exports = fly