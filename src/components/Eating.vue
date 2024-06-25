<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import FoodsSearch from './FoodsSearch.vue'

// Создаем реактивное состояние для хранения списка продуктов
const items = ref([])

// Загружаем данные продуктов с сервера при монтировании компонента
onMounted(() => {
  axios
    .get('http://localhost:3000/food')
    .then((response) => {
      items.value = response.data
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})
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
      <div class="flex rounded-md p-1 bg-ready">
        <p class="text-xs text-white p-2 m-auto">Продукты</p>
      </div>
      <div class="flex rounded-md p-1 bg-ready">
        <p class="text-xs text-white p-2 m-auto">Избранное</p>
      </div>
      <div class="flex rounded-md p-1 bg-ready">
        <p class="text-xs text-white p-2 m-auto">Блюда</p>
      </div>
    </div>
    <div class="flex rounded-xl p-1 w-full bg-navy">
      <FoodsSearch :items="items" />
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
</style>
