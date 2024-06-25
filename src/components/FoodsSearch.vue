<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  items: Array
})

const searchQuery = ref('')
const searchResults = ref([])

const handleSearch = () => {
  if (searchQuery.value.trim() === '') {
    searchResults.value = []
    return
  }

  searchResults.value = props.items
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
    )
    .slice(0, 4) // Ограничиваем вывод до 4 элементов
}

watch(searchQuery, handleSearch)
</script>

<template>
  <div class="relative w-full">
    <input
      v-model="searchQuery"
      class="bg-gray-800 border border-gray-900 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-11 outline-none"
      type="text"
      placeholder="Поиск..."
    />
    <img class="left-2.5 top-2.5 w-6 h-6 absolute" src="/magnifier.png" alt="Поиск" />

    <!-- Результаты поиска -->
    <div v-if="searchQuery && searchResults.length > 0" class="mt-2">
      <ul class="bg-gray-800 border border-gray-900 rounded-lg shadow-lg overflow-hidden">
        <li
          v-for="product in searchResults"
          :key="product.id"
          class="px-4 py-3 cursor-pointer hover:bg-gray-700 border-b border-gray-700"
        >
          <div class="flex justify-between">
            <div>
              <p class="text-gray-200">{{ product.name }}</p>
              <p class="text-xs text-gray-400">
                {{
                  ` ${product.calories} ккал, КБЖУ: ${product.proteins}г белков, ${product.fats}г жиров, ${product.carbs}г углеводов`
                }}
              </p>
            </div>
            <div class="flex gap-3">
              <img class="w-8 h-8 m-auto" src="/Button_Like.png" alt="Plus" />
              <img class="w-8 h-8 m-auto" src="/Button.png" alt="Plus" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  max-height: 20rem; /* Максимальная высота списка результатов */
  overflow-y: auto; /* Включаем прокрутку, если список большой */
}
</style>
