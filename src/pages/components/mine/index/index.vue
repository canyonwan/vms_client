<script setup lang="ts">
import { useGetBoundingMenuButton } from '@/hooks'

const statusBarHeight = ref(0)
const navBarHeight = ref(0)

onMounted(() => {
  getBoundingMenuButton()
})

function getBoundingMenuButton() {
  const res = useGetBoundingMenuButton()
  statusBarHeight.value = res!.top
  navBarHeight.value = res!.height
}
</script>

<template>
  <view class="mine tn-h-screen">
    <view class="top-backgroup">
      <image src="https://tnuiimage.tnkjapp.com/my/my-bg4.png" mode="widthFix" class="backgroud-image" />
    </view>
    <div :style="{ paddingTop: `${statusBarHeight + navBarHeight + 20}px` }">
      <!-- 图标logo/头像 -->
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-margin-bottom" style="margin-top: -450rpx;">
        <view class="justify-content-item">
          <view class="tn-flex tn-flex-col-center tn-flex-row-left">
            <view class="logo-pic tn-shadow">
              <view class="logo-image">
                <view class="tn-shadow-blur" style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg');width: 110rpx;height: 110rpx;background-size: cover;overflow: hidden;" />
              </view>
            </view>
            <view class="tn-padding-right">
              <view class="tn-padding-right tn-padding-left-sm">
                <text class="tn-color-wallpaper tn-text-xl tn-text-bold">
                  不许凶我吖
                </text>
                <!-- <text class=" tn-round tn-text-xs tn-bg-red tn-color-white tn-margin-left-sm" style="padding: 10rpx 20rpx;">
                  未实名
                </text> -->
              </view>
              <view class="tn-padding-right tn-padding-top-xs tn-padding-left-sm tn-text-ellipsis">
                <text class="tn-color-gray">
                  高级UI设计
                </text>
                <text class="tn-color-gray tn-padding-left-sm tn-text-sm">
                  139****1193
                </text>
              </view>
            </view>
          </view>
        </view>
        <view class="justify-content-item">
          <view class="tn-icon-right tn-color-gray" />
        </view>
      </view>

      <view class="tn-margin-top-xl">
        <view class="button-number tn-flex tn-flex-row-between tn-flex-col-center tn-shadow-blur" style="background: linear-gradient(-120deg, #3E445A, #31374A, #2B3042, #262B3C);">
          <view class="tn-margin-left">
            <view class="title" style="color: #F1C68E;">
              <text class="tn-text-bold tn-text-xl">
                129 积分
              </text>
              <!-- <text class="tn-icon-vip-text tn-text-center" style="position: absolute;margin: -22rpx 0 0 0;font-size: 92rpx;"></text> -->
            </view>
            <view class="tn-color-white tn-text-sm tn-padding-top-sm">
              邀请好友赚取更多积分
            </view>
          </view>
          <view class="tn-margin-right">
            <tn-button shape="round" background-color="#F1C68E" font-color="#634738" padding="10rpx 0" width="160rpx" shadow open-type="share">
              <!-- <text class="tn-icon-vip tn-padding-right-sm tn-text-lg"></text> -->
              <text class="tn-text-bold">
                邀 请
              </text>
            </tn-button>
          </view>
        </view>
      </view>
    </div>
    <view class="tn-tabbar-height" />
  </view>
</template>

<style scoped lang="scss">
.mine {
  .tn-tabbar-height {
    min-height: 20rpx;
    height: calc(40rpx + env(safe-area-inset-bottom) / 2);
    height: calc(40rpx + constant(safe-area-inset-bottom));
  }

}
</style>
