<template>
  <div>
      <div>
        <van-nav-bar
      title="生成订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <div class="orderhr"></div>
  <!--  -->
  <div class="ordernav">
    <van-tabs
    v-model="active"
    type="card"
    background="#1AAEAE"
    color="black"
    >
      <van-tab title="全部">
        <van-card v-for="item in allcart" :key="item.id"
        num="1"
        :desc="item.title"
        :title="item.number"
        :thumb="item.homeimg"
        />
      </van-tab>

      <!--代付款  -->
      <!-- <van-tab title="代付款">
        <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="订单号:1214234"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">去付款</van-button>
  </template>
  </van-card>
      </van-tab> -->

      <!--  代发货-->
      <van-tab title="代发货">
        <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="订单号:1214234"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">联系商家发货</van-button>
  </template>
  </van-card>
      </van-tab>

      <!-- 已发货 -->
      <van-tab title="已发货">
        <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="订单号:1214234"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">查看物流</van-button>
  </template>
  </van-card>
      </van-tab>

      <!--交易完成  -->
      <van-tab title="交易完成">

      </van-tab>
    </van-tabs>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      active: '',
      allcart: []
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    // 拿到全部的订单
    async getallcart () {
      const { data: res } = await this.$http.get('/dindan/getdindan')
      console.log(res.data)
      this.allcart = res.data
    }
  },
  created () {
    this.getallcart()
  }
}
</script>

<style scoped>
.orderhr{
  border-bottom: 1px solid rgb(169, 169, 168);
}
.ordernav{
  margin-top: 10px;
}
</style>
