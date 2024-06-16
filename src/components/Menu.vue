<script setup>
import { ref } from 'vue'

const isShrunk = ref({})

const shrinkButton = (buttonId) => {
  isShrunk.value[buttonId] = true
  setTimeout(() => {
    isShrunk.value[buttonId] = false
  }, 100) // Задержка для анимации (в миллисекундах)
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex grid grid-cols-3">
      <img class="flex-justify-left m-auto" src="/Ellipse 3.png" />
      <div class="flex flex-col m-auto mt-2.5 ml-0">
        <p class="text-lg text-white overflow-auto">Вода 1,5 л</p>
        <img class="m-auto ml-0" src="/Runner_4.png" />
        <p class="text-xs text-gray-400 overflow-auto">рекомендовано 2,3 л</p>
      </div>
      <router-link to="/water">
        <img
          src="/Button.png"
          alt="Button_1"
          :class="{ shrunk: isShrunk['Button_1'] }"
          @click="shrinkButton('Button_1')"
          class="m-auto hover:cursor-pointer mr-2"
        />
      </router-link>
      <img class="flex-justify-left m-auto" src="/Ellipse 4.png" />
      <div class="flex flex-col mt-2.5">
        <p class="text-lg text-white">Завтрак</p>
        <p class="text-xs text-gray-400">рекомендовано 410 ккал</p>
      </div>
      <img
        src="/Button.png"
        alt="Button_2"
        :class="{ shrunk: isShrunk['Button_2'] }"
        @click="shrinkButton('Button_2')"
        class="m-auto hover:cursor-pointer mr-2"
      />
      <img class="flex-justify-left m-auto" src="/Ellipse 2.png" />
      <div class="flex flex-col mt-2.5">
        <p class="text-lg text-white">Обед</p>
        <p class="text-xs text-gray-400">рекомендовано 540 ккал</p>
      </div>
      <img
        src="/Button.png"
        alt="Button_3"
        :class="{ shrunk: isShrunk['Button_3'] }"
        @click="shrinkButton('Button_3')"
        class="m-auto hover:cursor-pointer mr-2"
      />
      <img class="flex-justify-left m-auto" src="/Ellipse 5.png" />
      <div class="flex flex-col mt-2.5">
        <p class="text-lg text-white">Ужин</p>
        <p class="text-xs text-gray-400">рекомендовано 320 ккал</p>
      </div>
      <img
        src="/Button.png"
        alt="Button_4"
        :class="{ shrunk: isShrunk['Button_4'] }"
        @click="shrinkButton('Button_4')"
        class="m-auto hover:cursor-pointer mr-2"
      />
    </div>
  </div>
  <div class="flex grid grid-cols-4 mt-2 touch-none select-none">
    <div
      class="m-auto flex flex-col"
      :class="{ shrunk: isShrunk['diary'] }"
      @click="shrinkButton('diary')"
    >
      <img class="m-auto w-14 h-14" src="/diary.png" />
      <p class="m-auto text-sm font-italic text-black">Дневник</p>
    </div>
    <div
      class="m-auto flex flex-col"
      :class="{ shrunk: isShrunk['study'] }"
      @click="shrinkButton('study')"
    >
      <img class="m-auto w-14 h-14" src="/study.png" />
      <p class="m-auto text-sm font-italic text-black">Изучить</p>
    </div>
    <div
      class="m-auto flex flex-col"
      :class="{ shrunk: isShrunk['awards'] }"
      @click="shrinkButton('awards')"
    >
      <img class="m-auto w-14 h-14" src="/awards.png" />
      <p class="m-auto text-sm font-italic text-black">Награды</p>
    </div>
    <div
      class="m-auto flex flex-col"
      :class="{ shrunk: isShrunk['results'] }"
      @click="shrinkButton('results')"
    >
      <img class="m-auto w-14 h-14" src="/results.png" />
      <p class="m-auto text-sm font-italic text-black">Результаты</p>
    </div>
  </div>
</template>

<style>
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>
