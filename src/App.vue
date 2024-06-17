<script setup>
import { useWaterStore } from './store/store'
import Header from './components/Header.vue'

const waterStore = useWaterStore()
</script>

<template>
  <div class="flex-col">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none m-4">
      <router-view></router-view>
    </div>
  </div>
</template>
