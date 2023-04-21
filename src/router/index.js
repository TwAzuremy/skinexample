import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import Collect from '../views/collect.vue'
import Settings from '../views/settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/collect',
    name: 'collect',
    component: Collect
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
