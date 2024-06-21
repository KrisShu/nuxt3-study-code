import * as ElementPlusIcons from '@element-plus/icons-vue'

export default defineNuxtPlugin((nuxtApp) => {
  for(const [key, component] of Object.entries(ElementPlusIcons)) {
    nuxtApp.vueApp.component(key, component)
  }
})