<template>
  <div class="bg-gray-50 flex items-center justify-center min-h-screen">
    <div class="container mx-auto p-4 text-center">
      <!-- Placeholder for the Bam Logo -->
      <div ref="img" class="mb-8">
        <img src="../assets/logo.svg" alt="Bam Logo" class="mx-auto h-48" />
      </div>

      <!-- Image/Illustration Placeholder -->
      <div ref="logo" class="mb-12">
        <img
          src="../assets/cards.svg"
          alt="Illustration"
          class="mx-auto h-48"
        />
      </div>

      <!-- Main Text with Static and Changing Part -->
      <h1 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-700">
        No es el futuro, es tu presente.
        <br />
        <span
          ref="changingText"
          class="text-lg sm:text-xl lg:text-2xl text-gray-400"
        ></span>
      </h1>

      <!-- CTA Buttons -->
      <div ref="ctaButtons" class="space-y-4 mt-12">
        <a
          href="/register"
          class="block w-full max-w-xs mx-auto bg-yellow-400 text-black py-3 rounded-lg shadow-md text-lg font-medium hover:bg-yellow-500 transition-all"
        >
          Ingresar
        </a>
        <a
          href="/register"
          class="block w-full max-w-xs mx-auto text-black py-3 rounded-lg border-2 border-black text-lg font-medium hover:bg-gray-200 transition-all"
        >
          Registrarse
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Array of catchy phrases
const phrases = [
  'Fideliza tu futuro con UniBam.',
  'Beneficios exclusivos para estudiantes.',
  'Recompensas únicas con UniBam.',
  'Servicios financieros al alcance.',
  'Conectamos jóvenes con BAM.',
]

// Refs for animation targets
const logo = ref(null)
const card = ref(null) // Separate ref for the card
const changingText = ref(null)
const ctaButtons = ref(null) // Ref for buttons

// Typewriter effect logic
const typeWriter = (textElement, phrases, speed = 100) => {
  let isDeleting = false
  let phraseIndex = 0
  let charIndex = 0

  const type = () => {
    const currentPhrase = phrases[phraseIndex]
    if (isDeleting) {
      charIndex -= 1
      textElement.value.textContent = currentPhrase.substring(0, charIndex)
      if (charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
      }
    } else {
      charIndex += 1
      textElement.value.textContent = currentPhrase.substring(0, charIndex)
      if (charIndex === currentPhrase.length) {
        isDeleting = true
        setTimeout(type, 1500)
        return
      }
    }
    setTimeout(type, isDeleting ? speed / 2 : speed)
  }
  type()
}

onMounted(() => {
  // GSAP Animations for Logo
  gsap.from(logo.value, {
    opacity: 0,
    y: -30,
    duration: 1.2,
    ease: 'power3.out',
  })

  // GSAP Animation for the Card (subtle movement to stay in place)
  gsap.from(card.value, {
    opacity: 0,
    scale: 0.95, // Slight scale for a subtle zoom-in effect
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
  })

  // Slight hover effect for the card
  gsap.to(card.value, {
    scale: 1.05, // Slight scale on hover
    duration: 0.5,
    ease: 'power1.inOut',
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Make it go back and forth
    paused: true,
  })

  // Start the typewriter effect on the changing text
  typeWriter(changingText, phrases)

  // GSAP animation for buttons
  gsap.fromTo(
    ctaButtons.value,
    { opacity: 0, scale: 0.8, y: 50 },
    { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out' }
  )
})
</script>

<style scoped>
/* Optional: Typewriter styles for blinking cursor (can adjust if needed) */
.typewriter {
  border-right: 2px solid black;
  white-space: nowrap;
  overflow: hidden;
  width: fit-content;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}
</style>
