// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import vueSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'babel-polyfill'

Vue.use(Mint)
Vue.use(vueSwiper)
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import '@/assets/css/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 引入store
  components: { App },
  template: '<App/>'
})
