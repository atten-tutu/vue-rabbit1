import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()

  // 定义管理用户数据的 state
  const userInfo = ref({})

  // 定义获取接口数据的 action 函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result

    // 合并购物车的操作
    await mergeCartAPI(cartStore.cartList.map(item => ({
      skuId: item.skuId,
      selected: item.selected,
      count: item.count
    })))

    // 更新购物车数据
    cartStore.updateNewList()
  }

  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}

    // 执行清除购物车的 action
    cartStore.clearCart()
  }

  // 返回 state 和 action
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true,
})
