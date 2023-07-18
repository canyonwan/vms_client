import { useUserStore } from '@/store/modules/userInfo'

export function cleanStorage() {
  const userStore = useUserStore()
  uni.showToast({
    title: '你的登录状态已过期，请重新登录',
    icon: 'none',
    duration: 1500,
  })
  userStore.storeLogout()
  uni.hideLoading()

  debounce(() => {
    uni.navigateTo({
      url: '/subpkg/auth/login',
    })
  }, 100)
}

/**
 * @desc 函数防抖
 * @param fnName 函数
 * @param time 延迟执行毫秒数 写一个防抖
 */

let timer: any = null
export function debounce(func, wait = 500) {
  // 清除定时器
  if (timer !== null)
    clearTimeout(timer)
  // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
  timer = setTimeout(() => {
    typeof func === 'function' && func()
  }, wait)
}

export function back() {
  if (getCurrentPages().length === 1) {
    uni.switchTab({
      url: '/pages/home/index',
    })
  }
  else {
    uni.navigateBack()
  }
}

// 直接返回到首页
export function backHome() {
  uni.switchTab({
    url: '/pages/home/index',
  })
}

// 写一个金额分转元的函数
export function fenToYuan(value: number): string {
  return (value / 100).toFixed(2)
}

// 金额格式化
export function formatMoney(value: number): string {
  const num = parseFloat(value).toFixed(2) // 将数字转化为字符串，并保留两位小数
  const str = num.toString().split('.')
  let integer = str[0]
  const decimal = str[1]
  let result = ''
  while (integer.length > 3) {
    result = `,${integer.slice(-3)}${result}`
    integer = integer.slice(0, integer.length - 3)
  }
  if (integer)
    result = integer + result

  return `${result}.${decimal}`
}

// 金额变动动画
export function moneyAnimation(from: number, to: number, duration = 1000, onProgress: (value: number) => void) {
  const dis = to - from
  const speed = dis / duration
  const startTime = Date.now()
  let value = from // 当前值
  onProgress(value)

  function _run() {
    const now = Date.now()
    const t = now - startTime
    if (t >= duration) {
      onProgress(value)
      return
    }
    const d = t * speed
    value = from + d
    onProgress(value)
    requestAnimationFrame(_run)
  }
  requestAnimationFrame(_run)
}
