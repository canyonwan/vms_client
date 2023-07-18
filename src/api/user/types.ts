export interface IUserInfoResp {
  id?: number
  phone: string
  realName: string
  avatar: string
  gender: number
  status: number
  platform: number
  isSuperAdmin: number
  roleIds: string
  permissions: IPermission[]
}

export interface IUpdateUserInfoRes {
  id: number
  realName?: string
  avatar?: string
  gender?: number
}

export interface IPermission {
  id: number
  parentId: number
  name: string
  path: string
  code: string
  createdAt: string
  updatedAt: string
}

export interface IUserLoginParams {
  phone?: string
  password?: string
  platform: number
  loginType: number // 微信登录传1普通登录传2
  wxCode?: string
}

export interface ILoginResp {
  expireIn: number
  isAdmin: number
  token: string
}

export interface IWxLoginResp {
  expireIn: number
  isBoundPhone: number
  isSuperAdmin: number
  token: string
}

/**
 * gf_playground.api.v1.common.WxLoginRes
 * 微信登录 code2session
 */
// export interface IWxLoginResp {
//   errCode: number
//   errMsg: string
//   openId: string
//   sessionKey: string
//   token: string
//   expiresIn: number
//   unionId?: string
// }
