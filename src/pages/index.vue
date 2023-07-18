<script setup lang="ts">
import type { TnNotifyInstance } from '@tuniao/tnui-vue3-uniapp'

import HomePage from './components/home/index/index.vue'
import CategoryPage from './components/category/index.vue'
import CirclePage from './components/circle/index/index.vue'
import CartPage from './components/cart/index/index.vue'
import MinePage from './components/mine/index/index.vue'

import { tabbarData } from './options'

const currentTabbar = ref(0)

const notifyRef = ref<TnNotifyInstance>()

function tabbarChangeEvent(index: string | number) {
  currentTabbar.value = index as number
}
</script>

<template>
  <view class="index">
    <home-page v-if="currentTabbar === 0" />
    <category-page v-if="currentTabbar === 1" />
    <circle-page v-if="currentTabbar === 2" />
    <cart-page v-if="currentTabbar === 3" />
    <mine-page v-if="currentTabbar === 4" />

    <tn-tabbar fixed @change="tabbarChangeEvent">
      <tn-tabbar-item
        v-for="item in tabbarData" :key="item.name"
        :text="item.name" :icon="item.icon" :active-icon="item.activeIcon"
      />
    </tn-tabbar>
  </view>

  <tn-notify ref="notifyRef" />
</template>

<style lang="scss" scoped>

</style>
