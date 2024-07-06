<script setup>
import axios from 'axios'
import { ref, onMounted, provide } from 'vue'
import dayjs from 'dayjs'

import { BACKEND_URL } from './config'
import Header from './components/Header.vue'
import InputWater from './components/InputWater.vue'

// Инициализация состояний
const isShrunk = ref({})
const userId = 377288092
const userName = 'Дмитрий'
const message = ref('')
const normwater = 2000

// Инициализация переменных для данных текущей даты
const today = dayjs().format('YYYY-MM-DD')
const water = ref(0)
const calories = ref(0)
const proteins = ref(0)
const fats = ref(0)
const carbs = ref(0)
const nutritionProgram = ref('')

// Передача переменных через provide
provide('BACKEND_URL', BACKEND_URL)
provide('today', today)
provide('water', water)
provide('calories', calories)
provide('proteins', proteins)
provide('fats', fats)
provide('carbs', carbs)
provide('nutritionProgram', nutritionProgram)
provide('userName ', userName)
provide('userId', userId)
provide('normwater', normwater)

// Передаем функцию анимации нажатия и состояние дочерним компонентам
const shrinkButton = (buttonId) => {
  isShrunk.value[buttonId] = true
  setTimeout(() => {
    isShrunk.value[buttonId] = false
  }, 100)
}
provide('shrinkButton', shrinkButton)
provide('isShrunk', isShrunk)

// Метод для проверки и добавления/получения записи в daily_balance
const checkAndAddOrUpdateDailyBalance = async () => {
  try {
    const response = await axios.post(`${BACKEND_URL}/balance/update`, {
      user_id: userId,
      date: today
    })

    if (response.status === 200) {
      const data = response.data
      water.value = data.water
      calories.value = data.calories
      proteins.value = data.proteins
      fats.value = data.fats
      carbs.value = data.carbs
      nutritionProgram.value = data.nutrition_program
      message.value = 'Daily balance retrieved or created successfully for today'
    }
  } catch (error) {
    message.value = 'An error occurred: ' + error.message
  }
}

// Вызов метода checkAndAddOrUpdateDailyBalance при монтировании компонента
onMounted(() => {
  checkAndAddOrUpdateDailyBalance()
})
</script>

<template>
  <InputWater />
  <div class="flex flex-col">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none m-4">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <div class="flex w-full h-10 place-content-center text-gray-500">version 1.0</div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
