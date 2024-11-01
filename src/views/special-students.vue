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
          class="relative h-[40rem] w-[80%] bg-[#F0D4A9]"
          :class="{
            'rounded-br-3xl rounded-tl-[168px]': index % 2 === 0,
            'rounded-br-[168px] rounded-tl-3xl': index % 2 !== 0,
          }"
        >
          <div class="mx-auto mt-[10%] w-1/2 rounded-3xl bg-secondary">
            <p class="py-2 text-center text-3xl font-bold text-light">
              {{ student.grade }}
            </p>
          </div>
          <div
            class="mx-auto grid h-full w-full -translate-y-12 grid-cols-2 place-items-center gap-4 p-4"
          >
            <div class="relative flex w-full  justify-center">
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
                <p class="text-center text-basefont-bold text-light">
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
import { ref, computed } from "vue";

const students = ref([
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "محمد عبد الله",
    grade: "السادس أبتدائي - شعبة ب",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
  {
    id: 1,
    name: "طالب نموذجي",
    fullname: "زينب عبد الله",
    grade: "السادس أبتدائي - شعبة أ",
    image: "/src/assets/student.jpg",
    average: 95,
  },
]);

const sortedStudents = computed(() => {
  return [...students.value].sort((a, b) => a.name.localeCompare(b.name));
});
</script>
