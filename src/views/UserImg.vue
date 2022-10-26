<template>
  <div class="backimgbox">
    <div class="showimg">
      <img :src="imgurl" alt="" ref="img">
    </div>
  <div class="imgbox">
   <input
   type="file"
   ref="file"
   style="display:none;"
   @change="onchange"/>
   <button @click="$refs.file.click()">上传照片</button>
   <button @click="putsucess">确认</button>
   <button @click="quxiao">取消</button>
</div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {
  data () {
    return {
      imgurl: ''
    }
  },
  methods: {
    async onchange () {
      // 获取文件对象 blob图片数据
      // 设置给src
      const file = this.$refs.file.files[0]
      const data = window.URL.createObjectURL(file)
      console.log(data)
      this.imgurl = data
      // 选择同一张照片不会触发change 需要将上一次的清空
      // const { data: res } = await this.$http.post('/my/upuserpic', { user_pic: data })
      // console.log(res)
      // this.$refs.file.value = ''
    },
    async putsucess () {
      const { data: res } = await this.$http.post('/my/upuserpic', { user_pic: this.imgurl })
      console.log(res)
    },
    quxiao () {
      this.$router.push('/my')
    }
  },
  mounted () {
    const image = this.$refs.img
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop (event) {
        console.log(event.detail.x)
        console.log(event.detail.y)
        console.log(event.detail.width)
        console.log(event.detail.height)
        console.log(event.detail.rotate)
        console.log(event.detail.scaleX)
        console.log(event.detail.scaleY)
      }
    })
    console.log(cropper)
  }
}
</script>

<style>
.imgbox button{
  font-size: 15px;
 margin: 10px 0px 0px 20px;

}
.showimg{
  width: 350px;
  height: 230px;
  margin: 10px;
  border:1px solid black;
}
.showimg img{
  display: block;
  max-width: 100%;
}
</style>
