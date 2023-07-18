export interface IArticleItem {
  id: number
  userId: number
  publisher: string
  title: string
  desc: string
  content: string
  picUrl: string
  isSuperAdmin: number
  praiseCount: number
  createdAt: string
  updatedAt: string
}

export interface IArticleParams {
  page: number
  size: number
  publisher: string
  title: string
}
export interface IAnnouncementItem {
  id?: number
  title: string
  content: string
  userId: number
  status: number
  createdAt: string
  updatedAt: string
}
