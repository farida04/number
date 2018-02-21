import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Menu from '@/components/menu'
import Duel from '@/components/duel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
     path:'/duel',
     name: 'Duel',
     component: Duel
  }
  ]
})
