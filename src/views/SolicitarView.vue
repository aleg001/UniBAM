<template>
  <NavBar />
  <div
    class="min-h-screen bg-white flex-col items-center p-6 space-y-8 text-center"
  >
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-gray-800 mb-6 mt-24">
      Solicita tu Tarjeta UniBAM
    </h1>
    <p class="text-black max-w-lg mb-8">
      Sigue estos pasos sencillos para obtener tu tarjeta de crédito BAM en
      línea.
    </p>

    <!-- Step-by-Step Process -->
    <div class="space-y-8 w-full max-w-lg mx-auto">
      <!-- Step 1: Access Form -->
      <div class="step bg-[#59CAE7]" ref="step1">
        <h2 class="text-2xl font-semibold text-black">
          Paso 1: Accede al Formulario de Solicitud
        </h2>
        <p class="text-black mt-2">
          Visita el
          <a href="/solicitar-tarjeta" class="text-blue-800 underline"
            >sitio web de BAM</a
          >
          y completa el formulario de solicitud en línea.
        </p>
      </div>

      <!-- Step 2: Complete Required Information -->
      <div class="step bg-[#FDDA25]" ref="step2">
        <h2 class="text-2xl font-semibold text-black">
          Paso 2: Completa la Información Requerida
        </h2>
        <p class="text-black mt-2">
          Proporciona tus datos personales, información económica y de contacto.
        </p>
      </div>

      <!-- Step 3: Required Documentation -->
      <div class="step bg-[#FF7F40]" ref="step3">
        <h2 class="text-2xl font-semibold text-black">
          Paso 3: Documentación Necesaria
        </h2>
        <ul class="list-disc list-inside text-left mt-2 text-black space-y-1">
          <li>Fotocopia completa de tu DPI.</li>
          <li>Fotocopia de un recibo de agua, luz o teléfono.</li>
          <li>
            Si no eres cliente de BAM o no posees una tarjeta de crédito
            vigente:
            <ul class="ml-5 list-disc">
              <li>Carta de ingresos reciente (últimos 3 meses).</li>
              <li>Tres últimos estados de cuenta bancarios.</li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Step 4: Send the Application -->
      <div class="step bg-[#02C389]" ref="step4">
        <h2 class="text-2xl font-semibold text-black">
          Paso 4: Envío de la Solicitud
        </h2>
        <p class="text-black mt-2">
          Una vez completado el formulario y adjuntada la documentación, envía
          tu solicitud para su evaluación.
        </p>
      </div>

      <!-- Step 5: Additional Considerations -->
      <div class="step bg-[#FDDA25]" ref="step5">
        <h2 class="text-2xl font-semibold text-black">
          Paso 5: Consideraciones Adicionales
        </h2>
        <p class="text-black mt-2">
          Algunas tarjetas pueden requerir documentación adicional, como RTU o
          Patente de Comercio si eres propietario, o contratos de arrendamiento
          si recibes rentas.
        </p>
        <p class="text-black mt-2">
          <strong>Beneficios adicionales:</strong> Dependiendo de la tarjeta
          seleccionada, puedes acceder a seguros de viajes, protección de
          precios, programas de puntos y promociones especiales.
        </p>
      </div>

      <!-- Contact Information -->
      <div class="pb-16 text-center" ref="contactInfo">
        <p class="text-black">Puedes contactar a BAM a través de su PBX:</p>
        <p class="text-blue-600 font-semibold">+502 2338–6565</p>
        <p class="text-black">
          o escribir a
          <a
            href="mailto:tarjetas.bam@bam.com.gt"
            class="text-blue-800 underline"
            >tarjetas.bam@bam.com.gt</a
          >
        </p>
      </div>
    </div>
  </div>
  <BottomBar class="md:hidden" />
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import BottomBar from '../components/BottomBar.vue'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const step1 = ref(null)
const step2 = ref(null)
const step3 = ref(null)
const step4 = ref(null)
const step5 = ref(null)
const contactInfo = ref(null)

// GSAP animations for each step
onMounted(() => {
  const timeline = gsap.timeline({
    defaults: { opacity: 0, y: 50, duration: 1, ease: 'power3.out' },
  })
  timeline
    .from(step1.value, {})
    .from(step2.value, {}, '-=0.5')
    .from(step3.value, {}, '-=0.5')
    .from(step4.value, {}, '-=0.5')
    .from(step5.value, {}, '-=0.5')
    .from(contactInfo.value, {}, '-=0.5')
})
</script>

<style scoped>
.step {
  padding: 1.5rem;
  border-radius: 8px;
  color: black;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05); /* Soft shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.step:hover {
  transform: translateY(-5px);
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1); /* Deeper shadow on hover */
}
</style>
