import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/MainComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainComponent
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Contact.vue')
  },
  {
    path: '/kurikulum',
    name: 'kurikulum',
    component: () => import('@/pages/kurikulum.vue')
  },
  {
    path: '/program-keahlian',
    name: 'program-keahlian',
    component: () => import('@/pages/ProgramKeahlian.vue')
  },
  {
    path: '/ppdb',
    name: 'ppdb',
    component: () => import('@/pages/ppdb.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
