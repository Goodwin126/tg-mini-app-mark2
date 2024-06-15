<script setup>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Water from './components/Vater.vue'
</script>

<template>
  <div class="flex-col m-4">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none">
      <Water />
      <!-- <Menu /> -->
    </div>
  </div>
</template>

<style scoped></style>
