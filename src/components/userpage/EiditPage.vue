<template>
  <div class="addressEidit">
    <div><van-nav-bar
      title="收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
    <!-- <div><van-nav-bar
      title="收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <li >
   <div class="cityitem">
    <div>
    <span>姓名：</span>
    <input type="text" placeholder="收货人姓名" v-model="name"></div>
   </div>

   <div class="cityitem">
    <div>
    <span>电话：</span>
    <input type="text" placeholder="收货人电话" v-model="phone">
    </div>
   </div>

   <div class="citybox">
    <span>省份/市/县区</span> <br/>
    <span @click="toAddress">{{city}}</span>
   </div>

   <div class="cityitem">
    <div>
    <span>详细地址</span>
    <input type="text" placeholder=":" v-model="adressmesg">
    </div>
   </div>

   <div class="right r">
     <div class="city" @click="toAddress">选择地址</div>

   <i class="arrow-r"> </i>
   </div>
  </li>
  <v-distpicker type="mobile" @selected='selected' v-show="addInp" class="area1">
  </v-distpicker>
  <div class="mask" v-show="mask"></div>
   <div class="bottonbox" @click="btnsql">确认</div> -->

   <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="phone"
        type="texte"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
      readonly
      clickable
      name="城市"
      :value="city"
      label="城市"
      placeholder="城市"
      @click="toAddress"
    />
      <van-field
      v-model="adressmes"
      name="详细地址"
      label="详细地址"
      placeholder="详细地址"
      :rules="[{ required: true, message: '详细地址' }]"
    />

    <v-distpicker type="mobile" @selected='selected' v-show="addInp" class="area1">
    </v-distpicker>
    <div class="mask" v-show="mask"></div>
     <div class="bottonbox" @click="btnsql">确认</div>
    </van-form>
   </div>

  </div>

  </template>

<script>
import VDistpicker from 'v-distpicker'
export default {
  components: { VDistpicker },
  // name: 'area1',
  data () {
    return {
      city: '请选择',
      addInp: false,
      mask: false,
      name: '',
      phone: '',
      adressmes: ''
    }
  },
  methods: {
    showPicker () {

    },
    onSubmit (values) {
      // console.log('submit', values)
    },
    onClickLeft () {
      history.back()
    },
    toAddress () {
      this.mask = true
      this.addInp = true
    },
    // 省市区三级联动
    selected (data) {
      this.mask = false
      this.addInp = false
      this.city = data.province.value + ' ' + data.city.value + ' ' + data.area.value
    },
    async btnsql () {
      // console.log(this.city, this.adressmes, this.name, this.phone)
      const dat = {
        city: this.city,
        adressmes: this.adressmes,
        name: this.name,
        phone: this.phone,
        id: this.$store.state.adress.id
      }
      // console.log(dat)
      // console.log(this.$store.state.adress.id)
      // 更新地址
      const { data: res } = await this.$http.post('/adress/eiditdress', dat)
      console.log(res)
      this.city = ''
      this.adressmes = ''
      this.name = ''
      this.phone = ''
    },
    // 从编辑页面跳转过来更改
    diancong () {
      this.city = this.$store.state.adress.city
      this.adressmes = this.$store.state.adress.adressmes
      this.name = this.$store.state.adress.name
      this.phone = this.$store.state.adress.phone
      // console.log(this.adressmes)
    }
  },
  created () {
    this.diancong()
  }
}
</script>

  <style scoped>
  .usereidit{
    width: 200px;
    height: 50px;
  }
  .citybox{
    height: 60px;
    margin-bottom: 10px;
    background-color:rgb(248, 246, 244) ;
  }
  .citybox span{
    margin-left: 20px;
    display: inline-block;
    height: 26px;
  }
  .addressEidit{
   font-size: 16px;
  }
  .cityitem{
    margin-bottom: 10px;
    height: 50px;
    line-height: 50px;
    background-color: rgb(248, 246, 244);
  }
  .cityitem div{
    margin-left:20px ;
  }
  input{
    border: 0px;
    height: 30px;
    margin-left: 10px;
    background-color: rgb(248, 246, 244);
  }
   li{
   list-style: none;
   }
   .area1{
   width: 100%;
   height: 45%;
   position:fixed;
   left: 0;
   bottom: 0;
   overflow-y: scroll;
   }
   .distpicker-address-wrapper .address-header ul{
   position:fixed !important;
   left: 0 !important;
   top: 0 !important;
   }
   .bottonbox{
    width: 160px;
    height: 32px;
    margin: 0 auto;
    margin-top: 80px;
    line-height: 32px;
    text-align: center;
    border-radius:8px ;
    background-color: #1AAEAE;
   }
  </style>

<!--
<template>
  <div class="address-edit-box">

    <div class="topnav">
      <van-nav-bar
      title="我的"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
  </div>
</template>

<script>
import { Toast } from 'vant'
import area from '../Address/area.js'
export default {
  data () {
    return {
      // eslint-disable-next-line no-undef
      areaList: {},
      searchResult: []
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  },
  created () {
    this.areaList = area.AddressInfo
  }
}
</script>

<style scoped>
</style> -->
