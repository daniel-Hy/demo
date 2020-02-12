<template>
  <div class="mine-global">
    <div class="mine-global-cover">
      <div class="mine-head">
        <img class="avatar" src="//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg"/>
        <div class="mine-info">
          <div class="mine-info-nickName">
            <span>大元子</span>
            <span>开通黑胶VIP<i class="iconfont">&#xe606;</i></span>
          </div>
          <span class="mine-info-level">Lv9</span>
        </div>
        <ul class="mine-btn">
          <li>
            <i class="iconfont">&#xe60a;</i>
            <span>本地音乐</span>
          </li>
          <li>
            <i class="iconfont">&#xe60c;</i>
            <span>我的电台</span>
          </li>
          <li>
            <i class="iconfont">&#xe60b;</i>
            <span>我的收藏</span>
          </li>
          <li>
            <i class="iconfont">&#xeb9f;</i>
            <span>关注新歌</span>
          </li>
        </ul>
      </div>
      <div class="mine-body">
        <div class="download-list">
          <span class="download-list-title">
            <i class="iconfont">&#xe60a;</i>下载列表
          </span>
          <span class="download-list-tips">
            <i class="iconfont">&#xe606;</i>5项下载失败
          </span>
        </div>
        <div class="mine-music">
          <span class="mine-music-title">我的音乐</span>
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Mine',
    data () {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 10,
          freeMode: true,
        },
        musicList: [
          { isRecommend: false, iconfont: '&#xe60e;', iconColor: '#FC625A', title: '我喜欢的音乐', tips: '心动模式', isXD: true, bgImg: '//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg' },
          { isRecommend: false, iconfont: '&#xe689;', iconColor: '#fff', title: '私人FM', tips: '最懂你的推荐', isXD: false, bgImg: '//p2.music.126.net/6UcYavdWh8uqCVlnX1JdUA==/109951164476679445.jpg' },
          { isRecommend: true, iconfont: '&#xe60d;', iconColor: '#926262', title: '古典专区', tips: '专业古典大全', isXD: false, bgImg: '' },
          { isRecommend: true, iconfont: '&#xe60d;', iconColor: '#926262', title: '最嗨电音', tips: '专业电音平台', isXD: false, bgImg: '' },
          { isRecommend: true, iconfont: '&#xe60d;', iconColor: '#926262', title: 'ACG专区', tips: '好听好玩ACG', isXD: false, bgImg: '' }
        ]
      }
    }
  }
</script>

<style  lang="scss" scoped>
.mine-global{
  position: absolute;
  background: url('../assets/img/download.png');
  background-size: contain;
  background-repeat: no-repeat;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  top: 0;
  .mine-global-cover{
    background: rgba(0,0,0,0.3);
  }
  .mine-head{
    padding: 60px 15px 0 15px;
    .avatar{
      vertical-align: middle;
      display: inline-block;
      border-radius: 50%;
      width: 40px;
    }
  }
  .mine-info{
    vertical-align: middle;
    display: inline-block;
    text-indent: 5px;
    width: calc(100% - 45px);
    .mine-info-nickName{
      display: flex;
    }
    .mine-info-nickName span{
      flex: 1;
    }
    .mine-info-nickName .iconfont{
      float: right;
      font-size: 16px;
      margin-left: -5px;
    }
    .mine-info-nickName span:first-child{
      color: #fff;
      font-size: 16px;
      line-height: 16px;
    }
    .mine-info-nickName span:last-child{
      color: #999;
      text-align: right;
      font-size: 12px;
    }
    .mine-info-level{
      background: rgba(153, 153, 153, .7);
      border-radius: 10px;
      padding: 0px 8px;
      margin-left: 5px;
      text-align: center;
      font-size: 12px;
      line-height: 12px;
      color: #fff;
    }
  }
  .mine-btn{
    display: flex;
    margin: 25px 0 10px -15px;
    text-align: center;
    width: calc(100% + 30px);
    li{
      flex: 1;
      color: #fff;
    }
    li .iconfont{
      font-size: 32px;
    }
    li span{
      display: block;
      font-size: 14px;
    }
  }
  .mine-body{
    background: rgba(204, 204, 204, .7);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .download-list{
    padding: 15px;
    font-size: 14px;
    display: flex;
    .download-list-title{
      flex: 1;
      line-height: 20px;
    }
    .download-list-title .iconfont{
      vertical-align: middle;
      margin-right: 5px;
      font-size: 18px;
    }
    .download-list-tips{
      flex: 1;
      font-size: 12px;
      line-height: 20px;
      text-align: right;
    }
    .download-list-tips .iconfont{
      float: right;
      margin-right: -5px;
    }
  }
  .mine-music{
    background: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 200px;
    .mine-music-title{
      display: inline-block;
      padding: 15px;
      font-weight: bold;
    }
    .swiper-box{
      width: calc(100% - 30px);
    }
    .swiper-slide{
      background: #ccc;
      border-radius: 8px;
      height: 150px;
      overflow: hidden;
    }
    .slide-bgImg{
      width: 100%;
      height: 100%;
    }
    .slide-float{
      position: absolute;
      background: rgba(0, 0, 0, .4);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .isRecommend{
      display: block;
      padding: 8px 0;
      text-align: center;
      font-size: 12px;
      color: #fff;
      height: 16px;
    }
    .slide-float-body{
      text-align: center;
      margin-top: 10px;
    }
    .slide-float-body .iconfont{
      font-size: 28px;
      color: #fff;
    }
    .float-title{
      display: block;
      text-align: center;
      font-size: 12px;
      color: #fff;
    }
    .float-tips{
      position: absolute;
      padding: 12px 0;
      bottom: 0;
      text-align: center;
      font-size: 12px;
      color: #fff;
      width: 100%;
    }
  }
}
</style>