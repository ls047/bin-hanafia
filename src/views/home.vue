<template>
  <div class="home-container min-h-screen sm:overflow-y-hidden relative font-roboto">
    <!-- Background SVG Section -->
    <div class="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
      <img 
        src="../assets/Group 1.svg" 
        alt="Background" 
        class="w-full sm:bg-center h-full object-cover"
      >
    </div>
    <!-- Content Section -->
    <div class="relative z-10 h-screen">
      <div class="absolute top-0 -left-[10%] w-full h-screen text-[#FEFAE1]">
        <!-- Mobile-first layout with flex column -->
        <div class="flex flex-col md:flex-row w-full h-full">
          <!-- pics section - Shows first on mobile -->
          <div class="relative w-full z-10 md:w-[50%] mt-[4rem] md:mt-[11rem] md:order-2 md:right-[20%]">
            <!-- Base rectangle -->
            <img 
              src="../assets/paper-plane.svg" 
              alt="Rectangle 2"
              class="absolute -top-[1.3rem] right-[1rem] md:-right-[4.2rem] w-[17rem] md:w-[22.625rem] h-auto z-20"
            >
            <img 
              src="../assets/Rectangle 1.svg" 
              alt="Rectangle 1"
              class="w-[15rem] md:w-[19.75rem] absolute top-[.25rem] right-[2rem] md:right-[-1.8rem] z-10"
            >
            <!-- Overlapping rectangle -->
            <img 
              src="../assets/Rectangle 2.svg" 
              alt="Rectangle 2"
              class="absolute top-[2.3rem] right-[3.5rem] md:right-[.3rem] w-[13rem] md:w-[17.625rem] h-auto z-30"
            >
            <img 
              src="../assets/Books.svg" 
              alt="Books"
              class="absolute bottom-[30rem] md:bottom-[10rem] sm:-bottom-[15rem] 
              right-[1rem] md:-right-[4.2rem] w-[7rem] sm:w-[5rem] lg:bottom-[16rem] 
              xl:bottom-[10rem] 2xl:bottom-[85rem] h-auto z-40"
            >
          </div>

          <!-- Text Section - Shows second on mobile -->
          <div class="w-[70%] sm:w-[100%] mt-[20rem] md:mt-[11rem] px-4 
          translate-x-36 md:px-0 md:order-1 md:left-[15%] sm:translate-x-[11%] 
          sm:-translate-y-14 xl:translate-x-32 lg:-translate-x-28 z-50">
            <div class="max-w-xl mx-auto md:mx-0 relative" dir="rtl">
              <h1 class="text-4xl font-bold mb-2 text-center md:text-right">
                معاً نبني مستقبل أبنائنا
              </h1>
              <p class="text-2xl sm:text-xl leading-relaxed text-center md:text-right mb-8">
                مرحباً بكم في  مدرسة محمد بن <br>الحنفية الأبتدائية المختلطة، حيث يبدأ<br> التعليم الممتع والاد. نحرص على <br>تم مهارات الأطفال وتوفير بيئة<br> تعليمية محفزة وداعمة
              </p>
              <div class="flex justify-start">
                <button class="bg-[#FEFAE1] text-[#000000] text-2xl px-10 py-2 rounded-full font-bold hover:opacity-80
                 sm:-translate-x-[5rem] hover:scale-110 duration-500 relative z-50">
                  عن المدرسة       
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Section -->
    <div class="min-h-screen relative py-20 sm:py-0">
      <div class="w-full flex justify-center items-start mb-20">
        <h1 
          class="sm:text-4xl md:text-6xl font-bold text-[#000000] text-center pb-24 sm:pb-0" 
          dir="rtl"
        >
          ماذا تقدم مدرستنا
        </h1>
      </div>

      <div class="container mx-auto px-4">
        <div class="flex flex-col sm:flex-row md:flex-row gap-10 sm:gap-0 ">
          <!-- Left Side - Images -->
          <div class="w-full md:w-1/2 sm:w-1/2 sm:translate-y-24">
            <div class="relative h-full flex gap-4">
              <!-- Left Column (2 Images Stacked) -->
              <div class="w-1/2 sm:w-[60%] flex flex-col gap-4">
                <div class="h-[18rem] sm:h-[5rem]">
                  <img 
                    src="../assets/Rectangle 9.png" 
                    alt="School Image 1"
                    class="w-full sm:w-[90%] h-full object-cover rounded-lg"
                  />
                </div>
                <div class="h-[18rem] sm:h-[5rem]">
                <img 
                  src="../assets/Rectangle 7.png" 
                  alt="School Image 3" 
                  class="w-full sm:w-[90%] h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <!-- Right Single Image -->
              <div class="h-[18rem] sm:h-[5rem] translate-y-32 sm:translate-y-10">
                  <img 
                    src="../assets/Rectangle 10.png" 
                    alt="School Image 2" 
                    class="w-full h-full sm:w-[90%] object-cover rounded-lg"
                  />
                </div>
            </div>
          </div>

          <!-- Right Side - List -->
          <div class="w-full md:w-1/2 sm:w-[70%] pt-7" dir="rtl">
            <ul class="space-y-14 sm:space-y-8">
                <li class="flex items-start self-start gap-4 sm:gap-0">
                <div class="w-[3rem] h-[3rem] relative">
                  <img 
                    src="../assets/Star 1.svg" 
                    alt="Point 1" 
                    class="w-full sm:w-[50%] h-full"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl sm:text-sm font-bold mb-2">بيئة تعليمية مبتكرة</h3>
                  <p class="text-2xl sm:text-xs font-semibold">نقدم برامج تعليمية متكاملة تعتمد على أحدث أساليب <br>التعليم الحديثة والتكنولوجيا المتقدمة</p>
                </div>
              </li>

              <li class="flex items-start gap-4 sm:gap-0">
                <div class="w-[3rem] h-[3rem] relative">
                  <img 
                    src="../assets/Star 1.svg" 
                    alt="Point 2" 
                    class="w-full sm:w-[50%] h-full"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl sm:text-sm font-bold mb-2">تطوير المهارات الشخصية</h3>
                  <p class="text-2xl sm:text-xs font-semibold">نركز على تنمية مهارات الطلاب الاجتماعية والعقلية <br>بالإضافة إلى تحقيق التميز الأكاديمي</p>
                </div>
              </li>

              <li class="flex items-start gap-4 sm:gap-0">
                <div class="w-[3rem] h-[3rem] relative">
                  <img 
                    src="../assets/Star 1.svg" 
                    alt="Point 3" 
                    class="w-full sm:w-[50%] h-full"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl sm:text-sm font-bold mb-2">نظام دعم شامل</h3>
                  <p class="text-2xl sm:text-xs font-semibold">فريقنا من المعلمين والمستشارين متواجدون دائمًا لدعم<br> طفلك وتوجهه لحقيق فضل النتائج</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Photo Section -->
    <div class="relative w-full h-screen sm:-translate-y-28">
      <img 
        src="../assets/BooksFly.svg" 
        alt="Background" 
        class="w-[90%] object-cover"
      />
    </div>

    <!-- New Section with Centered Heading and Cards -->
    <div class="min-h-screen relative -translate-y-44 sm:-translate-y-[32rem]">
      <div class="w-full flex flex-col items-center">
        <h1 
          class="text-4xl md:text-6xl font-bold text-[#000000] text-center mb-16" 
          dir="rtl"
        >
          قسم الأخبار والفعاليات
        </h1>
        
        <!-- Cards Section -->
        <section class="p-8 sm:p-0 flex flex-col items-center w-full">
          <div class="relative w-full max-w-[75rem] mx-auto">
            <!-- Left Arrow -->
            <button 
              @click="slideLeft" 
              class="absolute top-1/2 sm:hidden -translate-y-1/2 z-10 bg-[#C98142]
               hover:bg-[#d67b1c] rounded-full
               p-5 shadow-md transition-colors duration-300"
            >
              <svg 
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <!-- Cards Container -->
            <div class="overflow-hidden sm:overflow-scroll w-[80%] sm:w-full mx-auto">
              <div 
                class="flex gap-5 sm:gap-2 transition-transform duration-700 ease-in-out"
                :style="{ transform: `translateX(${currentTranslate}px)` }"
              >
                <div
                  v-for="(card, index) in cards"
                  :key="index"
                  class="w-[calc(33.333%-1rem)] sm:w-[calc(43.333%-1rem)]
                   flex-shrink-0 bg-[#DEA15F6E] flex flex-col items-center py-4"
                  :class="[
                    {
                      'rounded-b-3xl rounded-tl-3xl': index % 3 === 0,
                      'rounded-3xl': index % 3 === 1,
                      'rounded-b-3xl rounded-tr-3xl': index % 3 === 2,
                    },
                  ]"
                >
                  <div class="w-full flex justify-center px-4">
                    <img 
                      src="../assets/Rectangle 40.png" 
                      alt="Event Image" 
                      class="w-[90%] sm:w-[100%] sm:rounded-xl h-48 sm:h-20 object-cover rounded-3xl" 
                    />
                  </div>
                  <div class="p-4 text-center w-full">
                    <h3 class="text-lg sm:text-sm font-semibold mb-2">{{ card.title }}</h3>
                    <p class="text-sm w-[90%] sm:w-[90%] sm:text-xs text-gray-600 mb-4
                     break-words whitespace-pre-wrap">{{ card.description }}</p>
                    <button class="bg-[#C98142] text-white px-14 py-3 sm:px-4 sm:py-1
                     rounded-full sm:rounded-2xl text-2xl sm:text-sm">اقرأ المزيد</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Arrow -->
            <button 
              @click="slideRight" 
              class="absolute right-2 sm:hidden top-1/2 -translate-y-1/2 z-10 bg-[#C98142] hover:bg-[#d67b1c] rounded-full p-5 shadow-md transition-colors duration-300"
            >
              <svg 
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <button class="mt-12 sm:px-4 sm:text-xl text-3xl font-bold bg-[#EC8A20] text-white 
          px-10 py-4 rounded-full hover:bg-[#d67b1c] hover:scale-110 
          duration-500">المزيد من المقالات </button>
        </section>
        <!-- Add this after the cards section -->
        <div class="min-h-screen relative py-20 sm:py-10 translate-y-24">
          <div class="w-full flex flex-col items-center">
            <h1 
              class="text-4xl md:text-6xl font-bold text-[#000000] sm:text-3xl text-center mb-16" 
              dir="rtl"
            >
            مدرستنا في سطور        
            </h1>
            
            <!-- Content Container -->
            <div  
              class="w-fit sm:w-[43%] py-11 sm:py-12 sm:px-12 rounded-tr-[12.5rem] sm:rounded-tr-[8rem] font-roboto p-8 relative overflow-visible bg-[#DEA15F]"
            >
              <div class="relative z-10 flex flex-row-reverse items-center">
                <!-- Right side text -->
                <div class="w-[42.5rem] flex sm:pl-10 flex-col justify-center items-center" dir="rtl">
                  <p class="text-3xl sm:translate-x-6 sm:text-xs text-center text-[#FEFAE1]
                   font-bold leading-[2.2rem] sm:leading-[1.1rem]">
                    تأسست مدرسة محمد بن الحنفية <br>
                    الأبتدائية المختلطة بهدف تقديم تعليم <br>
                    شامل وممتع للأطفال. نؤمن بأن <br>
                    التعليم في المراحل المبكرة هو الأساس <br>
                    لبناء شخصية متوازنة ومبدعة. رؤيتنا<br>
                    هي إعداد جيل واعٍ ومتحمس للتعلم،<br>
                    مع الالتزام بتقديم برامج تعليمية<br>
                    متطورة ومواكبة للعصر
                  </p>
                </div>

                <!-- Left side image -->
                <div class="absolute -left-[25%] top-1/2 -translate-y-1/2 w-[37.5rem] z-20">
                  <img 
                    src="../assets/Rectangle 47.png" 
                    alt="School Image"
                    class="w-[50%] sm:w-[18%] rounded-2xl"
                  />
                </div>

                <!-- Bottom-right image -->
                <div class="absolute -right-48 bottom-0 sm:-bottom-3 translate-y-1/2 
                translate-x-1/4 sm:translate-x-[38%] w-[20rem] z-20">
                  <img 
                    src="../assets/Character.png" 
                    alt="Bottom Right Image"
                    class="w-[40%] sm:w-[23%] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <!-- Update the contact section (around line 309-337) -->
    <div class="relative w-[70%] sm:w-[90%] py-8 bg-[#DEA15F] mx-auto mb-24
     sm:mb-0 sm:-translate-y-[28rem] rounded-bl-[20.5rem] rounded-tr-[20.5rem] 
     sm:rounded-bl-[10rem] sm:rounded-tr-[10rem]">
      <div class="w-full text-[#FEFAE1]">
        <!-- Title -->
        <h1 
          class="text-3xl sm:text-sm font-bold text-[#FEFAE1] text-center mt-2 mb-6" 
          dir="rtl"
        >
          نحن هنا لدعم طفلك في رحلته التعليمية<div class="br"></div> تواصل معنا للحصول على المزيد من<br> المعلومات
        </h1>

        <!-- Content Container -->
        <div class="w-[90%] py-8 font-roboto p-6 relative overflow-visible">
          <div class="relative z-10 flex flex-row-reverse items-center justify-between">
            <!-- Right Side - Contact Cards -->
            <div class="w-[42.5rem] grid grid-cols-1 gap-4 sm:gap-2" dir="rtl">
              <!-- Facebook Card -->
              <a 
                href="https://www.facebook.com/p/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D9%85%D8%AD%D9%85%D8%AF-%D8%A8%D9%86-%D8%A7%D9%84%D8%AD%D9%86%D9%81%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%D8%A6%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D9%84%D8%B7%D8%A9-100083272182232/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="bg-[#FEFAE1] p-4 sm:p-1 w-[40%] rounded-full hover:scale-105
                 transition-transform duration-300 cursor-pointer"
              >
                <div class="flex items-center gap-4 mb-2">
                  <div class="w-8 h-10 sm:hidden rounded-full flex items-center justify-center">
                  </div>
                  <img src="../assets/Group 3.png" class="w-[60%] sm:-translate-x-[1.1rem]" alt="Facebook">
                </div>
              </a>

              <!-- Phone Card -->
              <a 
                href="tel:+1234567890" 
                class="bg-[#FEFAE1] p-4 sm:p-1 w-[40%] rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div class="flex items-center gap-4 mb-2">
                  <div class="w-14 sm:hidden rounded-full flex items-center justify-center">
                  </div>
                  <img src="../assets/Group 31.png" class="w-[40%] sm:-translate-x-[1.7rem]" alt="Phone">
                </div>
              </a>

              <!-- Instagram Card -->
              <a 
                href="https://instagram.com/schoolname" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="bg-[#FEFAE1] w-[40%] p-4 sm:p-1 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div class="flex items-center gap-4 mb-2">
                  <div class="w-8 sm:hidden rounded-full flex items-center justify-center">
                  </div>
                  <img src="../assets/Group 2.png" class="w-[60%] sm:-translate-x-[1.1rem]" alt="Instagram">
                </div>
              </a>
            </div>

            <!-- Left Side - Map -->
            <div class="absolute left-[12%] top-1/2 -translate-y-1/2 w-[20.5rem] z-20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4718.918178799815!2d44.349543108205644!3d33.24609157549598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d5b32a2bf511%3A0x770317659bf16a31!2z2YXYr9ix2LPYqSDYp9mE2YfYr9mJINin2YTYp9io2KrYr9in2KbZitip2Iwg2KjYutiv2KfYr9iMINio2LrYr9in2K8g2YXYrdin2YHYuNip2Iwg2KfZhNi52LHYp9mC!5e0!3m2!1sar!2sbg!4v1730543419849!5m2!1sar!2sbg"
               width="90%"
               height="390" 
               style="border:0;"
               allowfullscreen="" 
               loading="lazy" 
               class="sm:w-[40%] sm:-translate-x-6 rounded-2xl sm:h-[160px]"
               referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const isMenuOpen = ref(false)
const cards = ref([
  {
    image: "/src/assets/Rectangle 40.png",
    title: "Event Title 1",
    description: "Event Description 1",
    buttonText: "المزيد"
  },
  {
    image: "/src/assets/Rectangle 40.png",
    title: "Event Title 2",
    description: "Event Description 2",
    buttonText: "المزيد"
  },
  {
    image: "/src/assets/Rectangle 40.png",
    title: "Event Title 3",
    description: "Event Description 3",
    buttonText: "المزيد"
  },
  {
    image: "/src/assets/Rectangle 40.png",
    title: "Event Title 4",
    description: "Event Description 4",
    buttonText: "المزيد"
  },
  {
    image: "/src/assets/Rectangle 40.png",
    title: "Event Title 5",
    description: "Event Description 5",
    buttonText: "المزيد"
  },
  {
    image: "/src/assets/Rectangle 40.png",
    title: "Event Title 6",
    description: "Event Description 6",
    buttonText: "المزيد"
  }
])
const buttonLabel = "المزيد من المقالات"

const currentTranslate = ref(0)
const containerWidth = ref(1200) // Fixed container width
const visibleCards = 3

onMounted(() => {
  const container = document.querySelector('.cards-container')
  if (container) {
    cardWidth.value = container.offsetWidth / visibleCards
  }
})

// Navigation functions
const navigateTo = (path) => {
  router.push(path)
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Fetch data from API on mount
onMounted(async () => {
  try {
    const response = await axios.get('/api/cards') // Replace with your API endpoint
    cards.value = response.data
  } catch (error) {
    console.error("Error fetching cards data:", error)
  }
})

const slideLeft = () => {
  const slideAmount = (containerWidth.value + 32) / 1.5 // Reduced slide amount
  if (currentTranslate.value < 0) {
    currentTranslate.value += slideAmount
  }
}

const slideRight = () => {
  const slideAmount = (containerWidth.value + 32) / 1.5 // Reduced slide amount
  const maxSlides = Math.ceil(cards.value.length / visibleCards) - 1
  const maxTranslate = -(slideAmount * maxSlides)
  
  if (currentTranslate.value > maxTranslate) {
    currentTranslate.value -= slideAmount
  }
}
</script>

<style scoped>
.cards-container {
  scroll-behavior: smooth;
}

/* Hide scrollbar */
.cards-container::-webkit-scrollbar {
  display: none;
}

/* For Firefox */
.cards-container {
  scrollbar-width: none;
}

@media (max-width: 768px) {
  .home-container {
    overflow-y: hidden;
    overflow-x: hidden;
  }
}
</style>
