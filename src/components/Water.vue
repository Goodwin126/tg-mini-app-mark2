<script setup>
import { ref } from 'vue'
import { useWaterStore } from '../store/store' // Импорт из правильного пути

const waterStore = useWaterStore()

const isShrunk = ref({})

const handleButtonClick = (amount, buttonId) => {
  waterStore.increment(amount)
  console.log(waterStore.count)

  isShrunk.value[buttonId] = true
  setTimeout(() => {
    isShrunk.value[buttonId] = false
  }, 100) // Задержка для анимации (в миллисекундах)
}
</script>

<template>
  <div class="flex flex-col mt-5">
    <div class="flex place-content-center gap-1">
      <p class="text-2xl text-white">Вода: {{ waterStore.count }}/</p>
      <p class="text-2xl font-bold text-blue-900">2.5 л Норма</p>
    </div>
    <div class="grid grid-cols-4 place-content-center bg-white mt-5 rounded-xl">
      <router-link to="/inputwater">
        <div
          :class="{ shrunk: isShrunk['youself_ml'] }"
          @click="() => handleButtonClick(0, 'youself_ml')"
        >
          <img src="/youself_ml.jpg" alt="Свой вариант" class="w-3/6 m-auto mt-5" />
          <p class="text-center font-bold text-blue-900">Свой вариант</p>
        </div>
      </router-link>

      <div @click="() => handleButtonClick(50, '50_ml')" :class="{ shrunk: isShrunk['50_ml'] }">
        <img src="/50_ml.jpg" alt="50_мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">50 мл</p>
      </div>

      <div @click="() => handleButtonClick(100, '100_ml')" :class="{ shrunk: isShrunk['100_ml'] }">
        <img src="/100_ml.jpg" alt="100_мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">100 мл</p>
      </div>

      <div @click="() => handleButtonClick(200, '200_ml')" :class="{ shrunk: isShrunk['200_ml'] }">
        <img src="/200_ml.jpg" alt="200_мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">200 мл</p>
      </div>
    </div>
    <RouterLink to="/">
      <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full">
        Назад
      </button>
    </RouterLink>
  </div>
</template>

<style>
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>
