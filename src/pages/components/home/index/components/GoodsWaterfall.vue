<script setup lang="ts">
import WaterFallItem from './WaterFallItem.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

// 轮播图数据
const swiperData = [
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-2.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new1.png',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d.jpg',
]

const loadStatus = ref('loadmore')

// 瀑布流加载完毕事件
function handleWaterFallFinish() {
  loadStatus.value = 'loadmore'
}
</script>

<template>
  <view class="goods-waterfall">
    <view class="tn-pl tn-pr">
      <tn-water-fall :data="data" mode="normal" @finish="handleWaterFallFinish">
        <!-- <tn-swiper
          :data="swiperData"
          width="100%"
          height="420"
          indicator
          indicator-type="dot"
          autoplay
          indicator-active-bg-color="#55B884"
        >
          <template #default="{ data }">
            <tn-lazy-load :src="data" mode="widthFix" />
          </template>
        </tn-swiper> -->
        <template #left="{ item }">
          <water-fall-item :item="item" />
        </template>
        <template #right="{ item }">
          <water-fall-item :item="item" />
        </template>
      </tn-water-fall>
    </view>
    <tn-loadmore :status="loadStatus" />
  </view>
</template>

<style scoped lang="scss">
.goods-waterfall {

  /* 瀑布流*/
  .wallpaper__item {
    width: calc(100% - 20rpx);
    margin: 10rpx;
    border-top: solid transparent;
    // background-color: #b75454;
    // overflow: hidden;
    // margin: 0 10rpx;
    // margin-bottom: 40rpx;
    // box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);

    .item {

      /* 图片 start */
      &__image {
        width: 100%;
        height: auto;
        background-color: #FFFFFF;
        border: 1rpx solid #F8F7F8;
        border-radius: 10rpx;
        overflow: hidden;
      }

      /* 图片 end */

      /* 内容 start */
      &__data {
        padding: 14rpx 0rpx;
      }

      /* 标题 start */
      &__title-container {
        text-align: justify;
        line-height: 38rpx;
        vertical-align: middle;
      }

      &__title {
        font-size: 30rpx;
      }

      /* 标题 end */

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

      /* 标签 end */

      /* 内容 end */
    }
  }

}
</style>
