<template>
  <div id="app">
    <Head :tabindex="selected"></Head>
    <mt-tabbar fixed v-model="selected" style="background:#F8F8F8;z-index:9;">
      <mt-tab-item id="1">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe762;</i></span>发现
      </mt-tab-item>
      <mt-tab-item id="2">
        <span slot="icon" class="icon-span"><i class="iconfont iconfont-video">&#xe787;</i></span>视频
      </mt-tab-item>
      <mt-tab-item id="3">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe600;</i></span>我的
      </mt-tab-item>
      <mt-tab-item id="4">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe693;</i></span>云村
      </mt-tab-item>
      <mt-tab-item id="5">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe601;</i></span>帐号
      </mt-tab-item>
    </mt-tabbar>
    <router-view/>
  </div>
</template>

<script>
import Head from './pages/head'

export default {
  name: 'App',
  components: { Head },
  data () {
    return {
      selected: '1'
    }
  },
  created() {
    
  },
  watch: {
    selected: function(val) {
      const self = this
      switch (val) {
        case "1":
          self.$router.push("/discover");
          break;
        case "2":
          self.$router.push("/video");
          break;
        case "3":
          self.$router.push("/mine");
          break;
        case "4":
          self.$router.push("/interflow");
          break;
        case "5":
          self.$router.push("/account");
          break;
      }
    }
  },
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
    padding-top: 40px;
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
    font-size: 20px;
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