<script setup>
import { ref } from 'vue'

const isShrunk = ref({})

const shrinkButton = (buttonId) => {
  isShrunk.value[buttonId] = true
  setTimeout(() => {
    isShrunk.value[buttonId] = false
  }, 100) // Задержка для анимации (в миллисекундах)
}
</script>

<template>
  <div class="flex flex-col mt-5">
    <div class="flex place-content-center gap-1">
      <p class="text-3xl text-white">Вода: 0.5/</p>
      <p class="text-3xl font-bold text-blue-900">2.5 л Норма</p>
    </div>
    <div class="grid grid-cols-4 place-content-center bg-white mt-5 rounded-xl">
      <div :class="{ shrunk: isShrunk['youself_ml'] }" @click="() => shrinkButton('youself_ml')">
        <img src="/youself_ml.jpg" alt="Свой вариант" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">Свой вариант</p>
      </div>

      <div :class="{ shrunk: isShrunk['50_ml'] }" @click="() => shrinkButton('50_ml')">
        <img src="/50_ml.jpg" alt="50_мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">50 мл</p>
      </div>

      <div :class="{ shrunk: isShrunk['100_ml'] }" @click="() => shrinkButton('100_ml')">
        <img src="/100_ml.jpg" alt="100_мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">100 мл</p>
      </div>

      <div :class="{ shrunk: isShrunk['200_ml'] }" @click="() => shrinkButton('200_ml')">
        <img src="/200_ml.jpg" alt="200_мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">200 мл</p>
      </div>
    </div>
  </div>
</template>

<style>
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>
