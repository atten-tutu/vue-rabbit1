import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[{
    //根路径即是网站首页，显示布局组件Layout组件
    path:'/',
    component:Layout,
    //这些是嵌套路由，显示home组件，或者category组件
    children:[
      {
        path:'',
        component:Home
      },
      {
        path:'category/:id',
        component:Category
      },
      {
        path:'category/sub/:id',
        component:SubCategory
      },
      {
        path:'detail/:id',
        component:Detail
      },
      {
        path:'cartlist',
        component:CartList
      },
      {
        path:'checkout',
        component:Checkout
      },
      {
        path:'Pay',
        component:Pay
      },
      {
        path:'paycallback',
        component:PayBack
      }
    ]
  },
  {
    path:'/login',
    component:Login
  }
  ],
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
