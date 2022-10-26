<template>
  <div>
    <div><van-nav-bar title="分类"
      left-text="返回"
      left-arrow
      @click-left="goback"
      @click-right="gosearch">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
     <div class="pointbox">
      <div class="pointleft">
        <van-sidebar v-model="active" >
          <van-sidebar-item
          :title="item.name"
          to="/nanz"
          v-for="item in pointlist"
          :key="item.id"
          @click="showpoint(item.name,item.id)"
          />
        </van-sidebar>
      </div>
      <div class="pointright">
        <div><h4>{{name}}</h4></div>
        <div>
          <van-grid :column-num="2">
            <van-grid-item v-for="item in pointitem" :key="item.id" :icon="item.ico" :text="item.title" />
          </van-grid>
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
      pointlist: [],
      name: '',
      pointitem: []
    }
  },
  methods: {
    onClickLeft () {
      history.back()
    },
    goback () {
      this.$router.push('/')
    },
    gosearch () {
    },
    // 获取分类
    async getpoint () {
      const { data: res } = await this.$http.get('/api/getpoint')
      this.pointlist = res.data
    },
    showpoint (name, id) {
      // console.log(name, id)
      switch (id) {
        case 1:
          this.name = name
          this.getjiaju()
          break
        case 2:
          this.name = name
          this.getshipin()
          break
        case 3:
          this.name = name
          this.gitman()
          break
        case 4:
          this.name = name
          this.getdainqi()
          break
        case 5:
          this.name = name
          this.getphone()
          break
        case 6:
          this.name = name
          this.getxiebao()
          break
        case 7:
          this.name = name
          this.getgirl()
          break
        case 8:
          this.name = name
          this.getyurinfu()
          break
        case 9:
          this.name = name
          this.getqiuzhaung()
          break
      }
    },
    // 获取分类中的电器
    async getdainqi () {
      const { data: res } = await this.$http.get('/api/getdainqi')
      this.pointitem = res.data
    },
    // 获取分类中的手机
    async getphone () {
      const { data: res } = await this.$http.get('/api/getphone')
      this.pointitem = res.data
    },
    // 获取分类中的食品
    async getshipin () {
      const { data: res } = await this.$http.get('/api/getshipin')

      this.pointitem = res.data
    },
    // 获取分类中的鞋包
    async getxiebao () {
      const { data: res } = await this.$http.get('/api/getxiebao')
      this.pointitem = res.data
    },
    // 获取分类中的男装
    async gitman () {
      const { data: res } = await this.$http.get('/api/gitman')
      this.pointitem = res.data
    },
    // 获取分类中的家具
    async getjiaju () {
      const { data: res } = await this.$http.get('/api/getjiaju')
      this.pointitem = res.data
    },
    // 获取分类中的秋装
    async getqiuzhaung () {
      const { data: res } = await this.$http.get('/api/getqiuzhaung')
      this.pointitem = res.data
    },
    // 获取分类中的羽绒服
    async getyurinfu () {
      const { data: res } = await this.$http.get('/api/getyurinfu')
      this.pointitem = res.data
    },
    // 获取分类中的女装
    async getgirl () {
      const { data: res } = await this.$http.get('/api/getgirl')
      this.pointitem = res.data
    }
  },
  created () {
    this.getpoint()
    this.showpoint('家具', 1)
  }
}
</script>

<style>
.pointbox{
  font-size:16px;
  display: flex;
}
.pointleft{
  width: 120px;
  height: 600px;
  text-align: center;
}
.pointleft .van-sidebar{
  width: 130px;
}
.pointright{
  margin-left: 15px;
}
</style>
