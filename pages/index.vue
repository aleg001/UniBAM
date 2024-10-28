<template>
  <div class="bg-gray-50 flex items-center justify-center min-h-screen">
    <div class="container text-center animate-fadeIn">
      <!-- Placeholder for the Bam Logo -->
      <div class="mb-8">
        <img src="https://via.placeholder.com/150x50" alt="Bam Logo" class="mx-auto" />
      </div>

      <!-- Placeholder for the Image/Illustration -->
      <div class="mb-8 animate-slideIn">
        <img src="https://via.placeholder.com/300x200" alt="Illustration" class="mx-auto" />
      </div>

      <!-- Main Text with Animation -->
      <h1 class="text-3xl font-semibold mb-2 text-gray-700 animate-fadeIn">
        No es el futuro, es tu presente.
      </h1>
      <p class="text-3xl font-bold text-black mb-8 mt-5 animate-fadeIn delay-200">UniBam</p>

      <!-- CTA Buttons -->
      <div class="space-y-4">
        <NuxtLink
          to="#"
          class="block w-full max-w-xs mx-auto bg-yellow-400 text-black py-3 rounded-lg shadow-md text-lg font-medium hover:bg-yellow-500 transition-all animate-fadeIn delay-300"
        >
          Ingresar
        </NuxtLink>
        <NuxtLink
          to="#"
          class="block w-full max-w-xs mx-auto text-black py-3 rounded-lg border-2 border-black text-lg font-medium hover:bg-gray-200 transition-all animate-fadeIn delay-400"
        >
          Registrarse
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional scripts required unless you add functionality later
</script>

<style scoped>
/* Custom animation styles */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slideIn {
  animation: slideIn 1s ease-out forwards;
}
</style>
