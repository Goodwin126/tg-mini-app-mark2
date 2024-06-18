<script setup>
import { useWaterStore } from './store/store'
import Header from './components/Header.vue'

const waterStore = useWaterStore()
</script>

<template>
  <div class="flex-col">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none m-4">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <div class="flex w-full h-10 place-content-center text-gray-500">version 1.0</div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
