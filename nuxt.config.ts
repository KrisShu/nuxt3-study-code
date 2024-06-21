// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir:'src/',
  plugins: [
    '~/plugins/test', // 引入刚刚定义的plugins
  ],
  modules: [
    '@element-plus/nuxt',
    
  ],
  css: [
    '~/static/styles/common.css',
    '~/static/styles/normalize.css'
  ],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/static/styles/theme.scss";'	
            }
        }
    }
  }
})
