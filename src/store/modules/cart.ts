import { addCart, calcTotalPrice, deleteCart, queryCartPage, updateCart, updateCartSku } from '@/api/cart/cart'
import type { IAddCartReq, ICartItemResp, ICartTotalPriceResp } from '@/api/cart/types'
import { debounce } from '@/utils/shared'
import { hideLoading, showLoading, showToast } from '@/utils/unis'

export const useCartStore = defineStore('app-cart-store', () => {
  const isAllCheckedThisShop = ref(false) // 全选当前店铺下的
  const loadingCalcPrice = ref(false) // 计算价格loading
  const isAllCheckedBottom = ref(false) // 全选底部
  const selectedCarts = ref<ICartItemResp[]>([])
  const pageLoading = ref(true)
  const cartTotal = ref(0)
  // const cartList = ref<ICartItemResp[]>(uni.getStorageSync(CART_LIST) as ICartItemResp[] || [])
  const cartList = ref<ICartItemResp[]>([])
  const loadMoreStatus = ref('more') // loading, more, no-more
  const totalPriceAndFreight = ref<ICartTotalPriceResp>({
    totalPrice: 0,
    freight: 0,
    actualPrice: 0,
    couponPrice: 0,
  })
  const searchParams = reactive({
    page: 1,
    size: 10,
  })

  // 初始化购物车列表 如果内存中有数据，就不请求接口
  function setCartList() {
    // uni.setStorageSync(CART_LIST, cartList.value)
  }

  async function getCartPage(getScrollHeight: () => void) {
    // if (cartList.value.length === 0) {
    pageLoading.value = true
    const { data } = await queryCartPage(unref(searchParams))
    searchParams.page = data.page
    searchParams.size = data.size
    cartTotal.value = data.total

    if (data.content && data.content.length > 0)
      cartList.value.push(...data.content)
    if (cartTotal.value === cartList.value.length)
      loadMoreStatus.value = 'no-more'
    else
      loadMoreStatus.value = 'more'
    // setCartList()
    pageLoading.value = false
    // }

    await onCalcTotalPrice()
    // pageLoading.value = false

    await nextTick(() => {
      getScrollHeight()
    })
  }

  // 加入购物车和删除一个购物车都需要刷新购物车列表
  async function refreshCarts() {
    cartList.value = []
    selectedCarts.value = []

    const { data } = await queryCartPage(unref(searchParams))
    cartTotal.value = data.total
    if (data.content && data.content.length > 0)
      cartList.value.push(...data.content)
    if (cartTotal.value === cartList.value.length)
      loadMoreStatus.value = 'no-more'
    else
      loadMoreStatus.value = 'more'
    // setCartList()
    // 在cartList中找到被选中的商品，添加到selectedCarts中
    cartList.value.findIndex((i: ICartItemResp) => i.isChecked === 1 && pushToCarts(i))
    // setCartList()
    await onCalcTotalPrice()
  }

  function onUpdateCart(params: IAddCartReq) {
    return new Promise((resolve, reject) => {
      debounce(async () => {
        await updateCart(params)
        const res = await onCalcTotalPrice()
        // updateCartFromStorage(params)
        // await refreshCarts()
        resolve(res)
      }, 1000)
    })
  }

  async function onUpdateCartSku(params: IAddCartReq) {
    await updateCartSku(params)
    // onCalcTotalPrice()
    // updateCartFromStorage(params)
    // await refreshCarts()
    params.goodsSkuId && await refreshCarts()
  }

  // 从缓存中找到goodsId和goodsSkuId相同的商品，更新数量
  function updateCartFromStorage(params: IAddCartReq) {
    let index = -1
    if (params.goodsSkuId)
      index = cartList.value.findIndex(i => i.goodsId === params.goodsId && i.goodsSkuId === params.goodsSkuId)

    else
      index = cartList.value.findIndex(i => i.goodsId === params.goodsId)

    if (index > -1) {
      if (params.count !== 0)
        cartList.value[index].count = params.count

      else if (params.isChecked !== 0)
        cartList.value[index].isChecked = params.isChecked || 0

      else if (params.goodsSkuId !== 0)
        cartList.value[index].goodsSkuId = params.goodsSkuId!

      setCartList()
    }
  }

  // 从缓存中找到和goodsId相同的商品，更新sku
  function updateCartSkuFromStorage(params: IAddCartReq) {
    const index = cartList.value.findIndex(i => i.goodsId === params.goodsId)
    if (index > -1) {
      cartList.value[index].goodsSkuId = params.goodsSkuId!
      setCartList()
    }
  }

  // getSelectedCartsFromStorage()
  // 从缓存中找到被选中的商品,添加到selectedCarts中
  // function getSelectedCartsFromStorage() {
  //   cartList.value.findIndex((i: ICartItemResp) => i.isChecked === 1 && pushToCarts(i))
  // }

  function onCalcTotalPrice() {
    return new Promise((resolve, reject) => {
      loadingCalcPrice.value = true
      debounce(async () => {
        if (selectedCarts.value.length > 0) {
          const res = await calcTotalPrice(selectedCarts.value.filter(i => i.isChecked).map(i => i.id))
          if ('code' in res && res.code === 200) {
            totalPriceAndFreight.value.freight = res.data.freight
            totalPriceAndFreight.value.totalPrice = res.data.totalPrice
            totalPriceAndFreight.value.actualPrice = res.data.actualPrice
            totalPriceAndFreight.value.couponPrice = res.data.couponPrice
            resolve(true)
          }
          // Object.assign(totalPriceAndFreight, res.data)
        }
        else if (selectedCarts.value.length === 0) {
          // TODO 这里可能有问题
          totalPriceAndFreight.value.freight = 0
          totalPriceAndFreight.value.totalPrice = 0
        }

        loadingCalcPrice.value = false
      }, 300)
    })
  }

  // 加入购物车
  async function addToCart(params: IAddCartReq): Promise<boolean> {
    // 加入购物车前还要判断购物车里是否已经有这个商品并且这个商品数量是否大于库存
    const i = cartList.value.findIndex((i: ICartItemResp) => {
      if (params.goodsSkuId)
        return i.goodsId === params.goodsId && i.goodsSkuId === params.goodsSkuId

      else
        return i.goodsId === params.goodsId
    })
    if (i > -1) {
      if (params.goodsSkuId) {
        if (cartList.value[i].goodsSkuId === params.goodsSkuId) {
          if (params.count > cartList.value[i].goodsSkuInfo.stock!) {
            showToast('库存不足')
            return false
          }
          else {
            params.count = cartList.value[i].count + params.count
            params.id = cartList.value[i].id
          }
        }
        // else {
        //   params.count = params.count || 1
        // }
      }
      else {
        if (params.count > cartList.value[i].goodsInfo.stock) {
          showToast('库存不足')
          return false
        }
        // else {
        //   params.count = cartList.value[i].count + params.count
        //   params.id = cartList.value[i].id
        // }
      }
    }
    showLoading()
    const res = await addCart({
      goodsId: params.goodsId,
      goodsSkuId: params.goodsSkuId,
      count: params.count || 1,
      isChecked: 1,
    })
    if ('code' in res && res.code === 200) {
      hideLoading()
      await refreshCarts()
      showToast('添加成功')
      return true
    }
    return false
  }

  // 删除购物车
  async function deleteCarts(ids: number[]) {
    showLoading('删除中...')
    const res = await deleteCart(ids)
    if ('code' in res && res.code === 200) {
      selectedCarts.value.filter(i => ids.includes(i.id)).forEach((i) => {
        selectedCarts.value.splice(selectedCarts.value.findIndex(j => j.id === i.id), 1)
      },
      )
    }
    uni.hideLoading()
    await refreshCarts()
    hideLoading()
  }

  function pushToCarts(item: ICartItemResp) {
    if (item.isChecked) {
      !selectedCarts.value.includes(item) && selectedCarts.value.push(item)
    }
    else {
      selectedCarts.value.includes(item)
        && selectedCarts.value.splice(selectedCarts.value.findIndex(i => i.id === item.id), 1)
    }
  }

  async function onCheckedAllThisShop() {
    isAllCheckedThisShop.value = !isAllCheckedThisShop.value
    cartList.value.forEach((item) => {
      item.isChecked = isAllCheckedThisShop.value ? 1 : 0
      pushToCarts(item)
    })
    await onCalcTotalPrice()
  }

  async function onCheckedAllBottom() {
    isAllCheckedBottom.value = !isAllCheckedBottom.value
    await onCheckedAllThisShop()
  }

  return {
    addToCart,
    onUpdateCartSku,
    onCalcTotalPrice,
    onUpdateCart,
    deleteCarts,
    pushToCarts,
    onCheckedAllThisShop,
    onCheckedAllBottom,
    getCartPage,
    loadingCalcPrice,
    isAllCheckedThisShop,
    isAllCheckedBottom,
    selectedCarts,
    cartList,
    totalPriceAndFreight,
    cartTotal,
    searchParams,
    pageLoading,
    loadMoreStatus,
  }
})
