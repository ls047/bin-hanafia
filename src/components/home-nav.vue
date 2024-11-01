<template>
  <header class="fixed top-0 w-full z-50 font-roboto font-bold text-2xl">
    <div class="flex justify-between items-center px-6">
      <img 
        src="../assets/logo.png" 
        alt="Logo" 
        class="w-16 md:w-24 mt-4 md:mt-2" 
      />
      <ul class="hidden md:flex flex-row space-x-8" dir="rtl">
        <li>
          <button 
            @click="navigateTo('/')" 
            class="text-light hover:backdrop-blur-sm hover:bg-white/30 font-bold pl-8 transition-all duration-300 ease-in-out rounded-md px-4 py-2"
          >
            الصفحة الرئيسية
          </button>
        </li>
        <li>
          <button 
            @click="navigateTo('/about')" 
            class="text-light hover:backdrop-blur-sm hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
          >
            عنا
          </button>
        </li>
        <li>
          <button 
            @click="navigateTo('/teachers')" 
            class="text-light hover:backdrop-blur-sm hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
          >
            المدرسين
          </button>
        </li>
        <li>
          <button 
            @click="navigateTo('/special-students')" 
            class="text-light hover:backdrop-blur-sm hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
          >
            الطلاب المتميزين
          </button>
        </li>
      </ul>
      <button 
        @click="toggleMenu" 
        class="md:hidden text-light p-2 hover:bg-white/30 rounded-md transition-all duration-300"
      >
        <img 
          v-if="!isMenuOpen" 
          src="../assets/Group 47.svg" 
          alt="Menu" 
          class="h-6 w-6"
        />
        <svg 
          v-else
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 transform scale-95"
        enter-to-class="opacity-100 transform scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 transform scale-100"
        leave-to-class="opacity-0 transform scale-95"
      >
        <div 
          v-if="isMenuOpen" 
          class="absolute top-full right-0 w-[50%] bg-white/80 backdrop-blur-md md:hidden"
        >
          <ul 
            v-if="isMenuOpen" 
            class="flex flex-col space-y-4 p-4 origin-top" 
            dir="rtl"
          >
            <li>
              <button 
                @click="navigateTo('/')" 
                class="w-full text-right text-light hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
              >
                الصفحة الرئيسية
              </button>
            </li>
            <li>
              <button 
                @click="navigateTo('/about')" 
                class="w-full text-right text-light hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
              >
                عنا
              </button>
            </li>
            <li>
              <button 
                @click="navigateTo('/teachers')" 
                class="w-full text-right text-light hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
              >
                المدرسين
              </button>
            </li>
            <li>
              <button 
                @click="navigateTo('/special-students')" 
                class="w-full text-right text-light hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
              >
                الطلاب المتميزين
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

const navigateTo = (path) => {
  router.push(path)
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>


<style scoped>

</style>