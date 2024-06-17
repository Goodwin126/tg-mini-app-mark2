<script setup>
import FoodsSearch from './FoodsSearch.vue'
</script>
<template>
  <div class="flex flex-col rounded-xl h-full bg-black p-1 gap-1">
    <div class="grid grid-cols-3 rounded-xl p-2 w-full bg-navy">
      <div class="flex rounded-md p-1 bg-gray">
        <p class="text-sm font-bold text-white p-1 m-auto">Готово</p>
      </div>
      <p class="flex text-sm font-bold text-blue-900 m-auto text-gray-200">ПРИЕМ ПИЩИ</p>
      <div class="flex rounded-3xl p-3 bg-gray">
        <p class="text-sm font-bold text-white m-auto">0</p>
      </div>
    </div>
    <div class="grid grid-cols-3 rounded-xl p-2 w-full bg-navy gap-1">
      <div class="flex rounded-md p-1 bg-ready">
        <p class="text-xs text-white p-1 m-auto">Продукты</p>
      </div>
      <div class="flex rounded-md p-1 bg-ready">
        <p class="text-xs text-white p-1 m-auto">Избранное</p>
      </div>
      <div class="flex rounded-md p-1 bg-ready">
        <p class="text-xs text-white p-1 m-auto">Блюда</p>
      </div>
    </div>
    <div class="flex rounded-xl p-2 w-full bg-navy">
      <FoodsSearch />
    </div>
    <div class="flex rounded-xl p-2 w-full bg-navy">
      <RouterLink to="/" class="w-full">
        <button class="text-white bg-gray rounded-lg text-sm font-bold text-center p-2.5 w-full">
          Назад
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.bg-navy {
  background-color: rgb(11, 11, 41);
}
.bg-gray {
  background-color: rgb(38, 38, 85);
}
.bg-ready {
  background-color: rgb(23, 23, 90);
}
</style>
