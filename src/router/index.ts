import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import HelloWorldVue from '../components/HelloWorld.vue'
import RegisterMobile from '../views/register/RegisterMobile.vue'

const routes = [
    {
        path: '/',
        component: HelloWorldVue,
        name: 'hello',
    },
    {
        path: '/register-mobile',
        component: RegisterMobile,
        name: 'Register Mobile',
    },
]

export default createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})
