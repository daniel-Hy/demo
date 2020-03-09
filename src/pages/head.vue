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
  import Play from '@/components/play'

  export default {
    name: 'Head',
    props: ['tabSelect'],
    components: { Play },
    data () {
      return {
        icon:'\ue626 搜索音乐、视频、歌词、电台'
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import './css/head.scss';
</style>