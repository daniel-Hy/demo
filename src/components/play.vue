<template>
  <div class="page-play">
    <img class="coverImgUrl-bg" :src="picUrl"/>
    <div class="play-box">
      <div class="play-head">
        <i class="iconfont icon-goBack" @click="goBack">&#xe610;</i>
        <div class="musicInfo">
          <p class="music-name">{{musicName}}</p>
          <p class="music-singer">{{musicSinger}}</p>
        </div>
        <i class="iconfont icon-share">&#xeb9f;</i>
      </div>
      <div class="play-body">
        <div class="musicImg-box rotateImg">
          <img class="musicImg" :src="picUrl"/>
        </div>
      </div>
      <div class="play-foot">
        <audio class="myAudio" ref="myAudio" controls="controls"></audio>
        <div class="controls">
          <i class="iconfont ctrl-xd">&#xe61f;</i>
          <div class="ctrl-center">
            <i class="iconfont ctrl-prev" @click="onPrev">&#xe60f;</i>
            <i class="iconfont ctrl-play" @click="onPlay" v-if="!isPlay">&#xe617;</i>
            <i class="iconfont ctrl-pause" @click="onPause" v-else>&#xe61c;</i>
            <i class="iconfont ctrl-next" @click="onNext">&#xe616;</i>
          </div>
          <i class="iconfont ctrl-gd" @click="popupVisible=true">&#xe61e;</i>
        </div>
      </div>
    </div>
    <!-- 歌单列表 -->
    <mt-popup class="popup-box" v-model="popupVisible" position="bottom">
      <h3 class="playing-title">当前播放<span>({{tracks.length}})</span></h3>
      <div class="playing-status">
        <div class="ctrl-status"><i class="iconfont">&#xe620;</i>顺序播放</div>
        <i class="iconfont icon-delAll">&#xe627;</i>
      </div>
      <ul class="playing-list">
        <li :class="['playing-list-item', musicIds==item.id?'playing-list-item-ing':'', item.fee!=8?'playing-list-item-disable':'']" 
          v-for="(item, index) in tracks" :key="index"
          @click="playMusic(item)">
          <i class="iconfont icon-ing" v-if="musicIds==item.id">&#xe7a8;</i>
          {{item.name}}
          <div style="display:inline-block;" v-if="item.alia"><i v-if="item.alia[0]">(</i>{{item.alia[0]}}<i v-if="item.alia[0]">)</i> - <span style="font-size: 12px;">{{item.ar[0].name}}</span></div>
          <div style="display:inline-block;" v-else>({{item.artists[0].name}}) - <span style="font-size: 12px;">{{item.album.name}}</span></div>
          <i class="iconfont icon-del">&#xe8b6;</i>
        </li>
      </ul>
      <div class="close-popup" @click="popupVisible=false">关闭</div>
    </mt-popup>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { Toast } from 'mint-ui'
  import { getMusicUrl, getMusicDetail } from '@/api/userInfo'

  export default {
    name: 'Play',
    props: ['musicId', 'tracks'],
    data() {
      return {
        musicUrl: {}, // 歌曲url详情
        musicDetail: {}, // 歌曲详情
        musicName: '', // 歌曲名
        musicSinger: '', // 歌手
        musicIds: '', // 歌曲id
        picUrl: '',
        isPlay: false,
        popupVisible: false,
        musicIdsList: [],
      }
    },
    mounted() {
      const self = this
      self.musicIds = self.musicId
      if (self.musicIds) {
        self.fetchMusicUrl()
        self.fetchMusicDetail()
      }
    },
    methods: {
      goBack() {
        const self = this
        self.$emit('closePlay')
      },
      // 获取歌曲url
      fetchMusicUrl() {
        const self = this
        getMusicUrl({
          id: self.musicIds
        }).then(res => {
          self.musicUrl = res.data[0]
          self.$refs.myAudio.src = self.musicUrl.url
          self.isPlay = true
          self.$refs.myAudio.play()
        })
      },
      // 获取歌曲详情
      fetchMusicDetail() {
        const self = this
        getMusicDetail({
          ids: self.musicIds
        }).then(res => {
          self.musicDetail = res.songs[0]
          self.musicName = self.musicDetail.name
          self.musicSinger = self.musicDetail.ar[0].name
          self.picUrl = self.musicDetail.al.picUrl
          console.log('歌曲详情+++', self.musicDetail)
        })
      },
      // 歌单列表点击播放
      playMusic(item) {
        const self = this
        if (item.fee != 8) return
        self.musicIds = item.id
        self.fetchMusicUrl()
        self.fetchMusicDetail()
      },
      // 播放
      onPlay() {
        const self = this
        self.isPlay = true
        document.getElementsByClassName('rotateImg')[0].style.animationPlayState = "running"
        self.$refs.myAudio.play()
      },
      // 暂停
      onPause() {
        const self = this
        self.isPlay = false
        document.getElementsByClassName('rotateImg')[0].style.animationPlayState = "paused"
        self.$refs.myAudio.pause()
      },
      // 下一首
      onNext() {

      },
      // 上一首
      onPrev() {

      }
    }
  }
</script>

<style lang="scss" scope>
  @import "./css/play.scss";
</style>