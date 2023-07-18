<script setup lang="ts">
import { useLocationStore } from '@/store/modules/location'
import { useCheckUpdate, useGetBoundingMenuButton, useGetSystemInfo, useUpdateCustomBarInfo } from '@/hooks'
import { useUserStore } from '@/store/modules/userInfo'

const store = useUserStore()
const locationStore = useLocationStore()

onLaunch(() => {
  useGetBoundingMenuButton() // 获取胶囊按钮的位置信息
  // checkLogin()
  useGetSystemInfo()
  locationStore.getLocation()
  useCheckUpdate()
  useUpdateCustomBarInfo()
})
onShow(() => {
})
onHide(() => {
})

function checkLogin() {
  if (store.isLogin)
    store.storeGetUserInfo()

  else
    store.storeWxLogin(1)
}

// 获取胶囊按钮的位置信息
</script>

<style lang="scss">
@import '@tuniao/tn-style/dist/uniapp/index.css';
@import '@/static/style/common.scss';
</style>
