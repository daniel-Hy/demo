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
    </div>
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
    <!-- 推荐歌单 -->
    <div class="recommend">
      <div class="recommend-head">
        <span class="recommend-head-title">推荐歌单</span>
        <span class="recommend-head-btn">歌单广场</span>
      </div>
      <ul class="songsList">
        <li class="songsList-item" v-for="(item, index) in songsList" :key="index">
          <div class="songsImg-box">
            <img :src="item.url" width="100%"/>
            <div class="songsCount">
              <i class="iconfont">&#xe611;</i>{{item.count}}
            </div>
          </div>
          <p class="songsImg-title">{{item.title}}</p>
        </li>
      </ul>
    </div>
    <!-- 新碟 -->
    <div class="recommend">
      <div class="recommend-head">
        <ul class="newSong">
          <li class="newSongLi" @click="handleClick(1)">新碟</li>
          <li class="newSongLi" @click="handleClick(2)">新歌</li>
        </ul>
        <span class="recommend-head-btn">{{tagStatus==1?'更多新碟':'新歌推荐'}}</span>
      </div>
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Discover',
    data () {
      return {
        songsList: [{
          url: '//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg', title: '『深情盛宴』陷入直抵心灵的旖旎女声中', count: '69万'
        },{
          url: '//p2.music.126.net/56SGVMCp45NSceH3In5PnQ==/109951164092616590.jpg', title: '总有些惊奇的际遇，比方说当我遇见你', count: '151万'
        },{
          url: '//p2.music.126.net/_ldY-Tf5dCIubyyeATSrdA==/109951164322846413.jpg', title: '你搜不到的土嗨神曲', count: '571万'
        },{
          url: '//p2.music.126.net/KEBE7CU-y2lInkHBcgzpUA==/109951164173101961.jpg', title: '[华语私人定制] 最懂你的华语推荐 每日更新35首', count: '13901万'
        },{
          url: '//p2.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg', title: '好听到单曲循环', count: '11896万'
        },{
          url: '//p2.music.126.net/2DiDwfr6MkS6FtCuDQ9lkQ==/109951164508694085.jpg', title: '你好2020♡', count: '9516万'
        }],
        tagStatus: 1,
      }
    },
    mounted() {
      const self = this
      $(function() {
        const itemWidth = $('.songsList').find('.songsList-item').width()
        $('.songsList').find('.songsImg-box').height(itemWidth)
        self.handleClick(1)
      })
    }, 
    methods: {
      handleClick(type) {
        const self = this
        self.tagStatus = type
        $('.newSongLi:eq('+(type-1)+')').addClass('activeLi')
        $('.newSongLi:eq('+(type-1)+')').siblings().removeClass('activeLi')
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
  .global{
    padding-bottom: 60px;
  }
  .banner-box{
    margin: 20px 0 0;
    height: 145px;
    .bannerInfo img{
      margin: 0 auto;
      border-radius: 8px;
      width: calc(100% - 40px);
    }
  }
  .gn-list{
    display: flex;
    border-bottom: 1px solid #E6E6E6;
    margin: 20px 0 0;
    padding: 0 20px 20px; 
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
  .recommend-head{
    overflow: hidden;
    padding: 0 20px; 
    margin: 20px 0;
    line-height: 30px;
    height: 30px;
    .recommend-head-title{
      float: left;
      font-weight: bold;
    }
    .recommend-head-btn{
      float: right;
      border: 1px #E5E5E5 solid;
      border-radius: 20px;
      padding: 7px 14px;
      font-size: 14px;
      line-height: 14px;
    }
  }
  .newSong{
    overflow: hidden;
    float: left;
  }
  .newSong .newSongLi{
    float: left;
    margin-right: 8px;
    font-size: 12px;
  }
  .activeLi {
    font-size: 14px !important;
    font-weight: bold;
  }
  .songsList{
    overflow: hidden;
    padding: 0 20px; 
    .songsImg-box{
      position: relative;
      border-radius: 4px;
      overflow: hidden;
    }
    .songsCount{
      position: absolute;
      right: 8px;
      top: 5px;
      color: #fff;
      font-size: 12px;
    }
    .songsCount .iconfont{
      margin-right: 3px;
      font-size: 12px;
    }
    .songsList-item{
      float: left;
      margin-right: 10px;
      width: calc((100% - 20px) / 3);
    }
    .songsList-item:nth-child(3n){
      margin-right: 0;
    }
    .songsImg-title{
      overflow: hidden;
      padding: 0;
      margin: 5px 0 12px 0;
      line-height: 16px;
      font-size: 12px;
      font-weight: 400;
      height: 32px;
    }
  }
</style>
