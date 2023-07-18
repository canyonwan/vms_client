import type { IOrderStatusWxPayReq, IOrderStatusWxPayRes, IWxLoginResp, IWxPhoneResp, IWxPrePayReq, IWxPrePayResp } from './types'
import { http } from '@/utils/http/http'

export function wxLogin(code: string) {
  const url = 'user/wx/login'
  return http.get<IWxLoginResp>(url, {
    params: { code },
  })
}

export function queryWxPhone(code: string) {
  const url = 'wechat/phone'
  return http.get<IWxPhoneResp>(url, {
    params: { code },
  })
}

export function setWxPhone(phone: string) {
  const url = 'wechat/phone/set'
  return http.put<IWxPhoneResp>(url, { phone })
}

export function wxPrePay(params: IWxPrePayReq) {
  const url = 'wechat/prePay'
  return http.post<IWxPrePayResp>(url, params)
}

// 查询微信支付的订单状态
export function queryOrderStatusWxPay(params: IOrderStatusWxPayReq) {
  const url = 'wechat/pay/order'
  return http.post<IOrderStatusWxPayRes>(url, params)
}
