import type { IAmapLocation, IGetRegionListRes } from './types'
import { http } from '@/utils/http/http'

// 获取地区列表
export function queryRegionList() {
  const url = 'region/list'
  return http.get<{ list: IGetRegionListRes[] }>(url, { })
}

// 获取地区列表
export function queryAmapLocationWithIp(ip: string) {
  const url = 'region/amap/ip/location'
  return http.get(url, {})
}

// 使用经纬度获取地区信息
export function queryAmapLocationWithLonglat(location: string) {
  const url = 'region/amap/long-lat/location'
  return http.get<IAmapLocation>(url, {
    params: {
      location,
    },
  })
}
