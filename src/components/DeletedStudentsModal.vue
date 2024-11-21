<template>
  <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen p-4">
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="$emit('close')"></div>

      <!-- Modal panel -->
      <div class="relative bg-white rounded-3xl shadow-xl w-full max-w-3xl transform transition-all" dir="rtl">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-2xl font-bold text-gray-900">الطلاب المحذوفين</h3>
        </div>

        <div class="p-6">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-right">
              <thead class="text-sm text-[#FEFAE1] uppercase bg-[#EC8A20]">
                <tr>
                  <th scope="col" class="px-6 py-4">صورة الطالب</th>
                  <th scope="col" class="px-6 py-4">اسم الطالب</th>
                  <th scope="col" class="px-6 py-4">الصف</th>
                  <th scope="col" class="px-6 py-4">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in deletedStudents" 
                    :key="student.id" 
                    class="bg-white border-b hover:bg-[#FEFAE1]/50 transition-colors duration-200">
                  <td class="px-6 py-4">
                    <img 
                      :src="student.imgpath" 
                      alt="صورة الطالب" 
                      class="w-12 h-12 rounded-full object-cover border-2 border-[#EC8A20]"
                    />
                  </td>
                  <td class="px-6 py-4 font-medium">{{ student.name }}</td>
                  <td class="px-6 py-4">{{ student.classBranch }}</td>
                  <td class="px-6 py-4">
                    <button 
                      @click="restoreStudent(student.id)"
                      class="text-[#EC8A20] hover:text-[#EC8A20]/80 transition-colors duration-200 font-bold"
                    >
                      استعادة
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200 flex justify-end">
          <button 
            @click="$emit('close')"
            class="bg-gray-500 text-white px-6 py-2.5 rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close', 'student-restored'])

const deletedStudents = ref([])
const BASE_API = 'https://mohammed-bin-alhanafia.com/api'

const fetchDeletedStudents = async () => {
  try {
    const response = await axios.get(`${BASE_API}/Student/DeletedStudents`)
    deletedStudents.value = response.data
  } catch (error) {
    console.error('Error fetching deleted students:', error)
  }
}

const restoreStudent = async (id) => {
  try {
    await axios.post(`${BASE_API}/Student/Restore/${id}`)
    await fetchDeletedStudents()
    emit('student-restored')
  } catch (error) {
    console.error('Error restoring student:', error)
  }
}

watch(() => props.show, (newValue) => {
  if (newValue) {
    fetchDeletedStudents()
  }
})

onMounted(() => {
  if (props.show) {
    fetchDeletedStudents()
  }
})
</script>
