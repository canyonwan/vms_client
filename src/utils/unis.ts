// uni原生方法封装

export async function toPath(path: string) {
  return await uni.navigateTo({
    url: `/subpkg/${path}`,
  })
}

export async function switchTab(url: string) {
  await uni.switchTab({ url: `/pages/${url}/index` })
}

export async function showToast(text: string) {
  await uni.showToast({ title: text, icon: 'none', mask: true })
}
export async function showLoading(text = '', mask = true) {
  await uni.showLoading({ title: text, mask })
}
export function hideLoading(text?: string, mask = true) {
  uni.hideLoading()
}
