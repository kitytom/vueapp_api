<template>
  <div class="wloginbox">
    <div><van-nav-bar
      title="未登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
    <h5>你还未登录请先登录</h5>
    <van-button  block class="butnon" color="#1AAEAE" to="/login">去登录</van-button>
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

<style scoped>
h5{
  width: 200px;
  margin-left:50px ;
}
.van-button{
  width: 300px;
  margin: 0 auto;
}
</style>
