<template>
  <div class="min-h-screen bg-[#FEFAE1] relative font-item">


    <!-- Add this after the Background Pattern and before the Content Container -->
    <div class="relative w-full flex justify-start items-center z-10 -mb-20 mt-0">
      <img 
        src="../assets/paper-plane-long.png" 
        alt="Paper Plane" 
        class="w-[90%] h-auto object-contain mt-0"
      />
    </div>

    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-4 py-[8rem]">
      <!-- Header Section -->
      <div class="text-center max-w-[50rem] mx-auto mb-[4rem]" dir="rtl">
        <h1 class="text-4xl sm:text-3xl font-bold mb-[2rem] sm:mb-4 font-item">أحدث الأخبار والفعاليات</h1>
        <p class="text-2xl sm:text-sm leading-8 font-item font-bold">
          ابقوا على اطلاع على أحدث أخبار مدرستنا وشاركوا في <br>الفعاليات والأنشطة 
          التي ننظمها لتعزيز روح التعاون والإبداع<br> بين طلابنا
        </p>
      </div>

      <!-- News Grid -->
      <div v-if="loading" class="flex justify-center items-center min-h-[20rem]">
        <div class="animate-spin rounded-full h-[3rem] w-[3rem] border-4 border-[#EC8A20] border-t-transparent"></div>
      </div>

      <div v-else-if="error" class="text-center text-red-500 min-h-[20rem]">
        {{ error }}
      </div>
        <!-- cards section -->
            <div v-else class="grid ml-16 sm:ml-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div v-for="(card, index) in newsItems" 
                :key="index"
                class="bg-[#DEA15F6E] w-[90%] flex flex-col items-center py-4"
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
                    :src="card.image" 
                    alt="Event Image" 
                    class="w-[90%] sm:w-[100%] sm:rounded-xl h-48 sm:h-20 object-cover rounded-3xl" 
                  />
                </div>
                <div class="p-4 text-center w-full">
                  <h3 class="text-lg sm:text-sm font-semibold mb-2">{{ card.title }}</h3>
                  <p class="text-sm w-[90%] mx-auto sm:w-[90%] sm:text-xs text-gray-600 mb-4
                    break-words whitespace-pre-wrap">{{ card.description }}</p>
                  <button 
                    @click="navigateToNewsDetail(card.id)"
                    class="bg-[#C98142] text-white px-14 py-3 sm:px-4 sm:py-1
                    rounded-full  hover:transition-colors duration-700 sm:rounded-2xl text-2xl sm:text-sm hover:scale-105"
                  >
                    اقرأ المزيد
                  </button>
                </div>
              </div>
            </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const BASE_API = 'https://mohammed-bin-alhanafia.com/api'
const IMAGE_BASE_URL = 'https://mohammed-bin-alhanafia.com/images'

const newsItems = ref([]);
const loading = ref(true);
const error = ref(null);
const router = useRouter();

const navigateToNewsDetail = (id) => {
  router.push({
    name: 'news-special',  // Make sure this matches your route name in router configuration
    params: { id: id }
  });
};

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_API}/Content/AllContent`);
    newsItems.value = response.data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.imgpath 
        ? `${IMAGE_BASE_URL}/${item.imgpath}`
        : new URL('../assets/Rectangle 40.png', import.meta.url).href,
    }));
  } catch (err) {
    error.value = 'عذراً، حدث خطأ أثناء تحميل الأخبار';
    console.error('Error fetching news:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
