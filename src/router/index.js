import Vue from 'vue'
import Router from 'vue-router'
import Discover from '@/pages/discover'
import Video from '@/pages/video'
import Mine from '@/pages/mine'
import Interflow from '@/pages/interflow'
import Account from '@/pages/account'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
