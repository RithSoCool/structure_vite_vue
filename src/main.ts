import './style.scss'
import 'vant/lib/index.css'

import App from './App.vue'
import { Button, Popup } from 'vant'
import Router from '../src/router/index'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Transitions from 'vue3-transitions'
import NavigatorBack from '../src/components/navigator/NavigatorBack.vue'
const pinia = createPinia()

createApp(App).use(pinia).use(Button).use(Popup).use(Router).use(Vue3Transitions).component('NavigatorBack',NavigatorBack).mount('#app')
