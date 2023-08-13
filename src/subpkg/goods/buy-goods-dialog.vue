<script setup lang="ts">
import { useGetRect } from '@/hooks'

const props = defineProps<{
  dialogHeight: number
}>()
const count = ref<number>(0)
const scrollHeight = ref<number>(0)
const selectPayment = ref<number>(1)

getBottomBoxHeight()

async function getBottomBoxHeight() {
  const bottomBoxRect = await useGetRect('.bottom-box') as UniApp.NodeInfo
  scrollHeight.value = props.dialogHeight - bottomBoxRect.height!
  // bottomBoxRectHeight.value = `${bottomBoxRect.height}px`
}

const currentLayout = ref(false)
function toggleLayout() {
  currentLayout.value = !currentLayout.value
}
</script>

<template>
  <view class="buy-goods-dialog tn-mt-xl">
    <view style="height: 100vh" class="tn-m-sm">
      <scroll-view scroll-anchoring scroll-with-animation scroll-y>
        <!-- 收货地址 -->
        <tn-sticky>
          <view class="tn-white_bg tn-radius tn-p-sm tn-flex-center-between">
            <!-- <tn-icon name="share" /> -->
            <image src="/static/icons/address_icon.png" style="height: 30px; width: 40px;" />
            <view class="tn-ml tn-mr">
              <view class="tn-mb-xs tn-text tn-text-bold tn-text-ellipsis-2">
                万猛 康明北大街573号欧韵新城六号楼三单元17层
              </view>
              <view class="tn-text-sm">
                包邮 送运费险 现货，付款后48小时内发货
              </view>
            </view>
            <tn-icon name="right" color="tn-gray" />
          </view>
        </tn-sticky>

        <view class="tn-white_bg tn-radius tn-p-sm tn-mt-sm">
          <!-- 颜色分类（ -->
          <view class="tn-flex justify-between tn-mb">
            <tn-title :title="`颜色分类（${2}）`" />
            <tn-icon :name="currentLayout ? 'align' : 'group-square' " @click="toggleLayout" />
          </view>
          <view class="sku-box">
            <view v-for="item in 6" :key="item">
              <view>
                <view class="tn-radius">
                  <tn-lazy-load
                    src="https://file.canyonwan.top/57012f01b7a2ddd5.jpg" height="200rpx"
                    class="tn-mr-xs"
                  />
                </view>
                <view class="tn-text-ellipsis-2 tn-gray-light_bg tn-black_text tn-text-xs tn-p-xs tn-radius">
                  绛紫橙-礼盒*1+手胶*2+布套*1
                </view>
              </view>
            </view>
          </view>
          <!-- 数量 -->
          <tn-list-item right-icon="" :custom-style="{ padding: '30rpx 0 0 0' }">
            <view class="tn-flex-center-between">
              <view class="tn-mr-xs">
                数量
              </view>
              <tn-number-box v-model="count" :min="1" :max="10" />
            </view>
          </tn-list-item>
          <!-- 订单备注 -->
          <tn-list-item right-icon="" :custom-style="{ padding: '30rpx 0 0 0' }">
            <view class="tn-flex-center-between">
              <view class="tn-mr-xs">
                订单备注
              </view>
              <view>
                <text class="tn-gray_text tn-pr-xs">
                  无备注
                </text>
                <tn-icon name="right" type="info" />
              </view>
            </view>
          </tn-list-item>
        </view>
        <!-- 支付方式 -->
        <view class="tn-white_bg tn-radius tn-p-sm tn-mt-sm">
          <tn-list-item right-icon="right" :custom-style="{ padding: '0 0 0 0' }">
            <view class="tn-flex-center-between">
              <view class="tn-flex-center-between">
                <tn-icon name="payment-wechat" color="#64D978" size="40" />
                <text class="tn-text-bold tn-pl-sm">
                  微信支付
                </text>
              </view>
              <tn-checkbox v-model="selectPayment" checked-shape="circle" :active-value="1" />
            </view>
          </tn-list-item>
        </view>
      </scroll-view>
    </view>
    <!-- 立即支付 -->
    <view class="bottom-box">
      <view class="tn-ml tn-mr tn-mt tn-flex-center-between">
        <view class="tn-flex items-center">
          <tn-icon name="coupon-fill" />
          <view class="tn-ml-xs">
            <view>
              <text class="tn-text-bold">
                小计
              </text>
              <text class="tn-text-bold">
                ¥ 335，
              </text>
            </view>
            <view>
              <text class="tn-text-bold tn-red_text">
                共减
              </text>
              <text class="tn-text-bold tn-red_text">
                ¥ 335
              </text>
            </view>
          </view>
        </view>
        <tn-icon name="up" color="tn-red" />
      </view>
      <view class="tn-flex-center-center tn-pt-sm tn-pb-sm tn-white_text tn-round tn-m tn-gradient-bg__cool-15">
        立即支付 ¥ 335
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.buy-goods-dialog{
  .sku-box {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12rpx;
  }
  .bottom-box {
    position: fixed;
    bottom: 0;
    padding-bottom: calc(0rpx + env(safe-area-inset-bottom));
    // left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
    z-index: 999;

  }
}
</style>
