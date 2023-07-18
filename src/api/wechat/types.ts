/**
 * gf_playground.api.v1.common.WxLoginRes
 * 微信登录 code2session
 */
export interface IWxLoginResp {
  errCode: number
  errMsg: string
  openId: string
  sessionKey: string
  token: string
  expiresIn: number
  unionId?: string
}

// 获取微信手机号
export interface IWxPhoneResp {
  phone: string
  countryCode: string
}
// ActualPrice float64 `json:"actualPrice"`
// OrderNumber string  `json:"orderNumber"`
// GoodsName   string  `json:"goodsName"`
// ExtraDesc   string  `json:"extraDesc"`
/**
 * gf_playground.api.v1.common.WxPrePayRes
 */
export interface IWxPrePayReq {
  actualPrice: number
  orderNo: string
  goodsName: string
  extraDesc?: string
}

export interface IWxPrePayResp {
  nonceStr: string
  package: string
  paySign: string
  signType: string
  appId: string
  timeStamp: string
}

export interface IOrderStatusWxPayReq {
  orderId: number
  /**
    * 订单号(商户系统的内部订单号)
  */
  orderNo?: string
  /**
  * 订单号(微信支付单号)
  */
  wxPayOrderNo?: string
  orderStatus: number
}

/**
 * gf_playground.api.v1.common.OrderStatusWxPayRes
 */
export interface IOrderStatusWxPayRes {
  amount?: { [key: string]: { [key: string]: any } }
  appid?: string
  attach?: string
  bankType?: string
  codeOmitempty?: string
  errCodeOmitempty?: string
  errCodeDesOmitempty?: string
  errmsgOmitempty?: string
  mchid?: string
  messageOmitempty?: string
  outTradeNo?: string
  payer?: { [key: string]: { [key: string]: any } }
  promotionDetail?: { [key: string]: { [key: string]: any } }[]
  resultCode?: string
  returnCode?: string
  returnMsgOmitempty?: string
  successTime?: string
  tradeState?: string
  tradeStateDesc?: string
  tradeType?: string
  transactionId?: string
}
