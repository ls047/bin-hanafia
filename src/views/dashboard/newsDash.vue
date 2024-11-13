<template>
    <div class=" bg-[#FEFAE1] flex font-item">
      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-4 py-[8rem] flex flex-col justify-center gap-32 items-center">
        <button class="bg-[#EC8A20] text-white text-2xl px-14 py-4 rounded-full
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
                      src="../../assets/Rectangle 40.png" 
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

    <!-- Pin Edit Modal -->
    <div v-if="showPinModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h3 class="text-xl font-semibold mb-4 text-center">تعديل المقال المثبت</h3>
        <form @submit.prevent="confirmPin" class="space-y-4">
          <!-- Image Preview -->
          <div class="mb-4">
            <img 
              :src="imagePreview || pinForm.image" 
              alt="Preview" 
              class="w-full h-48 object-cover rounded-lg mb-2"
              v-if="imagePreview || pinForm.image"
            />
            <!-- Image Input -->
            <label class="block text-sm font-medium text-gray-700 mb-1">الصورة</label>
            <input 
              type="file" 
              @change="handleImageChange" 
              accept="image/*"
              class="w-full p-2 border rounded-lg"
            >
          </div>
          
          <!-- Existing fields -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">العنوان</label>
            <input 
              v-model="pinForm.title" 
              type="text" 
              class="w-full p-2 border rounded-lg"
              required
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
            <textarea 
              v-model="pinForm.description" 
              class="w-full p-2 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="flex justify-center gap-4">
            <button 
              type="submit"
              class="bg-[#EC8A20] text-white px-6 py-2 rounded-lg hover:bg-[#d67b15]"
            >
              حفظ
            </button>
            <button 
              type="button"
              @click="showPinModal = false"
              class="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const newsItems = ref([
    {
      id: 1,
      title: 'مقال 1',
      description: 'هذا هو الوصف للمقال الأول',
      image: '../assets/Rectangle 40.png',
    },
    {
      id: 2,
      title: 'مقال 2',
      description: 'هذا هو الوصف للمقال الثاني',
      image: '../assets/Rectangle 40.png',
    },
    {
      id: 3,
      title: 'مقال 3',
      description: 'هذا هو الوصف للمقال الثالث',
      image: '../assets/Rectangle 40.png',
    },
  ]);
  const loading = ref(false);
  const error = ref(null);
  const router = useRouter();

  const showDeleteModal = ref(false);
  const showPinModal = ref(false);
  const selectedNewsId = ref(null);
  const imagePreview = ref(null);
  const pinForm = ref({
    title: '',
    description: '',
    image: ''
  });

  const deleteNews = (id) => {
    selectedNewsId.value = id;
    showDeleteModal.value = true;
  };

  const pinNews = (id) => {
    selectedNewsId.value = id;
    const news = newsItems.value.find(item => item.id === id);
    pinForm.value = {
      title: news.title,
      description: news.description,
      image: news.image
    };
    imagePreview.value = null;
    showPinModal.value = true;
  };

  const confirmDelete = () => {
    console.log('Deleting news with ID:', selectedNewsId.value);
    showDeleteModal.value = false;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmPin = () => {
    console.log('Updating pinned news:', {
      id: selectedNewsId.value,
      ...pinForm.value,
      image: imagePreview.value || pinForm.value.image
    });
    showPinModal.value = false;
  };
  </script>
  
  <style scoped>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  