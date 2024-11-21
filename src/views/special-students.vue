<template>
  <div class="container h-screen bg-light overflow-hidden">
    <div>
      <img
        src="/src/assets/paper-plane.png"
        alt="teachers"
        class="absolute left-0 mb-12 w-[90%]"
      />
    </div>
    <div class="flex flex-col items-center sm:w-full justify-center pt-6">
      <img src="/src/assets/education.png" alt="" class="w-[50%] sm:w-[70%]" />
      <div class="w-1/2 sm:w-[87%]">
        <p class="mt-5 text-center text-3xl sm:text-sm font-bold leading-relaxed">
          نبارك للطلاب الأوائل على مثابرتهم واجتهادهم، ونتمنى لهم المزيد من
          النجاح في المستقبل. إن إنجازاتهم الأكاديمية تجعلنا فخورين ونتطلع إلى
          رؤية إنجازاتهم المستقبلية
        </p>
      </div>
    </div>
    <div v-if="loading" class="flex justify-center items-center mt-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F0D4A9]"></div>
    </div>
    
    <div v-else-if="error" class="text-center mt-20 text-red-600">
      {{ error }}
    </div>
    
    <div v-else>
      <p class="mt-5 text-center text-3xl sm:text-xl font-bold">طلابنا المتميزون</p>
      <div
        class="relative mt-20 grid grid-cols-1 place-items-center
         gap-8 p-8 sm:p-0 sm:gap-10 md:grid-cols-2 lg:grid-cols-2"
      >
        <div
          v-for="(student, index) in sortedStudents"
          :key="student.id"
          class="relative h-[40rem] w-[80%] sm:w-[99%] sm:h-[39rem] bg-[#F0D4A9]"
          :class="{
            'rounded-br-3xl rounded-tl-[168px] sm:rounded-br-3xl sm:rounded-tl-3xl': index % 2 === 0,
            'rounded-br-[168px] rounded-tl-3xl sm:rounded-br-3xl sm:rounded-tl-3xl': index % 2 !== 0,
          }"
        >
          <div class="mx-auto mt-[10%] w-1/2 rounded-3xl bg-secondary">
            <p class="py-2 text-center text-3xl sm:text-lg sm:px-2 font-bold text-light">
              {{ student.grade }}
            </p>
          </div>
          <div
            class="mx-auto grid h-full w-full
             -translate-y-12 grid-cols-2 place-items-center gap-4 p-4 sm:p-0 sm:gap-0"
          >
            <div class="relative flex w-full justify-center">
              <img
                :src="student.image"
                :alt="student.name"
                class="h-[22rem] w-[90%] -translate-y-16 rounded-t-full object-cover shadow-lg"
              />
              <div
                class="absolute bottom-[2rem] left-1/2 w-[90%] -translate-x-1/2 rounded-t-3xl bg-secondary p-4"
              >
                <p class="text-center text-xl sm:text-lg font-bold text-light">
                  {{ student.fullname }}
                </p>
                <p class="text-center text-base sm:text-sm font-bold text-light">
                  {{ student.name }}
                </p>
              </div>
            </div>
            <div class="relative flex w-full justify-center">
              <img
                :src="student.image"
                :alt="student.name"
                class="h-[22rem] w-[90%] -translate-y-16 rounded-t-full object-cover shadow-lg"
              />
              <div
                class="absolute bottom-[2rem] left-1/2 w-[90%] -translate-x-1/2 rounded-t-3xl bg-secondary p-4"
              >
              <p class="text-center text-xl font-bold text-light">
                  {{ student.fullname }}
                </p>
                <p class="text-center text-base font-bold text-light">
                  {{ student.name }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="absolute"
            :class="{
              '-left-10 bottom-[-2rem]': index % 2 === 0,
              '-right-10 top-[-2rem]': index % 2 !== 0,
            }"
          >
            <img src="/src/assets/Star.png" alt="star" class="w-20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const BASE_API = 'https://mohammed-bin-alhanafia.com/api'
const IMAGE_BASE_URL = 'https://mohammed-bin-alhanafia.com/images'

const students = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_API}/Student/GetNerds`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    students.value = response.data.map(student => ({
      id: student.studentId,
      name: student.name,
      fullname: student.fullName,
      grade: student.grade,
      image: student.image 
        ? `${IMAGE_BASE_URL}/${student.image}`
        : new URL('../assets/student.jpg', import.meta.url).href,
      average: student.average
    }));
  } catch (err) {
    error.value = 'عذراً، حدث خطأ أثناء تحميل بيانات الطلاب المتميزين';
    console.error('Error fetching special students:', err);
  } finally {
    loading.value = false;
  }
});

const sortedStudents = computed(() => {
  return [...students.value].sort((a, b) => b.average - a.average);
});
</script>
