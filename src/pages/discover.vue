<template>
  <div class="page-discover">
    <div class="banner-box">
      <mt-swipe :auto="5000">
        <mt-swipe-item class="bannerInfo" v-for="(item, index) in bannerList" :key="index">
          <img :src="item.pic"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <ul class="gn-list">
      <li class="gn-list-info" @click="toRecommend">
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
    <div class="part-box">
      <div class="partHead">
        <p class="partHead-title">推荐歌单</p>
        <p class="partHead-subTitle">为你精挑细选</p>
        <div class="pratHead-btn">查看更多</div>
      </div>
      <div style="padding: 0 20px;">
        <swiper class="swiper-box" :options="swiperOption">
          <swiper-slide class="swiper-slide" v-for="(item, index) in recommendList" :key="index">
            <div class="recommendCover">
              <img :src="item.picUrl" width="100%"/>
              <div class="recommendCount">
                <i class="iconfont">&#xe611;</i>{{item.count}}
              </div>
            </div>
            <p class="recommendName">{{item.name}}</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { getBannerList } from '@/api/userInfo'
  import { Toast } from 'mint-ui'

  export default {
    name: 'Discover',
    data () {
      return {
        recommendList: [
          { picUrl: '//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg', name: '『深情盛宴』陷入直抵心灵的旖旎女声中', count: '69万' },
          { picUrl: '//p2.music.126.net/56SGVMCp45NSceH3In5PnQ==/109951164092616590.jpg', name: '总有些惊奇的际遇，比方说当我遇见你', count: '151万' },
          { picUrl: '//p2.music.126.net/_ldY-Tf5dCIubyyeATSrdA==/109951164322846413.jpg', name: '你搜不到的土嗨神曲', count: '571万' },
          { picUrl: '//p2.music.126.net/KEBE7CU-y2lInkHBcgzpUA==/109951164173101961.jpg', name: '[华语私人定制] 最懂你的华语推荐 每日更新35首', count: '13901万' },
          { picUrl: '//p2.music.126.net/1gNcBmzdIaQtU00Dvp_TvQ==/109951163912081772.jpg', name: '好听到单曲循环', count: '11896万' },
          { picUrl: '//p2.music.126.net/2DiDwfr6MkS6FtCuDQ9lkQ==/109951164508694085.jpg', name: '你好2020♡', count: '9516万' }
        ],
        swiperOption: {
          slidesPerView: 3.5,
          spaceBetween: 10,
          freeMode: true,
        },
        bannerList: [], // banner
      }
    },
    mounted() {
      const self = this
      self.fetchBannerList()
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
      },
      // 获取banner
      fetchBannerList() {
        const self = this
        getBannerList({
          type: 2 // 0: pc(默认) 1:android 2:iphone 3:ipad
        }).then(res => {
          self.bannerList = res.banners
        }).catch(err => {
          Toast('获取banner错误!')
        })
      },
      // 跳转每日推荐
      toRecommend() {
        const self = this
        self.$router.push({name: 'recommend'})
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
  @import './css/discover.scss';
</style>
