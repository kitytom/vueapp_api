<template>
  <div class="adresslist">
    <div>
    <van-nav-bar
    title="地址管理"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</div>
<div class="orderhr"></div>

<!--@add="onAdd"
  @edit="onEdit"  -->
  <div class="radiobox" v-for="item in listadress" :key="item.id" >
    <div class="radioitem">
      <van-radio-group v-model="radio">
      <van-radio name="1"></van-radio>
    </van-radio-group>
    </div>
<!--  -->
   <div class="adresitem">
    <ul>
       <li>姓名：{{item.name}}-<span>手机：{{item.phone}}</span></li>
       <li>地址:{{item.city}}{{item.adressmes}}</li>
    </ul>
   </div>
    <div class="eiderbox" @click="onEdit(item.name,item.phone,item.city,item.adressmes,item.id)">编辑</div>
  </div>
<div class="btnbox">
   <van-button type="primary" color="#1AAEAE" size="large" @click="onAdd">添加地址</van-button>
</div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 'false',
      listadress: [
      ]
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    onAdd () {
      // Toast('新增地址');
      this.$router.push('/play')
    },
    onEdit (name, phone, city, adressmes, id) {
      console.log(id)
      // 拿到地址填充到添加地址页面
      console.log(name, phone, city, adressmes)
      const data = {
        name: name,
        phone: phone,
        city: city,
        adressmes: adressmes,
        id: id
      }
      console.log(data)
      this.$store.commit('getadress', data)
      // console.log(this.$store.state.adress.name1)
      this.$router.push('/eidit')
    },
    async getadress () {
      const { data: res } = await this.$http.get('/adress/getadress')
      // console.log(res)
      this.listadress = res.data
    }
  },
  created () {
    this.getadress()
  }
}
</script>

<style scoped>
.adresslist{
 font-size: 16px;
}
.eiderbox{
  width: 45px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 2px;
  background-color: #1AAEAE;
  margin: 20px 0px 0px 0px;
}
li{
  list-style-type:none;
}
.adresitem{
  margin-top: 10px;

}
.adresitem ul li{
  width: 280px;
  margin-bottom: 3px;
  margin-left: 10px;
}
.orderhr{
  border-bottom: 1px solid rgb(169, 169, 168);
}
.radioitem{
  margin-top: 20px;
  margin-left: 10px;
}
.radiobox{
  width: 370px;
  height: 70px;
  margin: 10px 10px 0px 0px;
  background-color: rgb(231, 233, 235);
  display: flex;
  margin-bottom: 10px;
}
.btnbox{
  width: 100%;
  position: fixed;
  bottom: 0px;
}
</style>
