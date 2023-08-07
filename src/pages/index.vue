<script setup lang="ts">
import type { TnNotifyInstance } from '@tuniao/tnui-vue3-uniapp'

import HomePage from './components/home/index/index.vue'
import CategoryPage from './components/category/index.vue'
import CirclePage from './components/circle/index/index.vue'
import CartPage from './components/cart/index/index.vue'
import MinePage from './components/mine/index/index.vue'
import { tabbarData } from './options'
import { useGetRect } from '@/hooks'

onMounted(() => {
  if (uni.getStorageSync('tabBarHeight'))
    return
  getTabBarInfo()
})

const currentTabBar = ref(0)

const notifyRef = ref<TnNotifyInstance>()

function tabBarChangeEvent(index: string | number) {
  currentTabBar.value = index as number
}

async function getTabBarInfo() {
  const rect = await useGetRect('#tabBarId') as UniApp.NodeInfo
  uni.setStorageSync('tabBarHeight', rect.height!)
}
</script>

<template>
  <view class="index">
    <home-page v-if="currentTabBar === 0" />
    <category-page v-if="currentTabBar === 1" />
    <circle-page v-if="currentTabBar === 2" />
    <cart-page v-if="currentTabBar === 3" />
    <mine-page v-if="currentTabBar === 4" />

    <tn-tabbar id="tabBarId" fixed switch-animation @change="tabBarChangeEvent">
      <tn-tabbar-item
        v-for="(item, index) in tabbarData" :key="item.name"
        :bulge="index === 2"
        :text="item.name" :icon="item.icon" :active-icon="item.activeIcon"
      />
    </tn-tabbar>
  </view>

  <tn-notify ref="notifyRef" />
</template>

<style lang="scss" scoped>

</style>
