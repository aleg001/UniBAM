<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-8 text-center"
  >
    <h1 class="text-3xl font-bold text-gray-800 mt-32">Reto UniBAM</h1>
    <p
      v-if="userStore.firstName && profile"
      class="text-xl font-semibold mb-6"
      :style="{ color: profileColor }"
    >
      {{ fullName }} - Perfil: {{ profile }}
    </p>

    <div class="w-full max-w-md space-y-6">
      <!-- First Goal Card (Monetary Goal) -->
      <div
        class="goal-card flex flex-col items-center bg-white rounded-lg shadow-lg p-6 space-y-4"
      >
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="text-lg font-semibold">Tu meta</p>
        </div>
        <p class="text-2xl font-bold text-gray-800">Q5,000</p>
        <div class="relative h-32 w-32 mx-auto">
          <svg class="gauge" viewBox="0 0 36 36">
            <path
              class="circle-bg"
              d="M18 2.0845a 15.9155 15.9155 0 1 1 0 31.831a 15.9155 15.9155 0 1 1 0-31.831"
            />
            <path
              :style="{
                stroke: profileColor,
                strokeDashoffset: 100 - gauge1Percentage,
              }"
              ref="gauge1"
              class="circle"
              d="M18
              2.0845a 15.9155 15.9155 0 1 1 0 31.831a 15.9155 15.9155 0 1 1
              0-31.831"
            />
          </svg>
          <span
            class="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-700"
          >
            15%
          </span>
        </div>
        <p class="text-gray-600">{{ firstGoalMessage }}</p>
      </div>

      <!-- Second Goal Card (Purchase Goal) -->
      <div
        class="!mb-16 goal-card flex flex-col items-center bg-white rounded-lg shadow-lg p-6 space-y-4"
      >
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p class="text-lg font-semibold">Tu meta</p>
        </div>
        <p class="text-2xl font-bold text-gray-800">10 compras</p>
        <div class="relative h-32 w-32 mx-auto">
          <svg class="gauge" viewBox="0 0 36 36">
            <path
              class="circle-bg"
              d="M18 2.0845a 15.9155 15.9155 0 1 1 0 31.831a 15.9155 15.9155 0 1 1 0-31.831"
            />

            <path
              :style="{
                stroke: profileColor,
                strokeDashoffset: 100 - gauge2Percentage,
              }"
              ref="gauge2"
              class="circle"
              d="M18 2.0845a 15.9155 15.9155 0 1 1 0 31.831a 15.9155 15.9155 0 1 1 0-31.831"
            />
          </svg>
          <span
            class="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-700"
          >
            50%
          </span>
        </div>
        <p class="text-gray-600">{{ secondGoalMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { gsap } from 'gsap'

const userStore = useUserStore()

// Retrieve dynamic data from store
const fullName = computed(() => `${userStore.firstName} ${userStore.lastName}`)
const profile = computed(() => userStore.profileType)

// Define profile-specific colors
const profileColor = computed(() => {
  switch (profile.value) {
    case 'Gamer':
      return '#70D6ED'
    case 'Fit':
      return '#FB923C'
    case 'Foodie':
      return '#FFD902'
    default:
      return '#70D6ED'
  }
})

// Conditional goal messages based on profile type
const firstGoalMessage = computed(() => {
  switch (profile.value) {
    case 'Gamer':
      return 'Te faltan Q4250 para obtener tu silla gamer'
    case 'Fit':
      return 'Te faltan Q1700 para obtener tu proteína'
    case 'Foodie':
      return 'Te faltan 10 compras para tu 15% de descuento en cualquier combo de McDonald’s'
    default:
      return 'Te faltan Q4250 para completar tu objetivo'
  }
})

const secondGoalMessage = computed(() => {
  switch (profile.value) {
    case 'Gamer':
      return 'Te faltan 5 compras para tu siguiente nivel'
    case 'Fit':
      return 'Te faltan 3 compras para completar tu entrenamiento'
    case 'Foodie':
      return 'Te faltan 10 compras para recibir tu descuento especial en restaurantes'
    default:
      return 'Te faltan 5 compras para completar tu objetivo'
  }
})

const gauge1Percentage = 15
const gauge2Percentage = 50

// Animate Gauges on Mount
onMounted(() => {
  gsap.to('[ref="gauge1"]', {
    strokeDashoffset: 100 - gauge1Percentage,
    duration: 1.5,
    ease: 'power2.out',
  })

  gsap.to('[ref="gauge2"]', {
    strokeDashoffset: 100 - gauge2Percentage,
    duration: 1.5,
    ease: 'power2.out',
  })
})
</script>

<style scoped>
.gauge {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}
.circle-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 3.8;
}
.circle {
  fill: none;
  stroke-width: 3.8;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset 0.5s;
}
.goal-card {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
