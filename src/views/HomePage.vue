<template>
  <div>
    <div> <van-search
    v-model="value"
    shape="round"
    background="#1AAEAE"
    placeholder="请输入搜索关键词"
  />
</div>
  <div class="swiperbox">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1AAEAE" >
      <van-swipe-item style="width:375px;height:180px" v-for="(item,index ) in images" :key="index">
        <img :src="item.homeimg" alt="" style="width:100%;height:180px">
      </van-swipe-item>
    </van-swipe>
  </div>
<!--  -->
<div class="imgbox">
  <img src="../assets/1-3.png" alt="">
</div>
  <!-- 新品上市 -->
    <div class="newgoodsbox">
       <div class="newgoodsbox-title" >新品上线</div>
       <div class="forimg">
         <!-- item -->
        <div class="goodsimg" v-for="(item,index ) in newgoods" :key="index" @click="gogoods(item.id)">
          <img :src="item.homeimg" alt="">
          <div class="toptitle">
            {{item.title}}
          </div>
          <div class="newgoodsprice">{{item.price}}￥</div>
        </div>
       </div>
    </div>
    <!-- 热门商品 -->
    <div class="newgoodsbox">
      <div class="newgoodsbox-title" >热门商品</div>
      <div class="forimg">
       <div class="goodsimg" v-for="(item,index ) in hotgoods" :key="index" @click="newgogoods(item.id)">
         <img :src="item.homeimg" alt="">
         <div class="toptitle">
          {{item.title}}
         </div>
         <div class="newgoodsprice">{{item.price}}￥</div>
       </div>
      </div>
   </div>
   <!-- 最新推荐 -->
   <div class="bottonbox">
   <div class="newgoodsbox">
    <div class="newgoodsbox-title" >最新推荐</div>
    <div class="forimg">
     <div class="goodsimg" v-for="(item,index ) in znewgoods" :key="index" @click="zuinewgogoods(item.id)">
       <img :src="item.homeimg" alt="">
       <div class="toptitle">
        {{item.title}}
       </div>
       <div class="newgoodsprice">{{item.price}}￥</div>
     </div>

    </div>
 </div>
</div>

 <!-- tabbar -->
<my-tabbar></my-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: '',
      value: '',
      // 轮播图片 需要一个接口
      images: [],
      newgoods: [],
      hotgoods: [],
      znewgoods: []
    }
  },
  // 三个数据库的接口 跳转到同一个页面 并且发起请求
  // 跳转到商品详情页
  methods: {
    // 新品上市
    async gogoods (id) {
      // 拿到id发起请求
      const { data: res } = await this.$http.post('/api/getnewgoods', { id: id })
      window.sessionStorage.setItem('goodsimg', res.data[0].goodsimg)
      window.sessionStorage.setItem('homeimg', res.data[0].homeimg)
      window.sessionStorage.setItem('title', res.data[0].title)
      window.sessionStorage.setItem('price', res.data[0].price)
      this.$router.push('/goodsmes')
      // newgoods
    },
    // 热销产品详情页
    async newgogoods (id) {
      const { data: res } = await this.$http.post('/api/gethotgoods', { id: id })
      window.sessionStorage.setItem('goodsimg', res.data[0].goodsimg)
      window.sessionStorage.setItem('homeimg', res.data[0].homeimg)
      window.sessionStorage.setItem('title', res.data[0].title)
      window.sessionStorage.setItem('price', res.data[0].price)
      this.$router.push('/goodsmes')
      // hotgoods
    },
    // 最新产品详情页
    async zuinewgogoods (id) {
      const { data: res } = await this.$http.post('/api/getznewgoods', { id: id })
      // this.$store.commit('getgoods', res.data)
      // console.log(res.data[0].goodsimg)
      window.sessionStorage.setItem('goodsimg', res.data[0].goodsimg)
      window.sessionStorage.setItem('homeimg', res.data[0].homeimg)
      window.sessionStorage.setItem('title', res.data[0].title)
      window.sessionStorage.setItem('price', res.data[0].price)
      this.$router.push('/goodsmes')
      // tuijgoods
    },
    async swiper () {
      const { data: res } = await this.$http.get('/api/getswiper')
      this.images = res.data
      //  新品上线
      const { data: re } = await this.$http.get('/api/getnewgoods')
      this.newgoods = re.data
      // 热门商品
      const { data: ret } = await this.$http.get('/api/gethotgoods')
      this.hotgoods = ret.data
      // 最新
      const { data: retr } = await this.$http.get('/api/getznewgoods')
      this.znewgoods = retr.data
    }
  },
  created () {
    this.swiper()
  }

}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.imgbox img{
  width: 100%;
  margin: 5px 0px 5px 0px;
}
.newgoodsbox-title{
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: rgb(236, 236, 236);
  color: #1AAEAE;
  font-size: 18px;
}
.forimg{
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 17px;
}
.goodsimg{
 width: 179px;
 height:260px;
 margin:3px 0px 3px 6px;
 border-bottom:1px solid wheat;
 background-color: rgb(255, 255, 255);
}
.goodsimg img{
  width: 179px;
  height:180px;
}
.toptitle{
  height: 45px;

}
.newgoodsprice{
 height: 26px;
 line-height: 26px;
color: #1AAEAE;
}
.bottonbox{
 margin-bottom: 60px;
}
</style>
