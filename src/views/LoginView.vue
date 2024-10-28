<template>
  <div
    class="min-h-screen bg-blanco flex items-center justify-center relative overflow-hidden"
  >
    <div
      class="relative w-full max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg md:max-w-none md:w-full"
    >
      <!-- Header -->
      <h1 class="text-2xl sm:text-3xl font-bold text-negro text-center mb-2">
        Inicia sesión
      </h1>

      <div class="inset-0 -z-10 flex flex-col justify-between mb-5">
        <div ref="line1" class="h-1 bg-amarillo-macondo"></div>
        <div ref="line2" class="h-1 bg-naranja-alba"></div>
        <div ref="line3" class="h-1 bg-verde-andino"></div>
        <div ref="line4" class="h-1 bg-rosa-flamenco"></div>
      </div>

      <!-- Back Button -->
      <button
        class="text-negro left-4 top-4 focus:outline-none"
        @click="goBack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <p class="text-gray-500 text-center mb-6">Accede a tu cuenta</p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Email Field -->
        <div>
          <input
            type="email"
            placeholder="Tu correo"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-verde-andino focus:ring-verde-andino focus:outline-none"
            v-model="email"
          />
        </div>

        <!-- Password Field -->
        <div>
          <input
            type="password"
            placeholder="Tu contraseña"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-azul-caribe focus:ring-azul-caribe focus:outline-none"
            v-model="password"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-black text-white py-3 rounded-lg shadow-md font-medium hover:bg-gray-900 transition-all"
        >
          Ingresar
        </button>
      </form>

      <!-- Footer -->
      <div class="mt-6 text-center">
        <a href="/register" class="text-negro hover:underline font-medium"
          >¿No tienes cuenta?</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router' // Use router to navigate back

// Create refs for form fields
const email = ref('')
const password = ref('')

// Use router to navigate
const router = useRouter()

// GSAP animations for the background lines
const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)
const line4 = ref(null)

// Handle form submission
const handleSubmit = () => {
  // Log the data to show user input (you can modify this for your needs)
  console.log('Form submitted:', {
    email: email.value,
    password: password.value,
  })
  router.push('/main')
}

// Navigate back function
const goBack = () => {
  router.back()
}

// GSAP Animation for lines
onMounted(() => {
  const timeline = gsap.timeline()
  timeline
    .fromTo(
      line1.value,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power3.inOut',
      }
    )
    .fromTo(
      line2.value,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power3.inOut',
      },
      '-=1.0'
    )
    .fromTo(
      line3.value,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power3.inOut',
      },
      '-=1.0'
    )
    .fromTo(
      line4.value,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power3.inOut',
      },
      '-=1.0'
    )
})
</script>

<style scoped>
/* Ensuring the background lines are properly placed and animated */
.absolute {
  top: 0;
  left: 0;
  height: 100%;
}

h1 {
  color: #171717; /* Negro color */
}

div[h-1] {
  transform-origin: left;
  transform: scaleX(0);
}

/* Responsive styling for mobile and desktop */
@media (max-width: 640px) {
  .max-w-md {
    max-width: 100% !important;
    height: 100vh;
  }
}
</style>
