<template>
  <div
    class="min-h-screen bg-white flex flex-col items-center p-6 text-center space-y-10"
  >
    <!-- Animated Color Bars and Title -->
    <div class="w-full flex flex-col items-center space-y-2 my-5 mt-32">
      <h1 class="text-2xl font-bold text-black md:text-3xl">
        Bienvenido, {{ fullName }}
      </h1>

      <div ref="line1" class="h-1 w-full bg-[#FDDA25]"></div>
      <div ref="line2" class="h-1 w-full bg-[#FF7F40]"></div>
    </div>

    <!-- Circular Navigation Buttons -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-md mx-auto">
      <!-- FAQ Button -->
      <a href="/about">
        <div class="option flex flex-col items-center" ref="faq">
          <button
            class="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src="https://images.ctfassets.net/d8tspqmagn8z/vaVqkjVXQ2GQHrJE4EsPr/a74e08b7c9fddeb9231b7e751b5bc7b1/pic-circle-question.svg"
              alt=""
            />
          </button>
          <p class="mt-2 text-black text-sm font-semibold">
            Preguntas Frecuentes
          </p>
        </div>
      </a>

      <!-- Card Application Button -->
      <a href="/about">
        <div class="option flex flex-col items-center" ref="application">
          <button
            class="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/e74d5369-d0ea-4877-aa64-ba252a07936a/campana.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-e74d5369-d0ea-4877-aa64-ba252a07936a-orHnG6G"
              alt=""
            />
          </button>
          <p class="mt-2 text-black text-sm font-semibold">
            Solicitud de Tarjeta
          </p>
        </div>
      </a>

      <!-- UniBAM Button -->
      <div class="option flex flex-col items-center" ref="unibam">
        <button
          class="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <img
            src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/e3c3783d-050e-4ee0-a2a7-bd0ae277d8a7/BB_multicolor_conoce_nuestra_app.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-e3c3783d-050e-4ee0-a2a7-bd0ae277d8a7-nELd9On"
            alt=""
          />
        </button>
        <p class="mt-2 text-black text-sm font-semibold">UniBAM</p>
      </div>

      <!-- Video Tutorials Button -->
      <div class="option flex flex-col items-center" ref="tutorials">
        <button
          class="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <img
            src="https://images.ctfassets.net/d8tspqmagn8z/PMzgxFmcdzRSTbtpSgXOi/f21d0f5b8ebb4e90a8a514fbaeafb1bb/pic-megaphone.svg"
            alt=""
          />
        </button>
        <p class="mt-2 text-black text-sm font-semibold">
          Educación Financiera
        </p>
      </div>

      <!-- Terms and Conditions Button -->
      <div class="option flex flex-col items-center" ref="terms">
        <button
          class="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <img
            src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/fecf86a2-46a3-4d85-be63-b1392ba9f107/BB_multicolor_descripcio%CC%81n+1.svg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-fecf86a2-46a3-4d85-be63-b1392ba9f107-nwlN6Vg"
            alt=""
          />
        </button>
        <p class="mt-2 text-black text-sm font-semibold">
          Términos y condiciones
        </p>
      </div>

      <!-- Security Tips Button -->
      <div class="option flex flex-col items-center" ref="tips">
        <button
          class="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <img
            src="https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/5bdccb95-fea4-4c2e-9ff4-4b4818fff6c4/idea.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P86O40QTNS9EAE1S47-5bdccb95-fea4-4c2e-9ff4-4b4818fff6c4-nyDUz1M"
            alt=""
          />
        </button>
        <p class="mt-2 text-black text-sm font-semibold">Tips de seguridad</p>
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
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const fullName = computed(() => `${userStore.firstName} ${userStore.lastName}`)
// References for animation elements
const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)
const line4 = ref(null)

// GSAP Animation for the color bars and button effects
onMounted(() => {
  const timeline = gsap.timeline({
    defaults: { opacity: 0, duration: 1, ease: 'power3.out' },
  })

  timeline
    .from(line1.value, { width: 0 })
    .from(line2.value, { width: 0 }, '-=0.5')
    .from(line3.value, { width: 0 }, '-=0.5')
    .from(line4.value, { width: 0 }, '-=0.5')

  gsap.utils.toArray('.option').forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: index * 0.1,
      ease: 'power2.out',
    })
  })
})
</script>
