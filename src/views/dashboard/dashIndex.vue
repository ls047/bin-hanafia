<template>
  <div class="flex flex-col justify-center items-center w-full bg-[#FEFAE1] gap-24">
    <h1 class="text-4xl font-bold text-start self-start p-4 text-black">Dashboard</h1>
    <div class="w-[30%] -mb-12 flex justify-between items-center ">
      <button class="bg-[#EC8A20] text-white text-2xl px-8 py-4 rounded-full 
                     transition-all duration-300 hover:scale-110 hover:bg-[#d67b15] hover:shadow-lg">
        معلومات التدريسي
      </button>
      <router-link to="/dashboard/news" class="bg-[#EC8A20] text-white text-2xl px-14 py-4 rounded-full
                     transition-all duration-300 hover:scale-110 hover:bg-[#d67b15] hover:shadow-lg">
        مقالات
      </router-link>
    </div>
    <button class="bg-[#EC8A20] text-white text-2xl px-14 py-4 rounded-full
                   transition-all duration-300 hover:scale-110 hover:bg-[#d67b15] hover:shadow-lg">
      الطلبة
    </button>
  </div>
</template>


<script setup>

</script>

<style scoped>  

</style>
