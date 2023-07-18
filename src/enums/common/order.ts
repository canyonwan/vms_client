// 订单状态(0:全部,1:待付款,2:待发货,3:待收货,4:已收货待评价,5:已完成,6:已取消,7:待成团)
export enum orderStatus {
  ALL = 0,
  WAIT_PAY = 1,
  WAIT_SEND = 2,
  WAIT_RECEIVE = 3,
  WAIT_COMMENT = 4,
  FINISHED = 5,
  CANCELED = 6,
  WAIT_GROUP = 7,
}

export const orderStatusMap = {
  [orderStatus.ALL]: '全部',
  [orderStatus.WAIT_PAY]: '待付款',
  [orderStatus.WAIT_SEND]: '待发货',
  [orderStatus.WAIT_RECEIVE]: '待收货',
  [orderStatus.WAIT_COMMENT]: '待评价',
  [orderStatus.FINISHED]: '已完成',
  // [orderStatus.FINISHED]: '交易成功',
  [orderStatus.CANCELED]: '已取消',
  [orderStatus.WAIT_GROUP]: '待成团',
}
// 支付方式 0 未支付 1微信 2支付宝 3云闪付 4数字金币
export enum payType {
  NONE = 0,
  WECHAT = 1,
  ALIPAY = 2,
  UNIONPAY = 3,
}

export const payTypeMap = {
  [payType.NONE]: '未支付',
  [payType.WECHAT]: '微信',
  [payType.ALIPAY]: '支付宝',
  [payType.UNIONPAY]: '云闪付',
}
