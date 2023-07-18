import type { IUserInfoResp, IWxLoginResp } from 'src/api/user/types'
import { ACCESS_TOKEN, ACCESS_TOKEN_EXPIRE_IN, CART_LIST, CURRENT_USER, IS_LOGIN } from '@/store/mutation-types'
import { login, queryUserInfo } from '@/api/user/user'

export const useUserStore = defineStore('app-user-store', () => {
  const isLogin = ref<boolean>(uni.getStorageSync(IS_LOGIN) as boolean)
  const token = ref<string>(uni.getStorageSync(ACCESS_TOKEN) as string)
  const tokenExpireIn = ref<number>(uni.getStorageSync(ACCESS_TOKEN_EXPIRE_IN) as number)
  const userInfo = ref<IUserInfoResp>(uni.getStorageSync(CURRENT_USER) as IUserInfoResp)

  function setToken(data: IWxLoginResp) {
    token.value = data.token
    uni.setStorageSync(ACCESS_TOKEN, token.value)
    setIsLogin(true)
    setTokenExpireIn(data.expireIn)
    storeGetUserInfo().catch((error) => {
      return Promise.reject(error)
    })
  }

  //  js中number转string
  function setTokenExpireIn(value: number) {
    tokenExpireIn.value = value
    uni.setStorageSync(ACCESS_TOKEN_EXPIRE_IN, tokenExpireIn.value)
  }

  function setIsLogin(value: boolean) {
    uni.setStorageSync(IS_LOGIN, value)
    isLogin.value = value
  }

  // todo:
  function setAvatar(avatar: string) {
    userInfo.value.avatar = avatar
  }

  function setUserInfo(params: IUserInfoResp) {
    userInfo.value = params
    uni.setStorageSync(CURRENT_USER, params)
  }

  function storeWxLogin(loginType: number) {
    try {
      uni.login({
        provider: 'weixin',
        success: (res) => {
          login({
            wxCode: res.code,
            platform: 1,
            loginType,
          }).then((result) => {
            if ('code' in result && result.code === 200)
              setToken(result.data as IWxLoginResp)
          }).catch((error) => {
            return Promise.reject(error)
          })
        },
        fail: (err: any) => {
          return Promise.reject(err)
        },
      })
    }
    catch (e) {
      return Promise.reject(e)
    }
  }

  // 获取用户信息
  function storeGetUserInfo() {
    return new Promise((resolve, reject) => {
      queryUserInfo()
        .then((res) => {
          setUserInfo(res.data)
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 登出
  function storeLogout() {
    uni.removeStorageSync(IS_LOGIN)
    uni.removeStorageSync(CURRENT_USER)
    uni.removeStorageSync(ACCESS_TOKEN)
    uni.removeStorageSync(ACCESS_TOKEN_EXPIRE_IN)
    uni.removeStorageSync(CART_LIST)
  }

  return {
    isLogin,
    setTokenExpireIn,
    token,
    userInfo,
    setToken,
    setIsLogin,
    setUserInfo,
    storeWxLogin,
    storeGetUserInfo,
    storeLogout,
    setAvatar,
  }
})
