import httpInstance from '@/utils/http'

export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}
//封装接口
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }
export const getHotAPI = () => {
    return httpInstance({
        url:'/home/hot'
      })
}
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}