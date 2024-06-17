import { defineStore } from 'pinia'

export const useWaterStore = defineStore('water', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment(amount) {
      this.count += amount
    }
  }
})
