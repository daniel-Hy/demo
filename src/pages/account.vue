<template>
  <div class="page-account">
    <div class="vip-box">
      <img width="100%" src="../assets/img/vipImg.png"/>
    </div>
    <div class="stickyDiv"><div></div></div>
    <div class="userInfo-box">
      <div class="userInfo-head">
        <img class="avatar" :src="$store.getters.getStorage.avatarUrl"/>
        <span class="nickName">{{$store.getters.getStorage.nickname}}</span>
        <div class="signIn"><i class="iconfont">&#xe618;</i><span>签到</span></div>
      </div>
      <ul class="gn-list">
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 20px;">&#xe609;</i></span>我的消息
        </li>
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 30px;">&#xe61b;</i></span>我的好友
        </li>
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 24px;">&#xe71c;</i></span>个人主页
        </li>
        <li class="gn-list-info">
          <span class="list-info-span"><i class="iconfont" style="font-size: 32px;">&#xe696;</i></span>个性装扮
        </li>
      </ul>
      <!-- 创意者中心 -->
      <div class="creatierCenter">
        <div class="creatier-click">
          <i class="iconfont" style="font-size: 30px;">&#xe650;</i>
          <span class="creatier-cont">创意者中心</span>
        </div>
      </div>
      <!-- 音乐服务 -->
      <div class="musicServer">
        <p class="musicServer-head">音乐服务</p>
        <div class="musicServer-body">
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe604;</i>
            <span class="creatier-cont">演出</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe706;</i>
            <span class="creatier-cont">商城</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe61d;</i>
            <span class="creatier-cont">口袋彩铃</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe658;</i>
            <span class="creatier-cont">在线听歌免流量</span>
          </div>
        </div>
      </div>
      <!-- 小工具 -->
      <div class="musicServer">
        <p class="musicServer-head">小工具</p>
        <div class="musicServer-body">
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe61a;</i>
            <span class="creatier-cont">设置</span>
          </div>
          <div class="musicServer-item notArrow">
            <i class="iconfont" style="font-size: 20px;">&#xe614;</i>
            <span class="creatier-cont">夜间模式</span>
            <mt-switch v-model="isNight"></mt-switch>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe615;</i>
            <span class="creatier-cont">定时关闭</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe662;</i>
            <span class="creatier-cont">音乐黑名单</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe613;</i>
            <span class="creatier-cont">鲸云音效</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe604;</i>
            <span class="creatier-cont">添加Siri捷径</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe657;</i>
            <span class="creatier-cont">音乐闹钟</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe641;</i>
            <span class="creatier-cont">青少年模式</span>
          </div>
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="musicServer">
        <div class="musicServer-body">
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe605;</i>
            <span class="creatier-cont">我的订单</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe648;</i>
            <span class="creatier-cont">优惠券</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xeb9f;</i>
            <span class="creatier-cont">分享网易云音乐</span>
          </div>
          <div class="musicServer-item">
            <i class="iconfont" style="font-size: 20px;">&#xe612;</i>
            <span class="creatier-cont">关于</span>
          </div>
        </div>
      </div>
      <div class="logout">退出登录</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Account',
    data () {
      return {
        isNight: false
      }
    }
  }
</script>
<style lang="scss">
  .page-account{
    .mint-switch-core{
      border-color: #d9d9d9 !important;
      background-color: #FF352C !important;
    }
  }
</style>
<style lang="scss" scoped>
  @import './css/account.scss'
</style>