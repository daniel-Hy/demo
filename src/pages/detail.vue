<template>
  <div class="page-detail">
    <div class="head-box">
      <img class="coverImgUrl-bg" :src="detailData.coverImgUrl" width="100%" height="315px"/>
      <div class="detail-head-box">
        <div class="detail-head">
          <div class="coverImgUrl-box">
            <img class="coverImgUrl" :src="detailData.coverImgUrl" />
          </div>
          <div class="songInfo">
            <p class="songDetail-title">{{detailData.name}}</p>
            <div class="creator">
              <img class="creator-avatar" :src="creator.avatarUrl" width="30px"/>
              <span class="creator-name">{{creator.nickname}} ></span>
            </div>
            <span class="editDetail">{{detailData.description?detailData.description:'编辑简介'}}</span>
          </div>
        </div>
        <ul class="operate">
          <li><i class="iconfont">&#xeb9f;</i><span>评论</span></li>
          <li><i class="iconfont">&#xeb9f;</i><span>分享</span></li>
          <li><i class="iconfont">&#xeb9f;</i><span>下载</span></li>
          <li><i class="iconfont">&#xeb9f;</i><span>多选</span></li>
        </ul>
      </div>
    </div>
    <div class="detail-songsList">
      <div class="stickyDiv">
        <div class="songsList-box">
          <div class="songsList-head">
            <i class="iconfont">&#xe64d;</i>
            <h3 class="playAll">播放全部<span>(共{{detailData.trackCount}}首)</span></h3>
          </div>
          <ul class="tracks">
            <li :class="['tracks-item', item.fee!=8?'tracks-item-disable':'']" v-for="(item, index) in tracks" :key="index" @click="clickPlay(item)">
              <span class="tracks-no">{{index+1}}</span>
              <div class="tracks-info">
                <p class="tracks-title">{{item.name}}<span class="tracks-subTitle" v-if="item.alia[0]">({{item.alia[0]}})</span></p>
                <p class="tracks-singer">{{item.ar[0].name}}<span class="tracks-subSinger" v-if="item.al.name"> - {{item.al.name}}</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Play class="musicPlay" :musicId="musicId" :tracks="tracks" @closePlay="closePlay" v-if="isShowPlay"/>
  </div>
</template>

<script>
  import Play from '@/components/play'
  import { getPlaylistDetail } from '@/api/userInfo'
  import { Toast } from 'mint-ui'
  import $ from 'jquery'

  export default {
    name: 'Detail',
    components: { Play },
    data () {
      return {
        mid: '', // 获取详情列表的歌曲id
        detailData: {}, // 歌单详情
        creator: {}, // 创建者详情
        tracks: [], // 歌单列表
        musicId: '', // 跳转歌曲播放页面的歌曲id
        isShowPlay: false,
      }
    },
    mounted() {
      const self = this
      self.mid = self.$route.params.mid 
      if (self.mid) self.fetchPlaylistDetail()
    }, 
    methods: {
      // 获取歌单详情
      fetchPlaylistDetail() {
        const self = this
        getPlaylistDetail({
          id: self.mid
        }).then(res => {
          self.detailData = res.playlist
          self.creator = res.playlist.creator
          self.tracks = res.playlist.tracks
        }).catch(err => {
          Toast('获取歌单详情错误!')
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
<style lang="scss" scope>
  @import './css/detail.scss';
</style>