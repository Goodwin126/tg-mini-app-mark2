import { defineStore } from 'pinia'

export const useWaterStore = defineStore('water', {
  state: () => ({
    count: 0, // Количество выпитой воды
    normPerPerson: 2000 // Норма на человека (примерное значение)
  }),
  actions: {
    increment(amount) {
      this.count += amount
    },

    // Установить норму на человека
    setNormPerPerson(norm) {
      this.normPerPerson = norm
    }
  }
})
