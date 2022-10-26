<template>
  <div>
     <input type="file" :value="fileValue" id="upImageFile" @change="ImageToBase64">
     <img :src="iconBase64" alt="" width="200"/>
     <div> <button @click="btn">上传</button></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      fileValue: '',
      iconBase64: ''
    }
  },
  methods: {
    // 将本地图片转化为Base64
    ImageToBase64 () {
      const files = document.getElementById('upImageFile').files[0]
      const reader = new FileReader()
      reader.readAsDataURL(files)
      reader.onload = () => {
        // console.log('file 转 base64结果：' + reader.result)
        this.iconBase64 = reader.result
      }
      reader.onerror = function (error) {
        console.log('Error: ', error)
      }
    },
    async btn () {
      console.log(this.iconBase64)
      const { data: res } = await this.$http.post('/my/upuserpic', { user_pic: this.iconBase64 })
      console.log(res)
      console.log(this.iconBase64)
    }
  }
}
</script>
