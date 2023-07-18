<script setup lang="ts">
const searlist = [
  '凶姐精美壁纸',
  '情侣聊天背景',
  '热血动漫头像',
  '手机屏保壁纸',
]
const currentSwiperIndex = ref(0)

// 轮播图数据
const swiperData = [
  'https://resource.tuniaokj.com/images/xiongjie/x14.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-2.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new1.png',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d.jpg',
]

function onSearch() {
  //
}
</script>

<template>
  <div>
    <!-- 顶部自定义导航 -->
    <tn-navbar fixed frosted back-icon="" home-icon="" :bottom-shadow="false" bg-color="rgba(135, 150, 196, 1)">
      <!-- 搜索框 -->
      <view class="tn-round tn-white_bg tn-w-11-12">
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
    <!-- 轮播图 -->
    <div class="swiper-container tn-p">
      <tn-swiper
        v-model="currentSwiperIndex"
        :data="swiperData"
        width="100%"
        height="320"
        indicator
        indicator-type="dot"
        autoplay
      >
        <template #default="{ data }">
          <view class="swiper-data">
            <image :src="data" mode="aspectFill" />
          </view>
        </template>
      </tn-swiper>
    </div>
    <div class="tn-mt-lg">
      <tn-notice-bar
        auto-hidden
        :data="searlist"
        left-icon="sound"
        left-icon-color="tn-grey"
        text-color="tn-grey"
        right-icon="right"
        @click="onSearch"
      />
    </div>

    <view class="tn-mt-lg" style="width: 100%;">
      <image style="height: 240rpx;" src="../../../../static/imgs/xinrenli.png" />
    </view>
  </div>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 320rpx;

  .swiper-data {
    width: 100%;
    height: 320rpx;
    border-radius: 20rpx;
  }
}
</style>
