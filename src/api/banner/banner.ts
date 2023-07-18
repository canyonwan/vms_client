import { http } from '@/utils/http/http'

export function queryBannerList() {
  const url = 'banner/list'
  return http.get(url, {})
}
