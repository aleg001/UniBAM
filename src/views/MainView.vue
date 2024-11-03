<template>
  <NavBar />
  <div class="min-h-screen bg-white flex flex-col items-center p-4">
    <!-- Welcome Text with Dynamic Name -->
    <div class="text-center mb-4 mt-32">
      <h1 class="text-2xl font-bold text-black md:text-3xl">
        Bienvenido, {{ fullName }}
      </h1>
      <p class="text-gray-600 my-2">
        ¿Estás listo para construir tu futuro en UniBam?
      </p>
    </div>

    <!-- Search Bar -->
    <div class="relative w-full max-w-md mb-5">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="¿Tienes dudas?"
        class="w-full py-3 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-[#ffda00]"
        @keyup.enter="goToFAQ"
      />
      <button
        class="absolute right-4 top-2/4 -translate-y-2/4"
        @click="goToFAQ"
        @keyup.enter="goToFAQ"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 16l6-6m0 0l6-6m-6 6H2"
          />
        </svg>
      </button>
    </div>

    <!-- Conditional FAQ Button based on searchQuery -->
    <transition name="fade" mode="out-in">
      <div v-if="showFAQButton" class="w-full max-w-md mb-4">
        <button
          @click="goToFAQ"
          class="w-1/2 mx-auto bg-blue-500 text-white py-3 rounded-full shadow-md font-medium hover:bg-blue-600 transition-all"
        >
          Ver Preguntas Frecuentes
        </button>
      </div>
    </transition>

    <!-- Benefit Cards -->
    <div ref="cardsContainer" class="space-y-8 w-full max-w-md mt-5">
      <a href="/challenge" class="block">
        <div
          ref="card1"
          class="flex items-center bg-[#71d6ed] text-black rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-150"
          @mouseenter="onCardHover(card1)"
          @mouseleave="onCardLeave(card1)"
        >
          <img
            src="../assets/cerca.jpg"
            alt="Reto UniBam"
            class="w-20 h-20 rounded-lg object-cover"
          />
          <p class="ml-4 text-xl font-bold">Reto UniBam</p>
        </div>
      </a>

      <a href="/nearby" class="block">
        <div
          ref="card2"
          class="flex items-center bg-[#ffda00] text-black rounded-xl p-4 shadow-md hover:shadow-xl"
          @mouseenter="onCardHover(card2)"
          @mouseleave="onCardLeave(card2)"
          to="/nearby"
        >
          <img
            src="../assets/cuentas.png"
            alt="Beneficios cerca de mi"
            class="w-20 h-20 rounded-lg object-cover"
          />
          <p class="ml-4 text-xl font-bold">Beneficios cerca de mi</p>
        </div>
      </a>

      <div
        ref="card3"
        class="flex items-center bg-orange-400 text-black rounded-xl p-4 shadow-md hover:shadow-xl"
        @mouseenter="onCardHover(card3)"
        @mouseleave="onCardLeave(card3)"
      >
        <img
          src="../assets/premio.png"
          alt="Premios"
          class="w-20 h-20 rounded-lg object-cover"
        />
        <p class="ml-4 text-xl font-bold">Sorteos UniBAM</p>
      </div>
    </div>
  </div>

  <BottomBar class="md:hidden" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import { gsap } from 'gsap'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import BottomBar from '../components/BottomBar.vue'

// Access the user store
const userStore = useUserStore()
const searchQuery = ref('')
// Computed property to retrieve full name
const fullName = computed(() => `${userStore.firstName} ${userStore.lastName}`)
const showFAQButton = computed(() => searchQuery.value.length > 0)
const router = useRouter()
const goToFAQ = () => {
  router.push('/about')
}

const cardsContainer = ref(null)
const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)

onMounted(() => {
  gsap.from([card1.value, card2.value, card3.value], {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
  })
})

const onCardHover = (card) => {
  gsap.to(card.value, {
    scale: 1.05,
    rotate: 2,
    duration: 0.3,
    ease: 'power2.out',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  })
}

const onCardLeave = (card) => {
  gsap.to(card.value, {
    scale: 1,
    rotate: 0,
    duration: 0.3,
    ease: 'power2.out',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  })
}
</script>
