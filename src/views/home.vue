<template>
  <div class="home-container min-h-screen relative font-roboto">
    <!-- Background SVG Section -->
    <div class="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
      <img 
        src="../assets/Group 1.svg" 
        alt="Background" 
        class="w-full h-full object-cover"
      >
    </div>

    <!-- Content Section -->
    <div class="absolute top-0 -left-[10%] w-full h-screen z-10 text-[#FEFAE1]">
      <!-- Text Section -->
      <div class="absolute w-[50%] top-[11rem] left-[15%]">
        <div class="max-w-xl" dir="rtl">
          <h1 class="text-5xl font-bold mb-4">
            معاً نبني مستقبل أبنائنا
          </h1>
          <p class="text-2xl leading-relaxed">
            مرحباً بكم في  مدرسة محمد بن <br>الحنفية الأبتدائية المختلطة، حيث يبدأ<br> التعليم الممتع والهادف. نحرص على <br>تنمية مهارات الأطفال وتوفير بيئة<br> تعليمية محفزة وداعمة          </p>
        </div>
        <button class="bg-[#FEFAE1] text-[#000000] px-4 py-2 rounded-md justify-center absolute bottom-0 right-0">
          عن المدرسة       
        </button>
      </div>

      <!-- pics section -->
      <div class="absolute w-[50%] top-[11rem] right-[20%]">
        <!-- Base rectangle -->
        <img 
          src="../assets/paper-plane.svg" 
          alt="Rectangle 2"
          class="absolute -top-[1.3rem] -right-[4.2rem] w-[21.625rem] h-auto z-20"
        >
        <img 
          src="../assets/Rectangle 1.svg" 
          alt="Rectangle 1"
          class="w-[18.75rem] absolute top-[.25rem] right-[-1.8rem] z-10"
        >
        <!-- Overlapping rectangle -->
        <img 
          src="../assets/Rectangle 2.svg" 
          alt="Rectangle 2"
          class="absolute top-[2.3rem] right-[.3rem] w-[16.625rem] h-auto z-30"
        >
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
</script>

<style scoped>

</style>
