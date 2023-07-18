import type { IGoodsDetail, IGoodsPageParams, ISkuItem } from './types'
import { http } from '@/utils/http/http'

export function queryGoodsCategoryTree() {
  const url = 'goods/category/tree'
  return http.get(url, {})
}

// 通过分类id查询商品列表
export function queryGoodsWithCateId(params: IGoodsPageParams) {
  const url = 'goods/page'
  return http.get(url, { params })
}

// 通过分类id查询商品详情
export function queryGoodsDetail(id: number) {
  const url = `goods/detail/${id}`
  return http.get<IGoodsDetail>(url, {})
}

// 通过商品id查询商品sku
export function queryGoodsSkuList(goodsId: number) {
  const url = `goods/sku/list/${goodsId}`
  return http.get<{ list: ISkuItem[] }>(url, {})
}
