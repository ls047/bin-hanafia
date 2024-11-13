<template>
  <div class="flex bg-light font-item">
    <!-- Content Container -->
    <div
      class="container relative z-10 mx-auto flex flex-col items-center justify-center gap-8 px-4"
    >
      <button
        @click="showAddModal = true"
        class="rounded-3xl bg-secondary px-4 py-2 text-2xl mt-6 text-light transition-all duration-300 hover:bg-secondary/80"
      >
        إضافة مقال
      </button>

      <!-- News Grid -->
      <div
        v-if="loading"
        class="flex min-h-[20rem] items-center justify-center"
      >
        <div
          class="border-orange-accent h-[3rem] w-[3rem] animate-spin rounded-full border-4 border-t-transparent"
        ></div>
      </div>

      <div v-else-if="error" class="min-h-[20rem] text-center text-red-500">
        {{ error }}
      </div>
      <!-- cards section -->
      <div
        v-else
        class="relative grid w-full grid-cols-1 place-items-center gap-8 p-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(card, index) in newsItems"
          :key="index"
          class="group relative flex h-[30rem] w-[70%] flex-col items-center overflow-visible bg-[#DEA15F] pt-6 transition-all duration-300 hover:shadow-lg"
        >
          <!-- Action buttons -->
          <div
            class="absolute left-0 z-10 flex -translate-x-4 -translate-y-8 transform flex-col gap-2"
          >
            <button @click="pinNews(card.id)">
              <img src="/src/assets/pin_dash.svg" alt="Edit" class="w-12" />
            </button>
            <button @click="deleteNews(card.id)">
              <img src="/src/assets/X_dash.svg" alt="Delete" class="w-12" />
            </button>
          </div>

          <!-- Card content -->
          <div class="h-full w-full overflow-hidden">
            <img
              :src="card.image"
              alt="News Image"
              class="h-full w-full object-cover"
            />
            <div
              class="absolute bottom-0 h-1/4 w-full bg-[#CE8849] text-center text-white"
            >
              <div class="mt-8 flex flex-col items-center justify-center">
                <h3 class="text-xl font-bold">{{ card.title }}</h3>
                <p class="mt-1 line-clamp-2 text-base">
                  {{ card.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div
    v-if="showDeleteModal"
    dir="rtl"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
  >
    <div class="w-[90%] max-w-md rounded-lg bg-light p-6 shadow-xl">
      <h3 class="mb-4 text-xl font-bold text-gray-900">تأكيد الحذف</h3>
      <p class="mb-6 text-gray-600">
        هل أنت متأكد من حذف هذا المقال؟ لا يمكن التراجع عن هذا الإجراء.
      </p>
      <div class="flex w-full justify-end gap-3">
        <button
          @click="showDeleteModal = false"
          class="w-1/2 rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300"
        >
          إلغاء
        </button>
        <button
          @click="confirmDelete"
          class="w-1/2 rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          حذف
        </button>
      </div>
    </div>
  </div>

  <NewsFormModal
    :show="showPinModal"
    :is-editing="true"
    :initial-data="newsItems.find((item) => item.id === selectedNewsId)"
    @close="showPinModal = false"
    @submit="handlePinSubmit"
  />

  <NewsFormModal
    :show="showAddModal"
    :is-editing="false"
    :initial-data="{ title: '', description: '', image: '' }"
    @close="showAddModal = false"
    @submit="handleAddSubmit"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import NewsFormModal from "../../components/newsFormModal.vue";
import axios from "axios";

const BASE_API = 'https://mohammed-bin-alhanafia.com/api';
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
  const news = newsItems.value.find((item) => item.id === id);
  showPinModal.value = true;
};

const confirmDelete = async () => {
  try {
    await axios.delete(
      `${BASE_API}/Content`,
      {
        data: { id: selectedNewsId.value },
        headers: { 'Content-Type': 'application/json' }
      }
    );
    await fetchNews();
    showDeleteModal.value = false;
  } catch (err) {
    error.value = "Failed to delete article: " + (err.response?.data?.message || err.message);
    console.error(err);
  }
};

const handlePinSubmit = async (formData) => {
  try {
    loading.value = true;
    const form = new FormData();
    form.append('Id', selectedNewsId.value);
    form.append('Title', formData.title);
    form.append('Discription', formData.description);
    if (formData.image) {
      form.append('Img', formData.image);
    }

    const response = await axios.put(
      `${BASE_API}/Content`,
      form,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );
    
    if (response.data) {
      await fetchNews();
    }
  } catch (err) {
    error.value = "Failed to update article: " + (err.response?.data?.message || err.message);
    console.error(err);
  } finally {
    showPinModal.value = false;
    loading.value = false;
  }
};

const handleAddSubmit = async (formData) => {
  try {
    loading.value = true;
    const form = new FormData();
    form.append('Title', formData.title);
    form.append('Discription', formData.description);
    if (formData.image) {
      form.append('Img', formData.image);
    }

    const response = await axios.post(
      `${BASE_API}/Content`,
      form,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );
    
    if (response.data) {
      await fetchNews();
    }
  } catch (err) {
    error.value = "Failed to add article: " + (err.response?.data?.message || err.message);
    console.error(err);
  } finally {
    showAddModal.value = false;
    loading.value = false;
  }
};

const fetchNews = async () => {
  loading.value = true;
  try {
    const { data } = await axios.get(`${BASE_API}/Content/AllContent`);
    newsItems.value = data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.discription,
      image: item.imgpath 
        ? `https://mohammed-bin-alhanafia.com/images/${item.imgpath}`
        : new URL('../../assets/Rectangle 40.png', import.meta.url).href,
      date: item.date,
      imgpath: item.imgpath
    }));
  } catch (err) {
    error.value = "Failed to load news articles";
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
