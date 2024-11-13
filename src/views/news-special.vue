<template>
  <div class="min-h-screen bg-[#FEFAE1] relative font-item">

    <!-- Paper Plane -->
    <div class="relative w-full flex justify-start items-center z-10 -mb-5 mt-0">
      <img 
        src="../assets/paper-plane-long.png" 
        alt="Paper Plane" 
        class="w-[90%] h-auto object-contain mt-0"
      />
    </div>

    <!-- Content Container -->
    <div class="relative z-10 container mx-auto p-4 py-[8rem]">
      <div v-if="loading" class="flex justify-center items-center min-h-[20rem]">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-[#EC8A20] border-t-transparent"></div>
      </div>

      <div v-else-if="error" class="text-center text-red-500 min-h-[20rem]">
        {{ error }}
      </div>

      <div v-else class="rounded-3xl p-8" dir="rtl">
        <div class="flex flex-col lg:flex-row-reverse gap-8">
          <!-- Left side - Image (only show if image exists) -->
          <div v-if="newsItem.image" class="lg:w-1/2">
            <img 
              :src="newsItem.image"
              alt="News Image"
              class="w-full h-[25rem] object-cover rounded-3xl"
            />
          </div>

          <!-- Right side - Content (takes full width if no image) -->
          <div :class="[
            'flex flex-col justify-between',
            newsItem.image ? 'lg:w-1/2' : 'w-full'
          ]">
            <div class="max-w-[90%] mx-auto">
              <h1 class="text-4xl font-bold mb-6 break-words">{{ newsItem.title }}</h1>
              <p class="text-xl leading-relaxed mb-8 break-words whitespace-pre-wrap">{{ newsItem.description }}</p>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">{{ newsItem.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const BASE_API = 'https://mohammed-bin-alhanafia.com/api'
const IMAGE_BASE_URL = 'https://mohammed-bin-alhanafia.com/images'

const route = useRoute();
const router = useRouter();
const newsItem = ref({
  title: '',
  description: '',
  image: '',
  date: ''
});
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  const newsId = route.params.id;
  try {
    const response = await axios.get(`${BASE_API}/Content/GetById/${newsId}`);
    newsItem.value = {
      title: response.data.title,
      description: response.data.discription,
      image: response.data.imgpath ? `${IMAGE_BASE_URL}/${response.data.imgpath}` : null,
      date: new Date(response.data.date).toLocaleDateString('ar-SA')
    };
  } catch (err) {
    error.value = 'عذراً، حدث خطأ أثناء تحميل الخبر';
    console.error('Error fetching news item:', err);
  } finally {
    loading.value = false;
  }
});
</script>
