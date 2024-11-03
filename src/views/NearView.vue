<template>
  <div class="min-h-screen bg-white p-6 space-y-6">
    <!-- Title and Toggle Buttons -->
    <div class="text-center space-y-4 mt-32">
      <h1 class="text-4xl font-bold text-gray-800">Cerca de mí</h1>
      <div class="flex justify-center space-x-4 mt-4">
        <button
          @click="selectedView = 'map'"
          :class="[
            'px-4 py-2 rounded-lg font-semibold',
            selectedView === 'map'
              ? 'bg-[#FFD902] text-black'
              : 'border border-[#FFD902] text-[#FFD902] bg-white',
          ]"
        >
          Ver mapa
        </button>
        <button
          @click="selectedView = 'list'"
          :class="[
            'px-4 py-2 rounded-lg font-semibold',
            selectedView === 'list'
              ? 'bg-[#FFD902] text-black'
              : 'border border-[#FFD902] text-[#FFD902]',
          ]"
        >
          Ver lista
        </button>
      </div>
    </div>

    <!-- Map View or List View -->
    <div class="flex-1 w-full max-w-3xl mx-auto">
      <div
        v-if="selectedView === 'map'"
        class="relative h-[500px] w-full overflow-hidden rounded-lg shadow-lg"
      >
        <!-- Static Background Image as Map -->
        <img
          src="https://www.prensalibre.com/wp-content/uploads/2019/02/Google-Maps.jpg?quality=52"
          alt="Map of Guatemala"
          class="w-full h-full object-cover"
        />

        <!-- Location Markers -->
        <div
          v-for="(location, index) in locations"
          :key="index"
          :style="{
            top: location.coords.y + '%',
            left: location.coords.x + '%',
          }"
          class="absolute transform -translate-x-1/2 -translate-y-1/2"
        >
          <div @click="showLocationInfo(location)" class="marker"></div>
        </div>
      </div>

      <!-- List View of Locations -->
      <div v-else class="space-y-4 mb-16">
        <div
          v-for="(location, index) in locations"
          :key="index"
          class="bg-[#70D6ED] text-white p-4 rounded-lg shadow-md"
        >
          <h2 class="text-lg font-semibold">{{ location.name }}</h2>
          <p class="text-sm">Ubicación: {{ location.address }}</p>
        </div>
      </div>
    </div>

    <!-- Location Info Modal -->
    <div
      v-if="activeLocation"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 class="text-xl font-bold mb-2">{{ activeLocation.name }}</h2>
        <p class="text-gray-600 mb-4">{{ activeLocation.address }}</p>
        <button
          @click="activeLocation = null"
          class="px-4 py-2 bg-[#FFD902] rounded-lg font-semibold text-black"
        >
          Cerrar
        </button>
      </div>
    </div>
    <div class="flex items-center">
      <button
        @click="$router.push('/main')"
        class="!mb-12 bg-black text-white py-3 px-8 rounded-lg shadow-md font-medium hover:bg-gray-900 transition-all"
      >
        Regresar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

import { onMounted } from 'vue'
// Toggle between map and list view
const selectedView = ref('map')

// Locations with coordinates for positioning on the static map image
const locations = ref([
  {
    name: 'Tre Fratelli ',
    address: 'Zona 7, CDGT',
    coords: { x: 50, y: 40 },
  },
  {
    name: 'Frisco Grill',
    address: 'Zona 11, CDGT',
    coords: { x: 45, y: 45 },
  },
  {
    name: 'Cafe Barista',
    address: 'Majadas, CDGT',
    coords: { x: 30, y: 60 },
  },
  {
    name: 'GNC',
    address: 'Zona 2, CDGT',
    coords: { x: 80, y: 15 },
  },
  {
    name: 'Fitness One',
    address: 'Zona 10, CDGT',
    coords: { x: 55, y: 65 },
  },
  {
    name: 'Volaris',
    address: 'Zona 4, CDGT',
    coords: { x: 75, y: 55 },
  },
])

// Handle displaying location information modal
const activeLocation = ref(null)
const showLocationInfo = (location) => {
  activeLocation.value = location
}

// GSAP animations for markers
onMounted(() => {
  gsap.from('.marker', {
    scale: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'back.out',
  })
})
</script>

<style scoped>
.marker {
  width: 16px;
  height: 16px;
  background-color: #fb923c;
  border: 2px solid #ffd902;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}
.marker:hover {
  transform: scale(1.2);
}
</style>
