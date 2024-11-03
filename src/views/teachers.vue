<template>
  <div class="container min-h-screen bg-light">
    <div>
      <img
        src="/src/assets/paper-plane.png"
        alt="teachers"
        class="absolute left-0 mb-12 w-[90%]"
      />
    </div>
    <div
      class="relative z-10 flex flex-col items-center justify-center px-4 pt-20 text-center"
    >
      <h2 class="mb-4 mt-12 text-4xl font-bold">فريقنا التعليمي</h2>
      <p class="w-1/2 text-3xl sm:text-xs font-bold leading-relaxed">
        فريقنا من المعلمين المؤهلين يعمل بحماس واهتمام كبير لتقديم أفضل تجربة
        تعليمية. نسعى دائماً لدعم الأطفال في تطوير مهاراتهم وتنمية حب التعلم
        لديهم
      </p>
    </div>
    <div class="mt-20 relative grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3 gap-y-36 place-items-center">
      <router-link
        v-for="(teacher, index) in sortedTeachers"
        :key="teacher.id"
        :to="`/teachers-info/${teacher.id}`"
        class="group relative flex h-[30rem] w-[70%] flex-col items-center overflow-hidden !rounded-b-none bg-[#DEA15F] pt-6 cursor-pointer hover:shadow-lg transition-all duration-300"
        :class="[
          {
            'rounded-r-[168px] pl-6': index % 3 === 0,
            'rounded-t-[168px] pt-6': index % 3 === 1,
            'rounded-l-[168px] pr-6': index % 3 === 2,
          },
          teacher.role === 'مدير' ? '-mt-36' : '',
          teacher.role === 'معاون' && index % 3 === 0 ? 'translate-x-32 translate-y-12' : '',
          teacher.role === 'معاون' && index % 3 === 2 ? '-translate-x-32 translate-y-12' : '',
        ]"
      >
        <div class="h-full w-full">
          <img
            :src="teacher.image"
            :alt="teacher.name"
            class="h-full w-full !rounded-b-none object-cover"
            :class="{
              'rounded-r-[168px]': index % 3 === 0,
              'rounded-t-[168px]': index % 3 === 1,
              'rounded-l-[168px]': index % 3 === 2
            }"
          />
          <div class="absolute bottom-0 h-1/4 w-full bg-[#CE8849] text-center text-white">
            <div class="flex flex-col items-center justify-center mt-8">
              <h3 class="text-xl font-bold">{{ teacher.name }}</h3>
              <p class="mt-1 text-base">{{ teacher.subject }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const teachers = [
  {
    id: 1,
    name: "محمد الشريف",
    subject: "المدير",
    role: "مدير",
    image: "/src/assets/download.png",
  },
  {
    id: 2,
    name: "أحمد محمود",
    subject: "معاون المدير",
    role: "معاون",
    image: "/src/assets/download.png",
  },
  {
    id: 3,
    name: "سارة خالد",
    subject: "معاون المدير",
    role: "معاون",
    image: "/src/assets/download.png",
  },
  {
    id: 4,
    name: "فاطمة أحمد",
    subject: "الرياضيات",
    role: "معلم",
    image: "/src/assets/download.png",
  },
  {
    id: 5,
    name: "سارة خالد",
    subject: "العلوم",
    role: "معلم",
    image: "/src/assets/download.png",
  },
  {
    id: 6,
    name: "سارة خالد",
    subject: "العلوم",
    role: "معلم",
    image: "/src/assets/download.png",
  },
];

// Sort teachers by role
const sortedTeachers = computed(() => {
  const director = teachers.find(t => t.role === "مدير");
  const assistants = teachers.filter(t => t.role === "معاون");
  const regularTeachers = teachers.filter(t => t.role === "معلم");
  
  return [
    assistants[0], // Left assistant
    director,      // Director in the middle
    assistants[1], // Right assistant
    ...regularTeachers
  ].filter(Boolean);
});
</script>
