import { createRouter, createWebHistory } from 'vue-router'
import HelloWorldVue from '../components/HelloWorld.vue'
import { main } from './main'
import { register } from './register'
import { homepage } from './homepage'

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
    ...main,
    ...register,
    ...homepage,
]

export default createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
})
