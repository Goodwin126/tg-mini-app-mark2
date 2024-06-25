<script setup>
import { useWaterStore } from './store/store'
import Header from './components/Header.vue'

const tg = window.Telegram.WebApp
tg.ready()

const waterStore = useWaterStore()
</script>

<template>
  <div class="flex-col">
    <Header />
    <span class="text-2xl-bold text-white">{{ tg.initDataUnsafe?.user?.first_name }}</span>
    <span class="text-2xl-bold text-white">{{ tg.initDataUnsafe?.user?.id }}</span>
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
.username {
  /* добавьте стили для класса username, если необходимо */
}
</style>
