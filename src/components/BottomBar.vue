<template>
  <div class="fixed bottom-0 w-full bg-white shadow-inner p-2 z-50">
    <div class="container flex gap-32 align-middle mx-12 items-center">
      <!-- Home Icon -->
      <button @click="goToHome" class="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700 hover:text-black transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 12l9-9m0 0l9 9m-9-9v18"
          />
        </svg>
        <span class="text-xs text-gray-700">Inicio</span>
      </button>

      <!-- FAQ Icon -->
      <button @click="goToFAQ" class="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700 hover:text-black transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 9h3v12h2V9h3m-4-4h-2v2h2V5z"
          />
        </svg>
        <span class="text-xs text-gray-700">FAQ</span>
      </button>

      <!-- Profile Icon -->
      <button @click="goToProfile" class="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700 hover:text-black transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.121 19.879A3 3 0 017 19h10a3 3 0 011.879.879M12 13a5 5 0 100-10 5 5 0 000 10z"
          />
        </svg>
        <span class="text-xs text-gray-700">UniBAM</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => router.push('/help')
const goToFAQ = () => router.push('/about')
const goToProfile = () => router.push('/main')
</script>

<style scoped>
/* Optional: Add hover effects for icons */
button:hover svg {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
</style>
