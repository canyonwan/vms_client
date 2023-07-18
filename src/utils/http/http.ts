import type { HttpResponse } from 'luch-request'

import Request from 'luch-request' // 使用npm
import { cleanStorage } from '../shared'
import { hideLoading, showToast } from '../unis'
import { HttpMethods, joinTimestamp } from './helper'
import { useUserStore } from '@/store/modules/userInfo'
import { isString } from '@/utils/is'
import { httpConfig } from '@/config/http.config'

const http = new Request()

http.setConfig((config) => {
  /* 设置全局配置 */
  config.baseURL = httpConfig.baseURL
  config.header = {
    ...config.header,
    'Content-Type': httpConfig.contentType,
  }
  config.validateStatus = () => {
    return true
  }
  return config
})

http.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const accessToken = userStore.token
    if (accessToken) {
      const params = config.params || {}
      if (config.method?.toUpperCase() === HttpMethods.GET) {
        if (!isString(params)) {
          // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
          config.params = Object.assign(params || {}, joinTimestamp(true, false))
        }
        else {
          // 兼容restful风格
          config.url = `${config.url! + params}${joinTimestamp(true, true)}`
          config.params = undefined
        }
      }

      config.params = params
      config.header!.Authorization = `${httpConfig.authPrefix}${accessToken}`
      // ; (config as Recordable).header.Authorization = `Bearer ${accessToken}`

      // 判断如果过期时间小于我的当前时间，在请求上重新刷新token
      // if (accessToken.split('.').length <= 1) {
      //   refresh()
      // }
      // else {
      //   if (
      //     JSON.parse(atob(accessToken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))).exp
      //     < Math.round(new Date() / 1000)
      //   )
      //     refresh()
      // }
    }
    config.header = {
      ...config.header,
      // uuid: storage.getUuid() || uuid.v1(),
    }
    try {
      if (!config.custom?.checktoken && config.custom?.checktoken !== undefined && config.header.accessToken)
        delete config.header.accessToken
    }
    catch (e) {
    }

    return config
  },
  (config) => {
    return Promise.reject(config)
  },
)

// 必须使用异步函数，注意
http.interceptors.response.use(
  (response): Promise<HttpResponse> => {
    const res = response.data as HttpResponse
    const userStore = useUserStore()
    // 401
    if (httpConfig.noAuthCode.includes(res.code)) {
      userStore.storeWxLogin(1)?.catch(() => {
        cleanStorage()
      })
      return Promise.reject(res)
    }
    // 500
    else if (httpConfig.errorCode.includes(res.code)) {
      // 错误处理
      showToast('服务器错误, 请稍后再试')
      return Promise.reject(res)
    }
    return Promise.resolve(res)
  },
  (error) => {
    hideLoading()
    return error
  },
)

export { http }
