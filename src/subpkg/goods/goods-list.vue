<script setup lang="ts">
import GoodsWaterfall from '@/pages/components/home/index/components/GoodsWaterfall.vue'

const props = defineProps({
  waterfallList: {
    type: Array,
    default: () => [],
  },
  cateId: {
    type: Number,
    default: 0,
  },
})

onMounted(() => {
  console.log('onLoad', props.cateId)
})

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
</script>

<template>
  <div class="goods-list">
    <!-- 顶部自定义导航 -->
    <tn-navbar fixed bottom-shadow bg-color="#8397C8">
      当季新品
    </tn-navbar>
    <view class="tn-mt">
      <goods-waterfall :data="waterfallList" />
    </view>
  </div>
</template>

<style scoped lang="scss">
.goods-list{

}
</style>
