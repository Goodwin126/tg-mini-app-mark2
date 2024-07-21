<script setup>
import axios from 'axios'
import { ref, onMounted, provide } from 'vue'
import dayjs from 'dayjs'

import { BACKEND_URL } from './config'
import Header from './components/Header.vue'
import EnteringGoal from './components/EnteringGoal.vue'
import InputWater from './components/InputWater.vue'
import InputFood from './components/InputFood.vue'

// Инициализация состояний
const isShrunk = ref({})
const userId = 377288092
const userName = 'Дмитрий'
const message = ref('')

const typeEating = ref(null)

// Инициализация переменных для данных текущей даты
const today = dayjs().format('YYYY-MM-DD')
const water = ref(0)
const calories = ref(0)
const proteins = ref(0)
const fats = ref(0)
const carbs = ref(0)
const nutritionProgram = ref('')
const InputWaterOpen = ref(false)
const InputFoodOpen = ref(false)
const EnteringGoalOpen = ref(false)
const selectedProduct = ref(null)
const TargetWater = ref(0)
const TargetCalories = ref(0)
const TargetFats = ref(0)
const TargetProteins = ref(0)
const TargetCarbs = ref(0)

const closeInputWater = () => {
  InputWaterOpen.value = false
}
const openInputWater = () => {
  InputWaterOpen.value = true
}

const closeInputFood = () => {
  InputFoodOpen.value = false
}
const openInputFood = () => {
  InputFoodOpen.value = true
}

const openInputFoodWithProduct = (product) => {
  selectedProduct.value = product
  openInputFood()
}

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
provide('TargetWater', TargetWater)
provide('TargetCalories', TargetCalories)
provide('InputWaterOpen&Close', {
  openInputWater,
  closeInputWater
})
provide('InputFoodOpen&Close', {
  openInputFood,
  closeInputFood
})
provide('openInputFoodWithProduct', openInputFoodWithProduct)
provide('typeEating', typeEating)
provide('EnteringGoalOpen', EnteringGoalOpen)

// Передаем функцию анимации нажатия и состояние дочерним компонентам
const shrinkButton = (buttonId) => {
  isShrunk.value[buttonId] = true
  setTimeout(() => {
    isShrunk.value[buttonId] = false
  }, 100)
}
provide('shrinkButton', shrinkButton)
provide('isShrunk', isShrunk)
provide('TargetFats', TargetFats)
provide('TargetProteins', TargetProteins)
provide('TargetCarbs', TargetCarbs)

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

// Метод для проверки наличия записи в таблице goals
const checkGoalRecord = async () => {
  try {
    const response = await axios.post(`${BACKEND_URL}/goals/check`, {
      user_id: userId
    })

    if (response.status === 200) {
      const data = response.data
      EnteringGoalOpen.value = !data.exists
      if (data.exists) {
        TargetWater.value = data.target_water
        TargetCalories.value = data.target_calories
        TargetFats.value = data.target_fats
        TargetProteins.value = data.target_proteins
        TargetCarbs.value = data.target_carbs
      }
    }
  } catch (error) {
    message.value = 'An error occurred while checking goal record: ' + error.message
  }
}
provide('checkGoalRecord', checkGoalRecord)

// Вызов методов при монтировании компонента
onMounted(() => {
  checkAndAddOrUpdateDailyBalance()
  checkGoalRecord()
})
</script>

<template>
  <EnteringGoal v-if="EnteringGoalOpen" />
  <InputWater v-if="InputWaterOpen" />
  <InputFood v-if="InputFoodOpen" :product="selectedProduct" />
  <div class="flex flex-col">
    <Header />
    <div class="place-content-center mt-10 touch-none select-none m-4">
      <router-view></router-view>
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
