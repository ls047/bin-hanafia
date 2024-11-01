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

    <!-- Background Photo Section -->
    <div class="relative w-full h-screen">
      <img 
        src="../assets/BooksFly.svg" 
        alt="Background" 
        class="w-[90%] object-cover"
      />
    </div>

    <!-- New Section with Centered Heading and Cards -->
    <div class="min-h-screen relative -translate-y-44">
      <div class="w-full flex flex-col items-center">
        <h1 
          class="text-4xl md:text-6xl font-bold text-[#000000] text-center mb-16" 
          dir="rtl"
        >
          قسم الأخبار والفعاليات
        </h1>
        
        <!-- Cards Section -->
        <section class="p-8 flex flex-col items-center w-full">
          <div class="relative w-[80%] max-w-[1200px]">
            <!-- Left Arrow -->
            <button 
              @click="slideLeft" 
              class="absolute -left-20 top-1/2 -translate-y-1/2 z-10 bg-[#C98142] hover:bg-[#d67b1c] rounded-full p-5 shadow-md transition-colors duration-300"
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
            <div class="overflow-hidden mx-auto">
              <div 
                class="flex gap-8 transition-transform duration-300 ease-in-out"
                :style="{ transform: `translateX(${currentTranslate}px)` }"
              >
                <div
                  v-for="(card, index) in cards"
                  :key="index"
                  class="w-[calc((100%-4rem)/3)] flex-shrink-0 bg-[#DEA15F6E] shadow-md flex flex-col items-center py-4"
                  :class="[
                    {
                      'rounded-r-[168px] pl-6': index % 3 === 0,
                      'rounded-t-[168px] pt-6': index % 3 === 1,
                      'rounded-t-xl pr-6': index % 3 === 2,
                    },
                  ]"
                >
                  <div class="w-full flex justify-center px-4">
                    <img 
                      src="../assets/Rectangle 40.png" 
                      alt="Event Image" 
                      class="w-[80%] h-48 object-cover rounded-t-lg" 
                    />
                  </div>
                  <div class="p-4 text-center w-full">
                    <h3 class="text-lg font-semibold mb-2">{{ card.title }}</h3>
                    <p class="text-sm text-gray-600 mb-4">{{ card.description }}</p>
                    <button class="bg-[#C98142] text-white px-4 py-2 rounded">show more</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Arrow -->
            <button 
              @click="slideRight" 
              class="absolute -right-20 top-1/2 -translate-y-1/2 z-10 bg-[#C98142] hover:bg-[#d67b1c] rounded-full p-5 shadow-md transition-colors duration-300"
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
          <button class="mt-12 text-3xl font-bold bg-[#EC8A20] text-white px-10 py-4 rounded-full">المزيد من المقالات </button>
        </section>
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
  const slideAmount = containerWidth.value + 32 // container width + gap
  if (currentTranslate.value < 0) {
    currentTranslate.value += slideAmount
  }
}

const slideRight = () => {
  const slideAmount = containerWidth.value + 32 // container width + gap
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
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
