import httpInstance from '@/utils/http'

export function getCategoryAPI () {
    
    return httpInstance({
    url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head'
  })
}