<template>
  <div class="mine-global" :style="{'background-image': 'url('+userInfo.backgroundUrl+')'}">
    <div class="mine-global-cover">
      <div class="mine-head">
        <img class="avatar" :src="$store.getters.getStorage.avatarUrl"/>
        <div class="mine-info">
          <div class="mine-info-nickName">
            <span>{{$store.getters.getStorage.nickname}}</span>
            <span>开通黑胶VIP<i class="iconfont">&#xe606;</i></span>
          </div>
          <span class="mine-info-level">Lv{{userLevel}}</span>
        </div>
        <ul class="mine-btn">
          <li>
            <i class="iconfont">&#xe60a;</i><span>本地音乐</span>
          </li>
          <li>
            <i class="iconfont">&#xe60c;</i><span>我的电台</span>
          </li>
          <li>
            <i class="iconfont">&#xe60b;</i><span>我的收藏</span>
          </li>
          <li>
            <i class="iconfont">&#xeb9f;</i><span>关注新歌</span>
          </li>
        </ul>
      </div>
        <!-- 我的音乐 -->
        <div class="mine-music">
          <div>
            <span class="mine-music-title">我的音乐</span>
          </div>
          <swiper class="swiper-box" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item, index) in musicList" :key="index">
              <img class="slide-bgImg" :src="item.bgImg" v-if="item.bgImg"/>
              <div class="slide-float" :style="{background: item.bgImg?'':'#F5EFF1'}">
                <span class="isRecommend" :style="{color: item.bgImg?'':'rgba(146, 98, 98, .5)'}">{{item.isRecommend?'推荐':''}}</span>
                <div class="slide-float-body">
                  <i class="iconfont" v-html="item.iconfont" :style="{color: item.iconColor}"></i>
                  <span class="float-title" :style="{color: item.bgImg?'':'#926262'}">{{item.title}}</span>
                </div>
                <span class="float-tips" :style="{color: item.bgImg?'':'rgba(146, 98, 98, .5)'}">{{item.tips}}</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 最近播放 -->
        <div class="recentTime">
          <div class="part-head">
            <span class="mine-music-title">最近播放</span>
          </div>
          <swiper class="swiper-box" :options="recentOption">
            <swiper-slide class="swiper-slide recent-slide" v-for="(item, index) in 4" :key="index">
              <img class="recent-coverImg" src="//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg"/>
              <div class="recent-info">
                <span>全部已播放歌曲</span>
                <span>300首</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 歌单 -->
        <div style="background: #fff;padding-top: 20px;">
          <ul class="songsList-nav">
            <li @click="tabClick(1)" :style="{color: songsActive=='container1'?'#000':'#999'}">创建歌单</li>
            <li @click="tabClick(2)" :style="{color: songsActive=='container2'?'#000':'#999'}">收藏歌单</li>
          </ul>
          <mt-tab-container class="songsList-box" v-model="songsActive">
            <mt-tab-container-item id="container1">
              <div class="songsList-item" v-for="item in createList" @click="toDetail(item)">
                <img class="songsList-coverUrl" :src="item.coverImgUrl"/>
                <div class="songsList-name">
                  <span>{{item.name}}</span>
                  <span>{{item.trackCount}}首</span>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="container2">
              <div class="songsList-item" v-for="item in collectList" @click="toDetail(item)">
                <img class="songsList-coverUrl" :src="item.coverImgUrl"/>
                <div class="songsList-name">
                  <span>{{item.name}}</span>
                  <span>{{item.trackCount}}首</span>
                </div>
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getUserInfo, getUserSubcount, getUserPlaylist } from '@/api/userInfo'
  import { Toast } from 'mint-ui'

  export default {
    name: 'Mine',
    data () {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 10,
          freeMode: true,
        },
        recentOption: {
          slidesPerView: 2,
          spaceBetween: 10,
          freeMode: true,
        },
        musicList: [
          { isRecommend: false, iconfont: '&#xe60e;', iconColor: '#FC625A', title: '我喜欢的音乐', tips: '心动模式', isXD: true, bgImg: '' },
          { isRecommend: false, iconfont: '&#xe689;', iconColor: '#926262', title: '私人FM', tips: '最懂你的推荐', isXD: false, bgImg: '' },
          { isRecommend: true, iconfont: '&#xe60d;', iconColor: '#926262', title: '古典专区', tips: '专业古典大全', isXD: false, bgImg: '' },
          { isRecommend: true, iconfont: '&#xe60d;', iconColor: '#926262', title: '最嗨电音', tips: '专业电音平台', isXD: false, bgImg: '' },
          { isRecommend: true, iconfont: '&#xe60d;', iconColor: '#926262', title: 'ACG专区', tips: '好听好玩ACG', isXD: false, bgImg: '' }
        ],
        userLevel: '', // 用户等级
        userInfo: {}, // 用户信息
        songsActive: 'container1',
        songsList: [], // 用户歌单
        createList: [], // 创建歌单列表
        collectList: [], // 收藏歌单列表
      }
    },
    created() {
      const self = this
      self.fetchUserInfo()
      self.fetchUserPlaylist()
    },
    methods: {
      // 获取用户详情
      fetchUserInfo() {
        const self = this
        const uid = self.$store.getters.getStorage.id
        getUserInfo({
          uid: uid
        }).then(res => {
          self.userLevel = res.level
          self.userInfo = res.profile
        }).catch(err => {
          Toast('获取用户详情错误!')
        })
      },
      // 获取用户歌单
      fetchUserPlaylist() {
        const self = this
        const uid = self.$store.getters.getStorage.id
        const nickname = self.$store.getters.getStorage.nickname
        getUserPlaylist({
          uid: uid
        }).then(res => {
          self.songsList = res.playlist
          self.musicList[0].bgImg = self.songsList[0].coverImgUrl
          self.songsList.map((item, index) => {
            if (index>0) {
              if (item.creator.nickname == nickname) self.createList.push(item)
              else self.collectList.push(item)
            }
          })
        }).catch(err => {
          Toast('获取用户歌单错误!')
        })
      },
      // 切换歌单
      tabClick(type) {
        const self = this
        self.songsActive = 'container' + type
      },
      // 跳转详情
      toDetail(item) {
        const self = this
        self.$router.push({name: 'detail', params: {id: item.id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './css/mine.scss';
</style>