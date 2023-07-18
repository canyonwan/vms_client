import { createSSRApp } from 'vue'

// import TnIcon from '@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue'
import * as Pinia from 'pinia'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  const store = Pinia.createPinia()
  app.use(store)

  // app.component('TnIcon', TnIcon)
  // 之前 - Vue 2
  // Vue.prototype.$http = () => {}
  // 之后 - Vue 3
  // app.config.globalProperties.$http = () => {}

  return {
    app,
    Pinia,
  }
}
