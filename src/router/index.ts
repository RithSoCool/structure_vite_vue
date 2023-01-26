import { createRouter, createWebHistory } from 'vue-router'

import HelloWorldVue from '../components/HelloWorld.vue'
import RegisterMobile from '../views/register/RegisterMobile.vue'
import HomePage from '../views/homepage/Homepage.vue'

const routes = [
    {
        path: '/',
        component: HelloWorldVue,
        name: 'hello',
        meta: {
            entry: 'left',
            exit: 'right',
            duration: 200,
        },
    },
    {
        path: '/register-moblie',
        component: RegisterMobile,
        name: 'Register Mobile',
        meta: {
            entry: 'center',
            exit: 'right',
        },
    },
    {
        path: '/home-page',
        component: HomePage,
        name: 'Home Page',
        meta: {
            entry: 'center',
            exit: 'right',
        },
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
