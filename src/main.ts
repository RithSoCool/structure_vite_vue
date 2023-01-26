import './style.scss'
import 'vant/lib/index.css'

import { Button, CountDown, Popup } from 'vant'

import App from './App.vue'
import Router from '../src/router/index'
import Vue3Transitions from 'vue3-transitions'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).use(Button).use(Popup).use(CountDown).use(Router).use(Vue3Transitions).mount('#app')
