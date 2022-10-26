<template>
  <div>
    <!-- <van-tabbar v-model="active" active-color="#1AAEAE" inactive-color="#000">
     <van-tabbar-item icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
     <van-tabbar-item icon="points"><router-link to="/point">分类</router-link></van-tabbar-item>
     <van-tabbar-item icon="shopping-cart-o"><router-link to="/cart" badge="5">购物车</router-link></van-tabbar-item>
     <van-tabbar-item icon="friends-o"><router-link to="/my">我的</router-link></van-tabbar-item>
   </van-tabbar> -->
  <van-tabbar v-model="active" router>
  <van-tabbar-item icon="home-o"  to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="points"  to="/ponint">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" :badge="count" @click="pandlogin">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o"  @click="mylogin">我的</van-tabbar-item>
  </van-tabbar>
   </div>
</template>

<script>
export default {
  data () {
    return {
      active: '',
      // 购物车图标的数量
      count: 3
    }
  },
  methods: {
    pandlogin () {
      const ses = sessionStorage.getItem('token')
      // token为空 让其跳转到未登录界面
      if (!ses) {
        this.$router.push('/weilogin')
      } else {
        this.$router.push('/cart')
      }
    },
    mylogin () {
      const ses = sessionStorage.getItem('token')
      // token为空 让其跳转到未登录界面
      if (!ses) {
        this.$router.push('/weilogin')
      } else {
        this.$router.push('/my')
      }
    }
  },
  created () {
    this.count = this.$store.state.count
  }
}
</script>

<style>

</style>
