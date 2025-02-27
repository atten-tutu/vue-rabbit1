import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
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
      }
    ]
  },
  {
    path:'/login',
    component:Login
  }
  ]
})

export default router
