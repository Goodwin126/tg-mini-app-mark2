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
    <FoodsSearch />
  </div>
</template>

<style scoped>
.bg-navy {
  background-color: rgb(5, 5, 27);
}
.bg-gray {
  background-color: rgb(25, 25, 75);
}
.bg-ready {
  background-color: rgb(15, 15, 48);
}
</style>
