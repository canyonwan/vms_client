<script setup lang="ts">
import LeftComp from './components/left.vue'
import RightComp from './components/right.vue'
import { useGetRect } from '@/hooks'

const searlist = [
  '凶姐精美壁纸',
  '情侣聊天背景',
  '热血动漫头像',
  '手机屏保壁纸',
]

const navbarHeight = ref(0)
const scrollViewHeight = ref(0)

// onMounted(() => {
//   nextTick(() => {
//     getScrollViewInfo()
//   })
// })

onMounted(() => {
  getScrollViewInfo()
})

function onSearch() {
  //
}

// 获取scrollView的高度信息
async function getScrollViewInfo() {
  // 获取搜索栏的bottom信息，然后用整个屏幕的可用高度减去bottom的值即可获取scrollView的高度(防止双重滚动)
  const rect = await useGetRect('#navbar') as UniApp.NodeInfo
  navbarHeight.value = rect.height!
  // contentHeight.value =
  const systemInfo = uni.getSystemInfoSync()
  // scrollViewBasicTop.value = systemInfo.statusBarHeight! + (rect as UniApp.NodeInfo).bottom! + uni.upx2px(10)
  scrollViewHeight.value = systemInfo.safeArea!.height + systemInfo.statusBarHeight! - (rect as UniApp.NodeInfo).bottom! - uni.upx2px(10) - 49
}
</script>

<template>
  <div>
    <!-- 顶部自定义导航 -->
    <tn-navbar id="navbar" frosted fixed back-icon="" home-icon="" bottom-shadow bg-color="#8397C8">
      <!-- 搜索框 -->
      <view class="tn-round tn-white_bg tn-w-full tn-ml tn-mr">
        <tn-notice-bar
          auto-hidden
          :data="searlist"
          mode="vertical"
          left-icon-color="tn-grey"
          text-color="tn-grey"
          font-size="26"
          left-icon="search"
          direction="vertical"
          bg-color="transparent"
          @click="onSearch"
        />
      </view>
    </tn-navbar>
    <!--  -->
    <div class="content tn-flex tn-flex-nowrap tn-flex-row-around tn-bg-white">
      <scroll-view class="tn-classify__left-box tn-gray-light_bg left-width" scroll-y scroll-with-animation :style="{ height: `${scrollViewHeight}px` }">
        <left-comp />
      </scroll-view>
      <scroll-view class="tn-classify__left-box" scroll-y scroll-with-animation :style="{ height: `${scrollViewHeight}px` }">
        <right-comp />
      </scroll-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  max-height: 100vh;
   .left-width {
    flex-basis: 28%;
  }
}
</style>
