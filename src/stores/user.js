// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: '',
    lastName: '',
  }),
  actions: {
    setUser(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
      console.log('Pinia store updated:', this.firstName, this.lastName)
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage, // Use localStorage to persist data
      },
    ],
  },
})
