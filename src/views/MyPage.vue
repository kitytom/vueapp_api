<template>
  <div>
    <div><van-nav-bar
      title="我的"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
    <div class="userbox">
      <div class="userimgbox"><img :src="userlist[0].user_pic" alt="" style="width:80px;height:80px"></div>
      <div class="usertex">
        <ul>
          <li>昵称：{{userlist[0].nickname}}</li>
          <li>登录名：{{userlist[0].username}}</li>
          <li>个性签名：{{userlist[0].usertitle}}</li>
        </ul>
      </div>
    </div>
    <!-- liat -->
  <div>
    <van-cell-group>
      <van-cell title="我的订单" is-link  to="/order"/>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="账号管理" is-link to="/username" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="地址管理" is-link to="/adress" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="关于我们" is-link to="/aboutmy"/>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="上传头像" is-link to="/userimg"/>
    </van-cell-group>
    <!-- <van-cell-group>
      <van-cell title="去登录" is-link to="/login"/>
    </van-cell-group> -->
    <van-cell-group>
      <van-cell title="退出登录" is-link @click="gouback"/>
    </van-cell-group>
    <van-divider />
  </div>
    <!-- tabbar -->
    <my-tabbar></my-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: '',
      username: '',
      usertitle: '',
      userlist: [{
        adress: '',
        email: '',
        nickname: '',
        user_pic: '',
        username: '',
        usertitle: ''
      }]
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    async getUser () {
      const { data: res } = await this.$http.get('/my/getuser')
      this.userlist = res.data
      const data = {
        nickname: this.userlist[0].nickname,
        usertitle: this.userlist[0].usertitle
      }
      this.$store.commit('getuder', data)
    },
    gouback () {
      window.sessionStorage.clear('token')
      this.$router.push('/')
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style scoped>
.userbox{
  width: 360px;
  margin: 0 auto;
  margin-top: 20px;
  height: 140px;
  display: flex;
  font-size: 16px;
  border-radius: 10px;
  background-color: rgb(149, 228, 241);
}
.userimgbox{
  margin: 20px;
}
.usertex{
 margin: 25px 0px 0px 0px;
}
.usertex ul li{
  height: 26px;
}
</style>
