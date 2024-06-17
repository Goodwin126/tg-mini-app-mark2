<script setup>
import { ref } from 'vue'
import { useWaterStore } from '../store/store'

const waterStore = useWaterStore()
const customAmount = ref(null) // Используем null вместо 0 для проверки

const handleCustomAmount = () => {
  if (customAmount.value !== null) {
    waterStore.increment(Number(customAmount.value))
  }
}
</script>

<template>
  <div class="flex place-content-center gap-2">
    <div class="flex flex-col">
      <p class="flex text-xl font-bold text-blue-900 place-content-center">Введите ваш</p>
      <p class="flex text-xl font-bold text-blue-900 place-content-center">вариант</p>
    </div>
    <img
      src="/a_bottle_of_water.jpg"
      alt="Bottle_of_water"
      class="w-10 h-10 bg-white rounded-xl mt-2.5"
    />
  </div>
  <div class="flex place-content-center flex-col w-4/6 m-auto">
    <input
      v-model="customAmount"
      :placeholder="customAmount === null ? 'Введите количество в миллилитрах' : ''"
      class="mt-5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-gray-500 no-spinner"
      type="number"
    />
    <router-link to="/water">
      <button
        @click="handleCustomAmount"
        class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
      >
        Готово
      </button>
    </router-link>
    <router-link to="/water">
      <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full">
        Назад
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-spinner {
  -moz-appearance: textfield; /* Удаление стрелочек в Firefox */
}
</style>
