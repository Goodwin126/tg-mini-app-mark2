<script setup>
import { ref, inject } from 'vue'

// Инъектируем реактивные переменные OpenWeight и OpenHeight
const OpenWeight = inject('OpenWeight')
const OpenHeight = inject('OpenHeight')
const WeightValue = inject('WeightValue')
const GenderValue = inject('GenderValue')

// Создаем реактивную переменную для связывания с полем ввода
const inputWeight = ref('')
const isInputEmpty = ref(true) // Изначально поле пустое

// Функция для обработки нажатия кнопки "Готово"
const handleSaveWeight = () => {
  // Преобразуем значение в число
  const weightNumber = Number(inputWeight.value)

  // Проверяем, является ли введенное значение числом, целым числом и не пустым
  if (!isNaN(weightNumber) && weightNumber > 0 && Number.isInteger(weightNumber)) {
    // Если проверка прошла успешно, сохраняем значение в переменной Weight
    if (GenderValue.value === '88.34') {
      // Если пол - мужской
      WeightValue.value = 13.4 * weightNumber
    } else if (GenderValue.value === '447.6') {
      // Если пол - женский
      WeightValue.value = 3.1 * weightNumber
    }
    console.log(`Вес сохранен: ${WeightValue.value}`)
    OpenWeight.value = false // Устанавливаем OpenWeight в false
    OpenHeight.value = true // Устанавливаем OpenHeight в true
  } else {
    // Если введенное значение не является допустимым числом, выводим предупреждение
    console.log('Пожалуйста, введите действительный вес.')
    inputWeight.value = '' // Очищаем поле ввода
    isInputEmpty.value = true // Поле пустое
  }
}
</script>

<template>
  <div class="flex flex-justify-between place-content-center gap-2">
    <p class="flex text-xl font-italic text-blue-900 place-content-center">Введите ваш вес</p>
  </div>
  <div class="flex place-content-center flex-col w-full m-auto">
    <!-- Поле ввода для веса, связанное с inputWeight -->
    <input
      v-model="inputWeight"
      class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
      :placeholder="isInputEmpty ? 'Введите ваш вес в килограммах' : ''"
      type="number"
    />
    <!-- Кнопка "Готово", при нажатии вызывает handleSaveWeight -->
    <button
      class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
      @click="handleSaveWeight"
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
