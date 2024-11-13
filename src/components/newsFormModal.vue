<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      @click="$emit('close')"
    ></div>

    <!-- Modal -->
    <div class="flex items-center justify-center p-4">
      <div class="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
        <!-- Close Button -->
        <button 
          @click="$emit('close')" 
          class="absolute top-4 right-4 rounded-full bg-[#EC8A20] p-2 text-white hover:bg-[#EC8A20]/80"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 class="text-2xl font-bold text-center mb-8">تعديل المقال</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Image Upload -->
          <div class="flex items-center gap-4">
            <button 
              type="button"
              class="bg-[#EC8A20] text-white px-6 py-2 rounded-full hover:bg-[#EC8A20]/80"
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

          <!-- Title Input -->
          <div class="flex flex-row-reverse items-center gap-4">
            <label class="text-lg">العنوان</label>
            <input
              v-model="form.title"
              type="text"
              class="flex-1 rounded-full border border-[#EC8A20] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EC8A20]"
              required
            />
          </div>

          <!-- Description Input -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <label class="text-lg">الوصف</label>
            </div>
            <textarea 
              v-model="form.description"
              class="w-full rounded-lg border border-[#EC8A20] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EC8A20] h-32"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center mt-8">
            <button
              type="submit"
              class="bg-[#EC8A20] text-white px-12 py-2 rounded-full hover:bg-[#EC8A20]/80 text-lg"
            >
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean,
  initialData: {
    type: Object,
    default: () => ({
      id: null,
      title: '',
      description: '',
      image: ''
    })
  }
});

const emit = defineEmits(['close', 'submit']);

const form = ref({ ...props.initialData });
const imagePreview = ref(null);
const fileInput = ref(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit = () => {
  emit('submit', {
    id: props.initialData.id,
    ...form.value,
    image: imagePreview.value || form.value.image
  });
};

const triggerFileInput = () => {
  fileInput.value.click();
};
</script>
