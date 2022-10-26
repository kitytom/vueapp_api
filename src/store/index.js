import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // goodsdata: [],
    usermessage: {},
    // 去支付的商品id
    cartid: [],
    // 去支付的总金额
    playprice: '',
    // 购物车的商品数量
    count: '',
    // 分类信息
    pointid: '',
    // 用户地址
    adress: {}
  },
  getters: {
  },
  mutations: {
    // 商品信息
    // getgoods (state, data) {
    //   state.goodsdata = data
    //   window.sessionStorage.setItem('goodsd', state.goodsdata)
    // },
    getuder (state, data) {
      state.usermessage = data
    },
    getcart (state, data, da) {
      state.playprice = data
      window.sessionStorage.setItem('totlprice', state.playprice)
    },
    getcartid (state, data) {
      state.cartid = data
    },
    getcartcount (state, data) {
      state.count = data
    },
    getpoint (state, data) {
      state.pointid = data
    },
    // 地址
    getadress (state, data) {
      state.adress = data
    }
  },
  actions: {
  },
  modules: {
  }
})
