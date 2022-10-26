<template>
  <div>
    <div class="playbox">
      <ul>
        <li>金额</li>
        <li style="color:red">￥{{this.$store.state.playprice}}</li>
      </ul>
    </div>
    <button @click="queren">确认支付</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsdata: [{
        del: '',
        homeimg: '',
        id: '',
        number: '',
        price: '',
        title: '',
        totlprice: '',
        userid: ''
      }]
    }
  },
  methods: {
    async queren () {
    // 调用接口将订单添加到购物车
    // 根据car的id 可以查询到信息后再加入到订单中
      console.log(this.$store.state.cartid)
      const id = this.$store.state.cartid[0]
      const { data: res } = await this.$http.post('/cart/getcartid', { id: id })
      // console.log(res.data)

      this.goodsdata = res.data
      // console.log(this.goodsdata)
      const data = {
        price: this.$store.state.playprice,
        goodsid: id,
        homeimg: this.goodsdata[0].homeimg,
        title: this.goodsdata[0].title
      }
      console.log(data)
      const { data: re } = await this.$http.post('/dindan/postdinda', data)
      console.log(re)
      this.$router.push('/order')
    }
  }
}
</script>

<style scoped>
.playbox{
  width: 200px;
  height: 100px;
  line-height: 40px;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 18px;
  background-color: #98c6c6;
  padding-top: 30px;
  margin-top: 60px;
}
button{
  margin:40px 0px 0px 130px;
}
</style>
