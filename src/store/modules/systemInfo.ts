export const useSystemInfoStore = defineStore('app-system-info', () => {
  const systemInfo = reactive({
    statusBarHeight: 0,
    customBarHeight: 0,
    tabbarHeight: 0,
    windowHeight: 0,
    windowWidth: 0,
  })

  const setSystemInfo = (info: Partial<typeof systemInfo>) => {
    Object.assign(systemInfo, info)
  }

  return {
    systemInfo,
    setSystemInfo,
  }
})
