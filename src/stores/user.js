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
    },
  },
})
