// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import 'normalize.css'
import NProgress from 'nprogress'
import { getCookie } from '@/utils/cookie'
import '@/assets/iconfont'
import IconSvg from '@/components/Icon-svg/Icon-svg.vue'
import {
  Autocomplete,
  Input,
  Radio,
  RadioGroup,
  Select,
  Option,
  Button,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Slider,
  Message,
} from 'element-ui'


Vue.use(Autocomplete)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Slider)
Vue.prototype.$message = Message


Vue.component('icon-svg', IconSvg)
Vue.config.productionTip = false

const whiteList = ['/login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (getCookie('userToken')) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login'); // 否则全部重定向到登录页
      NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
