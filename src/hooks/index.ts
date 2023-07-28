import type { ComponentInternalInstance } from 'vue'
import type { GlobConfig } from '@/types/config'
import { warn } from '@/utils/log'
import { getAppEnvConfig } from '@/utils/env'
import { useUserStore } from '@/store/modules/userInfo'
import type { IMenuButtonInfo } from '@/types/common'

export function useGlobSetting(): Readonly<GlobConfig> {
  const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL, VITE_GLOB_APP_SHORT_NAME, VITE_GLOB_API_URL_PREFIX, VITE_GLOB_UPLOAD_URL, VITE_GLOB_IMG_URL } = getAppEnvConfig()

  if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME))
    warn('VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.')

  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL,
    imgUrl: VITE_GLOB_IMG_URL,
  }
  return glob
}

// export function useGetScrollHeight(idName: string): Promise<string> {
export function useGetScrollHeight(idName: string): Promise<UniApp.NodeInfo | UniApp.NodeInfo[]> {
  return new Promise((resolve, reject) => {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    const bottom = uni.createSelectorQuery().select(idName)
    bottom
      .boundingClientRect((data) => {
        if (data)
          resolve(data)

        else
          reject(data)
      })
      .exec()
  })
}

/**
     * 查询节点信息
     * 当前方法在支付宝小程序中无法获取组件跟接点的尺寸
     * 解决办法：为组件根部再套一个没有任何作用的view元素
     * @param selector: class || id选择器
     */
export function useGetRect(selector: string, all?: string): Promise<UniApp.NodeInfo | UniApp.NodeInfo[]> {
  return new Promise((resolve) => {
    const { proxy } = getCurrentInstance() as ComponentInternalInstance
    uni.createSelectorQuery()
      .in(proxy)[all ? 'selectAll' : 'select'](selector)
      .boundingClientRect((rect) => {
        if (all && Array.isArray(rect) && rect.length)
          resolve(rect)

        if (!all && rect)
          resolve(rect)
      })
      .exec()
  })
}

// 检查用户信息是否有手机号
export function useCheckUserBoundPhone(): boolean {
  const store = useUserStore()
  return !!store.userInfo.phone
}

export function useGetSystemInfo() {
  const screenHeight = ref()
  const safeAreaHeight = ref()
  uni.getSystemInfo({
    success: (res) => {
      // 获取屏幕高度
      screenHeight.value = res.screenHeight
      // 获取底部安全区高度
      const safeArea = res.safeArea
      if (safeArea)
        safeAreaHeight.value = screenHeight.value - safeArea.bottom
    },
  })
  return { screenHeight, safeAreaHeight }
}

// 获取胶囊按钮的位置信息
export function useGetBoundingMenuButton() {
  const menuButtonInfo = uni.getStorageSync('MenuButtonInfo') as IMenuButtonInfo
  if (!menuButtonInfo) {
    const res = uni.getMenuButtonBoundingClientRect()
    uni.setStorageSync('MenuButtonInfo', res)
    return menuButtonInfo
  }
  else {
    return menuButtonInfo
  }
}

// 更新检测
export function useCheckUpdate() {
  if (uni.canIUse('getUpdateManager')) {
    const updateManager = uni.getUpdateManager()
    updateManager && updateManager.onCheckForUpdate((res) => {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          uni.showModal({
            title: '更新提示',
            content: '新版本已经准备就绪，是否需要重新启动应用？',
            success: (res) => {
              if (res.confirm) {
                uni.clearStorageSync() // 更新完成后刷新storage的数据
                updateManager.applyUpdate()
              }
            },
          })
        })

        updateManager.onUpdateFailed(() => {
          uni.showModal({
            title: '已有新版本上线',
            content: '小程序自动更新失败，请删除该小程序后重新搜索打开哟~~~',
            showCancel: false,
          }).catch(() => { },
          )
        })
      }
      else {
        // 没有更新
      }
    })
  }
  else {
    uni.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请更新到最新的微信后再重试。',
      showCancel: false,
    }).catch(() => { },
    )
  }
}

/**
 * 更新自定义顶部导航栏的高度
 */
export function useUpdateCustomBarInfo() {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: (e) => {
        let statusBarHeight = 0
        let customBarHeight = 0
        // #ifndef MP
        statusBarHeight = e.statusBarHeight || 0
        if (e.platform === 'android')
          customBarHeight = e.statusBarHeight || 0 + 50

        else
          customBarHeight = e.statusBarHeight || 0 + 45

        // #endif

        // #ifdef MP-WEIXIN
        statusBarHeight = e.statusBarHeight || 0
        const custom = uni.getMenuButtonBoundingClientRect()
        customBarHeight = custom.bottom + ((custom.top - (e.statusBarHeight || 0)) <= 4
          ? (custom.top - e.statusBarHeight!) + 4
          : (custom.top - e.statusBarHeight!))
        // #endif
        resolve({
          statusBarHeight,
          customBarHeight,
        })
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
