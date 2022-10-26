<template>
  <div>
    <div><van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <!-- 商品 -->
  <div class="goodsshow" v-for="(item,index ) in carlist" :key="item.id">
    <div class="goodsradio" @click="goodsid(item.id)">
      <input type="radio" :checked="allcheck" @click="getgoodsnum(index,item.id)"/>
  </div>
  <div class="goodsImg">
    <img :src="item.homeimg" alt="" style="width:100px;height:100px">
  </div>
  <div class="goodstitle">
    <div class="titlebox">{{item.title}}</div>
    <div class="shuliang">X{{item.number}}</div>
    <div class="titleprice">
      <div class="totlpricebox">￥{{item.totlprice}}</div>
      <div class="aaddgod">
        <button @click="jiannum(item.number,index,item.id)">-</button>
        <button>{{item.number}}</button>
        <button @click="addnum(item.number,index,item.id)">+</button>
      </div>
    </div>
  </div>
</div>

<!-- 提交付款 -->
  <div class="playbox">
    <van-submit-bar :price="allprice*100" button-text="提交订单" @submit="onSubmit($event)" >
      <van-checkbox v-model="checked" @click="allgoods">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持配送, <span><router-link to="/play">修改地址</router-link> </span>
      </template>
    </van-submit-bar>
  </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      checked: false,
      carlist: [],
      count: 0,
      allcheck: false,
      allprice: 0,
      noallgoods: []
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    onSubmit (e) {
      // this.Toast('点击按钮')
      // console.log(this.allprice)
      // 如果是全选就将所有的商品添加到订单里面
      // this.$router.push('/dindan')
      if (this.allprice > 0) {
        this.$router.push('/dindan')
        this.$store.commit('getcart', this.allprice, this.noallgoods)
        this.$store.commit('getcartid', this.noallgoods)
      }
    },
    async getcart () {
      const { data: res } = await this.$http.get('/cart/getcart')
      // console.log(res.data)
      this.carlist = res.data
      this.$store.commit('getcartcount', this.carlist.length)
    },
    // 增加数量
    addnum (nm, index, id) {
      // 将数量加入到数据库中
      // console.log(nm, index, id)
      this.carlist[index].number = parseInt(nm) + 1
      this.carlist[index].totlprice = parseInt(this.carlist[index].price) + parseInt(this.carlist[index].totlprice)
      // 发起请求加到sql数据库中
      // console.log(this.carlist[index].number)
      // this.addsqlcart(this.carlist[index].totlprice, this.carlist[index].number, id)
      const sqldata = {
        number: this.carlist[index].number,
        totlprice: this.carlist[index].totlprice,
        id: id
      }
      this.addsqlcart(sqldata)
      this.checked = false
      this.allcheck = false
      this.allprice = 0
    },
    // 减
    jiannum (nm, index, id) {
      // 将数量加入到数据库中
      if (nm > 1) {
        this.carlist[index].number = parseInt(nm) - 1
        this.carlist[index].totlprice = parseInt(this.carlist[index].totlprice) - parseInt(this.carlist[index].price)

        const sqldata = {
          number: this.carlist[index].number,
          totlprice: this.carlist[index].totlprice,
          id: id
        }
        // console.log(sqldata)
        this.addsqlcart(sqldata)
      } else {
        alert('不能在减少了')
      }

      this.checked = false
      this.allcheck = false
      this.allprice = 0
    },
    // 点击复选框拿到当前商品的索引  根据索引拿到总的价格渲染到合计
    getgoodsnum (index, id) {
      // console.log(index)
      // console.log(this.carlist[index].totlprice)
      this.allprice = (parseInt(this.carlist[index].totlprice) + this.allprice)
      // 将商品的id加入到数组中便于付款后加入订单中
      this.noallgoods.push(id)
      // console.log(this.noallgoods)
    },
    // 点击全选的时候所有的都被选中
    allgoods () {
      this.allcheck = true
      for (let i = 0; i < this.carlist.length; i++) {
        if (this.checked === true) {
          // console.log(this.carlist[i].totlprice)
          this.allprice = parseInt(this.carlist[i].totlprice) + this.allprice
        } else {
          this.allprice = 0
        }
      }
      if (this.checked === false) {
        this.allcheck = false
      }
    },
    goodsid (id) {
      console.log('n' + id)
    },
    //
    async addsqlcart (data) {
      const { data: res } = await this.$http.post('/cart/addnumber', data)
      console.log(res)
    }
  },
  created () {
    this.getcart()
  }
}
</script>

<style scoped>
.totlpricebox{
  width: 100px;
  height: 30px;
}
.goodsshow{
  height: 125px;
  display: flex;
  margin-bottom: 10px;
}
.goodsradio{
  width: 30px;
  height: 20px;
  text-align: center;
  margin: 50px 0px 0px 10px;
}
.goodsImg{
  margin: 15px;
}
.goodstitle{
  width: 200px;
  height: 100px;
  font-size:18px ;
  margin-top: 20px;
  position: relative;
}
.titlebox{
  height:50px;
  width: 170px;
}
.shuliang{
  position: absolute;
  font-size: 16px;
  top: 1px;
  right: 5px;
}
.titleprice{
  display: flex;
}
.aaddgod{
  width: 120px;
  margin:6px 0px 0px 20px;
}
.aaddgod button{
  margin: 2px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
}
.playbox{
  margin-bottom:100px ;
}
  .text{
  height: 600px;
}
</style>
