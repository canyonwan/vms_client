import type { IFileItem } from '../types'

export interface IGoodsCategoryItem {
  id: number
  parentId: number
  picUrl?: string
  categoryName: string
  sort?: string
  children?: IGoodsCategoryItem[]
}

export interface IGoodsPageParams {
  page?: number
  size?: number
  name?: string
  price?: number
  sort?: number
  status?: number
  categoryIds?: string
}

export interface IGoodsItem {
  id?: number
  categoryIds: number[] | string
  name: string
  desc: string
  fileIds?: string // 文件ids
  files?: IFileItem[] // 文件ids
  fileInfo?: IFileItem // 文件ids
  fileIdList?: number[] // 文件ids
  price: number
  status: number
  sales: number
  stock: number
  sort: number
  // oneLevelId: number
  // twoLevelId?: number
  // threeLevelId?: number
}

export interface IGoodsDetail {
  id: number
  categoryIds: string
  name: string
  detail: string
  price: number
  fileIds: string
  status: number
  sort: number
  couponId: number
  stock: number
  sales: number
  tags: string
  userId: number
  createdAt: string
  updatedAt: string
  skuList: ISkuItem[]
  files: IFileItem[]
}

export interface ISkuItem {
  id?: number
  count?: number
  goodsId: number
  skuName: string
  goodsName?: string
  goodsPrice?: number
  price: number
  fileUrl?: string
  stock?: number
  createdAt?: string
  updatedAt?: string
}
