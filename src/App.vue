<template>
  <div class="!font-item bg-[#FEFAE1]">
    <Navbar v-if="$route.path !== '/' && !$route.path.includes('/dashboard')" />
    <HomeNav v-else-if="$route.path === '/'" />
    <router-view />
  </div>
</template>
<script setup>
import Navbar from './components/navbar.vue'
import HomeNav from './components/home-nav.vue'
</script>

