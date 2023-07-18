import type { IAnnouncementItem, IArticleParams } from './types'
import { http } from '@/utils/http/http'

export function queryArticleList(params: IArticleParams) {
  const url = 'article/page'
  return http.get(url, { params })
}

// 获取公告列表
export function queryAnnouncementList() {
  const url = 'announcement/list'
  return http.get<{ list: IAnnouncementItem[] }>(url, {
    params: {
      status: 1,
    },
  })
}
