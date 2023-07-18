// uni原生方法封装

export function toPath(url: string) {
  uni.navigateTo({
    url: `/subpkg/${url}`,
  })
}

export function switchTab(url: string) {
  uni.switchTab({ url: `/pages/${url}/index` })
}

export function showToast(text: string) {
  uni.showToast({ title: text, icon: 'none', mask: true })
}
export function showLoading(text = '', mask = true) {
  uni.showLoading({ title: text, mask })
}
export function hideLoading(text?: string, mask = true) {
  uni.hideLoading()
}
