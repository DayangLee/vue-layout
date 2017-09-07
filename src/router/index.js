import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/views/login/login'
import Homepage from '@/views/homepage/homepage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
