<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-8 text-center"
  >
    <!-- Animated Level Indicator with GSAP Animation -->
    <div class="w-full max-w-md">
      <div
        ref="levelIndicator"
        class="flex items-center justify-between bg-orange-500 rounded-lg shadow p-4 mb-6 mt-32"
      >
        <div class="flex items-center space-x-2">
          <span class="text-2xl font-bold text-white"
            >Nivel #{{ currentLevel }}</span
          >
          <button
            @click="nextLevel"
            :disabled="!canAdvanceLevel"
            class="font-bold text-2xl text-black hover:text-gray-700"
          >
            ->
          </button>
        </div>
      </div>
    </div>

    <!-- Prize Cards Section -->
    <div class="w-full max-w-md space-y-6">
      <div v-for="(prize, index) in currentPrizes" :key="index" class="w-full">
        <div
          class="p-4 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center space-y-4"
        >
          <h3 class="text-lg font-semibold text-gray-800">{{ prize.name }}</h3>
          <button
            v-if="!prize.locked"
            @click="redeemPrize(prize)"
            class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Canjear
          </button>
          <button
            v-else
            class="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg cursor-not-allowed"
          >
            Bloqueado
          </button>
        </div>
      </div>
    </div>

    <!-- Back Button -->
    <button
      @click="$router.push('/gauge')"
      class="mt-10 bg-black text-white py-3 px-8 rounded-lg shadow-md font-medium hover:bg-gray-900 transition-all"
    >
      Regresar
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { gsap } from 'gsap'

const userStore = useUserStore()

// Define the rewards by profile and level
const rewards = {
  Gamer: [
    [
      { name: 'Equipo de Mouse y Teclado Gamer', locked: false },
      { name: 'Silla Gamer canjeable en tiendas Max', locked: true },
    ],
    [
      { name: 'Descuento del 50% en Videojuegos de Tiendas Max', locked: true },
      { name: 'Audífonos Gamer con cancelación de ruido', locked: true },
    ],
    [
      { name: '3x2 en controles Gamer para consolas Xbox y PS5', locked: true },
      { name: 'Descuento en accesorios de streaming', locked: true },
    ],
  ],
  Fit: [
    [
      { name: '10% de descuento en accesorios para ejercicio', locked: false },
      { name: 'Proteína de 500mg canjeable en tiendas GNC', locked: true },
    ],
    [
      { name: 'Membresía de 3 meses en gimnasios Smart Fit', locked: true },
      { name: 'Descuento en suplementos deportivos', locked: true },
    ],
    [
      { name: '1 año de membresía de gimnasio en Smart Fit', locked: true },
      { name: 'Descuento en ropa deportiva', locked: true },
    ],
  ],
  Foodie: [
    [
      {
        name: '15% de descuento en cualquier combo de McDonald’s',
        locked: false,
      },
      { name: 'Licuadora NutriBullet canjeable en Pricemart', locked: true },
    ],
    [
      { name: '2x1 en hamburguesa sencilla en Carl Jr.', locked: true },
      { name: 'Descuento en helados artesanales', locked: true },
    ],
    [
      {
        name: 'Descuento del 50% en restaurantes grupo Tre Fratelli',
        locked: true,
      },
      { name: 'Paquete de cenas en restaurantes seleccionados', locked: true },
    ],
  ],
}

// Determine the user profile and current level
const profile = computed(() => userStore.profileType || 'Gamer')
const currentLevel = ref(1)

// Retrieve the current prizes based on profile and level
const currentPrizes = computed(
  () => rewards[profile.value][currentLevel.value - 1]
)

// Update prize locks based on current level
const redeemPrize = (prize) => {
  prize.locked = true
  console.log(`Redeemed prize: ${prize.name}`)
}

const canAdvanceLevel = computed(() => currentLevel.value < 3)
const nextLevel = () => {
  if (canAdvanceLevel.value) {
    currentLevel.value++
  }
}

onMounted(() => {
  gsap.from('.w-full', {
    opacity: 0,
    x: -100,
    duration: 0.8,
    ease: 'power2.out',
  })
})
</script>

<style scoped>
.goal-card {
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
