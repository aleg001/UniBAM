<template>
  <NavBar />
  <div
    class="min-h-screen bg-white flex-col items-center justify-center p-6 text-center"
  >
    <!-- Title -->
    <h1 class="text-3xl font-bold text-gray-800 mb-12 mt-24">
      Tarjeta de Crédito UniBAM Aprobada
    </h1>

    <!-- Carousel Container with Aggressive 3D Rotation -->
    <div
      class="relative w-full max-w-md mx-auto flex justify-center items-center"
    >
      <!-- 3D Card with Aggressive GSAP Effects -->
      <div
        ref="cardContainer"
        class="perspective-3000 w-72 h-96 cursor-pointer transform transition-transform duration-500 ease-in-out p-5 bg-white"
      >
        <img
          :src="creditCards[currentCard]"
          alt="Credit Card Design"
          class="object-cover w-full h-full rounded-xl shadow-2xl transition-all duration-500 transform"
          ref="creditCard"
        />
      </div>
    </div>

    <!-- Comenzar Button with Click Event -->
    <a
      @click="startCinematicAnimation"
      class="mt-5 block w-full max-w-xs mx-auto bg-yellow-400 text-black py-3 rounded-lg shadow-md text-lg font-medium hover:bg-yellow-500 transition-all cursor-pointer"
    >
      Comenzar
    </a>

    <!-- Decorative Lines -->
    <div class="inset-0 -z-10 flex flex-col justify-between my-5">
      <div ref="line1" class="h-1 bg-amarillo-macondo"></div>
      <div ref="line2" class="h-1 bg-naranja-alba"></div>
      <div ref="line3" class="h-1 bg-verde-andino"></div>
      <div ref="line4" class="h-1 bg-rosa-flamenco"></div>
    </div>
  </div>

  <BottomBar class="md:hidden" />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import BottomBar from '../components/BottomBar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'

const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)
const line4 = ref(null)
const creditCards = [card3, card4]
const currentCard = ref(0)
const cardContainer = ref(null)
const creditCard = ref(null)
let autoRotateTimeline

// Function to create a fast, aggressive 3D rocking effect
const startAutoRotate = () => {
  autoRotateTimeline = gsap.timeline({ repeat: -1, yoyo: true })
  autoRotateTimeline
    .to(creditCard.value, {
      rotationY: 30,
      rotationX: 15,
      scale: 1.15,
      duration: 1.5,
      ease: 'power1.inOut',
    })
    .to(creditCard.value, {
      rotationY: -30,
      rotationX: -15,
      duration: 1.5,
      ease: 'power1.inOut',
    })
}

// Cinematic Animation for "Comenzar" Button
const startCinematicAnimation = () => {
  gsap.timeline().to(creditCard.value, {
    scale: 1.5, // Enlarge the card
    y: -window.innerHeight, // Slide the card up out of view
    duration: 0.5,
    ease: 'power3.inOut',
  })
}

// Set up auto-rotation and listeners on mount
onMounted(() => {
  gsap.fromTo(
    line1.value,
    { width: '0%' },
    { width: '100%', duration: 1.5, ease: 'power3.inOut', delay: 0 }
  )
  gsap.fromTo(
    line2.value,
    { width: '0%' },
    { width: '100%', duration: 1.5, ease: 'power3.inOut', delay: 0.2 }
  )
  gsap.fromTo(
    line3.value,
    { width: '0%' },
    { width: '100%', duration: 1.5, ease: 'power3.inOut', delay: 0.4 }
  )
  gsap.fromTo(
    line4.value,
    { width: '0%' },
    { width: '100%', duration: 1.5, ease: 'power3.inOut', delay: 0.6 }
  )
  gsap.set(cardContainer.value, { perspective: 3000 })
  startAutoRotate()

  creditCard.value.addEventListener('mousemove', (event) => {
    const rect = creditCard.value.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    gsap.to(creditCard.value, {
      rotationY: x / 6,
      rotationX: -y / 6,
      scale: 1.2,
      duration: 0.3,
      ease: 'power3.out',
      boxShadow: '0px 30px 50px rgba(0, 0, 0, 0.5)',
    })
  })

  creditCard.value.addEventListener('mouseleave', () => {
    gsap.to(creditCard.value, {
      rotationY: 0,
      rotationX: 0,
      scale: 1.15,
      duration: 0.5,
      ease: 'power3.out',
      boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.3)',
    })
  })
})

// Cleanup on unmount
onBeforeUnmount(() => {
  autoRotateTimeline.kill()
})
</script>

<style scoped>
.perspective-3000 {
  perspective: 3000px;
}

button svg {
  transition: transform 0.3s ease;
}
button:hover svg {
  transform: scale(1.2);
}
</style>
