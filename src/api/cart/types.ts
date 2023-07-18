import type { ISkuItem } from '../goods/types'

export interface ICartPageRes {
  page: number
  size: number
}

export interface ICartItemResp {
  id: number
  userId: number
  goodsId: number
  goodsSkuId: number
  count: number
  isChecked: number
  createdAt: string
  updatedAt?: string
  goodsSkuInfo: ISkuItem
  goodsInfo: ICartGoodsInfo
}

export interface ICartGoodsInfo {
  id: number
  stock: number
  categoryIds: string
  name: string
  desc: string
  price: number
  fileIds: string
  fileInfo: ICartFileInfo
}

export interface ICartFileInfo {
  id: number
  fileUrl: string
}

export interface IAddCartReq {
  id?: number
  goodsSkuId?: number
  goodsId: number
  count: number
  isChecked?: number
}
export interface ICartTotalPriceResp {
  totalPrice: number
  couponPrice: number
  actualPrice: number
  freight: number
}
