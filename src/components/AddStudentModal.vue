<template>
  <div v-if="show" class="relative z-10">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/25 transition-opacity" @click="closeModal" />

    <!-- Modal -->
    <div class="fixed inset-0 overflow-y-auto">
      <div class="flex min-h-full items-center justify-center p-4">
        <div 
          class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-right shadow-xl transition-all"
        >
          <h2 class="text-lg font-medium leading-6 text-gray-900 mb-4">
            إضافة طالب جديد
          </h2>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">اسم الطالب</label>
              <input
                type="text"
                v-model="formData.name"
                class="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#EC8A20] focus:ring-[#EC8A20]"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">الصف والشعبة</label>
              <input
                type="text"
                v-model="formData.classBranch"
                class="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#EC8A20] focus:ring-[#EC8A20]"
                required
              />
            </div>

            <div class="mt-6 flex justify-end gap-3">
              <button
                type="button"
                @click="closeModal"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                إلغاء
              </button>
              <button
                type="submit"
                class="px-4 py-2 text-sm font-medium text-white bg-[#EC8A20] rounded-lg hover:bg-[#EC8A20]/90"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'جاري الإضافة...' : 'إضافة الطالب' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close', 'student-added'])

const formData = ref({
  name: '',
  classBranch: '',
  absents: 0,
  isNerd: false
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    await axios.post('https://mohammed-bin-alhanafia.com/api/Student', {
      name: formData.value.name,
      classBranch: formData.value.classBranch,
      isNerd: formData.value.isNerd,
      absents: formData.value.absents
    })
    emit('student-added')
    closeModal()
  } catch (error) {
    console.error('Error adding student:', error)
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  formData.value = {
    name: '',
    classBranch: '',
    absents: 0,
    isNerd: false
  }
  emit('close')
}
</script>
