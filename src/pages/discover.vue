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
            <img :src="item.picUrl" width="100%"/>
            <div class="songsCount">
              <i class="iconfont">&#xe611;</i>{{item.count}}
            </div>
          </div>
          <p class="songsImg-title">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <!-- 新碟 -->
    <div class="recommend">
      <div class="recommend-head">
        <ul class="newSongTag">
          <li class="newSongLi" @click="handleClick(1)">新碟</li>
          <li class="newSongLi" @click="handleClick(2)">新歌</li>
        </ul>
        <span class="recommend-head-btn">{{tagStatus==1?'更多新碟':'新歌推荐'}}</span>
      </div>
      <div class="newSong">
        <ul class="songsList">
          <li class="songsList-item" v-for="(item, index) in newSongs" :key="index">
            <div class="songsImg-box">
              <img :src="item.picUrl" width="100%"/>
            </div>
            <p class="songsName">{{item.name}}</p>
            <p class="songsSinger">{{item.singer}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="chosen">
      <div class="chosen-head">
        <span class="chosen-title">云村精选</span>
        <span class="chosen-reload"><i class="iconfont">&#xe619;</i>获取新内容</span>
      </div>
      <div class="chosen-info">
        <p class="chosen-info-title"></p>
      </div>
    </div> -->
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Discover',
    data () {
      return {
        songsList: [
          { picUrl: '//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg', name: '『深情盛宴』陷入直抵心灵的旖旎女声中', count: '69万' },
          { picUrl: '//p2.music.126.net/56SGVMCp45NSceH3In5PnQ==/109951164092616590.jpg', name: '总有些惊奇的际遇，比方说当我遇见你', count: '151万' },
          { picUrl: '//p2.music.126.net/_ldY-Tf5dCIubyyeATSrdA==/109951164322846413.jpg', name: '你搜不到的土嗨神曲', count: '571万' },
          { picUrl: '//p2.music.126.net/KEBE7CU-y2lInkHBcgzpUA==/109951164173101961.jpg', name: '[华语私人定制] 最懂你的华语推荐 每日更新35首', count: '13901万' },
          { picUrl: '//p2.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg', name: '好听到单曲循环', count: '11896万' },
          { picUrl: '//p2.music.126.net/2DiDwfr6MkS6FtCuDQ9lkQ==/109951164508694085.jpg', name: '你好2020♡', count: '9516万' }
        ],
        tagStatus: 1,
        newSongs: []
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
        if (type==1) {
          self.newSongs = [
            { picUrl: '//p1.music.126.net/R5hmBoVZt0I56BPiVic1aA==/109951164601146483.jpg', name: 'Yummy', singer: 'Justin Bieber' },
            { picUrl: '//p1.music.126.net/2lC8dgQola_6YGfeJJZdtA==/109951164601966699.jpg', name: '赤脚追光', singer: 'R1SE' },
            { picUrl: '//p1.music.126.net/z3iaVvR-7_DLxzktOu5I3g==/109951164594343426.jpg', name: '羡慕', singer: '许嵩' }
          ]
        } else {
          self.newSongs = [
            { picUrl: '//p1.music.126.net/z4cBZXR-82oae0eBkMbdRA==/109951164590844332.jpg', name: '陪陪我', singer: '王齐铭WatchMe/Gosh Music' },
            { picUrl: '//p1.music.126.net/IrkDUhmAJC8eyJqHtV6DqA==/109951164591747721.jpg', name: '因为宠爱', singer: '金玟岐' },
            { picUrl: '//p1.music.126.net/KTo5oSxH3CPA5PBTeFKDyA==/109951164581432409.jpg', name: '摩天动物园', singer: 'G.E.M.邓紫棋' }
          ]
        }
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
  @import './css/discover.scss'
</style>
