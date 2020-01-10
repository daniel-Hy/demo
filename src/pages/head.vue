<template>
  <div class="page-head">
    <span class="head-left">
      <i class="iconfont">&#xe64f;</i>
    </span>
    <div class="head-center">
      <input type="text" class="searchText"/>
    </div>
    <span class="head-right">
      <i class="iconfont">&#xe64f;</i>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-head{
    box-shadow: 0 0 6px #d9d9d9;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 40px;
    width: 100%;
    height: 40px;
    z-index: 99;
    .head-left,
    .head-center,
    .head-right{
      float: left;
    }
    .head-left,
    .head-right{
      text-align: center;
      width: 40px;
      height: 40px;
    }
    .head-center{
      position: relative;
      width: calc(100% - 80px);
      .searchText{
        position: absolute;
        background: #fafafa;
        border-radius: 15px;
        outline: none;
        text-align: center;
        top: 5px;
        left: 0;
        border: 0;
        padding: 0;
        width: 100%;
        height: 30px;
      }
    }
  }
</style>