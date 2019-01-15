// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.css'
// 解决移动端点击事件300ms延迟
import fastClick from 'fastclick'
// styles 是在build webpack.base.conf.js 里设置了别名
// 导入css文件
import 'styles/reset.css'
// 解决移动端1像素边框问题
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

// 使用swiper插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
