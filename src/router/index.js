import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "service" */ '../views/ServiceView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/PortfolioView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
