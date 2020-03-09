import Vue from 'vue'
import Router from 'vue-router'
import Discover from '@/pages/discover'
import Video from '@/pages/video'
import Mine from '@/pages/mine'
import Interflow from '@/pages/interflow'
import Account from '@/pages/account'
import Detail from '@/pages/detail'
import Recommend from '@/pages/recommend'
import Login from '@/pages/login'

Vue.use(Router)

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover
    },{
      path: '/discover',
      name: 'discover',
      component: Discover
    },{
      path: '/video',
      name: 'video',
      component: Video
    },{
      path: '/mine',
      name: 'mine',
      component: Mine
    },{
      path: '/interflow',
      name: 'interflow',
      component: Interflow
    },{
      path: '/account',
      name: 'account',
      component: Account
    },{
      path: '/detail',
      name: 'detail',
      component: Detail
    },{
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
