// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false, // penting! karena kamu mau SPA
  devtools: { enabled: true },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },
  modules: [
    "@nuxtjs/tailwindcss"
  ],
})
