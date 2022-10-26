import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import 'amfe-flexible'
import './assets/index.css'
import TabBar from './components/tabbar/TabBar'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:5500'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('my-tabbar', TabBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
