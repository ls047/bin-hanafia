<template>
  <div class="container min-h-screen bg-light">
    <div class="container mx-auto px-0 py-[8rem] sm:py-[10rem]">
      <button 
        @click="openAddModal"
        class="rounded-md bg-secondary px-4 py-2 text-light"
      >
        إضافة مدرسين
      </button>
      <div class="mt-20 pb-44 relative grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3 gap-y-36 place-items-center">
        <div
          v-for="(teacher, index) in sortedTeachers"
          :key="teacher.id"
          class="group relative flex h-[30rem] w-[70%] flex-col items-center overflow-hidden !rounded-b-none bg-[#DEA15F] pt-6 transition-all duration-300 hover:shadow-lg"
          :class="[
            {
              'rounded-r-[168px] sm:rounded-md': index < 3 && index % 3 === 1,
              'rounded-t-[168px] pt-6': index < 3 && index % 3 === 0,
              'rounded-l-[168px] sm:rounded-md pr-6': index < 3 && index % 3 === 2,
              'rounded-t-[168px] sm:rounded-md pt-6': index >= 3,
            },
            teacher.rank === 'مدير' ? 'lg:col-start-2 lg:row-start-1 rounded-t-[168px] lg:-translate-y-12' : '',
            teacher.rank === 'معاون' && index === 1 ? 'lg:col-start-1 lg:row-start-1 lg:translate-y-20 sm:translate-x-0 lg:translate-x-24' : '',
            teacher.rank === 'معاون' && index === 2 ? 'lg:col-start-3 lg:row-start-1 lg:translate-y-20 sm:translate-x-0 lg:-translate-x-24' : '',
          ]"
        >
          <div class="h-full w-full">
            <div class="absolute right-2 top-2 z-10 flex gap-2">
              <button 
                @click.prevent="handleEdit(teacher.id)"
                class="rounded-full bg-secondary p-2 text-white hover:bg-secondary/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                @click.prevent="handleDelete(teacher.id)"
                class="rounded-full bg-red-500 p-2 text-white hover:bg-red-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <img
              :src="teacher.image"
              :alt="teacher.name"
              class="h-full w-full !rounded-b-none object-cover"
              :class="{
                'rounded-r-[168px]': index < 3 && index % 3 === 0,
                'rounded-t-[168px]': index < 3 && index % 3 === 1,
                'rounded-l-[168px]': index < 3 && index % 3 === 2,
              }"
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
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import TeacherFormModal from '../../components/TeacherFormModal.vue';

const teachers = ref([]);
const loading = ref(true);
const error = ref(null);
const isModalOpen = ref(false)
const isEditing = ref(false)
const selectedTeacher = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://mohammed-bin-alhanafia.com/api/Teacher/AllTeachers",
      {
        headers: {
          Accept: "application/json",
        },
      },
    );
    teachers.value = response.data.map((teacher) => ({
      id: teacher.id,
      name: teacher.name,
      specialty: teacher.specialty,
      expeiance: teacher.expeiance,
      sucsessRate: teacher.sucsessRate,
      rank: teacher.rank,
      imgpath: teacher.imgpath,
      image: `images/${teacher.imgpath}` || "/src/assets/download.png",
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
  const teacher = teachers.value.find(t => t.id === teacherId)
  if (teacher) {
    selectedTeacher.value = {
      id: teacher.id,
      name: teacher.name,
      specialty: teacher.specialty,
      expeiance: teacher.expeiance,
      sucsessRate: teacher.sucsessRate,
      rank: teacher.rank,
      imgpath: teacher.imgpath
    }
    isEditing.value = true
    isModalOpen.value = true
  }
}

const handleDelete = async (teacherId) => {
  if (confirm('هل أنت متأكد من حذف هذا المدرس؟')) {
    try {
      await axios.delete(`https://mohammed-bin-alhanafia.com/api/Teacher/DeleteTeacher/${teacherId}`);
      teachers.value = teachers.value.filter(t => t.id !== teacherId);
    } catch (err) {
      console.error('Error deleting teacher:', err);
      // Add error handling as needed
    }
  }
};

const openAddModal = () => {
  isEditing.value = false
  selectedTeacher.value = null
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedTeacher.value = null
}

const handleSubmit = async (formData) => {
  try {
    if (isEditing.value) {
      const response = await axios.put(
        `https://mohammed-bin-alhanafia.com/api/Teacher`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      // Update the local teachers array with all fields
      const index = teachers.value.findIndex(t => t.id === selectedTeacher.value.id)
      if (index !== -1) {
        teachers.value[index] = {
          id: response.data.id,
          name: response.data.name,
          specialty: response.data.specialty,
          expeiance: response.data.expeiance,
          sucsessRate: response.data.sucsessRate,
          rank: response.data.rank,
          imgpath: response.data.imgpath,
          image: `https://mohammed-bin-alhanafia.com/images/${response.data.imgpath}` || "/src/assets/download.png",
        }
      }
    } else {
      const response = await axios.post(
        'https://mohammed-bin-alhanafia.com/api/Teacher',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      // Add new teacher with all fields
      teachers.value.push({
        id: response.data.id,
        name: response.data.name,
        specialty: response.data.specialty,
        expeiance: response.data.expeiance,
        sucsessRate: response.data.sucsessRate,
        rank: response.data.rank,
        imgpath: response.data.imgpath,
        image: `https://mohammed-bin-alhanafia.com/images/${response.data.imgpath}` || "/src/assets/download.png",
      })
    }
    closeModal()
  } catch (error) {
    console.error('Error submitting teacher:', error)
    alert('حدث خطأ أثناء حفظ البيانات')
  }
}
</script>
