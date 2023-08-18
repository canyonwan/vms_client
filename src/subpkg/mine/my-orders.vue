<script setup lang="ts">
import { myOrderOptions } from '@/pages/components/mine/index/options'

const subsectionValue = ref<number>(0)
// 加载订单数据
const loading = ref<boolean>(false)
// 订单数据
const orderData = ref<any[]>([1])

function onTabChanged(i: number) {
  //
}
</script>

<template>
  <view class="my-orders">
    <tn-navbar fixed home-icon="" back-icon="left" bottom-shadow bg-color="#8397C8">
      <view class="tn-round tn-gray-light_bg tn-w-full tn-ml tn-mr tn-p-xs">
        <tn-icon name="search" size="30" color="#999" />
        搜索订单
      </view>
    </tn-navbar>
    <tn-tabs v-model="subsectionValue" @change="onTabChanged">
      <tn-tabs-item v-for="item in myOrderOptions" :key="item.value" :title="item.name" />
    </tn-tabs>
    <u-loading-icon v-if="loading" :show="loading" mode="circle" text="加载中.." />
    <view v-if="!loading && orderData.length === 0" class="tn-mt-xl">
      <tn-empty
        color="tn-gray"
        mode="order"
      >
        <template #tips>
          您还没有相关订单
        </template>
      </tn-empty>
    </view>
    <scroll-view v-else scroll-y>
      <view class="tn-m-sm tn-p-sm tn-radius tn-white_bg">
        <view class="tn-flex-center-between">
          <view class="tn-flex items-center tn-mb-xs">
            <tn-icon name="commissary-fill" class="tn-mr-xs" />
            <tn-title title="河北生化有限公司" size="lg" />
          </view>
          <view class="tn-gray_text">
            交易完成
          </view>
        </view>
        <!-- 商品信息 -->
        <view class="tn-flex-center-between">
          <view class="item__image tn-radius">
            <tn-lazy-load
              width="200" height="200" src="https://file.canyonwan.top/57012f01b7a2ddd5.jpg" mode="widthFix"
            />
          </view>
          <view class="tn-flex-column tn-flex-stretch-start tn-ml" style="height: 100px;">
            <view class="tn-flex">
              <view class="tn-flex-grow tn-text-ellipsis-1">
                阿阿维菌素溶液阿维菌素溶液阿维菌素溶液维菌素溶液
              </view>
              <view class="tn-black_text tn-flex tn-flex-col-center items-end">
                <view>
                  <text class="tn-text-xs">
                    ¥
                  </text>
                </view>
                <view>
                  <text class="tn-text tn-text-bold ">
                    {{ 200 }}
                  </text>
                </view>
              </view>
            </view>
            <view class="tn-flex-center-between tn-mt-xs">
              <view class="tn-gray_text tn-text-xs">
                一件装共4盒
              </view>
              <view class="tn-gray_text tn-text-xs">
                x1
              </view>
            </view>
          </view>
        </view>
        <!-- 物流状态 -->
        <view class="tn-mt tn-mb tn-gray-light_bg tn-p-xs tn-text-ellipsis-1">
          <tn-icon name="trusty-fill" color="tn-black" />
          <text class="tn-text-bold tn-black_text">
            已签收
          </text>
          <text class="tn-gray_text">
            【保定市】您的快递已签收，签收人是【本人】
          </text>
        </view>
        <!-- 实付款 -->
        <view class="tn-flex-center-end tn-mb">
          <view class="tn-mr-xs tn-gray_text">
            含运费险服务
          </view>
          <view class="tn-mr-xs tn-text-bold">
            实付款
          </view>
          <view class="tn-black_text tn-flex tn-flex-col-center items-end">
            <text class="tn-text-xl tn-text-bold">
              ¥{{ 200 }}
            </text>
          </view>
        </view>
        <view class="tn-flex-center-end">
          <view class="tn-mr-xs tn-border tn-p-xs tn-radius tn-gray_border">
            删除订单
          </view>
          <view class="tn-mr-xs tn-border tn-p-xs tn-radius tn-gray_border">
            去评价
          </view>
          <view class="tn-mr-xs tn-border tn-p-xs tn-radius  tn-blue_text tn-blue_border">
            再次购买
          </view>
        </view>
        <!-- 删除订单 & 再次购买 & 加入到购物车 -->
      </view>
    </scroll-view>
  </view>
</template>

<style scoped lang="scss">
// .my-orders{

// }
</style>
