import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/views/login/login'
import Homepage from '@/views/homepage/homepage'
import Homepage1 from '@/views/homepage/homepage1'
import Preview from '@/views/preview/preview'

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
    },{
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/homepage1',
      name: 'Homepage1',
      component: Homepage1
    }
  ]
})
