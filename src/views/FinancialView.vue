<template>
  <div class="min-h-screen bg-white text-gray-700 p-6 space-y-10">
    <!-- Header with Animated Color Bars -->
    <div class="w-full flex flex-col items-center space-y-2 my-5">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Educación Financiera
      </h1>
      <div ref="line1" class="h-1 w-full bg-[#FDDA25]"></div>
      <div ref="line2" class="h-1 w-full bg-[#FF7F40]"></div>
    </div>

    <!-- Financial Education Content -->
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Bamvirtual Personas -->
      <div
        ref="section1"
        class="space-y-3 p-4 border-l-4 border-[#FDDA25] bg-[#FFFBF0] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Bamvirtual Personas
        </h2>
        <p class="text-lg text-gray-600">
          Plataforma de banca en línea que permite a los clientes realizar
          transacciones, consultas y gestiones de sus productos desde una
          computadora de manera fácil y segura.
        </p>
        <ul class="list-disc list-inside text-gray-600">
          <li>Consulta de saldos y movimientos.</li>
          <li>Transferencias entre cuentas propias y a terceros.</li>
          <li>Pago de servicios e impuestos.</li>
          <li>Solicitud de productos financieros.</li>
        </ul>
      </div>

      <!-- Bamapp Personas -->
      <div
        ref="section2"
        class="space-y-3 p-4 border-l-4 border-[#02C389] bg-[#E8F8F5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">Bamapp Personas</h2>
        <p class="text-lg text-gray-600">
          Aplicación móvil que ofrece las mismas funcionalidades que Bamvirtual
          Personas, adaptadas para dispositivos móviles, permitiendo realizar
          transacciones en segundos desde cualquier lugar.
        </p>
      </div>

      <!-- Efecto Bam -->
      <div
        ref="section3"
        class="space-y-3 p-4 border-l-4 border-[#59CAE7] bg-[#E0F4FA] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">Efecto Bam</h2>
        <p class="text-lg text-gray-600">
          Plataforma que brinda promociones exclusivas a los clientes,
          permitiéndoles ganar reintegros, bonos de millas y/o puntos Bam al
          inscribirse y participar en las promociones disponibles.
        </p>
      </div>

      <!-- Tu360 Marketplace -->
      <div
        ref="section4"
        class="space-y-3 p-4 border-l-4 border-[#FF7F40] bg-[#FFF1E5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">Tu360 Marketplace</h2>
        <p class="text-lg text-gray-600">
          Marketplace exclusivo para clientes de BAM, donde se puede encontrar
          una amplia gama de productos y servicios con ofertas y beneficios
          únicos.
        </p>
      </div>

      <!-- Impúlsame -->
      <div
        ref="section5"
        class="space-y-3 p-4 border-l-4 border-[#FDDA25] bg-[#FFFBF0] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">Impúlsame</h2>
        <p class="text-lg text-gray-600">
          Plataforma con beneficios exclusivos que impulsan el crecimiento de
          los clientes, ofreciendo una variedad de productos y servicios a
          precios especiales.
        </p>
      </div>

      <!-- Pago de Impuestos -->
      <div
        ref="section6"
        class="space-y-3 p-4 border-l-4 border-[#02C389] bg-[#E8F8F5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">Pago de Impuestos</h2>
        <p class="text-lg text-gray-600">
          Servicio que permite el pago de impuestos, DeclaraGuate, BancaSAT e
          impuestos aduaneros por medio de Bamvirtual Empresa, facilitando la
          gestión fiscal de las empresas.
        </p>
      </div>

      <!-- Transferencias Internacionales -->
      <div
        ref="section7"
        class="space-y-3 p-4 border-l-4 border-[#59CAE7] bg-[#E0F4FA] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Transferencias Internacionales
        </h2>
        <p class="text-lg text-gray-600">
          Servicio que permite realizar transferencias a cualquier parte del
          mundo, enviando o recibiendo divisas desde Bamvirtual en tiempo real
          hasta las 14:30 horas durante días hábiles.
        </p>
      </div>

      <!-- Cuenta Fácil -->
      <div
        ref="section8"
        class="space-y-3 p-4 border-l-4 border-[#FF7F40] bg-[#FFF1E5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">Cuenta Fácil</h2>
        <p class="text-lg text-gray-600">
          Servicio que permite solicitar desde casa una cuenta monetaria en
          quetzales 100% digital, sin costo por manejo de cuenta, con la
          posibilidad de realizar transferencias y pagos.
        </p>
      </div>
    </div>

    <!-- Bottom Animated Color Bars -->
    <div class="w-full flex flex-col items-center space-y-2 my-5">
      <div ref="line3" class="h-1 w-full bg-[#02C389]"></div>
      <div ref="line4" class="h-1 w-full bg-[#59CAE7]"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

// GSAP animation references for color bars and sections
const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)
const line4 = ref(null)
const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)
const section6 = ref(null)
const section7 = ref(null)
const section8 = ref(null)

// GSAP animations on mount
onMounted(() => {
  const timeline = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.out' },
  })

  // Animate color bars
  timeline
    .from(line1.value, { width: 0 })
    .from(line2.value, { width: 0 }, '-=0.5')
    .from(line3.value, { width: 0 }, '-=0.5')
    .from(line4.value, { width: 0 }, '-=0.5')

  // Animate sections with a slight stagger effect
  gsap.from(
    [
      section1.value,
      section2.value,
      section3.value,
      section4.value,
      section5.value,
      section6.value,
      section7.value,
      section8.value,
    ],
    {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2,
    }
  )
})
</script>

<style scoped>
/* Tailwind CSS used directly */
</style>
