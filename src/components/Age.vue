<script setup>
import { ref, inject } from 'vue'

// Инъектируем реактивную переменную OpenAge
const OpenAge = inject('OpenAge')
const OpenActivity = inject('OpenActivity')
const AgeValue = inject('AgeValue')
const GenderValue = inject('GenderValue')

// Создаем реактивную переменную для связывания с полем ввода
const inputAge = ref('')
const isInputEmpty = ref(true) // Изначально поле пустое

// Функция для обработки нажатия кнопки "Готово"
const handleSaveAge = () => {
  // Преобразуем значение в число
  const ageNumber = Number(inputAge.value)
  /// Проверяем, является ли введенное значение числом, целым числом и не пустым
  if (!isNaN(ageNumber) && ageNumber > 0 && Number.isInteger(ageNumber)) {
    // Если проверка прошла успешно, сохраняем значение в переменной Weight
    if (GenderValue.value === '88.34') {
      // Если пол - мужской
      AgeValue.value = 5.7 * ageNumber
    } else if (GenderValue.value === '447.6') {
      // Если пол - женский
      AgeValue.value = 4.3 * ageNumber
    }
    console.log(`Возраст сохранен: ${AgeValue.value}`)
    OpenAge.value = false // Устанавливаем OpenWeight в false
    OpenActivity.value = true // Устанавливаем OpenHeight в true
  } else {
    // Если введенное значение не является допустимым числом, выводим предупреждение
    console.log('Пожалуйста, введите действительный возраст.')
    inputAge.value = '' // Очищаем поле ввода
    isInputEmpty.value = true // Поле пустое
  }
}
</script>

<template>
  <div class="flex flex-justify-between place-content-center gap-2">
    <p class="flex text-xl font-italic text-blue-900 place-content-center">Введите ваш возраст</p>
  </div>
  <div class="flex place-content-center flex-col w-full m-auto">
    <!-- Поле ввода для возраста, связанное с inputAge -->
    <input
      v-model="inputAge"
      class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
      :placeholder="isInputEmpty ? 'Введите количество полных лет' : ''"
      type="number"
    />
    <!-- Кнопка "Готово", при нажатии вызывает handleSaveAge -->
    <button
      class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
      @click="handleSaveAge"
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
