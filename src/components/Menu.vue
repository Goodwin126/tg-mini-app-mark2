<script setup>
import { ref } from 'vue'

const isShrunk = ref({ 1: false, 2: false }) // Для каждой кнопки отслеживаем состояние уменьшения

const shrinkButton = (buttonId) => {
  isShrunk.value[buttonId] = true
  setTimeout(() => {
    isShrunk.value[buttonId] = false
  }, 100) // Задержка для анимации (в миллисекундах)
}
</script>

<template>
  <div class="place-content-center mt-10 touch-none select-none">
    <div class="flex flex-col">
      <div class="flex grid grid-cols-3">
        <img class="flex-justify-left m-auto" src="/Ellipse 3.png" />
        <div class="flex flex-col m-auto mt-2.5 ml-0">
          <p class="text-lg text-white overflow-auto">Вода 1,5 л</p>
          <img class="m-auto ml-0" src="/Runner_4.png" />
          <p class="text-xs text-gray-400 overflow-auto">рекомендовано 2,3 л</p>
        </div>
        <img
          @click="shrinkButton(1)"
          :class="{ shrinked: isShrunk[1], normal: !isShrunk[1] }"
          class="m-auto hover:cursor-pointer"
          src="/Button.png"
        />
        <img class="flex-justify-left m-auto" src="/Ellipse 4.png" />
        <div class="flex flex-col mt-2.5">
          <p class="text-lg text-white">Завтрак</p>
          <p class="text-xs text-gray-400">рекомендовано 410 ккал</p>
        </div>
        <img
          @click="shrinkButton(2)"
          :class="{ shrinked: isShrunk[2], normal: !isShrunk[2] }"
          class="m-auto hover:cursor-pointer"
          src="/Button.png"
        />
        <img class="flex-justify-left m-auto" src="/Ellipse 2.png" />
        <div class="flex flex-col mt-2.5">
          <p class="text-lg text-white">Обед</p>
          <p class="text-xs text-gray-400">рекомендовано 540 ккал</p>
        </div>
        <img
          @click="shrinkButton(3)"
          :class="{ shrinked: isShrunk[3], normal: !isShrunk[3] }"
          class="m-auto hover:cursor-pointer"
          src="/Button.png"
        />
        <img class="flex-justify-left m-auto" src="/Ellipse 5.png" />
        <div class="flex flex-col mt-2.5">
          <p class="text-lg text-white">Ужин</p>
          <p class="text-xs text-gray-400">рекомендовано 320 ккал</p>
        </div>
        <img
          @click="shrinkButton(4)"
          :class="{ shrinked: isShrunk[4], normal: !isShrunk[4] }"
          class="m-auto hover:cursor-pointer"
          src="/Button.png"
        />
      </div>
    </div>
  </div>
  <div class="flex grid grid-cols-4 mt-6 touch-none select-none">
    <img
      class="m-auto w-14 h-14 focus:outline-none transition transform hover:scale-105 hover:-translate-y-1"
      src="/diary.png"
    />
    <img
      class="m-auto w-14 h-14 focus:outline-none transition transform hover:scale-105 hover:-translate-y-1"
      src="/study.png"
    />
    <img
      status
      class="m-auto w-14 h-14 focus:outline-none transition transform hover:scale-105 hover:-translate-y-1"
      src="/awards.png"
    />
    <img
      class="m-auto w-14 h-14 focus:outline-none transition transform hover:scale-105 hover:-translate-y-1"
      src="/results.png"
    />
    <p class="m-auto text-base font-bold text-black hover:text-blue-800">Дневник</p>
    <p class="m-auto text-base font-bold text-black hover:text-blue-800">Изучить</p>
    <p class="m-auto text-base font-bold text-black hover:text-blue-800">Награды</p>
    <p class="m-auto text-base font-bold text-black hover:text-blue-800">Результаты</p>
  </div>
</template>

<style scoped>
button {
  transition: transform 0.3s ease-in-out; /* Применяем плавные переходы */
}

.shrinked {
  transform: scale(0.8); /* Уменьшаем размер кнопки */
}

.normal {
  transform: scale(1); /* Возвращаем к обычному размеру */
}
</style>
