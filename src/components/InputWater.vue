<template>
  <div class="flex place-content-center gap-2 mt-5">
    <p class="flex text-3xl font-bold text-blue-900 place-content-center">Введите ваш вариант</p>
    <img src="/a_bottle_of_water.jpg" alt="Bottle_of_water" class="w-10 h-10 bg-white rounded-xl" />
  </div>
  <div class="flex place-content-center flex-col w-4/6 m-auto">
    <input
      class="mt-5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
      type="text"
      placeholder="Введите количество в миллилитрах"
    />
    <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5">
      Готово
    </button>
    <button class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5">
      Назад
    </button>
  </div>
</template>
