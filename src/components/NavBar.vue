<template>
  <nav class="bg-white shadow-md p-4 fixed w-full z-50 top-0 left-0">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Bam Logo -->

      <a href="/main">
        <img src="../assets/logo.svg" alt="Bam Logo" class="h-16 w-auto mr-3" />
      </a>
      <!-- Hamburger Menu Icon (Mobile) -->
      <div class="lg:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Nav Links (Desktop) -->
      <div class="hidden lg:flex space-x-6">
        <a href="/main" class="text-gray-700 hover:text-black transition-colors"
          >Página principal</a
        >
        <a
          href="/about"
          class="text-gray-700 hover:text-black transition-colors"
          >Preguntas frecuentes</a
        >
        <a
          href="/profile"
          class="text-gray-700 hover:text-black transition-colors"
          >Profile</a
        >
        <a
          href="/settings"
          class="text-gray-700 hover:text-black transition-colors"
          >Settings</a
        >
      </div>

      <!-- Mobile Menu -->
      <transition name="slide">
        <div
          v-if="menuOpen"
          class="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden"
        >
          <ul class="flex flex-col items-center space-y-4 p-4">
            <li>
              <a
                href="/main"
                class="text-gray-700 hover:text-black transition-colors"
                >Página Principal</a
              >
            </li>
            <li>
              <a
                href="/about"
                class="text-gray-700 hover:text-black transition-colors"
                >Preguntas Frecuentes</a
              >
            </li>
            <li>
              <a
                href="/profile"
                class="text-gray-700 hover:text-black transition-colors"
                >Profile</a
              >
            </li>
            <li>
              <a
                href="/settings"
                class="text-gray-700 hover:text-black transition-colors"
                >Settings</a
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

const menuOpen = ref(false)

// Toggle the mobile menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  gsap.fromTo(
    '.slide-enter-active',
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
  )
}
</script>

<style scoped>
/* Optional: Smooth slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
