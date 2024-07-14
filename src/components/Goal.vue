<script setup>
import { ref, inject } from 'vue'

// Получение необходимых функций и данных
const EnteringGoalOpen = inject('EnteringGoalOpen')
const OpenGoal = inject('OpenGoal')
const GoalValue = inject('GoalValue')
const GenderValue = inject('GenderValue')
const WeightValue = inject('WeightValue')
const HeightValue = inject('HeightValue')
const AgeValue = inject('AgeValue')
const ActivityValue = inject('ActivityValue')

// Создаем реактивную переменную для связывания с полем ввода
const inputGoal = ref('1') // Значение по умолчанию похудеть
const ResultNorm = ref(0) // Изначальное значение для нормы калорий

// Функция для обработки нажатия кнопки "Готово"
const handleSaveGoal = () => {
  // Сохранение значения цели
  GoalValue.value = inputGoal.value
  ResultNorm.value = (
    (Number(GenderValue.value) +
      Number(WeightValue.value) +
      Number(HeightValue.value) -
      Number(AgeValue.value)) *
    Number(ActivityValue.value)
  ).toFixed(2) // Округление до двух знаков после запятой

  console.log(`Ваша цель сохранена: ${GoalValue.value}`)
  console.log(`Ваша норма: ${ResultNorm.value} ккал`)
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
      <option value="1">Похудеть</option>
      <option value="2">Сохранить вес</option>
      <option value="3">Набрать массу</option>
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
