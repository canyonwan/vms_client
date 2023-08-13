<script setup lang="ts">
const loadMoreStatus = ref('loadmore')

onReachBottom(() => {
  // if (loadMoreStatus.value === 'no-more')
  // return
  // unref(searchParams).page++
  // loadMoreStatus.value = 'loading'
  // if (cartList.value.length === cartTotal.value)
  //   loadMoreStatus.value = 'no-more'
  // else
  //   cartStore.getCartPage(getScrollHeight)
})

onPullDownRefresh(() => {
  // cartList.value = []
  // unref(searchParams).page = 1
  // cartStore.getCartPage(getScrollHeight)
  loadMoreStatus.value = 'more'
  uni.stopPullDownRefresh()
})
</script>

<template>
  <div class="right tn-p-xs tn-white_bg tn-h-screen">
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
    <tn-loadmore :status="loadMoreStatus" color="tn-gray" />
  </div>
</template>

<style scoped lang="scss">

</style>
