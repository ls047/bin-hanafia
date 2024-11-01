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

    <!-- Header (moved inside the first section, above content) -->
    <header class="relative w-full z-20 font-roboto font-bold text-2xl">
      <div class="flex justify-between items-center px-6 py-4">
        <img 
          src="../assets/محمد بن الحنفية 1.png" 
          alt="Logo" 
          class="w-16 md:w-24" 
        />
        <ul 
          class="hidden md:flex flex-row space-x-8" 
          :class="{ 'bg-white/80 backdrop-blur-md rounded-md py-2 px-4': isMenuOpen }" 
          dir="rtl"
        >
          <li>
            <button 
              @click="navigateTo('/')" 
              class="text-light hover:backdrop-blur-sm hover:bg-white/30 font-bold transition-all duration-300 ease-in-out rounded-md px-4 py-2"
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

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-light bg-[#EC8A20] p-2 hover:bg-[#d67b1c] rounded-md transition-all duration-300"
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

        <!-- Mobile Menu -->
        <div 
          v-if="isMenuOpen" 
          class="absolute top-full right-0 w-[50%] bg-white/80 backdrop-blur-md md:hidden rounded-b-md"
        >
          <ul 
            class="flex flex-col space-y-4 p-4 origin-top" 
            dir="rtl"
          >
            <li class="bg-[#EC8A20] rounded-md hover:bg-[#d67b1c] transition-all duration-300">
              <button 
                @click="navigateTo('/')" 
                class="w-full text-right text-light font-bold px-4 py-2"
              >
                الصفحة الرئيسية
              </button>
            </li>
            <li class="bg-[#EC8A20] rounded-md hover:bg-[#d67b1c] transition-all duration-300">
              <button 
                @click="navigateTo('/about')" 
                class="w-full text-right text-light font-bold px-4 py-2"
              >
                عنا
              </button>
            </li>
            <li class="bg-[#EC8A20] rounded-md hover:bg-[#d67b1c] transition-all duration-300">
              <button 
                @click="navigateTo('/teachers')" 
                class="w-full text-right text-light font-bold px-4 py-2"
              >
                المدرسين
              </button>
            </li>
            <li class="bg-[#EC8A20] rounded-md hover:bg-[#d67b1c] transition-all duration-300">
              <button 
                @click="navigateTo('/special-students')" 
                class="w-full text-right text-light font-bold px-4 py-2"
              >
                الطلاب المتميزين
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Content Section -->
    <div class="relative z-10 h-screen">
      <div class="absolute top-0 -left-[10%] w-full h-screen text-[#FEFAE1]">
        <!-- Text Section -->
        <div class="absolute w-full md:w-[50%] top-[8rem] md:top-[11rem] left-[5%] md:left-[15%] px-4 md:px-0">
          <div class="max-w-xl mx-auto md:mx-0 relative" dir="rtl">
            <h1 class="text-3xl md:text-5xl font-bold mb-4 text-center md:text-right">
              معاً نبني مستقبل أبنائنا
            </h1>
            <p class="text-xl md:text-2xl leading-relaxed text-center md:text-right mb-16">
              مرحباً بكم في  مدرسة محمد بن <br>الحنفية الأبتدائية المختلطة، حيث يبدأ<br> التعليم الممتع والادف. نحرص على <br>تنمية مهارات الأطفال وتوفير بيئة<br> تعليمية محفزة وداعمة
            </p>
            <div class="absolute bottom-[-4rem] right-0 md:right-0">
              <button class="bg-[#FEFAE1] text-[#000000] text-2xl px-10 py-2 rounded-full -bottom-6 right-[6.2rem] font-bold hover:opacity-80">
                عن المدرسة       
              </button>
            </div>
          </div>
        </div>

        <!-- pics section -->
        <div class="absolute w-full md:w-[50%] top-[30rem] md:top-[11rem] right-[5%] md:right-[20%]">
          <!-- Base rectangle -->
          <img 
            src="../assets/paper-plane.svg" 
            alt="Rectangle 2"
            class="absolute -top-[1.3rem] -right-[2.2rem] md:-right-[4.2rem] w-[17rem] md:w-[22.625rem] h-auto z-20"
          >
          <img 
            src="../assets/Rectangle 1.svg" 
            alt="Rectangle 1"
            class="w-[15rem] md:w-[19.75rem] absolute top-[.25rem] right-[-1rem] md:right-[-1.8rem] z-10"
          >
          <!-- Overlapping rectangle -->
          <img 
            src="../assets/Rectangle 2.svg" 
            alt="Rectangle 2"
            class="absolute top-[2.3rem] right-[.3rem] w-[13rem] md:w-[17.625rem] h-auto z-30"
          >
          <img 
            src="../assets/Books.svg" 
            alt="Books"
            class="absolute -bottom-[18.5rem] -right-[4.2rem] w-[7rem] h-auto z-50"
          >
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div class="min-h-screen relative py-20">
      <div class="w-full flex justify-center items-start mb-20">
        <h1 
          class="text-4xl md:text-6xl font-bold text-[#000000] text-center pb-24" 
          dir="rtl"
        >
          ماذا تقدم مدرستنا
        </h1>
      </div>

      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-10">
          <!-- Left Side - Images -->
          <div class="w-full md:w-1/2">
            <div class="relative h-full flex gap-4">
              <!-- Left Column (2 Images Stacked) -->
              <div class="w-1/2 flex flex-col gap-4">
                <div class="h-[18rem]">
                  <img 
                    src="../assets/Rectangle 9.png" 
                    alt="School Image 1" 
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div class="h-[18rem]">
                <img 
                  src="../assets/Rectangle 7.png" 
                  alt="School Image 3" 
                  class="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <!-- Right Single Image -->
              <div class="h-[18rem] translate-y-32">
                  <img 
                    src="../assets/Rectangle 10.png" 
                    alt="School Image 2" 
                    class="w-full h-full object-cover rounded-lg"
                  />
                </div>
            </div>
          </div>

          <!-- Right Side - List -->
          <div class="w-full md:w-1/2 pt-7" dir="rtl">
            <ul class="space-y-14">
              <li class="flex items-start gap-4">
                <div class="w-[3rem] h-[3rem] relative">
                  <img 
                    src="../assets/Star 1.svg" 
                    alt="Point 1" 
                    class="w-full h-full"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl font-bold mb-2">بيئة تعليمية مبتكرة</h3>
                  <p class="text-2xl font-semibold">نقدم برامج تعليمية متكاملة تعتمد على أحدث أساليب <br>التعليم الحديثة والتكنولوجيا المتقدمة</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div class="w-[3rem] h-[3rem] relative">
                  <img 
                    src="../assets/Star 1.svg" 
                    alt="Point 2" 
                    class="w-full h-full"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl font-bold mb-2">تطوير المهارات الشخصية</h3>
                  <p class="text-2xl font-semibold">نركز على تنمية مهارات الطلاب الاجتماعية والعقلية <br>بالإضافة إلى تحقيق التميز الأكاديمي</p>
                </div>
              </li>

              <li class="flex items-start gap-4">
                <div class="w-[3rem] h-[3rem] relative">
                  <img 
                    src="../assets/Star 1.svg" 
                    alt="Point 3" 
                    class="w-full h-full"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl font-bold mb-2">نظام دعم شامل</h3>
                  <p class="text-2xl font-semibold">فريقنا من المعلمين والمستشارين متواجدون دائمًا لدعم<br> طفلك وتوجيهه لتحقيق أفضل النتائج</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Photo Section (New) -->
    <div class="relative w-full h-screen">
      <img 
        src="../assets/BooksFly.svg" 
        alt="Background" 
        class="w-[90%] object-cover"
      />
      <!-- Optional overlay if needed -->
      <div class="absolute inset-0 "></div>
    </div>
  </div>
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
@media (max-width: 768px) {
  .home-container {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
