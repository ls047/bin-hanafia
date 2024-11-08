<template>
  <header class="top-0 z-50 bg-light w-full font-roboto text-2xl font-bold">
    <div class="flex items-center justify-between px-6">
      <img
        src="../assets/logo-color.png"
        alt="Logo"
        class="mt-4 w-16 md:mt-2 md:w-24"
      />
      <button 
        @click="toggleMenu"
        class="md:hidden text-light p-2 hover:bg-white/30 rounded-md transition-all duration-300"
      >
        <img 
          v-if="!isMenuOpen"
          src="../assets/Group 47.png" 
          alt="Menu" 
          class="h-6 w-6"
        />
        <svg 
          v-else
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-[#EC8A20]" 
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
      <ul class="hidden flex-row space-x-8 md:flex" dir="rtl">
        <li>
          <button
            @click="navigateTo('/')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-[#c2bfac] hover:bg-opacity-30 hover:scale-110 hover:backdrop-blur-sm"
          >
            الصفحة الرئيسية
          </button>
        </li>
        <li>
          <button
            @click="navigateTo('/about')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-[#c2bfac] hover:bg-opacity-30 hover:scale-110 hover:backdrop-blur-sm"
          >
            عنا
          </button>
        </li>
        <li>
          <button
            @click="navigateTo('/teachers')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-[#c2bfac] hover:bg-opacity-30 hover:scale-110 hover:backdrop-blur-sm"
          >
            المدرسين
          </button>
        </li>
        <li>
          <button
            @click="navigateTo('/special-students')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-[#c2bfac] hover:bg-opacity-30 hover:scale-110 hover:backdrop-blur-sm"
          >
            الطلاب المتميزين
          </button>
        </li>
      </ul>
    </div>

    <transition name="slide">
      <div v-if="isMenuOpen" class="md:hidden fixed top-[70px] right-0 w-full">
        <ul class="absolute right-6 rounded-3xl w-[40%] bg-[#FEFAE1] border border-[#EC8A20] py-9 shadow-lg" dir="rtl">
          <li v-for="item in menuItems" :key="item.path">
            <button
              @click="navigateTo(item.path)"
              class="w-full px-4 py-3 text-right text-sm text-[#EC8A20] hover:bg-primary hover:bg-opacity-10 transition-all duration-300"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuOpen = ref(false);

const menuItems = [
  { name: 'الصفحة الرئيسية', path: '/' },
  { name: 'عنا', path: '/about' },
  { name: 'المدرسين', path: '/teachers' },
  { name: 'الطلاب المتميزين', path: '/special-students' }
];

const navigateTo = (path) => {
  router.push(path);
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.absolute {
  position: absolute;
  z-index: 50;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(50%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.fixed {
  position: fixed;
  z-index: 50;
}
</style>
