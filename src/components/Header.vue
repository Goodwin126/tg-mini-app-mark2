<script setup>
import { ref, computed } from 'vue'

import { useWaterStore } from '../store/store'

const waterStore = useWaterStore()
// Вычисляем процент выпитой воды от нормы на человека
const waterPercentage = computed(() => {
  const percentage = (waterStore.count / waterStore.normPerPerson) * 100
  return Math.round(percentage)
})

// Получаем текущую дату
const date = new Date()
const daysOfWeek = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
]
const today = ref(daysOfWeek[date.getDay()])
</script>

<template>
  <div class="relative touch-none select-none">
    <div class="flex-col gap-2 hover:cursor-pointer absolute ml-6 mt-0.5">
      <img class="transition transform hover:scale-110 translate-y-1" src="/Rectangle 1.png" />
      <img class="mt-2 transition transform hover:scale-110 translate-y-1" src="/Rectangle 2.png" />
      <img class="mt-2 transition transform hover:scale-110 translate-y-1" src="/Rectangle 3.png" />
    </div>

    <RouterLink to="/">
      <div class="w-full">
        <h1 class="text-xl font-bold text-gray-500 text-center mt-6">Сегодня: {{ today }}</h1>
        <div class="flex place-content-center mt-3">
          <img class="absolute" src="/Ellipse 1.png" />
          <div class="mt-4 grid grid-cols-1">
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-2,5 h-2,5 m-auto mr-1" src="/Ellipse 6.png" />
              <p class="ml-1 text-white font-bold">30% Жиры</p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-2,5 h-2,5 m-auto mr-1" src="/Ellipse 7.png" />
              <p class="flex ml-1 text-blue-600 font-bold">30% Белки</p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-2,5 h-2,5 m-auto mr-1" src="/Ellipse 8.png" />
              <p class="flexml-1 text-green-600 font-bold">30% Углеводы</p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-5.5 h-5 m-auto mr-1" src="/water.png" />
              <p class="flex ml-1 text-blue-300 font-bold">{{ waterPercentage }}% Воды</p>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
