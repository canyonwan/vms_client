<script setup lang="ts">
import { useGetRect } from '@/hooks'

const tabbar = [
  '推荐',
  '旅行',
  '简约',
  '美食',
  '唯美',
  '卡通',
  '动漫',
  '可爱',
  '风景',
  '手绘',
  '萌宠',
  '星空',
  '文艺',
  '趣味',
  '商务',
  '清新',
  '明星',
  '沙滩',
  '夜晚',
  '夕阳',
  '浪漫',
  '春天',
  '月亮',
  '其他',
]
const currentTabbarIndex = ref(0)
const leftScrollViewTop = ref(0)
const rightScrollViewTop = ref(0)
// scrollView的top值
const scrollViewBasicTop = ref(0)
// scrollView的高度
const scrollViewHeight = ref(0)

const tabbarItemClass = computed(() => {
  return (index) => {
    if (index === currentTabbarIndex.value) {
      return 'tn-classify__tabbar__item--active tn-bg-white'
    }
    else {
      let className = 'tn-bg-gray--light'
      if (currentTabbarIndex.value > 0 && index === currentTabbarIndex.value - 1)
        className += ' tn-classify__tabbar__item--active--prev'

      if (currentTabbarIndex.value < tabbar.length && index === currentTabbarIndex.value + 1)
        className += ' tn-classify__tabbar__item--active--next'

      return className
    }
  }
})

// 点击了分类导航
function clickClassifyNav(index) {
  if (currentTabbarIndex.value === index)
    return
  currentTabbarIndex.value = index
  // handleLeftScrollView(index)
  switchClassifyContent()
}
// 点击分类后，处理scrollView滚动到居中位置
// function handleLeftScrollView(index) {
//   const tabbarItemTop = tabbarItemInfo[index].top - scrollViewBasicTop
//   if (tabbarItemTop > scrollViewHeight / 2)
//     leftScrollViewTop = tabbarItemTop - (scrollViewHeight / 2) + tabbarItemInfo[index].height

//   else
//     leftScrollViewTop = 0
// }
// 切换对应分类的数据
function switchClassifyContent() {
  rightScrollViewTop.value = 1
  nextTick(() => {
    rightScrollViewTop.value = 0
  })
  // classifyContent.subClassify[0].title = tabbar[currentTabbarIndex.value]
}

onMounted(() => {
  nextTick(() => {
    getScrollViewInfo()
  })
})

// 获取scrollView的高度信息
function getScrollViewInfo() {
  // 获取搜索栏的bottom信息，然后用整个屏幕的可用高度减去bottom的值即可获取scrollView的高度(防止双重滚动)
  useGetRect('.tn-classify__search--wrap').then((rect) => {
    // 如果获取失败重新获取
    if (!rect) {
      setTimeout(() => {
        getScrollViewInfo()
      }, 10)
      return
    }
    // 获取当前屏幕的可用高度
    const systemInfo = uni.getSystemInfoSync()
    scrollViewBasicTop.value = systemInfo.statusBarHeight! + (rect as UniApp.NodeInfo).bottom! + uni.upx2px(10)
    scrollViewHeight.value = systemInfo.safeArea!.height + systemInfo.statusBarHeight! - (rect as UniApp.NodeInfo).bottom! - uni.upx2px(10) - 49
  })
}
</script>

<template>
  <!-- 左边容器 -->
  <scroll-view class="tn-classify__left-box left-width" :scroll-top="leftScrollViewTop" scroll-y scroll-with-animation :style="{ height: `${scrollViewHeight}px` }">
    <view
      v-for="(item, index) in tabbar"
      :id="`tabbar_item_${index}`"
      :key="index"
      class="tn-classify__tabbar__item tn-flex tn-flex-col-center tn-flex-row-center"
      :class="[tabbarItemClass(index)]"
      @tap.stop="clickClassifyNav(index)"
    >
      <view class="tn-classify__tabbar__item__title">
        {{ item }}
      </view>
    </view>
  </scroll-view>
</template>

<style scoped lang="scss">
  .left-width {
    flex-basis: 28%;
  }
  .tn-classify {
    &__right-box {
      background-color: #FFFFFF;
    }
    &__tabbar {
      &__item {
        height: 110rpx;

        &:first-child {
          border-top-right-radius: 0rpx;
        }

        &:last-child {
          border-bottom-right-radius: 0rpx;
        }
        &--active {
          background-color: #FFFFFF;
          position: relative;
          color: #3668FC;

          &::before {
            content: '';
            position: absolute;
            width: 12rpx;
            height: 40rpx;
            top: 50%;
            left: 0;
            background-color: #3668FC;
            border-radius: 12rpx;
            transform: translateY(-50%) translateX(-50%);
          }

          &--prev {
            border-bottom-right-radius: 26rpx;
          }

          &--next {
            border-top-right-radius: 26rpx;
          }
        }
      }
    }
  }
</style>
