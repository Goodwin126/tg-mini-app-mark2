<script setup>
import { ref, inject, watch } from 'vue'
import axios from 'axios'

// Получение необходимых функций и данных из контекста
const { closeInputFood } = inject('InputFoodOpen&Close')
const calories = inject('calories')
const proteins = inject('proteins')
const fats = inject('fats')
const carbs = inject('carbs')
const BACKEND_URL = inject('BACKEND_URL')
const userId = inject('userId')
const today = inject('today')
const typeEating = inject('typeEating')
const props = defineProps({
  product: Object
})

// Локальная переменная для хранения пользовательского ввода
const customAmount = ref('')

// Метод для отправки данных о еде
const sendFoodData = async () => {
  try {
    await axios.post(`${BACKEND_URL}/balance/food`, {
      user_id: userId,
      date: today,
      calories: calories.value,
      proteins: proteins.value,
      fats: fats.value,
      carbs: carbs.value
    })
  } catch (error) {
    console.error('An error occurred while updating food data:', error.message)
  }
}

const sendCustomFoodData = async () => {
  try {
    await axios.post(`${BACKEND_URL}/balance/meals`, {
      user_id: userId,
      date: today,
      name_of_the_dish: props.product.name,
      portion: customAmount.value,
      calories: ((props.product.calories * parseFloat(customAmount.value)) / 100).toFixed(2),
      proteins: ((props.product.proteins * parseFloat(customAmount.value)) / 100).toFixed(2),
      fats: ((props.product.fats * parseFloat(customAmount.value)) / 100).toFixed(2),
      carbs: ((props.product.carbs * parseFloat(customAmount.value)) / 100).toFixed(2),
      type: typeEating.value
    })
  } catch (error) {
    console.error('An error occurred while updating food data:', error.message)
  }
}

// Функция для закрытия модального окна и отправки данных
const closeInputFoodSendFoodData = async () => {
  if (customAmount.value) {
    const factor = parseFloat(customAmount.value) / 100
    calories.value += Math.round(props.product.calories * factor)
    proteins.value += Math.round(props.product.proteins * factor)
    fats.value += Math.round(props.product.fats * factor)
    carbs.value += Math.round(props.product.carbs * factor)
    await sendFoodData()
    await sendCustomFoodData()
  }
  closeInputFood()
}

// Обработчик для очистки значения, если оно равно 0
watch(customAmount, (newValue) => {
  if (newValue === '0') {
    customAmount.value = ''
  }
})
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black opacity-70 z-10"></div>
  <div class="fixed z-20 top-0 left-0 h-full w-full flex items-center justify-center">
    <div class="flex flex-col bg-white rounded-2xl h-2/8 w-2/3 p-5">
      <div class="flex flex-col gap-3">
        <div class="flex flex-justify-between place-content-center gap-2">
          <p class="flex text-xl font-italic text-blue-900 place-content-center">Продукт:</p>
          <p class="text-xl font-bold text-blue-900">{{ product.name }}</p>
        </div>
        <div class="flex place-content-center flex-col w-full m-auto">
          <input
            class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
            placeholder="Введите количество в г."
            type="number"
            v-model="customAmount"
          />
          <button
            @click="closeInputFoodSendFoodData"
            class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
          >
            Готово
          </button>
          <button
            @click="closeInputFood"
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
