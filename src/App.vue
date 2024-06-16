<script setup>
import Eating from './components/Eating.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="flex-col m-4">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none">
      <Eating />
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>
