<template>
  <div class="page-recommend">
    <img class="coverImgUrl-bg" src="//p1.music.126.net/jDAoWv5fMUaWlM9OhpxHOQ==/109951164773657875.jpg" width="100%"/>
    <div class="songsList-head">
      <i class="iconfont">&#xe64d;</i>
      <h3 class="playAll">播放全部</h3>
    </div>
    <ul class="tracks">
      <li :class="['tracks-item', item.fee!=8?'tracks-item-disable':'']" v-for="(item, index) in recoSongsList" :key="index" @click="clickPlay(item)">
        <span class="tracks-img"><img :src="item.album.picUrl" /></span>
        <div class="tracks-info">
          <p class="tracks-title">{{item.name}}</p>
          <p class="tracks-singer">{{item.artists[0].name}}<span class="tracks-subSinger" v-if="item.album.name"> - {{item.album.name}}</span></p>
        </div>
      </li>
    </ul>
    <Play class="musicPlay" :musicId="musicId" :tracks="recoSongsList" @closePlay="closePlay" v-if="isShowPlay"/>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Play from '@/components/play'
  import { getRecommendSongs } from '@/api/userInfo'
  import { Toast } from 'mint-ui'

  export default {
    name: 'Recommend',
    components: { Play },
    data () {
      return {
        recoSongsList: [],
        musicId: '', // 跳转歌曲播放页面的歌曲id
        isShowPlay: false,
      }
    },
    mounted() {
      const self = this
      self.fetchRecommendSongs()
    }, 
    methods: {
      // 获取每日推荐列表
      fetchRecommendSongs() {
        const self = this
        getRecommendSongs().then(res => {
          self.recoSongsList = res.recommend
        }).catch(err => {
          Toast('获取每日推荐错误!')
        })
      },
      // 打开歌曲详情播放
      clickPlay(item) {
        const self = this
        if (item.fee != 8) return
        self.musicId = item.id
        self.isShowPlay = true
        $("body").css('overflow', 'hidden')
      },
      // 关闭歌曲详情
      closePlay() {
        const self = this
        self.isShowPlay = false
        $("body").css('overflow', 'visible')
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/recommend.scss';
</style>