<template>
  <div class="nanzhaungbox">
    <div><h4>男装</h4></div>
    <div>
      <van-grid :column-num="2">
        <van-grid-item v-for="item in data" :key="item.id" icon="photo-o" text="文字" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    showpoint (id) {
      console.log(id)
      switch (id) {
        case 1:
          this.getjiaju()
          break
        case 2:
          this.getshipin()
          break
        case 3:
          this.gitman()
          break
        case 4:
          this.getdainqi()
          break
        case 5:
          this.getphone()
          break
        case 6:
          this.getxiebao()
          break
      }
    },
    // 获取分类中的电器
    async getdainqi () {
      const { data: res } = await this.$http.get('/api/getdainqi')
      console.log(res.data)
      this.data = res.data
    },
    // 获取分类中的手机
    async getphone () {
      const { data: res } = await this.$http.get('/api/getphone')
      console.log(res.data)
      this.data = res.data
    },
    // 获取分类中的食品
    async getshipin () {
      const { data: res } = await this.$http.get('/api/getshipin')
      console.log(res.data)
      this.data = res.data
    },
    // 获取分类中的鞋包
    async getxiebao () {
      const { data: res } = await this.$http.get('/api/getxiebao')
      console.log(res.data)
      this.data = res.data
    },
    // 获取分类中的男装
    async gitman () {
      const { data: res } = await this.$http.get('/api/gitman')
      console.log(res.data)
      this.data = res.data
    },
    // 获取分类中的家具
    async getjiaju () {
      const { data: res } = await this.$http.get('/api/getjiaju')
      console.log(res.data)
      this.data = res.data
    }
  },
  created () {
    this.showpoint(this.$store.state.pointid)
  }
}
</script>

<style>
.nanzhaungbox{
  color: #23c1c1;
}
</style>
