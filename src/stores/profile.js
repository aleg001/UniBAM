import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profileType: null,
  }),
  actions: {
    setProfileType(type) {
      this.profileType = type
    },
  },
})
