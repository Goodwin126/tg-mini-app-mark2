<script setup>
import { ref, inject } from 'vue'
import axios from 'axios'

// Получение необходимых функций и данных из контекста
const { closeInputWater } = inject('InputWaterOpen&Close')
const water = inject('water')
const BACKEND_URL = inject('BACKEND_URL')
const userId = inject('userId')
const today = inject('today')

// Локальная переменная для хранения пользовательского ввода
const customAmount = ref(0)

// Метод для отправки данных о воде
const sendWaterData = async () => {
  try {
    await axios.put(`${BACKEND_URL}/balance/water`, {
      user_id: userId,
      date: today,
      water: water.value
    })
  } catch (error) {
    console.error('An error occurred while updating water data:', error.message)
  }
}

// Функция для закрытия модального окна и отправки данных
const closeInputWaterSendWaterData = async () => {
  water.value += parseInt(customAmount.value)
  await sendWaterData()
  closeInputWater()
}
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black opacity-70 z-10"></div>
  <div class="fixed z-20 top-0 left-0 h-full w-full flex items-center justify-center">
    <div class="flex flex-col bg-white rounded-2xl h-2/8 w-2/3 p-5">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-2">
          <p class="flex text-xl font-bold text-blue-900 place-content-center">Ваш вариант</p>
        </div>
        <div class="flex place-content-center flex-col w-full m-auto">
          <input
            class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
            placeholder="Введите количество в мл."
            type="number"
            v-model="customAmount"
          />
          <button
            @click="closeInputWaterSendWaterData"
            class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
          >
            Готово
          </button>
          <button
            @click="closeInputWater"
            class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
          >
            Назад
          </button>
        </div>
      </div>
    </div>
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
