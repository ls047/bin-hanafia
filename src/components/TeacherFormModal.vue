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
        class="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all"
      >
        <!-- Close Button -->
        <button 
          @click="closeModal" 
          class="absolute top-4 right-4 rounded-full bg-[#CD8B65] p-2 text-white hover:bg-[#CD8B65]/80"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 class="text-2xl font-bold text-center mb-8">معلومات التدريسي</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Image Upload -->
          <div class="flex items-center gap-4">
            <button 
              type="button"
              class="bg-[#CD8B65] text-white px-6 py-2 rounded-full hover:bg-[#CD8B65]/80"
              @click="triggerFileInput"
            >
              Upload
            </button>
            <span class="text-lg">اضافة صوره</span>
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
            <input
              type="text"
              v-model="formData.name"
              class="flex-1 rounded-full border border-[#CD8B65] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD8B65]"
              required
            />
          </div>

          <!-- Specialty Input -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">التخصص</label>
            <input
              type="text"
              v-model="formData.specialty"
              class="flex-1 rounded-full border border-[#CD8B65] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD8B65]"
              required
            />
          </div>

          <!-- Experience Input -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">الخبرة:</label>
            <input
              type="number"
              v-model="formData.expeiance"
              placeholder="[عدد سنوات الخبرة]"
              class="flex-1 rounded-full border border-[#CD8B65] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD8B65]"
              required
            />
          </div>

          <!-- Success Rate -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <label class="text-lg">نسبة النجاح</label>
            </div>
            <div class="bg-gray-200 rounded-full h-8 relative">
              <div 
                class="h-full bg-[#CD8B65] rounded-full transition-all duration-300"
                :style="{ width: `${formData.sucsessRate}%` }"
              >
                <div class="absolute right-2 top-1/2 -translate-y-1/2 text-black">
                  {{ formData.sucsessRate }}%
                </div>
              </div>
            </div>
            <input
              type="range"
              v-model="formData.sucsessRate"
              min="0"
              max="100"
              class="w-full"
            />
          </div>

          <!-- Add Rank Input if needed -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">الدرجة الوظيفية</label>
            <input
              type="text"
              v-model="formData.rank"
              class="flex-1 rounded-full border border-[#CD8B65] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CD8B65]"
              required
            />
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center mt-8">
            <button
              type="submit"
              class="bg-[#CD8B65] text-white px-12 py-2 rounded-full hover:bg-[#CD8B65]/80 text-lg"
            >
              اضافه
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
  formData.value.image = event.target.files[0]
}

const handleSubmit = () => {
  const formDataToSubmit = new FormData()
  
  // Add ID to formData when editing
  if (props.isEditing) {
    formDataToSubmit.append('id', props.teacherData.id)
  }
  
  formDataToSubmit.append('name', formData.value.name)
  formDataToSubmit.append('specialty', formData.value.specialty)
  formDataToSubmit.append('expeiance', formData.value.expeiance)
  formDataToSubmit.append('sucsessRate', formData.value.sucsessRate)
  formDataToSubmit.append('rank', formData.value.rank)
  
  if (formData.value.image) {
    formDataToSubmit.append('image', formData.value.image)
  }
  
  emit('submit', formDataToSubmit)
}

const closeModal = () => {
  emit('close')
}
</script> 