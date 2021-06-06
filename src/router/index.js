import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/editor',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
