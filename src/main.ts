import { createApp } from 'vue'
import './style.css'
import 'vant/lib/index.css';
import App from './App.vue'

import { createPinia } from 'pinia'
import { Button } from 'vant';


const pinia = createPinia()
createApp(App)
.use(pinia)
.use(Button)
.mount('#app')
