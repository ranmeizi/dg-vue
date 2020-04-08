import axios from 'axios'
import Config from '@/config'
import { router } from '@/App'
const { API_BASE_URL } = Config
axios.defaults.baseURL = API_BASE_URL;
// 请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  //登录状态验证
  if (response.data.code === 401) {
    router.push('/login')
  }
  return response
})

export default axios