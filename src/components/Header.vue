<script setup></script>
<template>
  <div class="flex relative">
    <dive class="flex-col gap-2 hover:cursor-pointer ml-4 mt-4 absolute">
      <img class="transition transform hover:scale-110 translate-y-1" src="/Rectangle 1.png" />
      <img class="mt-2 transition transform hover:scale-110 translate-y-1" src="/Rectangle 2.png" />
      <img class="mt-2 transition transform hover:scale-110 translate-y-1" src="/Rectangle 3.png" />
    </dive>
    <div class="w-full ml-4">
      <h1 class="text-xl font-bold text-gray-500 text-center mt-4">Сегодня: суббота</h1>
      <div class="flex place-content-center mt-5">
        <img class="absolute" src="/Ellipse 1.png" />
        <div class="mt-6 grid grid-cols-1 gap-1">
          <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
            <img class="w-2,5 h-2,5 m-auto mr-1" src="/Ellipse 6.png" />
            <p class="ml-1 text-white font-bold">30% Жиры</p>
          </div>
          <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
            <img class="w-2,5 h-2,5 m-auto mr-1" src="/Ellipse 7.png" />
            <p class="flex ml-1 text-blue-900 font-bold">30% Белки</p>
          </div>
          <div class="flex m-auto hover:cursor-pointer transition transform hover:scale-105">
            <img class="w-2,5 h-2,5 m-auto mr-1" src="/Ellipse 8.png" />
            <p class="flexml-1 text-green-600 font-bold">30% Углеводы</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
