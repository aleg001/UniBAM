// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    firstName: '',
    lastName: '',
    profileType: '', // Added profile type to user state
  }),
  actions: {
    setUser(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
      console.log('Pinia store updated:', this.firstName, this.lastName)
    },
    setProfileType(type) {
      this.profileType = type
      console.log('Profile type set to:', this.profileType)
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage, // Persist user data in localStorage
      },
    ],
  },
})
