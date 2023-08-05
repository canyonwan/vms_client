<script setup lang="ts">
import NewGoodsItem from './components/NewGoodsItem.vue'
import GoodsWaterfall from './components/GoodsWaterfall.vue'

const searlist = [
  '凶姐精美壁纸',
  '情侣聊天背景',
  '热血动漫头像',
  '手机屏保壁纸',
]
const currentSwiperIndex = ref(0)

const waterfallList = ref([{
  title: '看月亮爬上来',
  userName: '882',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699064-assets/web-upload/17b99ae2-45d9-4399-b425-b972a7c53600.jpeg',
  userImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699098-assets/web-upload/e8b29292-72fc-4c1e-9d7c-fd9dba31cb62.jpeg',
  tags: ['头像', '校园青春'],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 338,
  },
},
{
  title: '万科神奇动物主场',
  userName: '110',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699053-assets/web-upload/8645ea3a-e0a9-4422-8364-cc5ede305c9f.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
  tags: ['壁纸', '动态壁纸'],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 289,
  },
},
{
  title: '北海世博园灯笼走廊',
  userName: '20',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015047023-assets/web-upload/147b0b7f-8253-4b92-bc1d-e28db7f54096.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
  tags: ['男生头像', '情侣头像'],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 381,
  },
},
{
  title: '浦江航拍夜上海',
  userName: '300',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015047529-assets/web-upload/af73d987-7e47-4ab9-8cc7-9ced5611552c.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 526,
  },
},
{
  title: '疫情也阻挡不了滑滑板',
  userName: '400',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1671437658295-assets/web-upload/05620a1f-452e-4a14-9d30-f6c66ee4be1c.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 526,
  },
},
{
  title: '疫情也阻挡不了滑滑板',
  userName: '500',
  mainImage: '          https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1671440476526-assets/web-upload/8179c7af-ec17-412c-b20b-877418a1abf9.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 526,
  },
},
{
  title: '2022建档百年 外滩灯光秀 与你一起',
  userName: '666',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699047-assets/web-upload/0be7773a-583d-43e4-a6af-91bcc7cc1ee1.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 372,
  },
},
{
  title: '广州纳达堡三室两厅',
  userName: '900',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664179989916-assets/web-upload/eda197eb-42ce-44b1-9b14-fce3481db603.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
  tags: ['头像', '女生头像'],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 694,
  },
},
{
  title: '冰岛极光航拍',
  userName: '899',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699094-assets/web-upload/18d2ada5-2e44-4851-9ba1-2342a5383f3d.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 508,
  },
},
{
  title: '泰山之巅',
  userName: '你的名字',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699069-assets/web-upload/20b02200-47de-4a03-8dd0-6fe8aa575e36.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 923,
  },
},
{
  title: '广州分手塔',
  userName: '图鸟东东',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699075-assets/web-upload/aaee3258-46b7-43ae-aaf2-02f3dff5f960.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 989,
  },
},
{
  title: '珠海澳门捉猪行动',
  userName: '此处凶姐承包',
  mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664015223233-assets/web-upload/1f3e6f2a-96eb-4796-818e-e94ec06d8872.jpeg',
  userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
  tags: [],
  viewUser: {
    latestUserAvatar: [
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg' },
      { src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg' },
    ],
    viewUserCount: 129,
  },
}])

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
onMounted(() => {
  getBoundingMenuButton()
})

const menuButtonWidth = ref(0)

function getBoundingMenuButton() {
  const res = uni.getStorageSync('MenuButtonInfo')
  menuButtonWidth.value = res.width
}
</script>

<template>
  <div>
    <!-- 顶部自定义导航 -->
    <tn-navbar fixed back-icon="" home-icon="" bottom-shadow bg-color="#8397C8">
      <view class="tn-round tn-gray-light_bg tn-w-full tn-ml tn-mr">
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
    <!-- 通知栏 -->
    <div class="tn-ml tn-mr">
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
    <!-- 促销胶囊 -->
    <view class="tn-pr tn-pl" style="width: 100%;">
      <image style="height: 280rpx;" src="../../../../static/imgs/xinrenli.png" />
      <!-- <tn-lazy-load height="280" src="../../../../static/imgs/xinrenli.png" mode="widthFix" /> -->
    </view>
    <div class="sale tn-m">
      <div class="tn-gradient-bg__cool-5">
        9块9
      </div>
      <div class="tn-gradient-bg__cool-6">
        打骨折
      </div>
    </div>
    <!-- 新品 -->
    <view class="tn-mt-lg">
      <view class="tn-ml tn-mr tn-mb tn-flex-center-between">
        <tn-title title="当季新品" size="xl" mode="hLine" />
        <view class="tn-type-info-light-7_text tn-flex">
          <text class="tn-type-info_text">
            查看全部
          </text>
          <tn-icon name="right" type="info" />
        </view>
      </view>
      <tn-scroll-list
        indicator-color="tn-blue"
        indicator-block-color="rgba(1, 190, 255, 0.8)"
        :indicator-width="60"
        :indicator-block-width="40"
      >
        <view class="item-container tn-pl">
          <new-goods-item
            v-for="i in 5"
            :key="i"
          >
            <view class="empty tn-grey-light_bg" />
            <view class="title">
              图鸟UI
            </view>
          </new-goods-item>
        </view>
      </tn-scroll-list>
    </view>

    <!-- 商品推荐瀑布流 -->
    <view class="tn-mt-lg">
      <view class="tn-mb tn-ml tn-mr tn-flex-center-between">
        <tn-title title="商品推荐" size="xl" mode="hLine" />
        <view class="tn-type-info-light-7_text tn-flex">
          <text class="tn-type-info_text">
            查看全部
          </text>
          <tn-icon name="right" type="info" />
        </view>
      </view>
      <goods-waterfall :data="waterfallList" />
    </view>
  </div>
</template>

<style lang="scss" scoped>
page {
  background-color: var(--tn-color-bg);
}
.sale {
  height: 300rpx;
  display: flex;
  justify-content: space-between;
  & > view {
    flex: 1;
    color: var(--tn-color-white);
  }
}
.swiper-container {
  width: 100%;

  .swiper-data {
    width: 100%;
    height: 320rpx;
    border-radius: 20rpx;
  }
}

.item-container {
  position: relative;
  width: fit-content;

  display: flex;
  flex-wrap: nowrap;

  .scroll-item {
    flex-grow: 1;
    flex-shrink: 0;
    margin: 0rpx 20rpx;

    .empty {
      width: 100rpx;
      height: 100rpx;
      border-radius: 15rpx;
    }

    .title {
      margin-top: 10rpx;
    }
  }
}
</style>
