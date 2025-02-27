<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()

//触发
onMounted(()=>categoryStore.getCategory())

// import LayoutFixed from './components/LayoutFixed.vue'

// import { useCategoryStore } from '@/stores/categoryStore'
// import { onMounted } from 'vue'

// const categoryStore = useCategoryStore()

</script>

<template>
  <!-- <LayoutFixed /> -->
  
  <LayoutNav />
  <LayoutHeader />

  <RouterView />
  <!-- //这是占位符，不占就不会匹配到路由对应的组件，这其实是为children准备的 -->
  
  <LayoutFixed />
  <!-- 添加 key 破坏复用机制 强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  
  <LayoutFooter />
</template>
