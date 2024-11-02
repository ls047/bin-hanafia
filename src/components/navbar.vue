<template>
  <header class="top-0 z-50 bg-light w-full font-roboto text-2xl font-bold">
    <div class="flex items-center justify-between px-6">
      <img
        src="../assets/logo-color.png"
        alt="Logo"
        class="mt-4 w-16 md:mt-2 md:w-24"
      />
      <ul class="hidden flex-row space-x-8 md:flex" dir="rtl">
        <li>
          <button
            @click="navigateTo('/')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-primary hover:bg-opacity-30 hover:backdrop-blur-sm"
          >
            الصفحة الرئيسية
          </button>
        </li>
        <li>
          <button
            @click="navigateTo('#about')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-primary hover:bg-opacity-30 hover:backdrop-blur-sm"
          >
            عنا
          </button>
        </li>
        <li>
          <button
            @click="navigateTo('/teachers')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-primary hover:bg-opacity-30 hover:backdrop-blur-sm"
          >
            المدرسين
          </button>
        </li>
        <li>
          <button
            @click="navigateTo('/special-students')"
            class="rounded-md px-4 py-2 font-bold text-black transition-all duration-300 ease-in-out hover:bg-primary hover:bg-opacity-30 hover:backdrop-blur-sm"
          >
            الطلاب المتميزين
          </button>
        </li>
      </ul>
      <button
        @click="toggleMenu"
        class="rounded-md p-2 text-light transition-all duration-300 hover:bg-white/30 md:hidden"
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
          class="absolute right-0 top-full w-[50%] bg-white/80 backdrop-blur-md md:hidden"
        >
          <ul
            v-if="isMenuOpen"
            class="flex origin-top flex-col space-y-4 p-4"
            dir="rtl"
          >
            <li>
              <button
                @click="navigateTo('/')"
                class="w-full rounded-md px-4 py-2 text-right font-bold text-light transition-all duration-300 ease-in-out hover:bg-white/30"
              >
                الصفحة الرئيسية
              </button>
            </li>
            <li>
              <button
                @click="navigateTo('/about')"
                class="w-full rounded-md px-4 py-2 text-right font-bold text-light transition-all duration-300 ease-in-out hover:bg-white/30"
              >
                عنا
              </button>
            </li>
            <li>
              <button
                @click="navigateTo('/teachers')"
                class="w-full rounded-md px-4 py-2 text-right font-bold text-light transition-all duration-300 ease-in-out hover:bg-white/30"
              >
                المدرسين
              </button>
            </li>
            <li>
              <button
                @click="navigateTo('/special-students')"
                class="w-full rounded-md px-4 py-2 text-right font-bold text-light transition-all duration-300 ease-in-out hover:bg-white/30"
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuOpen = ref(false);

const navigateTo = (path) => {
  router.push(path);
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>
