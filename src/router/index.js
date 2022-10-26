import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: 'drawingBoard',
        component: () => import(/* webpackChunkName: "tools" */ '../views/tools/drawingBoard/index.vue'),
        name: 'DrawingBoard',
        meta: { title: '画板', icon: 'dataView', affix: false }
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
        name: 'AboutView',
        meta: { title: 'AboutView', icon: 'dataView', affix: false }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
