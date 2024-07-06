<script setup>
import { ref, onMounted, inject } from 'vue'
import axios from 'axios'
import FoodsSearch from './FoodsSearch.vue'
import Favorites from './Favorites.vue'

// Создаем реактивное состояние для хранения списка продуктов
const items = ref([])

// Создаем реактивное состояние для активной вкладки
const activeTab = ref('Продукты')

// Получение переменных из родительского компонента
const BACKEND_URL = inject('BACKEND_URL')

// Загружаем данные продуктов с сервера при монтировании компонента
onMounted(() => {
  axios
    .get(`${BACKEND_URL}/food`)
    .then((response) => {
      items.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})

// Функция для переключения активной вкладки
const setActiveTab = (tab) => {
  activeTab.value = tab
}
</script>

<template>
  <div class="flex flex-col rounded-xl h-full bg-black p-1 gap-1">
    <div class="grid grid-cols-3 rounded-xl p-1 w-full bg-navy">
      <div class="flex rounded-md p-1 bg-blue-800">
        <p class="text-sm font-bold text-white p-1 m-auto">Готово</p>
      </div>
      <p class="flex text-sm font-bold text-blue-900 m-auto text-gray-200 p-2">ПРИЕМ ПИЩИ</p>
      <div class="flex rounded-2xl p-3 bg-blue-800">
        <p class="text-sm font-bold text-white m-auto">0 ккал</p>
      </div>
    </div>
    <div class="grid grid-cols-3 rounded-xl p-1 w-full bg-navy gap-1">
      <div
        class="flex rounded-md p-1 cursor-pointer"
        :class="{ 'bg-ready': activeTab !== 'Продукты', 'bg-blue-600': activeTab === 'Продукты' }"
        @click="setActiveTab('Продукты')"
      >
        <p class="text-xs text-white p-2 m-auto">Продукты</p>
      </div>
      <div
        class="flex rounded-md p-1 cursor-pointer"
        :class="{ 'bg-ready': activeTab !== 'Избранное', 'bg-blue-600': activeTab === 'Избранное' }"
        @click="setActiveTab('Избранное')"
      >
        <p class="text-xs text-white p-2 m-auto">Избранное</p>
      </div>
      <div
        class="flex rounded-md p-1 cursor-pointer"
        :class="{ 'bg-ready': activeTab !== 'Блюда', 'bg-blue-600': activeTab === 'Блюда' }"
        @click="setActiveTab('Блюда')"
      >
        <p class="text-xs text-white p-2 m-auto">Блюда</p>
      </div>
    </div>
    <!-- Условный рендеринг компонента FoodsSearch -->
    <div v-if="activeTab === 'Продукты'" class="flex rounded-xl p-1 w-full bg-navy">
      <FoodsSearch :items="items" />
    </div>
    <!-- Условный рендеринг компонента Favorites -->
    <div v-if="activeTab === 'Избранное'" class="flex rounded-xl p-1 w-full bg-navy">
      <Favorites />
    </div>
    <div class="flex rounded-xl p-1 w-full bg-navy">
      <RouterLink to="/" class="w-full">
        <button
          class="text-white bg-blue-800 rounded-lg text-sm font-bold text-center p-2.5 w-full"
        >
          Назад
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.bg-navy {
  background-color: rgb(9, 9, 37);
}
.bg-gray {
  background-color: rgb(38, 38, 85);
}
.bg-ready {
  background-color: rgb(23, 23, 90);
}
.bg-blue-600 {
  background-color: rgb(37, 99, 235);
}
</style>
