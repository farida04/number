import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Inscription from '@/components/inscription'
import Menu from '@/components/menu'
import Duel from '@/components/duel'
import Infos from '@/components/my-infos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
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
  },
  {
     path: '/infos',
     name: 'Infos',
     component: Infos
  }
  ]
})
