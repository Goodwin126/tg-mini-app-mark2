<script setup>
import { ref, computed, inject, provide } from 'vue'

// Получаем инъектированные значения
const normwater = inject('normwater')
const water = inject('water')

const TargetFats = inject('TargetFats')
const TargetCarbs = inject('TargetCarbs')
const TargetProteins = inject('TargetProteins')
const fats = inject('fats')
const proteins = inject('proteins')
const carbs = inject('carbs')

// Вычисляем процент выпитой воды от нормы на человека
const waterPercentage = computed(() => {
  if (normwater != 0 && water.value != 0) {
    const percentage = water.value / (normwater / 100)
    return Math.round(percentage)
  } else {
    return 0 // Возвращаем 0, если значения не корректны или нулевые
  }
})

provide('waterPercentage', waterPercentage)
// Получаем текущий день недели
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
              <img class="w-2.5 h-2.5 m-auto mr-1" src="/Ellipse 6.png" />
              <p class="ml-1 text-white font-bold">{{ (TargetFats / 100) * fats }}% Жиры</p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-2.5 h-2.5 m-auto mr-1" src="/Ellipse 7.png" />
              <p class="flex ml-1 text-blue-600 font-bold">
                {{ (TargetProteins / 100) * proteins }}% Белки
              </p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-2.5 h-2.5 m-auto mr-1" src="/Ellipse 8.png" />
              <p class="flex ml-1 text-green-600 font-bold">
                {{ (TargetCarbs / 100) * carbs }}% Углеводы
              </p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-5.5 h-5 m-auto mr-1" src="/water.png" />
              <h1 class="flex ml-1 text-blue-300 font-bold" @click="turnBoom">
                {{ waterPercentage }}% Воды
              </h1>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
