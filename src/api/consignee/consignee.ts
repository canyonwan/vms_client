import type { IAddConsigneeReq, IConsigneeItem, ISetDefaultConsigneeReq } from './types'
import { http } from '@/utils/http/http'

// 新增收货地址
export function saveConsignee(params: IAddConsigneeReq) {
  return http.request({
    url: 'consignee',
    method: params.id ? 'PUT' : 'POST',
    data: params,
  })
}

// 删除收货地址
export function deleteConsignee(id: number) {
  const url = `consignee/${id}`
  return http.delete(url, { })
}

// 列表
export function queryConsigneeList() {
  const url = 'consignee'
  return http.get<{ list: IConsigneeItem[] }>(url, { })
}

// 设置默认收货地址
export function setDefaultConsignee(params: ISetDefaultConsigneeReq) {
  const url = 'consignee/setDefault'
  return http.post(url, params)
}
