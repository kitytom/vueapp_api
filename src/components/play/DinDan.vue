<template>
  <div>   <div><van-nav-bar
    title="生成订单"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</div>
<!-- 地址 -->
<div class="addresbox">
  <van-cell center title="1823078916" is-link  label="贵州省毕节市威宁县金钟镇" to="/adress" />
</div>
<!--  订单线-->
<van-divider
dashed
hairline
  :style="{ color: '#1AAEAE', borderColor: '#1AAEAE', padding: '0 26px' }"
>
</van-divider>
<div class="playbox">
  <ul>
    <li>金额</li>
    <li style="color:red">￥{{this.totlprice}}
    </li>
  </ul>
</div>
<!--  -->
<!-- 商品订单 -->
<div class="footerbox">
  <div class="footerbox-paly">
    <!-- <span>商品金额</span>
    <span>￥1000</span> -->
  </div>
  <div class="gotoplay" @click="showPopup">
    <span style="color:red">去支付</span>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" >
      <div class="weixinbox" @click="weixin">微信支付</div>
      <div class="zhifubao"  @click="weixin">支付宝支付</div>
      <div class="quxiao" @click.stop="quxiao">X</div>
   </van-popup>
</div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      showPay: false,
      totlprice: ''
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    showPopup () {
      this.show = true
    },
    quxiao () {
      this.show = false
    },
    weixin () {
      this.$router.push('/goplay')
    }
  },
  created () {
    this.totlprice = window.sessionStorage.getItem('totlprice')
  }
}
</script>

<style scoped>
.footerbox{
  font-size:17px ;
  position: fixed;
  bottom: 0px;
}
.footerbox-paly{
  width: 375px;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-between;
}
.gotoplay{
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #1AAEAE;
}
.weixinbox{
  width: 270px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
  background-color: aquamarine;
}
.zhifubao{
  margin-top: 20px;
  width: 270px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #1AAEAE;
  border-radius: 5px;
}
.quxiao{
  position: fixed;
  right: 20px;
  bottom: 130px;
}
.playbox{
  width: 200px;
  height: 100px;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 18px;
  background-color: #dfe4e4;
}

</style>
