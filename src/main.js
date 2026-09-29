import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: {
    defaultTheme: 'light',
    themes: {
        light: {
            colors: {
                primary: "#2196F3",
                secondary: "#F0F4C3"
            }
        }
    }
  }
})


const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)


app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
