import type { IResultPage } from '../types'
import type { IAddCartReq, ICartItemResp, ICartPageRes, ICartTotalPriceResp } from './types'
import { http } from '@/utils/http/http'

// 获取购物车列表
export function queryCartPage(params: ICartPageRes) {
  const url = 'cart/page'
  return http.get<IResultPage<ICartItemResp>>(url, { params })
}

// 添加到购物车
export function addCart(params: IAddCartReq) {
  const url = 'cart/add'
  return http.post<{ id: number }>(url, params)
}

// 删除购物车
export function deleteCart(ids: number[]) {
  const url = 'cart/delete'
  return http.delete<void>(url, { cartIds: ids })
}

// 更新购物车(数量/选中状态/sku)
export function updateCart(params: IAddCartReq) {
  const url = 'cart'
  return http.put<void>(url, params)
}

// 更新购物车sku
export function updateCartSku(params: IAddCartReq) {
  const url = '/cart/sku/update'
  return http.put<void>(url, params)
}

// cart// 计算购物车总价
export function calcTotalPrice(cartIds: number[]) {
  const url = 'cart/calcPrice'
  return http.post<ICartTotalPriceResp>(url, { cartIds })
}

// 计算商品详情来的总价
export function calcTotalPriceForGoodsDetail(params: { goodsId: number; skuId: number; count: number }) {
  const url = 'goodsDetail/calcPrice'
  return http.post<ICartTotalPriceResp>(url, params)
}
