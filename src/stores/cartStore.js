import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  // 定义购物车列表的 state
  const cartList = ref([])

  // 获取最新购物车列表
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }

  // 添加商品到购物车
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      // 登录状态下，调用接口加入购物车
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      // 未登录状态，直接本地存储
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 商品已存在，数量 +1
        item.count++
      } else {
        // 商品不存在，直接添加
        cartList.value.push(goods)
      }
    }
  }

  // 删除购物车商品
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 登录状态下，调用接口删除购物车商品
      await delCartAPI([skuId])
      updateNewList()
    } else {
      // 本地删除购物车商品
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }
  }

  // 清空购物车
  const clearCart = () => {
    cartList.value = []
  }

  // 单选功能
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }

  // 全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  // 计算总数量
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

  // 计算总价格
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

  // 计算已选商品的数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))

  // 计算已选商品的总价
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  // 判断是否全选
  const isAll = computed(() => cartList.value.every((item) => item.selected))

  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedCount,
    selectedPrice,
    clearCart,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    updateNewList
  }
}, {
  persist: true,
})
