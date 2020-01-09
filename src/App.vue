<template>
  <div id="app">
    <div class="header">
      
    </div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="discover">
        <span slot="icon" class="icon-span"><i class="iconfont">&#xe762;</i></span>发现
      </mt-tab-item>
      <mt-tab-item id="video">
        <span slot="icon" class="icon-span"><i class="iconfont iconfont-video">&#xe787;</i></span>视频
      </mt-tab-item>
      <mt-tab-item id="mine">
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
export default {
  name: 'App',
  data () {
    return {
      selected: 'discover'
    }
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
  .mint-tabbar{
    background: #fff;
    box-shadow: 0 0 6px #d9d9d9;
    color: #999;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color: unset;
    color: #d81e06;
  }
  .mint-tabbar > .mint-tab-item.is-selected .icon-span{
    background: #d81e06;
  }
  .mint-tabbar > .mint-tab-item.is-selected .iconfont-video{
    font-size: 14px;
  }
  .mint-tabbar > .mint-tab-item.is-selected .iconfont{
    color: #fff;
    font-size: 18px;
  }
</style>