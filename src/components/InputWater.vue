<script setup>
import { ref } from 'vue'
import { useWaterStore } from '../store/store'

const waterStore = useWaterStore()
const customAmount = ref(0)

const handleCustomAmount = () => {
  waterStore.increment(Number(customAmount.value))
  console.log(waterStore.count)
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
      class="mt-5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-gray-500"
      type="number"
      placeholder="Введите количество в миллилитрах"
    />
    <button
      @click="handleCustomAmount"
      class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
    >
      Готово
    </button>
    <router-link to="/water">
      <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full">
        Назад
      </button>
    </router-link>
  </div>
</template>
