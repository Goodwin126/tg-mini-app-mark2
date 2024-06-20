<script setup>
import { useWaterStore } from './store/store'
import Header from './components/Header.vue'

const waterStore = useWaterStore()
</script>

<template>
  <div class="flex-col">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none m-4">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
      <div class="flex w-full h-10 place-content-center text-gray-500">version 1.0</div>
    </div>
  </div>
</template>

<!-- Удалить или закомментировать следующую секцию стилей -->
<!--
<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-up-leave-active {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
-->
