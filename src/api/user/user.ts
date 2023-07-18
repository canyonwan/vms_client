import type { ILoginResp, IUpdateUserInfoRes, IUserInfoResp, IUserLoginParams, IWxLoginResp } from './types'
import { http } from '@/utils/http/http'

export function login(params: IUserLoginParams) {
  const url = 'login'
  return http.post<ILoginResp | IWxLoginResp>(url, params)
}
export function wxLogin(code: string) {
  const url = 'user/wx/login'
  return http.get<IWxLoginResp>(url, {
    params: { code },
  })
}

export function queryUserInfo() {
  const url = 'user/info'
  return http.get<IUserInfoResp>(url, {})
}

export function updateUserInfo(params: IUpdateUserInfoRes) {
  const url = 'user/info'
  return http.put<void>(url, params)
}
