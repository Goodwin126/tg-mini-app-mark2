<script setup>
import { ref, inject } from 'vue'

// Инъектируем реактивные переменные OpenWeight и OpenActivity (предположительно из родительского компонента)
const OpenHeight = inject('OpenHeight')
const OpenAge = inject('OpenAge')
const HeightValue = inject('HeightValue')
const GenderValue = inject('GenderValue')

// Создаем реактивную переменную для связывания с полем ввода
const inputHeight = ref('')
const isInputEmpty = ref(true) // Изначально поле пустое

// Функция для обработки нажатия кнопки "Готово"
const handleSaveHeight = () => {
  // Преобразуем значение в число
  const heightNumber = Number(inputHeight.value)

  // Проверяем, является ли введенное значение числом, целым числом и не пустым
  if (!isNaN(heightNumber) && heightNumber > 0 && Number.isInteger(heightNumber)) {
    // Если проверка прошла успешно, сохраняем значение в переменной Weight
    if (GenderValue.value === '88.34') {
      // Если пол - мужской
      HeightValue.value = 4.8 * heightNumber
    } else if (GenderValue.value === '447.6') {
      // Если пол - женский
      HeightValue.value = 3.1 * heightNumber
    }
    console.log(`Рост сохранен: ${HeightValue.value}`)
    OpenHeight.value = false // Устанавливаем OpenWeight в false
    OpenAge.value = true // Устанавливаем OpenHeight в true
  } else {
    // Если введенное значение не является допустимым числом, выводим предупреждение
    console.log('Пожалуйста, введите действительный вес.')
    inputHeight.value = '' // Очищаем поле ввода
    isInputEmpty.value = true // Поле пустое
  }
}
</script>

<template>
  <div class="flex flex-justify-between place-content-center gap-2">
    <p class="flex text-xl font-italic text-blue-900 place-content-center">Введите ваш рост</p>
  </div>
  <div class="flex place-content-center flex-col w-full m-auto">
    <!-- Поле ввода для веса, связанное с inputHeight -->
    <input
      v-model="inputHeight"
      class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
      :placeholder="isInputEmpty ? 'Введите рост в сантиметрах' : ''"
      type="number"
    />
    <!-- Кнопка "Готово", при нажатии вызывает handleSaveHeight -->
    <button
      class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
      @click="handleSaveHeight"
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
