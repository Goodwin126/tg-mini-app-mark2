<script setup>
import { ref } from 'vue'

import Header from './components/Header.vue'
//import Menu from './components/Menu.vue'
import Water from './components/Vater.vue'

const isShrunk = ref({})

const shrinkButton = (buttonId) => {
  isShrunk.value[buttonId] = true
  setTimeout(() => {
    isShrunk.value[buttonId] = false
  }, 100) // Задержка для анимации (в миллисекундах)
}
</script>

<template>
  <div class="flex-col m-4">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none">
      <Water :shrinkButton="shrinkButton" :isShrunk="isShrunk" />
      <!-- <Menu /> -->
    </div>
  </div>
</template>

<style>
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>
