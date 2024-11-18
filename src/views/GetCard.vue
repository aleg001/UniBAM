<template>
  <div
    class="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center p-6 space-y-12"
  >
    <!-- Title and Description -->
    <div class="text-center space-y-4 mt-32">
      <h1 class="text-4xl font-bold text-gray-800">Solicitar Tarjeta UniBAM</h1>
      <p class="text-gray-600 max-w-lg mx-auto">
        Solicita tu tarjeta y disfruta de beneficios exclusivos como estudiante.
        Completa los datos para comenzar.
      </p>
    </div>

    <!-- Form -->
    <form
      @submit.prevent="handleSubmit"
      class="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6"
    >
      <!-- Nombres y Apellidos -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Nombres y Apellidos</label
        >
        <input
          v-model="formData.name"
          type="text"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Ej. Alejandro Gómez"
          required
        />
      </div>

      <!-- Tipo de Identificación -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Tipo de Identificación</label
        >
        <select
          v-model="formData.idType"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        >
          <option disabled selected>Seleccione</option>
          <option value="dpi">DPI</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
      </div>

      <!-- Fecha de Nacimiento -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Fecha de Nacimiento</label
        >
        <input
          v-model="formData.birthdate"
          type="date"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
      </div>

      <!-- NIT -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >NIT</label
        >
        <input
          v-model="formData.nit"
          type="text"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Ej. 12345678"
          required
        />
      </div>

      <!-- Universidad -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Universidad</label
        >
        <input
          v-model="formData.university"
          type="text"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Ej. Universidad del Valle"
          required
        />
      </div>

      <!-- Ocupación -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >¿Trabaja?</label
        >
        <select
          v-model="formData.occupation"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        >
          <option disabled selected>Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      <!-- Productos Financieros -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >¿Tiene productos financieros en otro banco?</label
        >
        <select
          v-model="formData.financialProducts"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        >
          <option disabled selected>Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>

      <!-- Número de Celular -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Número de Celular</label
        >
        <input
          v-model="formData.phone"
          type="tel"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Ej. 50176509"
          required
        />
      </div>

      <!-- Correo Electrónico -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Correo Electrónico</label
        >
        <input
          v-model="formData.email"
          type="email"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Ej. ejemplo@correo.com"
          required
        />
      </div>

      <!-- Referencias -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2"
          >Referencias Personales/Familiares</label
        >
        <textarea
          v-model="formData.references"
          class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Incluya nombre, relación y teléfono"
          rows="3"
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
      >
        Enviar Solicitud
      </button>
    </form>

    <!-- Back Button -->
    <button
      @click="$router.push('/main')"
      class="bg-gray-700 text-white py-3 px-8 rounded-lg shadow-md font-medium hover:bg-gray-800 transition-all duration-300"
    >
      Regresar
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// State Variables
const formData = ref({
  name: '',
  idType: '',
  birthdate: '',
  nit: '',
  university: '',
  occupation: '',
  financialProducts: '',
  phone: '',
  email: '',
  references: '',
})

// Handle Form Submission
const handleSubmit = () => {
  console.log('Form Data:', formData.value)
  alert('¡Formulario enviado con éxito!')
}
</script>
