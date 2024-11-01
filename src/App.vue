<template>
  <div class="font-roboto bg-[#FEFAE1]">
    <Navbar v-if="$route.path !== '/'" />
    <HomeNav v-else />
    <router-view />
  </div>
</template>
<script setup>
import Navbar from './components/navbar.vue'
import HomeNav from './components/home-nav.vue'
</script>

