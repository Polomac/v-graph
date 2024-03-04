import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/FilmsView.vue')
    },
    {
      path: '/crawl/:id',
      name: 'crawl',
      component: () => import('../views/CrawlView.vue')
    },
  ]
})

export default router
