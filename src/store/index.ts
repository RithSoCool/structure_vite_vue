
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({ count: 1, name: 'Eduardo' }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
})