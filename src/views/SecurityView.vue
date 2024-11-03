<template>
  <div class="min-h-screen bg-white text-gray-700 p-6 space-y-10">
    <!-- Header with Animated Color Bars -->
    <div class="w-full flex flex-col items-center space-y-2 my-5">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Tips de Seguridad</h1>
      <div ref="line1" class="h-1 w-full bg-[#FDDA25]"></div>
      <div ref="line2" class="h-1 w-full bg-[#FF7F40]"></div>
    </div>

    <!-- Security Tips Content -->
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Protection of Confidential Information -->
      <div
        ref="section1"
        class="space-y-3 p-4 border-l-4 border-[#FDDA25] bg-[#FFFBF0] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Protección de Información Confidencial
        </h2>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>
            No compartas datos sensibles: BAM nunca te solicitará información
            personal o de tus tarjetas por correo electrónico, mensajes de texto
            o llamadas.
          </li>
          <li>
            Verifica la autenticidad de las comunicaciones: Desconfía de correos
            o mensajes de remitentes desconocidos. Si recibes un correo
            sospechoso, repórtalo a
            <span class="text-blue-600">correo.sospechoso@bam.com.gt</span>.
          </li>
        </ul>
      </div>

      <!-- Security on Electronic Devices -->
      <div
        ref="section2"
        class="space-y-3 p-4 border-l-4 border-[#02C389] bg-[#E8F8F5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Seguridad en Dispositivos Electrónicos
        </h2>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Instala y actualiza antivirus: Mantén tus dispositivos protegidos
            con software antivirus.
          </li>
          <li>
            Evita conexiones inseguras: No realices transacciones financieras en
            redes Wi-Fi públicas o inseguras.
          </li>
          <li>
            Descarga aplicaciones de fuentes confiables: Usa únicamente tiendas
            oficiales para apps de BAM.
          </li>
        </ul>
      </div>

      <!-- Precautions for Online Transactions -->
      <div
        ref="section3"
        class="space-y-3 p-4 border-l-4 border-[#59CAE7] bg-[#E0F4FA] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Precauciones en Transacciones en Línea
        </h2>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Verifica la autenticidad de los sitios web: Asegúrate de que las
            páginas donde ingresas información financiera sean legítimas y
            seguras.
          </li>
          <li>
            Evita enlaces sospechosos: No accedas a enlaces de mensajes de texto
            o correos electrónicos no solicitados.
          </li>
        </ul>
      </div>

      <!-- Detection of Social Engineering Techniques -->
      <div
        ref="section4"
        class="space-y-3 p-4 border-l-4 border-[#FF7F40] bg-[#FFF1E5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Detección de Técnicas de Ingeniería Social
        </h2>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Reconoce intentos de fraude: Estafadores pueden usar smishing
            (mensajes fraudulentos) y vishing (llamadas fraudulentas) para
            obtener tus datos.
          </li>
          <li>
            Mantente informado: Familiarízate con las tácticas de ingeniería
            social para evitar ser víctima de ellas.
          </li>
        </ul>
      </div>

      <!-- Actions in Case of Fraud Suspicion -->
      <div
        ref="section5"
        class="space-y-3 p-4 border-l-4 border-[#02C389] bg-[#E8F8F5] rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-semibold text-gray-800">
          Acciones en Caso de Sospecha de Fraude
        </h2>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Cambia tus contraseñas inmediatamente: Si sospechas que tu
            información ha sido comprometida, modifica tus credenciales de
            acceso.
          </li>
          <li>
            Notifica a BAM: Comunícate con BAM para informar sobre posibles
            incidentes de seguridad.
          </li>
          <li>
            Contacta a las autoridades: Reporta el incidente para una
            investigación adecuada.
          </li>
        </ul>
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
