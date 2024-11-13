<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      @click="$emit('close')"
    ></div>

    <!-- Modal -->
    <div class="flex items-center justify-center p-4">
      <div class="relative w-full max-w-md transform rounded-3xl bg-white p-6 shadow-xl transition-all">
        <!-- Close Button -->
        <button 
          @click="$emit('close')" 
          class="absolute -top-3 -right-3 rounded-full bg-orange-accent p-2 text-white hover:bg-secondary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 class="text-2xl font-bold text-center mb-8">
          {{ isEditing ? 'تعديل المقال' : 'اضافة مقال' }}
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-6 flex flex-col justify-end">
          <!-- Image Upload -->
          <div class="flex items-center justify-end gap-4">
            <button 
              type="button"
              class="bg-orange-accent text-white px-6 py-2 rounded-full hover:bg-secondary"
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

          <!-- Title Input -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">العنوان</label>
            <input dir="rtl"
              v-model="formData.title"
              type="text"
              class="flex-1 rounded-full border border-orange-accent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-accent"
              required
            />
          </div>

          <!-- Description Input -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <label class="text-lg">المحتوى</label>
            </div>
            <textarea dir="rtl"
              v-model="formData.description"
              class="w-full rounded-lg border border-orange-accent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-accent h-32"
              required
            ></textarea>
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
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  show: Boolean,
  isEditing: {
    type: Boolean,
    default: false
  },
  initialData: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['close', 'submit']);
const fileInput = ref(null);

const formData = ref({
  title: '',
  description: '',
  image: null,
  imgpath: ''
});

watch(() => props.initialData, (newData) => {
  if (newData && Object.keys(newData).length > 0) {
    formData.value = {
      title: newData.title || '',
      description: newData.description || '',
      image: null,
      imgpath: newData.imgpath || ''
    };
  } else {
    formData.value = {
      title: '',
      description: '',
      image: null,
      imgpath: ''
    };
  }
}, { immediate: true, deep: true });

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.value.image = file;
  }
};

const handleSubmit = () => {
  const submissionData = {
    title: formData.value.title,
    description: formData.value.description,
    image: formData.value.image
  };

  if (props.isEditing) {
    submissionData.id = props.initialData.id;
  }
  
  emit('submit', submissionData);
};

const triggerFileInput = () => {
  fileInput.value.click();
};
</script>
