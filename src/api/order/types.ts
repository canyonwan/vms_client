import type { IGoodsItem, ISkuItem } from '../goods/types'

export interface ICreateOrderReq {
  price: number
  couponPrice?: number
  actualPrice?: number
  consigneeName?: string
  consigneePhone?: string
  consigneeAddress?: string
  remark?: string
  orderGoodsList: IOrderGoodsItemInput[]
}

export interface IOrderGoodsItemInput {
  cartId?: number
  goodsId: number
  goodsSkuId: number
  skuName?: string
  stock?: number
  count: number
  remark: string
  price: number
  fileUrl?: string
  isChecked?: number
  goodsPrice?: number
  goodsName?: string
  couponPrice?: number
  actualPrice?: number
}

export interface IOrderInfo {
  price: number
  couponPrice: number
  actualPrice: number
  consigneeName: string
  consigneePhone: string
  consigneeAddress: string
  remark: string
}

export interface IOrderPageReq {
  page: number
  size: number
  status: number
  goodsName: string
}

export interface IOrderPageItemRes {
  id: number
  orderNumber: string
  userId: number
  payType: number
  remark: string
  payAt?: any
  status: number
  consigneeName: string
  consigneePhone: string
  consigneeAddress: string
  price: number
  couponPrice: number
  actualPrice: number
  createdAt: string
  updatedAt: string
  orderGoodsList: IOrderGoodsItemOutput[]
}

export interface IOrderGoodsItemOutput {
  orderId: number
  goodsId: number
  goodsSkuId: number
  count: number
  remark: string
  price: number
  couponPrice: number
  actualPrice: number
  goodsInfo: IGoodsItem
  goodsSkuInfo: ISkuItem
}

export interface ICreateOrderOutput {
  id: number
  orderNo: string
}

// 修改订单状态
export interface IUpdateOrderStatusReq {
  orderId: number
  orderNo: string
  status: number
}
