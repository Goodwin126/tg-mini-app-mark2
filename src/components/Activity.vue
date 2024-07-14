<script setup>
import { ref, inject } from 'vue'

// Инъектируем реактивную переменную OpenAge (предположительно из родительского компонента)
const OpenActivity = inject('OpenActivity')
const OpenGoal = inject('OpenGoal')
const ActivityValue = inject('ActivityValue')

// Создаем реактивную переменную для связывания с полем ввода
const inputActivity = ref('1.2')
const isInputEmpty = ref(true) // Изначально поле пустое

// Функция для обработки нажатия кнопки "Готово"
const handleSaveActivity = () => {
  // Преобразуем значение в число
  ActivityValue.value = Number(inputActivity.value)
  console.log(`Активность сохранена: ${ActivityValue.value}`)
  isInputEmpty.value = false // Поле не пустое
  OpenActivity.value = false // Устанавливаем OpenAge в true
  OpenGoal.value = true
}
</script>

<template>
  <div class="flex flex-justify-between place-content-center gap-2">
    <p class="flex text-xl font-italic text-blue-900 place-content-center">
      Выберите ваш вариант активности
    </p>
  </div>
  <div class="flex place-content-center flex-col w-full m-auto">
    <!-- Поле ввода для возраста, связанное с inputActivity -->
    <select class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center">
      <option value="1.2">не тренеруюсь</option>
      <option value="1.3">много хожу пешком</option>
      <option value="1.375">1-3 раза в неделю</option>
      <option value="1.55">4-5 раза в неделю</option>
      <option value="1.725">6-7 раз в неделю</option>
      <option value="1.9">больше чем раз в день</option>
      >
    </select>
    <!-- Кнопка "Готово", при нажатии вызывает handleSaveActivity -->
    <button
      class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
      @click="handleSaveActivity"
    >
      Готово
    </button>
    <!-- Комментируемая кнопка "Назад" -->
    <!-- <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full">
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
