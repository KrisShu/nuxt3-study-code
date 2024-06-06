// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir:'src/',
  plugins: [
    '~/plugins/test' // 引入刚刚定义的plugin
  ],
  modules: [
    '@element-plus/nuxt'
  ],
  css: [
    '~/static/css/common.scss',
  ],

})
