<template>
  <div class="loginbox">
    <div><van-nav-bar
      title="注册"
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
    <img src="../assets/1.png" alt="">
  </div>
  <!-- form -->
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
      style="margin-top: 20px;"
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div class="goreuser">
      <router-link to="/login">去登录</router-link>
    </div>
    <div style="margin: 20px;">
      <van-button round block type="primary" native-type="submit">
        注册
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
    async onSubmit (values) {
      console.log('submit', values)
      const { data: res } = await this.$http.post('/api/reguser', values)
      console.log(res)
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
height: 200px;
}
</style>
