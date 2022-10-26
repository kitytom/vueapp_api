<template>
  <div class="loginbox">
    <div><van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <div>
    <van-divider  :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" />
  </div>
  <!--  -->
  <div class="imgbox">
    <img src="../assets/1-1.jpg" alt="">
  </div>
  <!-- form -->
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="账号"
        placeholder="username"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
      style="margin-top: 20px;"
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="password"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div class="goreuser">
      <router-link to="/reguser">没有账号去注册</router-link>
    </div>
    <div style="margin: 20px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
  </div>
</template>

<script>

export default {

  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    // 登录
    async onSubmit (values) {
      // console.log('submit', values)
      const { data: res } = await this.$http.post('/api/login', values)
      // console.log(res.token)
      const tok = res.token
      if (res.token) {
        window.sessionStorage.setItem('token', tok)
        this.$router.push('/my')
      } else {
        console.log('登录失败')
      }
      this.getcart()
    },
    async getcart () {
      const { data: res } = await this.$http.get('/cart/getcart')
      // console.log(res.data)
      this.carlist = res.data
      this.$store.commit('getcartcount', this.carlist.length)
    },
    success (obj) {
      this.verify = true
      obj.refresh()
    }

  }
}

</script>

<style scoped>
.loginbox{
  font-size: 16px;
}
.goreuser{
  height: 30px;
  line-height: 30px;
  margin-left: 26px;
}
.imgbox{
width: 100%;
height: 220px;
}
.imgbox img{
  width: 100%;
  height: 240px;
  }
</style>
