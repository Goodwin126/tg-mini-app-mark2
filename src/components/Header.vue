<script setup>
import { ref, computed, inject, provide } from 'vue'

// Инъектируем реактивные переменные

// Получаем значения воды
const TargetWater = inject('TargetWater')
const water = inject('water')

// Получаем значения целевых калорий
const TargetFats = inject('TargetFats', ref(0))
const TargetCarbs = inject('TargetCarbs', ref(0))
const TargetProteins = inject('TargetProteins', ref(0))
const fats = inject('fats', ref(0))
const proteins = inject('proteins', ref(0))
const carbs = inject('carbs', ref(0))
const EnteringGoalOpen = inject('EnteringGoalOpen')
const turnShangeParametrs = async () => {
  EnteringGoalOpen.value = true
}

// Вычисляем процент выпитой воды от нормы на человека
const waterPercentage = computed(() => {
  if (TargetWater.value != 0 && water.value != 0) {
    const percentage = ((100 / TargetWater.value) * water.value).toFixed(1)
    return percentage
  } else {
    return 0 // Возвращаем 0, если значения не корректны или нулевые
  }
})

// Вычисляем процент съеденых жиров от целевых на человека
const FatsPercentage = computed(() => {
  if (TargetFats.value !== 0 && fats.value !== 0) {
    const percentage = ((100 / TargetFats.value) * fats.value).toFixed(1)
    return percentage
  } else {
    return 0 // Возвращаем 0, если значения не корректны или нулевые
  }
})

// Вычисляем процент съеденных углеводов от целевых на человека
const CarbsPercentage = computed(() => {
  if (TargetCarbs.value !== 0 && carbs.value !== 0) {
    const percentage = ((100 / TargetCarbs.value) * carbs.value).toFixed(1)
    return percentage
  } else {
    return 0 // Возвращаем 0, если значения не корректны или нулевые
  }
})

// Вычисляем процент съеденных белков от целевых на человека
const ProteinsPercentage = computed(() => {
  if (TargetProteins.value !== 0 && proteins.value !== 0) {
    const percentage = ((100 / TargetProteins.value) * proteins.value).toFixed(1)
    return percentage
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
    <div
      class="flex-col gap-2 hover:cursor-pointer absolute ml-6 mt-0.5"
      @click="turnShangeParametrs"
    >
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
              <p class="ml-1 text-white font-bold">{{ FatsPercentage }}% Жиры</p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-2.5 h-2.5 m-auto mr-1" src="/Ellipse 7.png" />
              <p class="flex ml-1 text-blue-600 font-bold">{{ ProteinsPercentage }}% Белки</p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-2.5 h-2.5 m-auto mr-1" src="/Ellipse 8.png" />
              <p class="flex ml-1 text-green-600 font-bold">{{ CarbsPercentage }}% Углеводы</p>
            </div>
            <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
              <img class="w-5.5 h-5 m-auto mr-1" src="/water.png" />
              <h1 class="flex ml-1 text-blue-300 font-bold">{{ waterPercentage }}% Воды</h1>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
