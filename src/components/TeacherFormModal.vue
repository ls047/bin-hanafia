<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      @click="closeModal"
    ></div>

    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div 
        class="relative w-full max-w-md transform rounded-3xl bg-white p-6 shadow-xl transition-all"
      >
        <!-- Close Button -->
        <button 
          @click="closeModal" 
          class="absolute -top-3 -right-3 rounded-full bg-orange-accent p-2 text-white hover:bg-secondary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 class="text-2xl font-bold text-center mb-8">معلومات التدريسي</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6 flex flex-col justify-end">
          <!-- Image Upload -->
          <div class="flex items-center justify-end gap-4">
            <button 
              type="button"
              class="bg-orange-accent text-white px-6 py-2 rounded-full hover:hover:bg-secondary"
              @click="triggerFileInput"
            >
              Upload
            </button>
            <span class="text-lg">اضافة صورة</span>
            <input
              ref="fileInput"
              type="file"
              @change="handleImageChange"
              accept="image/*"
              class="hidden"
            />
          </div>

          <!-- Name Input -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">أسم المدرس</label>
            <input dir="rtl"
              type="text"
              v-model="formData.name"
              class="flex-1 rounded-full border border-orange-accent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-accent"
              required
            />
          </div>

          <!-- Specialty Input -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">التخصص</label>
            <input dir="rtl"
              type="text"
              v-model="formData.specialty"
              class="flex-1 rounded-full border border-orange-accent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-accent"
              required
            />
          </div>

          <!-- Experience Input -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">
              الخبرة
            </label>
            <input dir="rtl"
              type="number"
              v-model="formData.expeiance"
              placeholder="عدد سنوات الخبرة"
              class="flex-1 rounded-full border border-orange-accent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-accent"
              required
            />
          </div>

          <!-- Success Rate -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <label class="text-lg">نسبة النجاح</label>
            </div>
            <div class="flex items-center gap-8">
              <!-- Slider Container -->
              <div class="relative h-4 bg-[#E6E6E6] rounded-full flex-1">
                <!-- Progress bar -->
                <div 
                  class="absolute left-0 top-0 h-full bg-orange-accent/65 rounded-full transition-all"
                  :style="{ width: `${formData.sucsessRate}%` }"
                ></div>
                <!-- Thumb -->
                <div 
                  class="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-orange-accent transition-all"
                  :style="{ left: `calc(${formData.sucsessRate}% - 0.75rem)` }"
                ></div>
                <!-- Range Input -->
                <input
                  type="range"
                  v-model="formData.sucsessRate"
                  min="0"
                  max="100"
                  class="absolute top-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <!-- Percentage outside the slider -->
              <span class="text-xl font-bold text-black min-w-[4rem]">
                {{ formData.sucsessRate }}%
              </span>
            </div>
          </div>

          <!-- Add Rank Input if needed -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">الدرجة الوظيفية</label>
            <input dir="rtl"
              type="text"
              v-model="formData.rank"
              class="flex-1 rounded-full border border-orange-accent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-accent"
              required
            />
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center mt-8">
            <button
              type="submit"
              class="bg-orange-accent text-white px-12 py-2 rounded-full hover:bg-orange-accent/80 text-lg"
            >
              {{ isEditing ? 'حفظ' : 'اضافة' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  isEditing: Boolean,
  teacherData: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['close', 'submit'])
const fileInput = ref(null)

const formData = ref({
  name: '',
  specialty: '',
  image: null,
  expeiance: '',
  sucsessRate: 0,
  rank: '',
  imgpath: ''
})

watch(() => props.teacherData, (newData) => {
  console.log('Received teacher data:', newData)
  
  if (newData && Object.keys(newData).length > 0) {
    console.log('newData:', newData)
    formData.value = {
      name: newData.name || '',
      specialty: newData.specialty || '',
      image: null,
      expeiance: newData?.expeiance || 0,
      sucsessRate: newData.sucsessRate || 0,
      rank: newData.rank || '',
      imgpath: newData.imgpath || ''
    }
  } else {
    formData.value = {
      name: '',
      specialty: '',
      image: null,
      expeiance: '',
      sucsessRate: 0,
      rank: '',
      imgpath: ''
    }
  }
}, { immediate: true, deep: true })

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    formData.value.image = file
    formData.value.imagePreview = URL.createObjectURL(file)
  }
}

const handleSubmit = () => {
  const formDataToSubmit = new FormData()
  
  if (props.isEditing) {
    formDataToSubmit.append('id', props.teacherData.id)
  }
  
  formDataToSubmit.append('name', formData.value.name)
  formDataToSubmit.append('specialty', formData.value.specialty)
  formDataToSubmit.append('expeiance', formData.value.expeiance)
  formDataToSubmit.append('sucsessRate', formData.value.sucsessRate)
  formDataToSubmit.append('rank', formData.value.rank)
  
  if (formData.value.image) {
    formDataToSubmit.append('Img', formData.value.image)
  }
  
  emit('submit', formDataToSubmit)
}

const closeModal = () => {
  emit('close')
}
</script> 