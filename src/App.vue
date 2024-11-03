<script setup>
import NavBar from './components/NavBar.vue'
import BottomBar from './components/BottomBar.vue'
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const hiddenRoutes = ['/login', '/register', '/']
const isHiddenRoute = computed(() => hiddenRoutes.includes(route.path))
</script>

<template>
  <NavBar v-if="!isHiddenRoute" />
  <header></header>
  <RouterView />
  <BottomBar v-if="!isHiddenRoute" class="md:hidden" />
</template>
