<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>

  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <HomePanel title="新鲜好物" subTitle="新鲜个屁">
    <div>我是新鲜好物插槽</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="热你个屁">
    <div>我是人气推荐</div>
  </HomePanel>
</template>