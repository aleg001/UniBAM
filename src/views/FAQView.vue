<template>
  <NavBar />
  <div class="min-h-screen bg-white p-4 flex flex-col items-center">
    <!-- Header Section with Image and Title -->
    <div class="text-center mb-8 mt-32">
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-2">
        Preguntas Frecuentes
      </h1>

      <p class="text-gray-600 text-lg">Resuelve tus dudas aquí.</p>

      <img
        src="../assets/busca.png"
        alt="Persona buscando información"
        class="rounded-3xl mt-4"
      />
    </div>

    <!-- Accordion Section for FAQs -->
    <div class="w-4/5 max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- FAQ: ¿Cuál es mi saldo disponible? -->
      <div>
        <button
          class="w-full flex justify-between items-center bg-white border-2 border-blue-400 text-blue-400 p-4 rounded-lg shadow-md bg-blue-50"
          @click="toggleAccordion(1)"
        >
          <span class="text-lg font-medium text-center w-full"
            >¿Cuál es mi saldo disponible?</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            :class="accordionIndex === 1 ? 'rotate-180' : ''"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-show="accordionIndex === 1"
          ref="faq1"
          class="overflow-hidden transition-all"
        >
          <p class="p-4 bg-gray-100 text-justify rounded-b-lg text-gray-700">
            Tu saldo disponible es el monto que puedes utilizar en tu tarjeta
            UniBam. Este saldo puede variar dependiendo de tus compras y pagos
            realizados.
          </p>
        </div>
      </div>

      <!-- FAQ: ¿Cuánto debo pagar este mes para no generar intereses? -->
      <div>
        <button
          class="w-full flex justify-between items-center bg-white border-2 border-yellow-400 text-yellow-400 p-4 rounded-lg shadow-md bg-yellow-50"
          @click="toggleAccordion(2)"
        >
          <span class="text-lg font-medium text-center w-full text-black"
            >¿Cómo no generar intereses?</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            :class="accordionIndex === 2 ? 'rotate-180' : ''"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-show="accordionIndex === 2"
          ref="faq2"
          class="overflow-hidden transition-all"
        >
          <p class="p-4 bg-gray-100 text-justify rounded-b-lg text-gray-700">
            Para no generar intereses, asegúrate de pagar el monto total de tu
            deuda antes de la fecha límite de pago. Consulta tu estado de cuenta
            en la app de UniBam.
          </p>
        </div>
      </div>

      <!-- FAQ: ¿Cuándo es mi fecha límite de pago? -->
      <div>
        <button
          class="w-full flex justify-between items-center bg-white border-2 border-orange-400 text-orange-400 p-4 rounded-lg shadow-md bg-orange-50"
          @click="toggleAccordion(3)"
        >
          <span class="text-lg font-medium text-center w-full"
            >¿Cuándo es mi fecha límite de pago?</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            :class="accordionIndex === 3 ? 'rotate-180' : ''"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-show="accordionIndex === 3"
          ref="faq3"
          class="overflow-hidden transition-all"
        >
          <p class="p-4 bg-gray-100 text-justify rounded-b-lg text-gray-700">
            Tu fecha límite de pago es el último día que puedes realizar el pago
            de tu tarjeta sin generar recargos ni intereses. Esta fecha la
            puedes ver en tu estado de cuenta.
          </p>
        </div>
      </div>

      <!-- FAQ: ¿Quiénes están detrás de este proyecto? -->
      <div>
        <button
          class="w-full flex justify-between items-center bg-white border-2 border-green-400 text-green-400 p-4 rounded-lg shadow-md bg-green-50"
          @click="toggleAccordion(4)"
        >
          <span class="text-lg font-medium text-center w-full"
            >¿Quiénes están detrás de este proyecto?</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            :class="accordionIndex === 4 ? 'rotate-180' : ''"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-show="accordionIndex === 4"
          ref="faq4"
          class="overflow-hidden transition-all"
        >
          <p class="p-4 bg-gray-100 text-justify rounded-b-lg text-gray-700">
            Este proyecto es desarrollado por Alejandro Gómez, Aldo López,
            Valentina Villeda y Ericka Valle, estudiantes de la Universidad del
            Valle de Guatemala, como parte del Innovation Consulting Program.
          </p>
        </div>
      </div>

      <!-- FAQ: ¿Qué busca este proyecto y qué reto resuelve? -->
      <div>
        <button
          class="w-full flex justify-between items-center border-2 border-pink-400 text-pink-400 p-4 rounded-lg shadow-md bg-pink-50"
          @click="toggleAccordion(5)"
        >
          <span class="text-lg font-medium text-center w-full"
            >¿Qué busca este proyecto y qué reto resuelve?</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            :class="accordionIndex === 5 ? 'rotate-180' : ''"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-show="accordionIndex === 5"
          ref="faq5"
          class="overflow-hidden transition-all"
        >
          <p class="p-4 bg-gray-100 text-justify rounded-b-lg text-gray-700">
            Este proyecto busca reducir el uso de efectivo en Guatemala
            promoviendo la inclusión financiera a través de soluciones digitales
            innovadoras para estudiantes y PYMES.
          </p>
        </div>
      </div>

      <!-- Additional FAQs -->
      <div>
        <button
          class="w-full flex justify-between items-center bg-white border-2 border-blue-400 text-blue-400 p-4 rounded-lg shadow-md bg-blue-50"
          @click="toggleAccordion(6)"
        >
          <span class="text-lg font-medium text-center w-full"
            >¿Cómo creo mi usuario de sucursal virtual?</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            :class="accordionIndex === 6 ? 'rotate-180' : ''"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          v-show="accordionIndex === 6"
          ref="faq6"
          class="overflow-hidden transition-all"
        >
          <p class="p-4 bg-gray-100 text-justify rounded-b-lg text-gray-700">
            Para crear tu usuario de sucursal virtual debes descargar la app de
            Bam, ingresar a "Regístrate aquí", y seguir los pasos para validar
            tu información y crear tu cuenta.
          </p>
        </div>
      </div>
    </div>
  </div>
  <BottomBar class="md:hidden" />
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import NavBar from '../components/NavBar.vue'
import BottomBar from '../components/BottomBar.vue'

// State to track which accordion is open
const accordionIndex = ref(null)

// Toggle accordion function with GSAP animation
const toggleAccordion = (index) => {
  if (accordionIndex.value === index) {
    accordionIndex.value = null
  } else {
    accordionIndex.value = index
  }

  // Animate the accordion opening/closing with GSAP
  gsap.fromTo(
    `[ref="faq${index}"]`,
    { height: 0, opacity: 0 },
    { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
  )
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>
