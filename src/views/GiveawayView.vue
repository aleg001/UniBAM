<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col items-center p-6 text-center space-y-8"
  >
    <!-- Title and Description -->
    <h1 class="text-3xl font-bold text-gray-800 mt-32">Sorteos UniBAM</h1>
    <p class="text-gray-600 max-w-md mb-6">
      ¡Mantente atento a nuestras redes sociales de BAM para más detalles de
      este sorteo y otros premios sorpresa!
    </p>

    <!-- Prize Card with Lock Animation and Shining Effect -->
    <div ref="prizeCard" class="w-full max-w-sm">
      <div
        :class="[
          'p-6 bg-white rounded-lg relative flex flex-col items-center space-y-4',
          { 'shine-effect': !isLocked },
        ]"
        :style="{ border: isLocked ? '1px solid #ccc' : '2px solid gold' }"
      >
        <!-- Lock Icon initially -->
        <div
          v-if="isLocked"
          ref="lockIcon"
          class="text-5xl text-yellow-500 absolute inset-0 flex items-center justify-center z-10"
        >
          🔒
        </div>

        <!-- Stars Animation (hidden until unlocked) -->
        <div
          v-show="!isLocked"
          ref="stars"
          class="flex space-x-1 text-yellow-400 text-2xl"
        >
          <span
            v-for="(star, index) in starsArray"
            :key="index"
            :class="{ 'text-gray-300': !star }"
            >⭐</span
          >
        </div>

        <!-- Prize Emoji (hidden until unlocked) -->
        <div v-show="!isLocked" ref="prizeIcon" class="text-6xl">
          {{ selectedPrize.icon }}
        </div>

        <!-- Prize Description (hidden until unlocked) -->
        <p
          v-show="!isLocked"
          ref="prizeDescription"
          class="text-gray-800 font-semibold text-lg"
        >
          {{ selectedPrize.description }}
        </p>
      </div>
    </div>
    <button
      @click="$router.push('/main')"
      class="!mb-8 bg-black text-white py-3 px-8 rounded-lg shadow-md font-medium hover:bg-gray-900 transition-all"
    >
      Regresar
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

// Prize Options
const prizes = [
  { icon: '🏎️', description: '¡Gana un viaje a la F1 en México!' },
  { icon: '🎮', description: 'Kit Gamer todo incluido' },
  { icon: '🍔', description: 'Un año gratis en Carl Jr.' },
]

// State variables
const selectedPrize = ref(prizes[Math.floor(Math.random() * prizes.length)])
const isLocked = ref(true) // Starts locked
const starsArray = [true, true, false, false, false] // Star rating example

// Refs for elements to animate
const lockIcon = ref(null)
const stars = ref(null)
const prizeIcon = ref(null)
const prizeDescription = ref(null)
const prizeCard = ref(null) // Reference for the prize card to add shining effect

// Function to randomize prize and animate automatically
const startAnimation = async () => {
  isLocked.value = true // Reset to locked state
  selectedPrize.value = prizes[Math.floor(Math.random() * prizes.length)] // Preselect a random prize

  // Wait for DOM to update
  await nextTick()

  // GSAP Timeline to sequence animations
  const timeline = gsap.timeline()

  // Step 1: Lock icon shakes as a "thinking" effect
  timeline.to(lockIcon.value, {
    x: -10,
    duration: 0.1,
    yoyo: true,
    repeat: 7,
    ease: 'power1.inOut',
  })

  // Step 2: Fades out the lock and reveals the stars and prize
  timeline.to(lockIcon.value, { opacity: 0, duration: 0.3 })
  timeline.set(lockIcon.value, { display: 'none' }) // Hides the lock

  // Step 3: Show stars with staggered animation
  timeline.fromTo(
    stars.value.children,
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power1.out' }
  )

  // Step 4: Reveal prize icon with scale effect
  timeline.fromTo(
    prizeIcon.value,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    }
  )

  // Step 5: Reveal prize description with fade-in
  timeline.fromTo(
    prizeDescription.value,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
  )

  // Unlocks after animation completes
  timeline.call(() => {
    isLocked.value = false
    addShiningEffect() // Add shining effect to the prize card
  })
}

// Function to add a shining effect to the prize card border
const addShiningEffect = () => {
  gsap.fromTo(
    prizeCard.value,
    { boxShadow: '0 0 0px 0px rgba(255, 215, 0, 0.4)' },
    {
      boxShadow: '0 0 20px 10px rgba(255, 215, 0, 0.6)',
      duration: 1,
      backgroundColor: 'rgba(255, 215, 0, 0.2)',
      loop: true,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
  )
}

onMounted(() => {
  // Initial animations for title and description
  gsap.fromTo(
    '.text-3xl',
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
  )
  gsap.fromTo(
    '.text-gray-600',
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
  )

  // Start the prize animation automatically
  startAnimation()
})
</script>

<style scoped>
/* Prize card outline shine effect */
.shine-effect {
  animation: shine 3s infinite alternate;
}

@keyframes shine {
  0% {
    border-color: gold;
    box-shadow: 0px 0px 10px rgba(255, 215, 0, 0.5),
      0px 0px 20px rgba(255, 215, 0, 0.5), 0px 0px 30px rgba(255, 215, 0, 0.5);
  }
  100% {
    border-color: gold;
    box-shadow: 0px 0px 20px rgba(255, 215, 0, 1),
      0px 0px 30px rgba(255, 215, 0, 0.8), 0px 0px 40px rgba(255, 215, 0, 0.7);
  }
}

/* Basic styling */
.w-full {
  max-width: 24rem;
}
</style>
