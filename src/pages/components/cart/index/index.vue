<script setup lang="ts">
import type { LoadmoreStatus } from '@tuniao/tnui-vue3-uniapp/components'
import { customLoadMoreText } from './options'
import { useGetRect } from '@/hooks'

const checkAll = ref(false)
const showSkuPopup = ref(false)
const tabBarHeightStyle = ref('')
const bottomBoxHeightStyle = ref('')
const tabBarHeight = ref(0)
const selectCart = ref()
const count = ref<number>(0)
const loadmoreStatus = ref<LoadmoreStatus>('loadmore')

onMounted(() => {
  tabBarHeightStyle.value = `${uni.getStorageSync('tabBarHeight')}px`
  tabBarHeight.value = uni.getStorageSync('tabBarHeight')
  getBottomBoxInfo()
})

function onOpenSku() {
  showSkuPopup.value = true
}

async function getBottomBoxInfo() {
  const rect = await useGetRect('.bottom-box') as UniApp.NodeInfo
  uni.setStorageSync('cartPageBottomBoxHeight', rect.height! + 30)
  bottomBoxHeightStyle.value = `${uni.getStorageSync('cartPageBottomBoxHeight') + uni.getStorageSync('tabBarHeight')}px`
}
</script>

<template>
  <view class="box">
    <!-- 顶部自定义导航 -->
    <tn-navbar fixed back-icon="" home-icon="delete-fill" bottom-shadow bg-color="#8397C8">
      购物车
    </tn-navbar>
    <view v-for="item in 6" :key="item" class="tn-white_bg tn-radius tn-m-sm tn-flex-center-between ">
      <tn-checkbox v-model="selectCart" checked-shape="circle" />
      <tn-lazy-load
        src="https://file.canyonwan.top/57012f01b7a2ddd5.jpg" width="300rpx" height="200rpx"
        class="tn-mr-xs"
      />
      <view class="tn-ml-sm tn-mr-sm tn-mb-sm tn-mt-sm tn-flex-column tn-flex-start-between">
        <view class="tn-text-ellipsis-2">
          图鸟图鸟U图鸟UI图鸟UI图鸟UI图鸟UII
        </view>
        <view class="tn-flex tn-text-xs tn-mt-sm tn-mb-sm tn-gray_text" @click="onOpenSku">
          <view>
            图鸟图鸟U图鸟UI图规格
          </view>
          <tn-icon name="down-triangle" />
        </view>
        <view class="tn-flex-row tn-flex-center-between tn-w-full">
          <view class="tn-red_text tn-flex tn-flex-col-center items-end">
            <view>
              <text class="tn-text-xs">
                ¥
              </text>
            </view>
            <view>
              <text class="tn-text-xl tn-text-bold">
                200
              </text>
            </view>
          </view>
          <tn-number-box v-model="count" :min="1" :max="10" />
        </view>
      </view>
    </view>
    <view :style="{ height: bottomBoxHeightStyle }">
      <tn-loadmore :status="loadmoreStatus" :text="customLoadMoreText" color="tn-gray" />
    </view>
    <view class="bottom-box tn-flex-center-between justify-between tn-p-sm">
      <!--  -->
      <tn-checkbox v-model="checkAll" checked-shape="circle">
        全选
      </tn-checkbox>
      <view class="tn-flex-center-between">
        <view class="tn-flex-center-between">
          合计：
          <view class="tn-red_text tn-flex tn-flex-col-center items-end">
            <view>
              <text class="tn-text-xs">
                ¥
              </text>
            </view>
            <view>
              <text class="tn-text-2xl tn-text-bold">
                88
              </text>
            </view>
          </view>
        </view>
        <view class="tn-ml tn-gradient-bg__cool-5 tn-radius tn-pt-sm tn-pb-sm tn-pr-lg tn-pl-lg tn-white_text">
          结算(0)
        </view>
      </view>
    </view>
    <!-- 弹窗 -->
    <tn-popup v-model="showSkuPopup" close-btn open-direction="bottom" :height="`${tabBarHeight + 400}px`">
      <view class="tn-p-lg">
        弹框内容
      </view>
      <template #closeBtn>
        <tn-icon name="close" />
      </template>
    </tn-popup>
  </view>
</template>

<style scoped lang="scss">
.box {
  height: 100vh;
  background-color: var(--tn-bg-color-page);

  .bottom-box {
    position: fixed;
    bottom: v-bind('tabBarHeightStyle');
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
    z-index: 999;
  }
}
</style>
