import { DEFAULT_CONSIGNEE } from '../mutation-types'
import type { IConsigneeItem } from '@/api/consignee/types'

export const useConsigneeStore = defineStore('app-consignee-store', () => {
  const consigneeInfo = ref<IConsigneeItem | null>(uni.getStorageSync(DEFAULT_CONSIGNEE) as IConsigneeItem)

  function setDefaultConsignee(value: IConsigneeItem) {
    consigneeInfo.value = value
    uni.setStorageSync(DEFAULT_CONSIGNEE, consigneeInfo.value)
  }

  return {
    consigneeInfo,
    setDefaultConsignee,
  }
})
