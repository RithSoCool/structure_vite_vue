import { createRouter , createWebHashHistory } from 'vue-router'

const routes = [];


export default createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior () {
      // always scroll to top
    return { top: 0 }
    }
  })