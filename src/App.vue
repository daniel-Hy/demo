<template>
  <div id="app">
    <Head :tabSelect="selected"></Head>
    <mt-tabbar fixed v-model="selected" style="background:#F8F8F8;z-index:9;">
      <mt-tab-item id="discover" @click.native="tabClick('discover')">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe762;</i></span>发现
      </mt-tab-item>
      <mt-tab-item id="video">
        <span slot="icon" class="icon-span"><i class="iconfont iconfont-video">&#xe656;</i></span>视频
      </mt-tab-item>
      <mt-tab-item id="mine" @click.native="tabClick('mine')">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe600;</i></span>我的
      </mt-tab-item>
      <mt-tab-item id="interflow">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe693;</i></span>云村
      </mt-tab-item>
      <mt-tab-item id="account">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe601;</i></span>帐号
      </mt-tab-item>
    </mt-tabbar>
    <router-view/>
  </div>
</template>

<script>
import Head from './pages/head'
import { userLogin } from '@/api/userInfo'
import { Toast } from 'mint-ui'

export default {
  name: 'App',
  components: { Head },
  data () {
    return {
      selected: ''
    }
  },
  created() {
    const self = this
    self.selected = location.pathname.slice(1,location.pathname.length)
    self.selected = 'discover'
    self.toLogin()
  },
  watch: {
    selected: function(val) {
      const self = this
      switch (val) {
        case "discover":
          self.$router.push("/discover");
          break;
        case "video":
          self.$router.push("/video");
          break;
        case "mine":
          self.$router.push("/mine");
          break;
        case "interflow":
          self.$router.push("/interflow");
          break;
        case "account":
          self.$router.push("/account");
          break;
        default:
          self.$router.push("/discover");
          break;
      }
    }
  },
  methods: {
    toLogin() {
      const self = this
      let user = {}
      userLogin({
        phone: '17816118163',
        password: 'hy992455058'
      }).then(res => {
        user = {
          id: res.account.id,
          token: res.token,
          backgroundUrl: res.profile.backgroundUrl,
          avatarUrl: res.profile.avatarUrl,
          nickname: res.profile.nickname
        }
        self.$store.commit('$_setStorage', user)
      }).catch(err => {
        Toast('获取登录信息失败')
      })
    },
    tabClick(tab) {
      const self = this
      self.$router.push("/" + tab)
    }
  }
}
</script>

<style scope>
  html,body,p{
    padding: 0;
    margin: 0;
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  img{
    display: block;
  } 
  #app{
    padding-top: 50px;
    padding-bottom: 60px;
  }
  .icon-span{
    display: block;
    margin: 0 auto;
    border-radius: 50%;
    text-align: center;
    line-height: 28px;
    width: 28px;
    height: 28px;
  }
  .mint-tab-item-icon {
    width: 28px;
    height: 28px;
    margin: 0 auto 5px;
  }
  .iconfont{
    font-size: 24px;
  }
  .iconfont-video{
    font-size: 22px;
  }
  .mint-tabbar.is-fixed{
    z-index: 9;
  }
  .mint-tabbar{
    background: #fff;
    /* box-shadow: 0 0 6px #d9d9d9; */
    color: #999;
  } 
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color: unset !important;
    color: #FF352C !important;
  }
  .mint-tabbar > .mint-tab-item.is-selected .icon-span{
    background: #FF352C;
  }
  .mint-tabbar > .mint-tab-item.is-selected .iconfont-video{
    font-size: 14px;
  }
  .mint-tabbar > .mint-tab-item.is-selected .iconfont{
    color: #fff;
    font-size: 18px;
  }
</style>