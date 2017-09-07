import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'

// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error);// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
)

export default service