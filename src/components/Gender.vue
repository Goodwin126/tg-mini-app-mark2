<script setup>
import { ref, inject } from 'vue'

// Инъектируем реактивные переменные OpenGender и OpenWeight
const OpenGender = inject('OpenGender')
const OpenWeight = inject('OpenWeight')
const GenderValue = inject('GenderValue')

// Создаем реактивную переменную для связывания с полем ввода
const inputGender = ref(GenderValue.value) // Значение по умолчанию для мужского пола

// Функция для обработки нажатия кнопки "Готово"
const handleSaveGender = () => {
  GenderValue.value = inputGender.value
  console.log(`Пол сохранен: ${GenderValue.value}`)
  OpenGender.value = false // Устанавливаем OpenGender в false
  OpenWeight.value = true // Устанавливаем OpenWeight в true
}
</script>

<template>
  <div class="flex flex-justify-between place-content-center gap-2">
    <p class="flex text-xl font-italic text-blue-900 place-content-center">Выберите ваш пол</p>
  </div>
  <div class="flex place-content-center flex-col w-full m-auto">
    <select
      v-model="inputGender"
      class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
    >
      <option value="88.34">мужской</option>
      <option value="447.6">женский</option>
    </select>
    <!-- Кнопка "Готово", при нажатии вызывает handleSaveGender -->
    <button
      class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
      @click="handleSaveGender"
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
