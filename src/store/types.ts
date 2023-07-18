import type { IUserInfoResp } from '@/api/user/types'

export interface IStore {
  user: IUserInfoResp
  // tabsView: ITabsViewState
  count: number
}
