import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/editor',
    name: 'Home',
    component: Home,
    meta: {
      title: "Editor"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
});

export default router
