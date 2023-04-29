// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN,
  },
  // debug: true,
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
})
