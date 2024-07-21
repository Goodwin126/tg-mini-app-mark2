<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'

// Получение необходимых функций и данных
const BACKEND_URL = inject('BACKEND_URL')
const userId = inject('userId')
const message = ref('')
const goal = ref(0)
const EnteringGoalOpen = inject('EnteringGoalOpen')
const OpenGoal = inject('OpenGoal')
const GoalValue = inject('GoalValue')
const GenderValue = inject('GenderValue')
const WeightValue = inject('WeightValue')
const HeightValue = inject('HeightValue')
const AgeValue = inject('AgeValue')
const ActivityValue = inject('ActivityValue')
const target_water = ref('0')
const target_calories = ref('0')
const target_proteins = ref('0')
const target_fats = ref('0')
const target_carbs = ref('0')

// Создаем реактивную переменную для связывания с полем ввода
const inputGoal = ref('Похудеть') // Значение по умолчанию похудеть
const ResultNorm = ref(0) // Изначальное значение для нормы калорий

// Метод для проверки и добавления/получения записи в goal
const checkAndAddOrUpdateGoal = async () => {
  try {
    const response = await axios.post(`${BACKEND_URL}/goals/update`, {
      user_id: userId,
      target_water: target_water.value,
      target_calories: target_calories.value,
      target_proteins: target_proteins.value,
      target_fats: target_fats.value,
      target_carbs: target_carbs.value,
      goal: GoalValue.value
    })

    if (response.status === 200) {
      const data = response.data
      target_water.value = data.target_water
      target_calories.value = data.target_calories
      target_proteins.value = data.target_proteins
      target_fats.value = data.target_fats
      target_carbs.value = data.target_carbs
      goal.value = data.goal
      message.value = 'Goal retrieved or created successfully'
    }
  } catch (error) {
    message.value = 'An error occurred: ' + error.message
  }
}

// Функция для обработки нажатия кнопки "Готово"
const handleSaveGoal = async () => {
  // считаем норму калорий и воды

  GoalValue.value = inputGoal.value
  if (GenderValue.value === '447.6') {
    target_water.value = (Number(WeightValue.value / 3.1) * 31) / 1000
  } else if (GenderValue.value === '88.34') {
    ;(target_water.value = Number(WeightValue.value / 13.4) * 35) / 1000
  }
  ResultNorm.value = (
    (Number(GenderValue.value) +
      Number(WeightValue.value) +
      Number(HeightValue.value) -
      Number(AgeValue.value)) *
    Number(ActivityValue.value)
  ).toFixed(2) // Округление до двух знаков после запятой
  if (GoalValue.value === 'Похудеть') {
    ResultNorm.value *= 0.8
    target_calories.value = ResultNorm.value.toFixed(1)
    target_proteins.value = ((ResultNorm.value * 0.3) / 4).toFixed(1)
    target_fats.value = ((ResultNorm.value * 0.25) / 9).toFixed(1)
    target_carbs.value = ((ResultNorm.value * 0.45) / 4).toFixed(1)
  } else if (GoalValue.value === 'Сохранить ве') {
    ResultNorm.value *= 1
    target_calories.value = ResultNorm.value.toFixed(1)
    target_proteins.value = ((ResultNorm.value * 0.15) / 4).toFixed(1)
    target_fats.value = ((ResultNorm.value * 0.25) / 9).toFixed(1)
    target_carbs.value = ((ResultNorm.value * 0.6) / 4).toFixed(1)
  } else if (GoalValue.value === 'Набрать массу') {
    ResultNorm.value *= 1.2
    target_calories.value = ResultNorm.value.toFixed(1)
    target_proteins.value = ((ResultNorm.value * 0.3) / 4).toFixed(1)
    target_fats.value = ((ResultNorm.value * 0.2) / 9).toFixed(1)
    target_carbs.value = ((ResultNorm.value * 0.5) / 4).toFixed(1)
  }

  await checkAndAddOrUpdateGoal()
  OpenGoal.value = false // Закрываем текущее окно цели
  EnteringGoalOpen.value = false // Закрываем ввод цели
}
</script>

<template>
  <div class="flex flex-justify-between place-content-center gap-2">
    <p class="flex text-xl font-italic text-blue-900 place-content-center">Выберите вашу цель</p>
  </div>
  <div class="flex place-content-center flex-col w-full m-auto">
    <!-- Поле ввода для цели, связанное с inputGoal -->
    <select
      v-model="inputGoal"
      class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
    >
      <option value="Похудеть">Похудеть</option>
      <option value="Сохранить вес">Сохранить вес</option>
      <option value="Набрать массу">Набрать массу</option>
    </select>
    <!-- Кнопка "Готово", при нажатии вызывает handleSaveGoal -->
    <button
      class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
      @click="handleSaveGoal"
    >
      Готово
    </button>
    <!-- Комментируемая кнопка "Назад" -->
    <!-- <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 п-2.5 w-full">
      Назад
    </button> -->
  </div>
</template>

<style scoped>
/* Удаляем стрелки в полях ввода чисел для Chrome */
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Удаляем стрелки в полях ввода чисел для Firefox */
.no-spinner {
  -moz-appearance: textfield;
}
</style>
