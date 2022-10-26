<template>
  <div class="prodecetopbox">
    <div>
      <van-nav-bar title="商品详情页" left-text="返回" left-arrow   @click-left="onClickLeft">
        <template #right>
          <van-icon name="weapp-nav" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <!-- topgoods -->
    <div class="topimgbox">
      <img :src="this.homeimg" alt="">

    </div>
    <div class="producetitle">
      {{this.title}}
    </div>
    <div class="baoyou">
      <div>免费顺丰包邮</div>
       <!-- window.sessionStorage.getItem('price') -->
     <div>￥{{this.price}}</div>
    </div>

    <!--  -->
    <div class="canshu">
      <ul>
        <li>概述</li>
        <li>|</li>
        <li>参数</li>
        <li>|</li>
        <li>安装服务</li>
        <li>|</li>
        <li>常见问题</li>
      </ul>
    </div>
    <!--  -->
    <div class="godshowimg">
      <img :src="this.goodsimg" alt="">
    </div>
    <!-- <div class="godshowimg">
      <img src="../../assets/goods/22.jpg" alt="">
    </div> -->
    <!-- <div class="godshowimg">
      <img src="../../assets/goods/23.jpg" alt="">
    </div> -->

    <!-- <div class="godshowimg">
      <img src="../../assets/goods/24.jpg" alt="">
    </div> -->

    <!-- <div class="godshowimg">
      <img src="../../assets/goods/25.jpg" alt="">
    </div> -->

    <!-- <div class="godshowimg">
      <img src="../../assets/goods/26.jpg" alt="">
    </div> -->

    <!-- <div class="godshowimgbotom">
      <img src="../../assets/goods/27.jpg" alt="">
    </div> -->
    <!-- 底部购物车 -->
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车"  badge="12" />
        <van-goods-action-button color="linear-gradient(to right,#6bd8d8,#5eb4b4 )" type="warning" text="加入购物车" @click="addcart" />
        <van-goods-action-button
        color="background: linear-gradient(to right, #0dc3c3, #098888)"
        type="danger" text="立即购买" @click="goplay" >
        </van-goods-action-button>
      </van-goods-action>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      gooddata: [],
      goodsimg: '',
      homeimg: '',
      title: '',
      price: ''
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    goplay () {
      // 点击立即购买顺便加入购物侧在去支付页面
      const ses = sessionStorage.getItem('token')
      // token为空 让其跳转到未登录界面
      if (!ses) {
        this.$router.push('/weilogin')
        return
      } else {
        this.$router.push('/cart')
      }
      this.$router.push('/dindan')
    },
    async addcart () {
      const ses = sessionStorage.getItem('token')
      // token为空 让其跳转到未登录界面
      if (!ses) {
        this.$router.push('/weilogin')
        return
      } else {
        this.$router.push('/cart')
      }
      // 拿到商品信息加入购物车
      const data = {
        title: this.title,
        homeimg: this.homeimg,
        price: this.price,
        totlprice: this.price
      }
      console.log(data)
      const { data: res } = await this.$http.post('/cart/addcart', data)
      console.log(res)
    }
  },
  created () {
    // window.sessionStorage.setItem('goodsimg', res.data[0].goodsimg)
    //   window.sessionStorage.setItem('homeimg', res.data[0].homeimg)
    //   window.sessionStorage.setItem('title', res.data[0].title)
    //   window.sessionStorage.setItem('price', res.data[0].price)
    this.goodsimg = window.sessionStorage.getItem('goodsimg')
    this.homeimg = window.sessionStorage.getItem('homeimg')
    this.title = window.sessionStorage.getItem('title')
    this.price = window.sessionStorage.getItem('price')
    console.log(window.sessionStorage.getItem('goodsimg'))
    console.log(window.sessionStorage.getItem('homeimg'))
    console.log(window.sessionStorage.getItem('title'))
    console.log(window.sessionStorage.getItem('price'))
  }

}
</script>

<style scoped>
.prodecetopbox{
  font-size: 20px;
}
.van-goods-action-button--warning {
  background: linear-gradient(to right,#6bd8d8,#5eb4b4 )
}
.van-goods-action-button--danger {
  background: linear-gradient(to right, #0dc3c3, #098888)
}
.topimgbox{
  width: 347px;
  height: 400px;
  margin: 0 auto;
}
.topimgbox img{
 width: 347px;
 height: 400px;
 border-radius: 5px;

}

  .producetitle{
    padding-left: 6px;
    padding-right: 6px;
    height: 60px;
  }
  .baoyou{
    padding: 2px 0px 0px 6px;
  }
  .canshu {
    width: 350px;
    margin: 0 auto;

  }
  .canshu ul {
  display: flex;
  justify-content: space-around;
  }
  .canshu ul li{
    margin: 6px 2px 2px 6px;
  }
  .godshowimg img , .godshowimgbotom img{
    width: 100%;
  }
  .godshowimgbotom{
  margin-bottom:50px ;
  }
  .goumai{
    margin-bottom: 50px;
    position: fixed;
    bottom: 60px;
  }
</style>
