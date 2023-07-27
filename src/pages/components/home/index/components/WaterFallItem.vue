<script lang="ts" setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view class="wallpaper__item tn-ml-xs tn-mr-sm tn-mb-sm">
    <view class="item__image tn-radius">
      <tn-lazy-load :src="item.mainImage" mode="widthFix" />
    </view>
    <view class="tn-pt-xs tn-pb-xs">
      <tn-title :title="item.title" size="xs" />
      <!-- <view class="item__title-container">
        <text class="item__title tn-color-black tn-text-ellipsis-2">
          {{ item.title }}
        </text>
      </view> -->
      <view v-if="item.tags && item.tags.length > 0" class="item__tags-container">
        <view v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" class="item__tag">
          {{ tagItem }}
        </view>
        <!-- <tn-tag v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex" text-color="#7C8191" type="info" bg-color="#F3F2F7">
          {{ tagItem }}
        </tn-tag> -->
      </view>

      <view class="tn-flex-row tn-flex-center-between tn-padding-top-xs">
        <view class="justify-content-item">
          <view class="tn-red_text tn-flex tn-flex-col-center items-end">
            <!-- <view class="logo-pic ">
              <view class="logo-image">
                <view class="tn-round" :style="`background-image:url(${item.userImage});width: 40rpx;height: 40rpx;background-size: cover;`" />
              </view>
            </view> -->
            <view>
              <text class="tn-text-xs">
                ¥
              </text>
            </view>
            <view>
              <text class="tn-text-xl tn-text-bold">
                {{ item.userName }}
              </text>
            </view>
          </view>
        </view>
        <view class="justify-content-item">
          <text class="tn-gray_text tn-text-xs">
            {{ `${item.viewUser.viewUserCount}+人付款` }}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .wallpaper__item {
    // background-color: #FFFFFF;
    // box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

    .item {
      /* 标签 start */
      &__tags-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
      }
      &__tag {
        margin: 10rpx;
        color: #7C8191;
        background-color: #F3F2F7;
        padding: 4rpx 14rpx 6rpx;
        border-radius: 10rpx;
        font-size: 20rpx;

        &:first-child {
          margin-left: 0rpx !important;
        }
      }
    }
  }
</style>
