<script setup>
import { computed, inject } from 'vue'
import ProgressBar from '@/components/ProgressBar.vue'

// Получаем функцию и состояние с помощью inject
const shrinkButton = inject('shrinkButton')
const isShrunk = inject('isShrunk')
const water = inject('water')
const TargetWater = inject('TargetWater')
const TargetCalories = inject('TargetCalories')
const typeEating = inject('typeEating')

const waterConsumedLiters = computed(() => {
  return (water.value / 1000).toFixed(2) // Делим на 1000 для перевода в литры и округляем до двух знаков после запятой
})
const turnButton2 = async () => {
  shrinkButton('Button_2'), (typeEating.value = 'завтрак')
  console.log(typeEating.value)
}
const turnButton3 = async () => {
  shrinkButton('Button_3'), (typeEating.value = 'обед')
  console.log(typeEating.value)
}
const turnButton4 = async () => {
  shrinkButton('Button_4'), (typeEating.value = 'ужин')
  console.log(typeEating.value)
}
</script>

<template>
  <div></div>
  <div class="flex flex-col">
    <div class="flex grid" style="grid-template-columns: 1fr 2fr 1fr">
      <img class="flex-justify-left m-auto ml-0" src="/Ellipse 3.png" />
      <div class="ml-0 mt-1.5">
        <p class="text-lg text-blue-300 overflow-auto">Вода {{ waterConsumedLiters }} л.</p>
        <!-- Прогресс-бар -->
        <ProgressBar />
        <p class="text-xs text-gray-400 overflow-auto mt-0">
          рекомендовано {{ TargetWater.toFixed(1) }} мл.
        </p>
      </div>
      <router-link to="/water" class="m-auto mr-0">
        <img
          src="/Button.png"
          alt="Button_1"
          :class="{ shrunk: isShrunk['Button_1'] }"
          @click="shrinkButton('Button_1')"
          class="m-auto hover:cursor-pointer"
        />
      </router-link>

      <img class="flex-justify-left m-auto ml-0" src="/Ellipse 4.png" />
      <div class="flex flex-col mt-2.5">
        <p class="text-lg text-white">Завтрак</p>
        <p class="text-xs text-gray-400">
          рекомендовано {{ (TargetCalories * 0.5).toFixed(1) }} ккал.
        </p>
      </div>
      <router-link to="/eating" class="m-auto mr-0">
        <img
          src="/Button.png"
          alt="Button_2"
          :class="{ shrunk: isShrunk['Button_2'] }"
          @click="turnButton2()"
          class="m-auto hover:cursor-pointer"
        />
      </router-link>
      <img class="flex-justify-left m-auto ml-0" src="/Ellipse 2.png" />
      <div class="flex flex-col mt-2.5">
        <p class="text-lg text-white">Обед</p>
        <p class="text-xs text-gray-400">
          рекомендовано {{ (TargetCalories * 0.355).toFixed(1) }} ккал.
        </p>
      </div>
      <router-link to="/eating" class="m-auto mr-0">
        <img
          src="/Button.png"
          alt="Button_3"
          :class="{ shrunk: isShrunk['Button_3'] }"
          @click="turnButton3()"
          class="m-auto hover:cursor-pointer mr-0"
        />
      </router-link>
      <img class="flex-justify-left м-auto ml-0" src="/Ellipse 5.png" />
      <div class="flex flex-col mt-2.5">
        <p class="text-lg text-white">Ужин</p>
        <p class="text-xs text-gray-400">
          рекомендовано {{ (TargetCalories * 0.145).toFixed(1) }} ккал.
        </p>
      </div>
      <router-link to="/eating" class="m-auto mr-0">
        <img
          src="/Button.png"
          alt="Button_4"
          :class="{ shrunk: isShrunk['Button_4'] }"
          @click="turnButton4()"
          class="m-auto hover:cursor-pointer mr-0"
        />
      </router-link>
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
      <p class="м-auto text-sm font-italic text-black">Награды</p>
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

<style lang="scss">
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
