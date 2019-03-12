import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home'
import City from '../pages/city/city'
import Detail from '../pages/detail/detail'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  //  对于所有路由导航，简单地让页面滚动到顶部
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
