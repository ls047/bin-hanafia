<template>
  <div class="container min-h-screen bg-light">
    <div class="container mx-auto px-0">
      <div class="flex justify-center">
        <button
          @click="openAddModal"
          class="rounded-3xl bg-secondary px-4 py-2 text-2xl text-light"
        >
          إضافة تدريسي
        </button>
      </div>
      <div
        class="relative mt-20 grid grid-cols-1 place-items-center gap-8 gap-y-36 p-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="teacher in sortedTeachers"
          :key="teacher.id"
          class="group relative flex h-[30rem] w-[70%] flex-col items-center overflow-visible !rounded-b-none bg-[#DEA15F] pt-6 transition-all duration-300 hover:shadow-lg"
        >
          <div class="h-full w-full overflow-hidden">
            <div
              class="absolute z-10 flex -translate-x-6 -translate-y-8 transform flex-col gap-2"
            >
              <button @click.prevent="handleEdit(teacher.id)">
                <img src="/src/assets/pin_dash.svg" alt="Edit" class="w-12" />
              </button>
              <button @click.prevent="handleDelete(teacher.id)">
                <img src="/src/assets/X_dash.svg" alt="Delete" class="w-12" />
              </button>
            </div>
            <img
              :src="teacher.image"
              :alt="teacher.name"
              class="h-full w-full !rounded-b-none object-cover"
            />
            <div
              class="absolute bottom-0 h-1/4 w-full bg-[#CE8849] text-center text-white"
            >
              <div class="mt-8 flex flex-col items-center justify-center">
                <h3 class="text-xl font-bold">{{ teacher.name }}</h3>
                <p class="mt-1 text-base">{{ teacher.specialty }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TeacherFormModal
      :is-open="isModalOpen"
      :is-editing="isEditing"
      :teacher-data="selectedTeacher"
      @close="closeModal"
      @submit="handleSubmit"
    />

    <div
      v-if="showDeleteModal"
      dir="rtl"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div class="w-[90%] max-w-md rounded-lg bg-light p-6 shadow-xl">
        <h3 class="mb-4 text-xl font-bold text-gray-900">تأكيد الحذف</h3>
        <p class="mb-6 text-gray-600">
          هل أنت متأكد من حذف هذا المدرس؟ لا يمكن التراجع عن هذا الإجراء.
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
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import TeacherFormModal from "../../components/TeacherFormModal.vue";

const BASE_API = 'https://mohammed-bin-alhanafia.com/api'
const IMAGE_BASE_URL = 'https://mohammed-bin-alhanafia.com/images'

const teachers = ref([]);
const loading = ref(true);
const error = ref(null);
const isModalOpen = ref(false);
const isEditing = ref(false);
const selectedTeacher = ref(null);
const showDeleteModal = ref(false);
const teacherToDelete = ref(null);
const Img = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_API}/Teacher/AllTeachers`);
    teachers.value = response.data.map((teacher) => ({
      ...teacher,
      image: teacher.imgpath
        ? `${IMAGE_BASE_URL}/${teacher.imgpath}`
        : new URL('../../assets/download.png', import.meta.url).href,
    }));
  } catch (err) {
    error.value = "عذراً، حدث خطأ أثناء تحميل بيانات المعلمين";
    console.error("Error fetching teachers:", err);
  } finally {
    loading.value = false;
  }
});

// Sort teachers by role
const sortedTeachers = computed(() => {
  const director = teachers.value.find((t) => t.rank === "مدير");
  const assistants = teachers.value.filter((t) => t.rank === "معاون");
  const regularTeachers = teachers.value.filter((t) => t.rank === "معلم");

  return [director, ...assistants, ...regularTeachers].filter(Boolean);
});

const handleEdit = (teacherId) => {
  const teacher = teachers.value.find((t) => t.id === teacherId);
  if (teacher) {
    selectedTeacher.value = {
      id: teacher.id,
      name: teacher.name,
      specialty: teacher.specialty,
      expeiance: teacher.expeiance,
      sucsessRate: teacher.sucsessRate,
      rank: teacher.rank,
    };
    isEditing.value = true;
    isModalOpen.value = true;
  }
};
const handleFileUpload = (event) => {
  Img.value = event.target.files[0];
};
const handleDelete = (teacherId) => {
  teacherToDelete.value = teacherId;
  showDeleteModal.value = true;
};

const confirmDelete = async () => {
  try {
    await axios.delete(
      `${BASE_API}/Teacher`,
      {
        data: { id: teacherToDelete.value },
        headers: { 'Content-Type': 'application/json' }
      }
    );
    teachers.value = teachers.value.filter(t => t.id !== teacherToDelete.value);
    showDeleteModal.value = false;
  } catch (err) {
    console.error("Error deleting teacher:", err);
    error.value = "Failed to delete teacher: " + (err.response?.data?.message || err.message);
  }
};

const openAddModal = () => {
  isEditing.value = false;
  selectedTeacher.value = null;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedTeacher.value = null;
};

const handleSubmit = async (formData) => {
  try {
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };

    const response = await axios[isEditing.value ? 'put' : 'post'](
      `${BASE_API}/Teacher`,
      formData,
      config
    );
    
    const teacherData = {
      ...response.data,
      image: response.data.imgpath
        ? `${IMAGE_BASE_URL}/${response.data.imgpath}`
        : new URL('../../assets/download.png', import.meta.url).href,
    };
    
    if (isEditing.value) {
      const index = teachers.value.findIndex(t => t.id === selectedTeacher.value.id);
      if (index !== -1) {
        teachers.value[index] = teacherData;
      }
    } else {
      teachers.value.push(teacherData);
    }
    
    closeModal();
  } catch (error) {
    console.error("Error submitting teacher:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
    alert("حدث خطأ أثناء حفظ البيانات");
  }
};
</script>
