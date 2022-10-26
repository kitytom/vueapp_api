<template>
  <div>
    <div>
      <van-nav-bar
    title="账号管理"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</div>
<div class="orderhr"></div>
   <!--  -->
   <div class="usernamebox">
    <ul>
      <li>
        <span class="userone">昵称：</span>
        <span>{{this.$store.state.usermessage.nickname}}</span>
      </li>
      <li>
      <span class="userone">个性签名</span>
      <span>{{this.$store.state.usermessage.usertitle}}</span>
      </li>
      <li>
        <span class="userone">修改密码</span>
        <input type="text">
      </li>
    </ul>
   </div>
   <van-button  block class="butnon" color="#1AAEAE">保存</van-button>
   <van-button  block class="butnon" color="#1AAEAE" >退出并登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      history.back()
    },
    gobacklogin () {
      // 直接拿到用户名调用接口直接登录跳转到我的页面
      // this.$router.push('/my')
    }
  }
}
</script>

<style scoped>
.orderhr{
  border-bottom: 1px solid rgb(169, 169, 168);
}
.usernamebox{
  font-size: 17px;
  margin-bottom: 50px;
}
.usernamebox ul li {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;

}
.userone{
  display: inline-block;
  width: 90px;
}
.usernamebox ul li span{
   margin-left: 10px;
}
.usernamebox ul li input{
  height: 30px;
  border: 0;
  color: #1AAEAE;
  border-bottom: 1px solid rgb(189, 186, 186);
}
.butnon{
  width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
