import type { IResultPage } from '../types'
import type { ICreateOrderOutput, ICreateOrderReq, IOrderPageItemRes, IOrderPageReq, IUpdateOrderStatusReq } from './types'
import { http } from '@/utils/http/http'

export function createOrder(params: ICreateOrderReq) {
  return http.post<ICreateOrderOutput>('order', params)
}

export function deleteOrder(id: number) {
  return http.delete(`order/${id}`)
}

export function queryOrderPage(params: IOrderPageReq) {
  return http.get<IResultPage<IOrderPageItemRes>>('/order/page', { params })
}

export function queryOrderDetail(id: number) {
  return http.get<IOrderPageItemRes>(`order/${id}`, {})
}

/**
 * 设置订单状态
  * 订单状态(0:全部,1:待付款,2:待发货,3:待收货,4:已收货待评价,5:已完成,6:已取消,7:待成团)
*/
export function updateOrderStatus(params: IUpdateOrderStatusReq) {
  return http.put<void>('order/status', params)
}
