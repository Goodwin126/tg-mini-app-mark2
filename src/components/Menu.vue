<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  shrinkButton: {
    type: Function,
    required: true
  },
  isShrunk: {
    type: Object,
    required: true
  }
})
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
      <img
        @click="shrinkButton(1)"
        :class="{ shrinked: isShrunk[1], normal: !isShrunk[1] }"
        class="m-auto hover:cursor-pointer mr-2"
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
        class="m-auto hover:cursor-pointer mr-2"
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
        class="m-auto hover:cursor-pointer mr-2"
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
        class="m-auto hover:cursor-pointer mr-2"
        src="/Button.png"
      />
    </div>
  </div>
  <div class="flex grid grid-cols-4 mt-2 touch-none select-none">
    <div class="m-auto" :class="{ shrunk: isShrunk['diary'] }" @click="() => shrinkButton('diary')">
      <img class="w-14 h-14" src="/diary.png" />
      <p class="text-sm font-italic text-black">Дневник</p>
    </div>
    <div class="m-auto" :class="{ shrunk: isShrunk['study'] }" @click="() => shrinkButton('study')">
      <img class="w-14 h-14" src="/study.png" />
      <p class="text-sm font-italic text-black">Изучить</p>
    </div>
    <div
      class="m-auto"
      :class="{ shrunk: isShrunk['awards'] }"
      @click="() => shrinkButton('awards')"
    >
      <img class="w-14 h-14" src="/awards.png" />
      <p class="text-sm font-italic text-black">Награды</p>
    </div>
    <div
      class="m-auto"
      :class="{ shrunk: isShrunk['results'] }"
      @click="() => shrinkButton('results')"
    >
      <img class="w-14 h-14" src="/results.png" />
      <p class="text-sm font-italic text-black">Результаты</p>
    </div>
  </div>
</template>

<style>
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>
