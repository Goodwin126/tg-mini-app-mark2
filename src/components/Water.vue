<script setup>
import { inject } from 'vue'
import axios from 'axios'

// Получение необходимых функций и данных из контекста
const shrinkButton = inject('shrinkButton')
const isShrunk = inject('isShrunk')
const BACKEND_URL = inject('BACKEND_URL')
const userId = inject('userId')
const today = inject('today')
const normwater = inject('normwater')
const water = inject('water')
const { openInputWater } = inject('InputWaterOpen&Close')

// Метод для отправки данных о воде
const sendWaterData = async () => {
  try {
    console.log('Sending water data:', {
      user_id: userId,
      date: today,
      water: water.value
    })
    await axios.post(`${BACKEND_URL}/balance/water`, {
      user_id: userId,
      date: today,
      water: water.value
    })
  } catch (error) {
    console.error('An error occurred while updating water data:', error.message)
  }
}

// Функция для обработки нажатия кнопки
const handleButtonClick = async (amount, buttonId) => {
  water.value += amount
  shrinkButton(buttonId)
  await sendWaterData()
}
</script>

<template>
  <div class="flex flex-col mt-5">
    <div class="flex place-content-center gap-1">
      <p class="text-xl text-white">Вода: {{ water }} мл.</p>
      <p class="text-xl font-bold text-blue-900">/{{ normwater.toFixed(1) }} мл. Норма</p>
    </div>
    <div class="grid grid-cols-4 place-content-center bg-white mt-5 rounded-xl">
      <div :class="{ shrunk: isShrunk['youself_ml'] }" @click="openInputWater">
        <img src="/youself_ml.jpg" alt="Свой вариант" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">Свой вариант</p>
      </div>
      <div @click="() => handleButtonClick(50, '50_ml')" :class="{ shrunk: isShrunk['50_ml'] }">
        <img src="/50_ml.jpg" alt="50 мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">50 мл</p>
      </div>
      <div @click="() => handleButtonClick(100, '100_ml')" :class="{ shrunk: isShrunk['100_ml'] }">
        <img src="/100_ml.jpg" alt="100 мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">100 мл</p>
      </div>
      <div @click="() => handleButtonClick(200, '200_ml')" :class="{ shrunk: isShrunk['200_ml'] }">
        <img src="/200_ml.jpg" alt="200 мл" class="w-3/6 m-auto mt-5" />
        <p class="text-center font-bold text-blue-900">200 мл</p>
      </div>
    </div>
    <router-link to="/">
      <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full">
        Назад
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
