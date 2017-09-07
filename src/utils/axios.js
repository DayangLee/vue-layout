import axios from 'axios'
import { Message } from 'element-ui'

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://app.hw99lt.com', // api 的 base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
)

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log(error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
)

export default service