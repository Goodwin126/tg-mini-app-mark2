<script setup>
// Импортируем необходимые функции и библиотеки
import { ref, onMounted, inject } from 'vue'
import axios from 'axios'

// Получаем userId с помощью inject
const userId = inject('userId')

// Создаем реактивное состояние для хранения списка избранных продуктов
const favorites = ref([])

// Получение переменных из родительского компонента
const BACKEND_URL = inject('BACKEND_URL')

// Функция для загрузки данных избранных продуктов с сервера при монтировании компонента
onMounted(() => {
  axios
    .get(`${BACKEND_URL}/favorites/${userId}`) // Запрос к серверу для получения списка избранных продуктов
    .then((response) => {
      favorites.value = response.data // Сохраняем полученные данные в состояние
    })
    .catch((error) => {
      console.error('Error fetching favorites:', error) // Обрабатываем ошибки при запросе
    })
})

// Функция для удаления избранного продукта
const handleRemoveFavorite = (counter) => {
  axios
    .delete(`${BACKEND_URL}/favorites/${counter}`) // Запрос к серверу для удаления продукта
    .then(() => {
      // Обновляем состояние, удаляя удаленный элемент из списка
      favorites.value = favorites.value.filter((fav) => fav.counter !== counter)
    })
    .catch((error) => {
      console.error('Error removing favorite:', error) // Обрабатываем ошибки при запросе
    })
}
</script>

<template>
  <div class="bg-gray-800 border border-gray-900 rounded-lg shadow-lg overflow-hidden w-full">
    <ul>
      <!-- Перебираем список избранных продуктов и отображаем каждый элемент -->
      <li
        v-for="favorite in favorites"
        :key="favorite.id"
        class="px-4 py-3 cursor-pointer hover:bg-gray-700 border-b border-gray-700"
      >
        <div class="flex justify-between">
          <div class="flex flex-col">
            <!-- Отображаем информацию о продукте -->
            <p class="text-gray-200">{{ favorite.name_of_the_dish }}</p>
            <p class="text-xs text-gray-400">
              <!-- Отображаем данные о калориях, белках, жирах и углеводах -->
              {{
                `Калории: ${favorite.calories} ккал, Белки: ${favorite.proteins}г, Жиры: ${favorite.fats}г, Углеводы: ${favorite.carbs}г`
              }}
            </p>
          </div>
          <div class="flex justify-center gap-3">
            <!-- Кнопка для выполнения другой функции, если требуется -->
            <img
              class="w-8 h-8 m-auto transition-transform duration-200 mr-0"
              src="/Button.png"
              alt="Plus"
              @click="handleOtherAction(favorite)"
            />
            <!-- Кнопка для удаления продукта из избранного -->
            <img
              class="w-8 h-8 m-auto transition-transform duration-200 mr-0"
              src="/Button_cross.png"
              alt="Cross"
              @click="() => handleRemoveFavorite(favorite.counter)"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Анимация для уменьшения кнопки при нажатии */
.shrunk {
  transform: scale(0.9);
  transition: transform 0.1s ease;
}

/* Анимация для плавного появления и исчезновения элементов */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
