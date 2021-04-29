import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Home=()=>import('views/home/Home')
const Fenlei=()=>import('views/fenlei/Fenlei')
const Car=()=>import('views/car/Car')
const Mine=()=>import('views/mine/Mine')
const routes=[
{
  path:'',
  redirect: '/home'
},
{
  path:'/home',
  component:Home,
},
{
  path:'/fenlei',
  component:Fenlei,
},
{
  path:'/car',
  component:Car,
},
{
  path:'/mine',
  component:Mine,
},
]
const router= new VueRouter({
  routes,
  mode:'history'
})

export default router