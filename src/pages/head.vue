<template>
  <div class="page-head" :class="{'accountBg':tabSelect=='account','mineBg':tabSelect=='mine'}">
    <span class="head-left">
      <i class="iconfont" v-if="tabSelect=='discover'">&#xe64f;</i>
      <i class="iconfont" v-if="tabSelect=='video'">&#xe77e;</i>
      <i class="iconfont" style="color: #fff;" v-if="tabSelect=='mine'">&#xe607;</i>
      <i class="iconfont" v-if="tabSelect=='interflow'">&#xe7a4;</i>
      <i class="iconfont" style="color: #fff;" v-if="tabSelect=='account'">&#xe68b;</i>
    </span>
    <div class="head-center">
      <input type="text" class="searchText iconfont" :placeholder="icon" v-if="tabSelect=='discover'||tabSelect=='video'"/>
    </div>
    <span class="head-right">
      <!-- <i class="iconfont">&#xe64f;</i> -->
      <img class="playing playing-img" src="//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg"/>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    props:['tabSelect'],
    data () {
      return {
        icon:'\ue626 搜索音乐、视频、歌词、电台'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-head{
    // box-shadow: 0 0 6px #d9d9d9;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 40px;
    width: 100%;
    height: 40px;
    z-index: 99;
    .head-left,
    .head-center,
    .head-right{
      float: left;
    }
    .head-left,
    .head-right{
      text-align: center;
      width: 40px;
      height: 40px;
    }
    .head-center{
      position: relative;
      width: calc(100% - 80px);
      height: 40px;
      .searchText{
        position: absolute;
        background: #fafafa;
        margin: 0 auto;
        border-radius: 15px;
        outline: none;
        text-align: center;
        top: 5px;
        left: 0;
        right: 0;
        border: 0;
        padding: 0;
        width: 95%;
        height: 30px;
      }
      .searchText.iconfont{
        font-size: 14px;
      }
      ::-webkit-input-placeholder { /* WebKit browsers */
        color: #999;
      }
    }
    .playing{
      border-radius: 50%;
      margin: 5px auto 0 auto;
      width: 30px;
      height: 30px;
    }
    .playing-img{
      -webkit-animation: rotateImg 15s linear infinite;
    }
    @-webkit-keyframes rotateImg{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
    }
  }
  .accountBg{
    background: #808080;
  }
  .mineBg{
    background: unset;
  }
</style>