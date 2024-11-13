<template>
    <div class=" bg-[#FEFAE1] flex font-item">
      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-4 py-[8rem] flex flex-col justify-center gap-32 items-center">
        <button 
          @click="showAddModal = true"
          class="bg-[#EC8A20] text-white text-2xl px-14 py-4 rounded-full
          justify-center items-center
                   transition-all duration-300 hover:scale-110 hover:bg-[#d67b15] hover:shadow-lg">
          إضافة مقال
        </button>
  
        <!-- News Grid -->
        <div v-if="loading" class="flex justify-center items-center min-h-[20rem]">
          <div class="animate-spin rounded-full h-[3rem] w-[3rem] border-4 border-[#EC8A20] border-t-transparent">

          </div>
        </div>
  
        <div v-else-if="error" class="text-center text-red-500 min-h-[20rem]">
          {{ error }}
        </div>
          <!-- cards section -->
              <div v-else class="grid ml-16 sm:ml-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <div v-for="(card, index) in newsItems" 
                  :key="index"
                  class="bg-[#DEA15F6E] w-full flex flex-col items-center py-4 relative"
                  :class="[
                    {
                      'rounded-b-3xl rounded-tl-3xl': index % 3 === 0,
                      'rounded-3xl': index % 3 === 1,
                      'rounded-b-3xl rounded-tr-3xl': index % 3 === 2,
                    },
                  ]"
                >
                  <!-- Delete Icon -->
                  <img 
                    src="../../assets/X_dash.svg" 
                    alt="Delete" 
                    class="absolute -top-6 -right-6 w-14 cursor-pointer hover:scale-110
                     transition-transform"
                    @click="deleteNews(card.id)"
                  />
                  
                  <!-- Pin Icon -->
                  <img 
                    src="../../assets/pin_dash.svg" 
                    alt="Pin" 
                    class="absolute top-8 -right-6 w-14 cursor-pointer hover:scale-110
                     transition-transform"
                    @click="pinNews(card.id)"
                  />
                  
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
                      @click="router.push(`/news/${card.id}`)"
                      class="bg-[#C98142] text-white px-14 py-3 sm:px-4 sm:py-1
                      rounded-full  hover:transition-colors duration-700 sm:rounded-2xl 
                      text-lg sm:text-sm hover:scale-105"
                    >
                      اقرأ المزيد
                    </button>
                  </div>
                </div>
              </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
        <h3 class="text-xl font-semibold mb-4">تأكيد الحذف</h3>
        <p class="mb-6">هل أنت متأكد من حذف هذا المقال؟</p>
        <div class="flex justify-center gap-4">
          <button 
            @click="confirmDelete"
            class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
          >
            حذف
          </button>
          <button 
            @click="showDeleteModal = false"
            class="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>

    <NewsFormModal
      :show="showPinModal"
      :initial-data="newsItems.find(item => item.id === selectedNewsId)"
      @close="showPinModal = false"
      @submit="handlePinSubmit"
    />

    <NewsFormModal
      :show="showAddModal"
      :initial-data="{ title: '', description: '', image: '' }"
      @close="showAddModal = false"
      @submit="handleAddSubmit"
    />
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import NewsFormModal from '../../components/newsFormModal.vue';
  import axios from 'axios';
  
  const newsItems = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const router = useRouter();

  const showDeleteModal = ref(false);
  const showPinModal = ref(false);
  const selectedNewsId = ref(null);
  const showAddModal = ref(false);

  const deleteNews = (id) => {
    selectedNewsId.value = id;
    showDeleteModal.value = true;
  };

  const pinNews = (id) => {
    selectedNewsId.value = id;
    const news = newsItems.value.find(item => item.id === id);
    showPinModal.value = true;
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`https://mohammed-bin-alhanafia.com/api/Content/${selectedNewsId.value}`);
      await fetchNews();
    } catch (err) {
      error.value = 'Failed to delete article';
      console.error(err);
    } finally {
      showDeleteModal.value = false;
    }
  };

  const handlePinSubmit = async (formData) => {
    try {
      await axios.put(`https://mohammed-bin-alhanafia.com/api/Content/${selectedNewsId.value}`, {
        title: formData.title,
        discription: formData.description,
        imgpath: formData.image,
        date: new Date().toISOString()
      });
      await fetchNews();
    } catch (err) {
      error.value = 'Failed to update article';
      console.error(err);
    } finally {
      showPinModal.value = false;
    }
  };

  const handleAddSubmit = async (formData) => {
    try {
      await axios.post('https://mohammed-bin-alhanafia.com/api/Content', {
        title: formData.title,
        discription: formData.description,
        imgpath: formData.image,
        date: new Date().toISOString()
      });
      await fetchNews();
    } catch (err) {
      error.value = 'Failed to add article';
      console.error(err);
    } finally {
      showAddModal.value = false;
    }
  };

  const fetchNews = async () => {
    loading.value = true;
    try {
      const { data } = await axios.get('https://mohammed-bin-alhanafia.com/api/Content/AllContent');
      newsItems.value = data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.discription,
        image: item.imgpath || '../../assets/Rectangle 40.png',
        date: item.date
      }));
    } catch (err) {
      error.value = 'Failed to load news articles';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchNews();
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
  