import './style.scss'
import 'vant/lib/index.css'

import App from './App.vue'
import { Button } from 'vant'
import Router from '../src/router/index'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
createApp(App).use(pinia).use(Button).use(Router).mount('#app')
