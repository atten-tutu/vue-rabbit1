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
  <RouterView />
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <!-- 添加 key 破坏复用机制 强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  
  <LayoutFooter />
</template>
