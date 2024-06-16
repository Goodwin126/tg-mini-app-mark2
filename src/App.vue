<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="flex-col m-4">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none">
      <router-view></router-view>
    </div>
  </div>
</template>
