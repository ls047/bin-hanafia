<template>
  <div class="container h-screen bg-light">
    <div>
      <img
        src="/src/assets/paper-plane.png"
        alt="teachers"
        class="absolute left-0 mb-12 w-[90%]"
      />
    </div>
    <div class="flex flex-col items-center justify-center pt-6">
      <img src="/src/assets/education.png" alt="" class="w-[50%]" />
      <div class="w-1/2">
        <p class="mt-5 text-center text-3xl font-bold leading-relaxed">
          نبارك للطلاب الأوائل على مثابرتهم واجتهادهم، ونتمنى لهم المزيد من
          النجاح في المستقبل. إن إنجازاتهم الأكاديمية تجعلنا فخورين ونتطلع إلى
          رؤية إنجازاتهم المستقبلية
        </p>
      </div>
    </div>
    <div>
      <p class="mt-5 text-center text-3xl font-bold">طلابنا المتميزون</p>
      <div
        class="relative mt-20 grid grid-cols-1 place-items-center gap-8 p-8 md:grid-cols-2 lg:grid-cols-2"
      >
        <div
          v-for="(student, index) in sortedStudents"
          :key="student.id"
          class="relative w-[80%] h-[35rem] bg-[#F0D4A9]" :class="{
            'rounded-tl-[168px] rounded-br-3xl': index % 2 === 0,
            'rounded-br-[168px] rounded-tl-3xl': index % 2 !== 0,
            
          }"
        >
          <div class="bg-secondary w-1/2 rounded-3xl mx-auto mt-[10%]">
            <p class="text-light text-center text-3xl font-bold py-2">
              {{ student.grade }}
            </p>
          </div>
          <div class="w-full mx-auto h-full grid grid-cols-2 gap-4 p-4 place-items-center">
            <div class="relative flex justify-center w-full">
              <img :src="student.image" :alt="student.name" class="w-[90%] -translate-y-16 h-[22rem] object-cover rounded-t-full shadow-lg" />
              <div class="absolute bottom-[2rem] left-1/2 -translate-x-1/2 w-[90%] bg-secondary p-2 rounded-t-3xl">
                <p class="text-2xl font-bold text-light text-center">
                  {{ sortedStudents.indexOf(student) + 1 }}
                </p>
                <p class="text-xl font-bold text-light text-center">
                  {{ student.name }}
                </p>
                <p class="text-2xl font-bold text-light text-center">
                  {{ student.average }}%
                </p>
              </div>
            </div>
            <div class="relative flex justify-center w-full">
              <img :src="student.image" :alt="student.name" class="w-[90%] -translate-y-16 h-[22rem] object-cover rounded-t-full shadow-lg" />
              <div class="absolute bottom-[2rem] left-1/2 -translate-x-1/2 w-[90%] bg-secondary p-2 rounded-t-3xl">
                <p class="text-2xl font-bold text-light text-center">
                  {{ sortedStudents.indexOf(student) + 1 }}
                </p>
                <p class="text-xl font-bold text-light text-center">
                  {{ student.name }}
                </p>
                <p class="text-2xl font-bold text-light text-center">
                  {{ student.average }}%
                </p>
              </div>
            </div>
          </div>
          <div class="absolute" :class="{
            'bottom-[-2rem] -left-10': index % 2 === 0,
            'top-[-2rem] -right-10': index % 2 !== 0,
          }">
            <img src="/src/assets/Star.png" alt="star" class="w-20"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const students = ref([
  {
    id: 1,
    name: "طالب نموذجي",
    grade: "السادس أبتدائي - شعبة ب",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    grade: "الصف الأول",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    grade: "الصف الأول",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    grade: "الصف الأول",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    grade: "الصف الأول",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    grade: "الصف الأول",
    image: "/src/assets/student.jpg",
    average: 95,
  },
]);

const sortedStudents = computed(() => {
  return [...students.value].sort((a, b) => a.name.localeCompare(b.name));
});
</script>
