<template>
  <div class="min-h-screen bg-white text-gray-700 p-6 space-y-10">
    <!-- Header with Animated Color Bars -->
    <div class="w-full flex flex-col items-center space-y-2 my-5">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Términos y Condiciones
      </h1>
      <div ref="line1" class="h-1 w-full bg-[#FDDA25]"></div>
      <div ref="line2" class="h-1 w-full bg-[#FF7F40]"></div>
    </div>

    <!-- Terms and Conditions Content -->
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Digital Platforms -->
      <div
        ref="section1"
        class="space-y-3 p-4 border-l-4 border-[#FDDA25] bg-[#FFFBF0] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Uso de Plataformas Digitales
        </h2>
        <p class="text-lg text-gray-600">
          Al acceder a las plataformas digitales de BAM, como Bamvirtual,
          UniBam, Bamvirtual Empresas, Bamapp Personas y Bamapp Empresas, el
          usuario acepta los términos y condiciones establecidos por el banco.
          Estos términos pueden ser modificados unilateralmente por BAM en
          cualquier momento, sin necesidad de notificación previa al usuario.
        </p>
      </div>

      <!-- Privacy Policy -->
      <div
        ref="section2"
        class="space-y-3 p-4 border-l-4 border-[#02C389] bg-[#E8F8F5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Políticas de Privacidad
        </h2>
        <p class="text-lg text-gray-600">
          BAM reconoce la importancia de la seguridad, privacidad y
          confidencialidad de los datos personales de sus clientes y otros
          grupos de interés. La entidad se compromete a proteger esta
          información y a cumplir con las disposiciones legales aplicables en
          Guatemala.
        </p>
      </div>

      <!-- Programs and Promotions -->
      <div
        ref="section3"
        class="space-y-3 p-4 border-l-4 border-[#59CAE7] bg-[#E0F4FA] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Programas y Promociones
        </h2>
        <p class="text-lg text-gray-600">
          Para programas específicos, como "Efecto BAM", existen términos y
          condiciones particulares. Por ejemplo, las promociones de reintegros y
          descuentos aplican únicamente para clientes inscritos en la plataforma
          y se definen según el periodo y los productos participantes. Las
          tarjetas deben estar activas y sin mora durante la vigencia de las
          promociones.
        </p>
      </div>

      <!-- Security and Responsibility -->
      <div
        ref="section4"
        class="space-y-3 p-4 border-l-4 border-[#FF7F40] bg-[#FFF1E5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Seguridad y Responsabilidad
        </h2>
        <p class="text-lg text-gray-600">
          BAM enfatiza la importancia de la seguridad en el uso de sus canales
          digitales y proporciona recomendaciones para proteger la información
          confidencial de los usuarios. Además, establece que el uso de sus
          servicios implica la aceptación de los términos y condiciones, y que
          el banco no se responsabiliza por el uso indebido de las plataformas
          por parte del usuario.
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
  gsap.from([section1.value, section2.value, section3.value, section4.value], {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: 'power3.out',
    stagger: 0.2,
  })
})
</script>
