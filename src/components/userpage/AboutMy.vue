<template>
  <div class="aboutmybox">
    <div><van-nav-bar
      title="关于我们"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>

  <!--  -->
  <div class="userjieshao">
    <van-swipe style="height: 473px;" loop vertical  :autoplay="3000" indicator-color="#1AAEAE">
      <van-swipe-item><img src="../../assets/3.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/12.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/3.png" alt=""></van-swipe-item>
    </van-swipe>
  </div>
  <div class="footbox">
    引领全球，改变世界，加入我们吧。
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      history.back()
    }
  }
}
</script>

<style>
.aboutmybox{
  font-size: 16px;
}
.van-swipe-item{
  background-color: antiquewhite;
}
.userjieshao img{
  width: 100%;
}
.footbox{
width: 300px;
height: 50px;
line-height: 50px;
margin: 0 auto;
}
</style>
