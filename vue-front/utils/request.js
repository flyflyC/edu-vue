import axios from 'axios'
import {MessageBox,Message} from 'element-ui'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8010', // api的base_url
  timeout: 20000 // 请求超时时间
})

//拦截器
  service.interceptors.request.use(
    config=>{
      if(cookie.get('edu_token')){
        config.headers['token'] = cookie.get('edu_token');
      }
      return config
    },
    err=>{
      return Promise.reject(err)
    }
  )
export default service
