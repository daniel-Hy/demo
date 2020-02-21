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
            <span class="editDetail">编辑简介&nbsp;&nbsp;></span>
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
          编辑简介编辑简介
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getPlaylistDetail } from '@/api/userInfo'
  import { Toast } from 'mint-ui'

  export default {
    name: 'Detail',
    data () {
      return {
        id: '',
        detailData: {}, // 歌单详情
        creator: {}, // 创建者详情
      }
    },
    mounted() {
     const self = this
     self.id = self.$route.params.id 
     self.fetchPlaylistDetail()
    }, 
    methods: {
      // 获取歌单详情
      fetchPlaylistDetail() {
        const self = this
        getPlaylistDetail({
          id: self.id
        }).then(res => {
          self.detailData = res.playlist
          self.creator = res.playlist.creator
        }).catch(err => {
          Toast('获取歌单详情错误!')
        })
      }
    }
  }
</script>
<style lang="scss">
  @import './css/detail.scss';
</style>