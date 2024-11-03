<template>
  <div class="min-h-screen bg-white flex flex-col items-center p-6 space-y-8">
    <h1 class="text-3xl font-bold text-gray-800 text-center mb-6 mt-32">
      Elige tu Reto UniBAM
    </h1>

    <!-- Step Display with GSAP Animation -->
    <div
      v-if="!showResult"
      class="w-full max-w-md bg-gray-50 rounded-lg p-6 shadow-lg relative"
    >
      <h2 class="text-xl font-semibold text-gray-700 text-center mb-4">
        {{ currentQuestion.question }}
      </h2>

      <div class="space-y-4">
        <button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="nextStep(option.type)"
          class="w-full py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-200 transition text-center"
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <!-- Result Display with Dropdown Adjustment -->
    <div
      v-else
      class="w-full max-w-md bg-gray-50 rounded-lg p-6 shadow-lg text-center space-y-4"
    >
      <h2 class="text-2xl font-bold" :style="{ color: profileColor }">
        Tu perfil es: {{ profile }}
      </h2>
      <p class="text-gray-700 mb-4">
        ¿No estás contento con el resultado? ¡Cámbialo aquí!
      </p>

      <select
        v-model="profile"
        @change="updateProfile"
        class="w-full py-3 rounded-lg border border-gray-300 bg-white text-center"
      >
        <option value="Gamer">Gamer</option>
        <option value="Fit">Fit</option>
        <option value="Foodie">Foodie</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useProfileStore } from '@/stores/profile'
import { gsap } from 'gsap'

// Pinia store
const profileStore = useProfileStore()
const profile = ref(profileStore.profileType || 'Gamer')

// Questions and answers
const questions = ref([
  {
    question: '¿Cómo te gusta pasar tu tiempo libre?',
    options: [
      { label: 'Jugar videojuegos', type: 'Gamer' },
      { label: 'Hacer ejercicio', type: 'Fit' },
      { label: 'Explorar nuevos restaurantes', type: 'Foodie' },
    ],
  },
  {
    question: '¿Cuál es tu actividad favorita en los fines de semana?',
    options: [
      { label: 'Organizar torneos de gaming', type: 'Gamer' },
      { label: 'Ir al gimnasio', type: 'Fit' },
      { label: 'Buscar nuevos lugares para comer', type: 'Foodie' },
    ],
  },
  {
    question: '¿Qué contenido sueles consumir más en redes sociales?',
    options: [
      { label: 'Noticias de videojuegos', type: 'Gamer' },
      { label: 'Consejos de entrenamiento', type: 'Fit' },
      { label: 'Recetas y críticas de comida', type: 'Foodie' },
    ],
  },
])

// Stepper state
const currentStep = ref(0)
const showResult = ref(false)

// Current question based on step
const currentQuestion = computed(() => questions.value[currentStep.value])

// Advance to the next step
const nextStep = (type) => {
  if (currentStep.value < questions.value.length - 1) {
    currentStep.value++
    gsap.fromTo(
      '.w-full',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
    )
  } else {
    profileStore.setProfileType(type)
    profile.value = type
    showResult.value = true
    gsap.fromTo(
      '.w-full',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' }
    )
  }
}

// Color based on profile type
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

// Update profile when dropdown changes
const updateProfile = () => {
  profileStore.setProfileType(profile.value)
}

onMounted(() => {
  gsap.fromTo(
    '.text-3xl',
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
  )
  gsap.fromTo(
    '.w-full',
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
  )
})
</script>
