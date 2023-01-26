import { createRouter, createWebHistory } from 'vue-router'

import HelloWorldVue from '../components/HelloWorld.vue'
import RegisterMobile from '../views/register/RegisterMobile.vue'
import MainTab from '../views/main/MainTab.vue'
import MainPage from '../views/main/MainPage.vue'
import PointPage from '../views/main/PointPage.vue'
import ProfilePage from '../views/main/ProfilePage.vue'
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
        path: '/main',
        component: MainTab,
        name: 'Main Tab',
        meta: {
            entry: 'center',
            exit: 'right',
        },
        children: [
            {
                path: '/main/profile',
                component: ProfilePage,
            },
            {
                path: '/main/point',
                component: PointPage,
            },
            {
                path: '',
                component: MainPage,
            },
        ],
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
