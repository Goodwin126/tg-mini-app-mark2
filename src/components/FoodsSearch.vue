<template>
  <div class="relative w-full">
    <input
      v-model="searchQuery"
      @input="handleSearch"
      class="bg-gray-800 border border-gray-900 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-11 outline-none"
      type="text"
      placeholder="Поиск..."
    />
    <img class="left-2.5 top-2.5 w-6 h-6 absolute" src="/magnifier.png" alt="Поиск" />

    <!-- Результаты поиска -->
    <div v-if="searchResults.length > 0" class="mt-2">
      <ul class="bg-gray-800 border border-gray-900 rounded-lg shadow-lg overflow-hidden">
        <li
          v-for="product in searchResults"
          :key="product.id"
          class="px-4 py-3 cursor-pointer hover:bg-gray-700"
        >
          <p class="text-gray-200">{{ product.name }}</p>
          <p class="text-xs text-gray-400">
            {{
              `КБЖУ: ${product.protein}г белков, ${product.fat}г жиров, ${product.carbs}г углеводов, ${product.calories} ккал`
            }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const searchResults = ref([])

const handleSearch = () => {
  // Здесь обычно будет вызов API для поиска в реальном приложении
  // В примере будем эмулировать поиск и выдачу результатов
  if (searchQuery.value.trim() === '') {
    searchResults.value = []
    return
  }

  // Эмулируем результаты поиска (можно заменить на реальные данные с API)
  const mockProducts = [
    { id: 1, name: 'Яблоко', protein: 0.3, fat: 0.2, carbs: 13.8, calories: 52 },
    { id: 2, name: 'Банан', protein: 1.5, fat: 0.2, carbs: 22.8, calories: 96 },
    { id: 3, name: 'Молоко', protein: 3.4, fat: 3.2, carbs: 4.8, calories: 64 },
    { id: 4, name: 'Хлеб', protein: 7.5, fat: 2.2, carbs: 48.5, calories: 242 }
  ]

  // Фильтруем результаты по поисковому запросу
  searchResults.value = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
  )
}
</script>

<style scoped>
ul {
  max-height: 20rem; /* Максимальная высота списка результатов */
  overflow-y: auto; /* Включаем прокрутку, если список большой */
}
</style>
