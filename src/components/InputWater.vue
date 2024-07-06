<script setup></script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black opacity-70 z-10"></div>
  <div class="fixed z-20 top-0 left-0 h-full w-full flex items-center justify-center">
    <div class="flex flex-col bg-white rounded-3xl h-1/3 w-1/3 p-5">
      <div class="flex flex-col gap-1">
        <div class="flex flex-col">
          <p class="flex text-xl font-bold text-blue-900 place-content-center">Введите ваш</p>
          <p class="flex text-xl font-bold text-blue-900 place-content-center">вариант</p>
        </div>
        <div class="flex place-content-center flex-col w-5/6 m-auto">
          <input
            class="no-spinner rounded-lg p-1 border-2 border-blue-800 w-full text-center"
            placeholder="Введите количество в мл."
            type="number"
            v-model="customAmount"
          />
          <router-link to="/water">
            <button
              @click="handleCustomAmount"
              class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
            >
              Готово
            </button>
          </router-link>
          <router-link to="/water">
            <button
              class="text-white bg-blue-800 rounded-lg text-sm px-5 text-center mt-1 p-2.5 w-full"
            >
              Назад
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-spinner {
  -moz-appearance: textfield; /* Удаление стрелочек в Firefox */
}
</style>
-->
