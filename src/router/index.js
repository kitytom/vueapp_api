import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import CartPage from '../views/CartPage'
import MyPage from '../views/MyPage'
import PonintPage from '../views/PonintPage'
import PlayPage from '../views/PayPage'
import AboutMy from '../components/userpage/AboutMy'
import NanShop from '../components/point/NanShop'
import DinDan from '../components/play/DinDan'
import GoodsMessage from '../components/goodmessage/GoodsMessage'
import LoginPage from '../views/LoginPage'
import ResUser from '../views/RegUser'
import OrderPage from '../components/play/OrderPage'
import UserName from '../components/userpage/UserName'
import AddressPage from '../components/userpage/AddressPage'
import WeiLogin from '../components/userpage/WeiLogin'
import GoplayPage from '../components/play/GoplayPage'
import UserImg from '../views/UserImg'
import ImgPage from '../views/ImgPage'
import EiditPage from '../components/userpage/EiditPage'
// import { forEach } from 'core-js/core/array'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/cart', component: CartPage },
  { path: '/my', component: MyPage },
  { path: '/dindan', component: DinDan },
  { path: '/goodsmes', component: GoodsMessage },
  { path: '/login', component: LoginPage },
  { path: '/reguser', component: ResUser },
  { path: '/order', component: OrderPage },
  { path: '/username', component: UserName },
  { path: '/adress', component: AddressPage },
  { path: '/weilogin', component: WeiLogin },
  { path: '/goplay', component: GoplayPage },
  { path: '/userimg', component: UserImg },
  { path: '/imgpage', component: ImgPage },
  { path: '/eidit', component: EiditPage },
  {
    path: '/ponint',
    redirect: '/nanz',
    component: PonintPage,
    children: [
      { path: '/nanz', component: NanShop }
    ]
  },
  { path: '/play', component: PlayPage },
  { path: '/aboutmy', component: AboutMy }
]

const router = new VueRouter({
  routes
})
export default router
