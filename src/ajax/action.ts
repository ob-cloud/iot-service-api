import { AxiosPromise, Method } from 'axios'
import qs from 'qs'
import { getReqBaseUrl } from '../config/env.config'
import { axios } from './request'

interface ExtraInterface {
  isData?: boolean;
  headers?: object;
  [propName: string]: any;
}

/**
 * http请求操作
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param method 请求方法
 * @param extra 额外参数，如 headers等
 */
export function httpAction (url: string, parameter: object|string = {}, method: Method = 'get', extra: ExtraInterface = {}): AxiosPromise<any> {
  const methods = ['post', 'put']
  if (extra.isData) {
    methods.push(method)
    delete extra.isData
  }
  const option = methods.includes(method.toLowerCase()) ? { data: parameter } : { params: parameter }
  return axios({
    url,
    method: method,
    ...option,
    ...extra
  })
}

/**
 * 表单请求
 * {@link httpAction}
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param extra 额外参数
 */
export function postFormAction (url: string, parameter:object = {}, extra:ExtraInterface = {}): AxiosPromise<any> {
  const headers:object = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  return httpAction(url, qs.stringify(parameter), 'post', { ...extra, headers})
}

/**
 * post请求
 * {@link httpAction}
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param extra 额外参数
 */
export function postAction (url: string, parameter:object = {}, extra:ExtraInterface = {}): AxiosPromise<any> {
  return httpAction(url, parameter, 'post', extra)
}
/**
 * put请求
 * {@link httpAction}
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param extra 额外参数
 */
export function putAction (url: string, parameter:object = {}, extra:ExtraInterface = {}): AxiosPromise<any> {
  return httpAction(url, parameter, 'put', extra)
}
/**
 * get请求
 * {@link httpAction}
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param extra 额外参数
 */
export function getAction (url: string, parameter:object = {}, extra:ExtraInterface = {}): AxiosPromise<any> {
  return httpAction(url, parameter, 'get', extra)
}
/**
 * delete请求
 * {@link httpAction}
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param extra 额外参数
 */
export function deleteAction (url: string, parameter:object = {}, extra:ExtraInterface = {}): AxiosPromise<any> {
  return httpAction(url, parameter, 'delete', extra)
}
/**
 * delete json文本类型
 * {@link httpAction}
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param extra 额外参数
 */
export function deleteJsonAction (url: string, parameter:object = {}, extra:ExtraInterface = {}): AxiosPromise<any> {
  const headers = { headers: { 'Content-Type': 'application/json'} }
  return deleteAction(url, parameter, {isData: false, ...headers, ...extra})
}
/**
 * 下载请求 blob Type
 * {@link httpAction}
 * @param url 请求url路径
 * @param parameter 请求参数
 * @param extra 额外参数
 */
export function downloadAction (url: string, parameter:object = {}, extra:ExtraInterface = {}): AxiosPromise<any> {
  return getAction(url, parameter, { responseType: 'blob', ...extra })
}

/**
 * 通过浏览器下载
 * @param url 请求url路径
 * @param parameter 请求参数
 */
export function downloadActionByWin (url: string, parameter:object = {}) {
  window.open(getRequestUrl(url, parameter))
}

/**
 * 获取请求绝对路径
 * @param url 请求url路径
 * @param parameter 请求参数
 */
export function getRequestUrl (url: string, parameter:object = {}) {
  return getReqBaseUrl() + url + (qs.stringify(parameter) && ('?' + qs.stringify(parameter)))
}
