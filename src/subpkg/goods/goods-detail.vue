<script setup lang="ts">
import TnGraphicCard from 'tnuiv3p-tn-graphic-card/index.vue'
import BuyGoodsDialog from './buy-goods-dialog.vue'
import { useGetRect } from '@/hooks'

const navbarHeightStyle = ref('')
const bottomBoxRectHeight = ref('')
const navBarBackgroundColor = ref('rgba(255, 255, 255, 0)')
const navBarStyle2 = reactive({
  color: 'rgba(255,255,255,0)',
  opacity: 1,
  display: 'flex',
})
const tabBarHeight = ref(0)
const windowHeight = ref(0)
const navbarHeight = ref(0)
const showSkuPopup = ref(false)
const currentSwiperIndex = ref(0)

const graphicData = reactive({
  id: 1,
  avatar: 'https://tnuiimage.tnkjapp.com/uniapp_market/circle/3-image.jpg',
  title: '文章标题',
  description: '2023年6月30日',
  tags: ['标签1', '标签2'],
  content:
    '看看打开打开年份记得当年开始放假哦额外欺骗人u饿哦漂亮放佛怕打雷舒服呢我脾气破费了发多少呢；否，可能打飞机哦喷泉哦怕可能地方打开螺丝粉年份的肌肤看能否。',
  images: [
    'https://tnuiimage.tnkjapp.com/swiper/ad1.jpg',
    'https://tnuiimage.tnkjapp.com/swiper/ad2.jpg',
    'https://tnuiimage.tnkjapp.com/swiper/ad3.jpg',
    'https://tnuiimage.tnkjapp.com/swiper/ad4.jpg',
  ],
  viewCount: 100,
  commentCount: 101,
  likeCount: 102,
  viewUserAvatars: [
    'https://tnuiimage.tnkjapp.com/avatar/normal/1.png',
    'https://tnuiimage.tnkjapp.com/avatar/normal/2.png',
    'https://tnuiimage.tnkjapp.com/avatar/normal/3.png',
    'https://tnuiimage.tnkjapp.com/avatar/normal/4.png',
    'https://tnuiimage.tnkjapp.com/avatar/normal/5.png',
    'https://tnuiimage.tnkjapp.com/avatar/normal/6.png',
    'https://tnuiimage.tnkjapp.com/avatar/normal/7.png',
    'https://tnuiimage.tnkjapp.com/avatar/normal/8.png',
  ],
})

// 轮播图数据
const swiperData = [
  'https://resource.tuniaokj.com/images/xiongjie/x14.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-2.jpg',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d-new1.png',
  'https://resource.tuniaokj.com/images/xiongjie/xiong-3d.jpg',
]

onMounted(() => {
  getNavbarHeight()
  getBottomBoxHeight()
  tabBarHeight.value = uni.getStorageSync('tabBarHeight')
})

uni.getSystemInfo({
  success: (res) => {
    windowHeight.value = res.windowHeight
  },
})

function onOpenSku() {
  showSkuPopup.value = true
}

async function getNavbarHeight() {
  // const bottomBoxRect = await useGetRect('.bottom-box') as UniApp.NodeInfo
  const rect = await useGetRect('#navbar') as UniApp.NodeInfo
  navbarHeightStyle.value = `-${rect.height}px`
  navbarHeight.value = rect.height!
  // bottomBoxRectHeight.value = `${bottomBoxRect.height}px`
}
async function getBottomBoxHeight() {
  const bottomBoxRect = await useGetRect('.bottom-box') as UniApp.NodeInfo
  bottomBoxRectHeight.value = `${bottomBoxRect.height}px`
}
</script>

