import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard')
        }
      ]
    }
]

const createRouter = new VueRouter({
  routes
})

export default createRouter