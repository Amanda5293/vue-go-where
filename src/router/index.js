import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home'
import City from '../pages/city/city'

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
    }
  ]
})
