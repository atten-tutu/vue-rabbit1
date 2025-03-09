// 管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './cartStore'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
  // 1. 定义管理用户数据的state
  const cartStore = useCartStore()
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  const clearUserInfo = () =>{
    userInfo.value = {}
    cartStore.clearCart()
  }
  // 3. 以对象的格式把state和action return
  return {
    getUserInfo,
    userInfo,
    clearUserInfo
    
  }
}, {
  persist: true,
})