/**
 * @description: 微信支付状态
 */
export enum WxPayStausEnum {
  OK = 'requestPayment:ok',
  CANCEL = 'requestPayment:fail cancel',
}

export const WxPayStausMap = {
  [WxPayStausEnum.OK]: '支付成功',
  [WxPayStausEnum.CANCEL]: '支付取消',
}

// 获取手机号
export enum wxGetPhoneNumberStatusEnum {
  OK = 'getPhoneNumber:ok',
  DENY = 'getPhoneNumber:fail user deny',
}

export const wxGetPhoneNumberStatusMap = {
  [wxGetPhoneNumberStatusEnum.OK]: '获取成功',
  [wxGetPhoneNumberStatusEnum.DENY]: '用户已取消',
}
