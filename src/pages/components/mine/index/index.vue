<script setup lang="ts">
import { myOrderOptions } from './options'
import { toPath } from '@/utils/unis'
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
  <view class="mine">
    <view class="tn-pl tn-pr">
      <!-- 图标logo/头像 -->
      <view class="tn-flex-center-between tn-mb" :style="{ paddingTop: `${statusBarHeight + navBarHeight + 20}px` }">
        <view class="justify-content">
          <view class="tn-flex items-center">
            <view class="logo-pic">
              <view style="background-image:url('https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg');width: 110rpx;height: 110rpx;background-size: cover;overflow: hidden;" />
            </view>
            <view>
              <text class="tn-color-wallpaper tn-text-lg tn-text-bold">
                不许凶我吖
              </text>
              <view class="tn-mt-xs">
                <text class="tn-type-info_text">
                  高级UI设计
                </text>
                <text class="tn-type-info_text tn-text-sm">
                  139****1193
                </text>
              </view>
            </view>
          </view>
        </view>
        <view class="">
          <tn-icon name="right" type="info" />
        </view>
      </view>

      <view class="tn-mt-lg">
        <view class="button-number tn-radius tn-p tn-flex tn-flex-center-between" style="background: linear-gradient(-120deg, #3E445A, #31374A, #2B3042, #262B3C);">
          <view class="tn-margin-left">
            <view class="title" style="color: #F1C68E;">
              <text class="tn-text-bold tn-text-xl">
                129 积分
              </text>
              <!-- <text class="tn-icon-vip-text tn-text-center" style="position: absolute;margin: -22rpx 0 0 0;font-size: 92rpx;"></text> -->
            </view>
            <view class="tn-white_text tn-text-sm tn-pt-sm">
              邀请好友赚取更多积分
            </view>
          </view>
          <tn-button shape="round" bg-color="#F1C68E" text-color="#634738" width="160rpx" shadow open-type="share">
            <text class="tn-text-bold tn-pt-xs tn-pb-xs">
              邀 请
            </text>
          </tn-button>
        </view>
      </view>

      <view class="tn-mt-lg tn-p tn-shadow tn-white_bg">
        <view class="tn-mb tn-flex-center-between">
          <tn-title title="我的订单" size="lg" mode="vLine" />
          <view class="tn-type-info-light-7_text" @click="toPath('mine/my-orders')">
            <text class="tn-type-info_text tn-text-sm">
              查看全部
            </text>
            <tn-icon name="right" type="info" />
          </view>
        </view>
        <view class="tn-flex tn-flex-center-between">
          <view v-for="item in myOrderOptions.slice(1, 6)" :key="item.name" class="tn-flex-column tn-flex-center-between">
            <image :src="`/static/icons/mine/${item.icon}.png`" style="height: 60rpx; width: 60rpx;" />
            <text class="tn-text-sm tn-text-center tn-mt-xs">
              {{ item.name }}
            </text>
          </view>
        </view>
      </view>

      <!--  -->
      <view class="tn-mt-lg tn-white_bg tn-radius tn-shadow">
        <view class="list-item">
          <tn-list-item
            bottom-border
            bottom-border-indent
            right-icon="right"
            @click="toPath('mine/about')"
          >
            <view class="tn-flex">
              <tn-icon size="34" name="team-fill" />
              <view class="tn-ml-xs">
                关于我们
              </view>
            </view>
          </tn-list-item>
          <tn-list-item
            bottom-border
            bottom-border-indent
            right-icon="right"
          >
            <view class="tn-flex">
              <tn-icon size="34" color="info" name="tel-circle-fill" />
              <view class="tn-ml-xs">
                技术支持
              </view>
            </view>
          </tn-list-item>
          <tn-list-item
            bottom-border
            bottom-border-indent
            right-icon="right"
            radius
          >
            <view class="tn-flex">
              <tn-icon size="34" name="set-fill" />
              <view class="tn-ml-xs">
                系统设置
              </view>
            </view>
          </tn-list-item>
          <tn-list-item
            bottom-border
            bottom-border-indent
            right-icon="right"
            radius
          >
            <view class="tn-flex">
              <tn-icon size="34" name="set-fill" />
              <view class="tn-ml-xs">
                系统设置
              </view>
            </view>
          </tn-list-item>
          <tn-list-item
            bottom-border
            bottom-border-indent
            right-icon="right"
            radius
          >
            <view class="tn-flex">
              <tn-icon size="34" name="set-fill" />
              <view class="tn-ml-xs">
                系统设置
              </view>
            </view>
          </tn-list-item>
          <tn-list-item
            bottom-border
            bottom-border-indent
            right-icon="right"
            radius
          >
            <view class="tn-flex">
              <tn-icon size="34" name="set-fill" />
              <view class="tn-ml-xs">
                系统设置2
              </view>
            </view>
          </tn-list-item>
        </view>
      </view>
    </view>
    <view class="tn-tabbar-height" />
  </view>
</template>

<style scoped lang="scss">
.mine {
  height: calc(v-bind('statusBarHeight') + v-bind('navBarHeight') + 240px);
  background: url('https://tnuiimage.tnkjapp.com/my/my-bg4.png') no-repeat;
  background-size: 100%;
  .logo-pic {
    margin-right: 26rpx;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    border: 8rpx solid rgba(255,255,255,0.05);
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    overflow: hidden;
  }
  .button-number {
    width: 100%;
    height: 150rpx;
    border-radius: 15rpx;
    position: relative;
    z-index: 1;

    &::after {
      content: " ";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      border-radius: inherit;
      opacity: 1;
      transform: scale(1, 1);
      background-size: 100% 100%;
      background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
    }
  }
  .tn-tabbar-height {
    min-height: 20rpx;
    height: calc(40rpx + env(safe-area-inset-bottom) / 2);
    height: calc(40rpx + constant(safe-area-inset-bottom));
  }

}
</style>
