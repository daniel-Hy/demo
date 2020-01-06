<template>
  <div class="global">
    <div class="banner-box">
      <mt-swipe :auto="5000">
        <mt-swipe-item class="bannerInfo">
          <img src="//p1.music.126.net/Z_721L_HWnP8pH0UuGyu7w==/109951164579701346.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item class="bannerInfo">
          <img src="//p1.music.126.net/TEMRISJerkEN7db0LM15Fg==/109951164579941097.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item class="bannerInfo">
          <img src="//p1.music.126.net/mtAnrcXJlxcOuUcapOTNRg==/109951164579623236.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item class="bannerInfo">
          <img src="//p1.music.126.net/bZSDSXd_kKhBhLJnH1Ql1Q==/109951164579793436.jpg"/>
        </mt-swipe-item>
        <mt-swipe-item class="bannerInfo">
          <img src="//p1.music.126.net/8UB-7KuU0PywInKuzdpjzw==/109951164579786076.jpg"/>
        </mt-swipe-item>
      </mt-swipe>
      <ul class="gn-list">
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 20px;">&#xe645;</i></span>每日推荐
        </li>
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 40px;">&#xe603;</i></span>歌单
        </li>
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 24px;">&#xe651;</i></span>排行榜
        </li>
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 40px;">&#xe602;</i></span>电台
        </li>
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 38px;">&#xe608;</i></span>直播
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Discover',
    data () {
      return {
        
      }
    }
  }
</script>
<style lang="scss">
  .banner-box{
    .mint-swipe-indicator{
      background: #fff;
      opacity: 1;
    }
    .mint-swipe-indicator.is-active{
      background: #d81e06;
    }
    .mint-swipe-indicator{
      width: 6px;
      height: 6px;
    }
    .mint-swipe-indicators{
      bottom: 5px;
    }
  }
</style>
<style lang="scss" scoped>
  .banner-box{
    margin: 20px 0 0;
    height: 145px;
    .bannerInfo img{
      margin: 0 auto;
      border-radius: 8px;
      width: calc(100% - 40px);
    }
    .gn-list{
      display: flex;
      margin: 20px 0 0;
      padding: 0 20px;
      .gn-list-info{
        flex: 1;
        text-align: center;
        font-size: 12px;
      }
      .list-info-span{
        display: block;
        background: #d81e06;
        border-radius: 50%;
        margin: 0 auto 5px auto;
        line-height: 40px;
        text-align: center;
        width: 40px;
        height: 40px;
      }
      .iconfont{
        color: #fff;
      }
    }
  }
</style>