<template>
  <view class="goods-detail tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-navbar id="navbar" fixed custom-back :bottom-shadow="false" :bg-color="navBarBackgroundColor">
      <view class="tn-flex tn-flex-col-center tn-flex-row-center" :style="navBarStyle2">
        <view class="tn-text-bold tn-text-xl">
          商品详情
        </view>
      </view>
    </tn-navbar>
    <!-- 轮播图 -->
    <view class="swiper-container">
      <tn-swiper
        v-model="currentSwiperIndex" :data="swiperData" width="100%" height="720rpx" indicator
        indicator-type="dot" autoplay
      >
        <template #default="{ data }">
          <view class="swiper-data">
            <image :src="data" mode="aspectFill" />
          </view>
        </template>
      </tn-swiper>
    </view>
    <!-- 商品价格 -->
    <view class="tn-m-sm tn-p-sm tn-radius tn-white_bg">
      <view class="tn-flex-center-between tn-mb-sm">
        <view class="tn-red_text tn-flex tn-flex-col-center items-end">
          <text class="tn-text-xs tn-pr-xs">
            限时价
          </text>
          <view>
            <text class="tn-text-xs">
              ¥
            </text>
          </view>
          <view>
            <text class="tn-text-xl tn-text-bold">
              899
            </text>
            <text class="tn-text-xs">
              起
            </text>
          </view>
        </view>
        <view class="tn-text-xs tn-gray_text">
          已售 1000
        </view>
      </view>
      <view class="tn-text-sm tn-text-ellipsis-2 tn-text-bold tn-text-gray-500 tn-mb-sm">
        飞鹤星飞帆卓睿 幼儿配方奶粉 3段(12-36个月幼儿适用)300克 乳铁蛋白
      </view>
    </view>
    <!-- 服务 -->
    <view class="tn-m-sm tn-p-sm  tn-radius tn-white_bg">
      <tn-list-item right-icon="right" :custom-style="{ padding: '0 0 20rpx 0' }">
        <view class="tn-flex">
          <view class="tn-mr-xs tn-text-xs tn-gray_text">
            保障
          </view>
          <view class="tn-ml-xs tn-text-xs">
            7天无理由退货
            <text class="tn-gray_text">
              •
            </text>
            运费险
            <text class="tn-gray_text">
              •
            </text>
            坏损包退
          </view>
        </view>
      </tn-list-item>
      <tn-list-item right-icon="right" :custom-style="{ padding: '0 0 20rpx 0' }">
        <view class="tn-flex">
          <view class="tn-mr-xs tn-text-xs tn-gray_text">
            选择
          </view>
          <view class="tn-ml-xs tn-text-xs">
            7天无理由退货运费险 坏损包退
          </view>
        </view>
      </tn-list-item>
      <tn-list-item right-icon="right" :custom-style="{ padding: '0 0 20rpx 0' }">
        <view class="tn-flex">
          <view class="tn-mr-xs tn-text-xs tn-gray_text">
            活动
          </view>
          <view class="tn-ml-xs tn-text-xs">
            暂无活动
          </view>
        </view>
      </tn-list-item>
      <tn-list-item right-icon="right" :custom-style="{ padding: '0' }">
        <view class="tn-flex">
          <view class="tn-mr-xs tn-text-xs tn-gray_text">
            物流
          </view>
          <view class="tn-ml-xs tn-text-xs">
            预计16小时内从河南省郑州市发出，包邮
          </view>
        </view>
      </tn-list-item>
    </view>
    <!-- 商品评价 -->
    <view class="tn-m-sm tn-radius tn-white_bg">
      <!-- 标题 -->
      <view class="tn-pl-sm tn-pr-sm tn-pt-sm tn-flex-center-between">
        <tn-title :title="`商品评价（${1986}）`" />
        <view class="tn-gray_text tn-flex">
          更多
          <tn-icon name="right" type="info" />
        </view>
      </view>
      <!-- 图文 -->
      <tn-graphic-card
        :avatar="graphicData.avatar" :title="graphicData.title" :description="graphicData.description"
        :tags="graphicData.tags" :content="graphicData.content" :images="graphicData.images"
        :view-count="graphicData.viewCount" :comment-count="graphicData.commentCount"
        :like-count="graphicData.likeCount" :view-user-avatars="graphicData.viewUserAvatars"
      />
    </view>
    <view class="tn-tabbar-height" />
    <view class="bottom-box tn-p-sm tn-flex">
      <view class="tn-flex">
        <view class="tn-flex tn-flex-column items-center">
          <tn-icon color="tn-gray-dark" size="40" name="service-simple" />
          <view class="tn-gray-dark_text">
            客服
          </view>
        </view>
        <view class="tn-flex tn-flex-column items-center tn-ml tn-mr">
          <tn-icon color="tn-gray-dark" size="40" name="cart" />
          <view class="tn-gray-dark_text">
            购物车
          </view>
        </view>
      </view>
      <view class="tn-flex tn-flex-grow tn-gradient-bg__cool-1 tn-radius">
        <view class="tn-gradient-bg__cool-5 tn-flex-center-center tn-white_text radius  tn-flex-1" @click="onOpenSku">
          加入购物车
        </view>
        <view class="tn-gradient-bg__cool-5 tn-flex-center-center tn-white_text right-radius  tn-flex-1">
          立即购买
        </view>
      </view>
    </view>
    <!-- 弹窗 -->
    <tn-popup v-model="showSkuPopup" bg-color="#F7F7F9" close-btn open-direction="bottom" :height="`${windowHeight - navbarHeight}px`">
      <buy-goods-dialog />
      <template #closeBtn>
        <tn-icon name="close" />
      </template>
    </tn-popup>
  </view>
</template>

<style scoped lang="scss">
.goods-detail {
  .tn-tabbar-height {
    min-height: 40rpx;
    height: v-bind('bottomBoxRectHeight');
    // height: calc(40rpx + env(safe-area-inset-bottom) / 2);
    // height: calc(40rpx + constant(safe-area-inset-bottom));
  }

  .swiper-container {
    position: relative;
    z-index: 1;
    margin-top: v-bind('navbarHeightStyle');

    // background-image: linear-gradient(rgba(255, 255, 255, 0.01), rgba(0, 0, 0, 0.4));
    .swiper-data {
      width: 100%;
      height: 720rpx;
      border-radius: 20rpx;
    }

  }

  .bottom-box {
    position: fixed;
    bottom: 0;
    padding-bottom: calc(0rpx + env(safe-area-inset-bottom));
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
    z-index: 999;

    .radius {
      border-start-start-radius: 14rpx;
      border-bottom-left-radius: 14rpx;
    }

    .right-radius {
      border-bottom-right-radius: 14rpx;
      border-top-right-radius: 14rpx;
    }
  }

  /* 胶囊*/
  .tn-custom-nav-bar__back {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 1000rpx;
    border: 1rpx solid rgba(255, 255, 255, 0.5);
    font-size: 18px;

    .icon {
      display: block;
      flex: 1;
      margin: auto;
      text-align: center;
    }

    &:before {
      content: " ";
      width: 1rpx;
      height: 110%;
      position: absolute;
      top: 22.5%;
      left: 0;
      right: 0;
      margin: auto;
      transform: scale(0.5);
      transform-origin: 0 0;
      pointer-events: none;
      box-sizing: border-box;
      opacity: 0.05;
      background-color: #000000;
    }
  }

}
</style>
