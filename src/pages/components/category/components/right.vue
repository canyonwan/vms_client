<script setup lang="ts">
const loadStatus = ref('loadmore')
</script>

<template>
  <div class="right  tn-p-xs">
    <view class="tn-white_bg tn-p-xs tn-radius">
      二级分类
    </view>
    <view class="tn-flex-row tn-white_bg tn-p-xs tn-radius">
      <tn-lazy-load
        src="https://file.canyonwan.top/57012f01b7a2ddd5.jpg"
        width="300rpx"
        height="200rpx"
        class="tn-mr-xs"
      />
      <div class="tn-ml-sm tn-flex-column tn-flex-start-between">
        <div class="tn-text-ellipsis-2">
          图鸟图鸟U图鸟UI图鸟UI图鸟UI图鸟UII
        </div>
        <div class="tn-flex-row tn-flex-center-between tn-w-full">
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
          <tn-button type="danger">
            去购买
          </tn-button>
        </div>
      </div>
    </view>
    <tn-loadmore :status="loadStatus" />
  </div>
</template>

<style scoped lang="scss">

</style>
