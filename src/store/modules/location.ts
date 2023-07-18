import { queryAmapLocationWithLonglat } from '@/api/common/common'
import type { IAmapLocation } from '@/api/common/types'
import { showToast } from '@/utils/unis'

export const useLocationStore = defineStore('app-location-store', () => {
  const locationInfo = ref<IAmapLocation | null>(null)
  const locationLoading = ref(false)

  function getLocation() {
    locationLoading.value = true
    uni.authorize({ // 授权
      scope: 'scope.userLocation',
      success() {
        uni.getLocation({ // 获取位置
          success: (res) => {
            const location = `${res.longitude},${res.latitude}`
            queryAmapLocationWithLonglat(location).then((res) => {
              locationInfo.value = res.data
              locationLoading.value = false
            }).catch(() => {
              locationLoading.value = false
              showToast('获取位置失败')
            })
          },
          // complete: (_) => {
          //   locationLoading.value = false
          // },
          fail: (res) => {
            showToast('获取位置失败')
          },
        })
      },
      fail: (res) => {
        locationLoading.value = false
        showToast('授权位置失败')
      },
    })
  }

  return {
    locationInfo,
    locationLoading,
    getLocation,
  }
})
