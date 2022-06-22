import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'
import VScrollLock from 'v-scroll-lock'

const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.use(VScrollLock)

app.mount('#app');
