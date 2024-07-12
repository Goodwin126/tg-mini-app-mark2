<script setup>
import { ref, watch, inject } from 'vue'
import axios from 'axios'

const userId = inject('userId')
const BACKEND_URL = inject('BACKEND_URL')
const openInputFoodWithProduct = inject('openInputFoodWithProduct')

const props = defineProps({
  items: Array
})

// Состояния для хранения поискового запроса и результатов поиска
const searchQuery = ref('')
const searchResults = ref([])

// Состояние для хранения ID продукта, на который нажали для добавления в избранное
const clickedFavoriteProductId = ref(null)

// Функция для обработки поиска
const handleSearch = () => {
  if (searchQuery.value.trim() === '') {
    searchResults.value = []
    return
  }

  // Фильтруем и ограничиваем результаты до 4 элементов
  searchResults.value = props.items
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
    )
    .slice(0, 4)
}

// Наблюдаем за изменениями в поисковом запросе и вызываем handleSearch при изменениях
watch(searchQuery, handleSearch)

// Функция для добавления продукта в избранное
const addToFavorites = async (product) => {
  try {
    // Устанавливаем clickedFavoriteProductId для анимации
    clickedFavoriteProductId.value = product.id

    // Отправляем POST-запрос на бекенд для добавления записи в таблицу "favorites"
    await axios.post(`${BACKEND_URL}/favorites`, {
      user_id: userId,
      name_of_the_dish: product.name,
      calories: product.calories,
      proteins: product.proteins,
      fats: product.fats,
      carbs: product.carbs
    })

    // Сбрасываем clickedFavoriteProductId после небольшой задержки, чтобы анимация завершилась
    setTimeout(() => {
      clickedFavoriteProductId.value = null
    }, 200)
  } catch (error) {
    console.error('Error adding product to favorites:', error)
  }
}

// Функция для обработки другого действия при нажатии на другую кнопку
const handleOtherAction = (product) => {
  openInputFoodWithProduct(product)
}
</script>

<template>
  <div class="relative w-full">
    <!-- Поле ввода для поиска -->
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
              <!-- Отображаем имя продукта и его характеристики -->
              <p class="text-gray-200">{{ product.name }}</p>
              <p class="text-xs text-gray-400">
                {{
                  ` ${product.calories} ккал, КБЖУ: ${product.proteins}г белков, ${product.fats}г жиров, ${product.carbs}г углеводов`
                }}
              </p>
            </div>
            <div class="flex gap-3">
              <!-- Кнопка для добавления в избранное с анимацией -->
              <img
                class="w-8 h-8 m-auto transition-transform duration-200"
                :class="{ 'transform scale-90': clickedFavoriteProductId === product.id }"
                src="/Button_Like.png"
                alt="Plus"
                @click="addToFavorites(product)"
              />
              <!-- Кнопка для другого действия с анимацией -->
              <img
                class="w-8 h-8 m-auto transition-transform duration-200"
                src="/Button.png"
                alt="Plus"
                @click="handleOtherAction(product)"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
