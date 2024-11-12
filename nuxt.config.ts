export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.scss'],
  build: {
    loaders: {
      scss: {
        additionalData: '@import "@/assets/css/_variables.scss";' // Pridajte globálny import premenných
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.scss";' // Pridajte globálny import premenných
        }
      }
    }
  },

  plugins: [
   
  ],

  compatibilityDate: '2024-11-05',
})