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

const { isShrunk } = toRefs(props)
</script>

<template>
  <div class="flex flex-col mt-5">
    <div class="flex place-content-center gap-5">
      <p class="text-3xl text-white">Вода: 0.5/ 2.5 л</p>
      <p class="text-3xl font-bold text-blue-900">Норма</p>
    </div>
    <div class="grid grid-cols-4 place-content-center bg-white mt-5 rounded-xl">
      <img
        :class="{ shrunk: isShrunk['youself_ml'] }"
        @click="() => shrinkButton('youself_ml')"
        src="/youself_ml.jpg"
        alt="Свой вариант"
        class="w-3/6 m-auto mt-5"
      />

      <img
        :class="{ shrunk: isShrunk['50_ml'] }"
        @click="() => shrinkButton('50_ml')"
        src="/50_ml.jpg"
        alt="50_мл"
        class="w-3/6 m-auto mt-5"
      />

      <img
        :class="{ shrunk: isShrunk['100_ml'] }"
        @click="() => shrinkButton('100_ml')"
        src="/100_ml.jpg"
        alt="100_мл"
        class="w-3/6 m-auto mt-5"
      />
      <img
        :class="{ shrunk: isShrunk['200_ml'] }"
        @click="() => shrinkButton('200_ml')"
        src="/200_ml.jpg"
        alt="200_мл"
        class="w-3/6 m-auto mt-5"
      />
      <p class="text-center font-bold text-blue-900">Свой вариант</p>
      <p class="text-center font-bold text-blue-900">50 мл</p>
      <p class="text-center font-bold text-blue-900">100 мл</p>
      <p class="text-center font-bold text-blue-900">200 мл</p>
    </div>
  </div>
</template>

<style>
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}
</style>
