<template>
  <div class="min-h-screen bg-[#FEFAE1] relative font-item font-bold">
    <!-- Background Image -->
    <div class="absolute w-full h-full flex justify-center items-center z-0">
      <img 
        src="../assets/Group 43.png" 
        alt="Background Pattern" 
        class="w-[70%] sm:w-[90%] -translate-y-[7rem] sm:-translate-y-[10rem] h-auto 
        object-contain opacity-50"
      />
    </div>

    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-0 py-[8rem] sm:py-[10rem]">
      <div v-if="loading" class="flex justify-center items-center min-h-[50rem]">
        <div class="animate-spin rounded-full h-[3rem] w-[3rem] border-4 border-[#EC8A20] border-t-transparent"></div>
      </div>
      
      <div v-else-if="!teacher" class="flex justify-center items-center min-h-[50rem]">
        <p class="text-xl text-[#333] font-item">عذراً، لم يتم العثور على معلومات المدرس</p>
      </div>

      <div v-else-if="error" class="flex justify-center items-center min-h-[50rem]">
        <p class="text-xl text-red-600 font-item">{{ error }}</p>
      </div>

      <div v-else>
        <!-- Teacher Card -->
        <div class="flex justify-center items-center">
          <div class="relative flex w-[90%] md:w-[30%] sm:w-[40%] flex-col items-center 
            overflow-hidden rounded-t-[13rem] bg-[#EC8A20] pt-[1.5rem] wave-border">
            <div class="w-full rounded-t-[16rem] flex justify-center">
              <img
                :src="teacher.image"
                :alt="teacher.name"
                class="w-[100%] pb-[6rem] sm:pb-[2rem] rounded-t-[168px]
                 object-cover h-[31.25rem] sm:h-[20rem]"
              />
            </div>
          </div>
        </div>

        <!-- Teacher Information -->
        <div class="text-center mt-[2rem] font-item gap-4" dir="rtl">
          <h2 class="text-2xl font-bold mb-[0.5rem]">{{ teacher.name }}</h2>
          <p class="text-xl mb-[0.5rem]">{{ teacher.subject }}</p>
          <p class="text-xl mb-[2rem]">الخبرة: {{ teacher.experience || 'عدد سنوات الخبرة' }}</p>

          <!-- Success Rate Section -->
          <div class="max-w-[32rem] mx-auto translate-y-[7rem]">
            <h3 class="text-4xl font-bold mb-[1rem]">نسبة النجاح</h3>
            <p class="text-lg leading-relaxed mb-[2rem]">
              نحن فخورون بإنجازات طلابنا المستمرة في مختلف المراحل
              التعليمية. بفضل المواصلة من فريق التدريس، حقق
              طلابنا نتائج متميزة عاماً بعد عام
            </p>
            
            <!-- Progress Circle -->
            <div class="flex justify-center items-center">
              <div class="relative w-[8rem] h-[8rem]">
                <svg class="w-full h-full" viewBox="0 0 100 100">
                  <!-- Background circle -->
                  <circle
                    class="text-[#FFDEB6] stroke-current"
                    stroke-width="10"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <!-- Progress circle -->
                  <circle
                    class="text-[#EC8A20] stroke-current transform -rotate-90 origin-center"
                    stroke-width="10"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="dashOffset"
                  />
                </svg>
                <!-- Percentage text -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-2xl font-bold">{{ displayedPercentage }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const BASE_API = 'https://mohammed-bin-alhanafia.com/api'
const IMAGE_BASE_URL = 'https://mohammed-bin-alhanafia.com/images'
const DEFAULT_IMAGE = new URL('../assets/download.png', import.meta.url).href

const route = useRoute();
const teacher = ref(null);
const loading = ref(true);
const error = ref(null);
const successRate = ref(0);
const displayedPercentage = ref(0);
const circumference = 251.2; // 2 * π * radius (40)

const dashOffset = computed(() => {
  return circumference - (successRate.value / 100) * circumference;
});

const getImageUrl = (imgpath) => {
  return imgpath ? `${IMAGE_BASE_URL}/${imgpath}` : DEFAULT_IMAGE;
};

const animatePercentage = (targetPercentage) => {
  let start = 0;
  const duration = 1000;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    displayedPercentage.value = Math.round(progress * targetPercentage);
    successRate.value = progress * targetPercentage;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const fetchTeacherData = async (teacherId) => {
  if (!teacherId) {
    error.value = 'معرف المدرس غير صالح';
    loading.value = false;
    return;
  }

  try {
    const response = await axios.get(`${BASE_API}/Teacher/${teacherId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });

    if (!response.data) {
      throw new Error('No data received');
    }

    teacher.value = {
      id: response.data.id,
      name: response.data.name || 'غير محدد',
      subject: response.data.specialty || 'غير محدد',
      role: response.data.rank || 'غير محدد',
      image: getImageUrl(response.data.imgpath),
      experience: response.data.expeiance || 'غير محدد'
    };
    
    animatePercentage(response.data.sucsessRate || 85);
    
  } catch (err) {
    console.error('Error fetching teacher details:', err);
    error.value = err.response?.status === 404 
      ? 'لم يتم العثور على المدرس'
      : 'عذراً، حدث خطأ أثناء تحميل بيانات المعلم. يرجى المحاولة مرة أخرى';
    teacher.value = null;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  const teacherId = route.params.id;
  fetchTeacherData(teacherId);
});
</script>

<style scoped>
circle {
  transition: stroke-dashoffset 1s ease-out;
}

.wave-border {
  position: relative;
  animation: waveAnimation 2s ease-in-out infinite;
}

@keyframes waveAnimation {
  0% {
    border-radius: 13rem 13rem 0 0;
  }
  25% {
    border-radius: 13rem 12rem 0 0;
  }
  50% {
    border-radius: 12rem 13rem 0 0;
  }
  75% {
    border-radius: 13rem 12rem 0 0;
  }
  100% {
    border-radius: 13rem 13rem 0 0;
  }
}

/* Apply the same animation to the image */
.wave-border img {
  animation: imageWaveAnimation 4s ease-in-out infinite;
}
</style>