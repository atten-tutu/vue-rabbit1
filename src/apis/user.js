import request from '@/utils/http'

// 用户登录接口
export const loginAPI = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

// 获取猜你喜欢商品列表接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
