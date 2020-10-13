import axios from 'axios'
import { VueAxios } from './axios'
import { getReqBaseUrl } from '../config/env.config'

// 创建 axios 实例
const service = axios.create({
  baseURL: getReqBaseUrl(), // api base_url
  timeout: 6000 // 请求超时时间
})

const installer = {
  vm: {},
  install (Vue: any) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
