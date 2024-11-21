<template>
  <div class="min-h-screen bg-[#FEFAE1] p-8 font-item">
    <h1 class="text-4xl font-bold mb-8 text-right">قائمة الطلاب</h1>
    
    <div class="mb-6 flex justify-between items-center">
      <div class="flex gap-4">
        <button 
          @click="showAddModal = true"
          class="bg-[#EC8A20] text-[#FEFAE1] px-6 py-2.5 rounded-lg hover:bg-[#EC8A20]/90 transition-colors duration-200 flex items-center gap-2"
        >
          <span>إضافة طالب</span>
          <i class="fas fa-plus"></i>
        </button>
        <button 
          @click="showDeletedStudents"
          class="bg-gray-600 text-[#FEFAE1] px-6 py-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
        >
          <span>الطلاب المحذوفين</span>
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <select 
        v-model="selectedClass"
        @change="handleClassChange"
        class="bg-white border border-[#EC8A20] text-gray-900 text-sm rounded-lg focus:ring-[#EC8A20] focus:border-[#EC8A20] block p-2.5 text-right"
        dir="rtl"
      >
        <option value="">جميع الصفوف والشعب</option>
        <option v-for="cls in uniqueClasses" :key="cls" :value="cls">
          {{ cls }}
        </option>
      </select>
    </div>

    <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-right" dir="rtl">
          <thead class="text-sm text-[#FEFAE1] uppercase bg-[#EC8A20]">
            <tr>
              <th scope="col" class="px-6 py-4">صورة الطالب</th>
              <th scope="col" class="px-6 py-4">اسم الطالب</th>
              <th scope="col" class="px-6 py-4">الصف</th>
              <th scope="col" class="px-6 py-4">الغيابات</th>
              <th scope="col" class="px-6 py-4">الطالب المتفوق</th>
              <th scope="col" class="px-6 py-4">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" 
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
              <td class="px-6 py-4">{{ student.absents }}</td>
              <td class="px-6 py-4">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    v-model="student.isNerd" 
                    class="sr-only peer"
                    @change="() => editStudent(student)"
                  >
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                    peer-focus:ring-[#EC8A20]/30 rounded-full peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                    after:start-[2px] after:bg-white after:border-gray-300 after:border 
                    after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                    peer-checked:bg-[#EC8A20]"></div>
                </label>
              </td>
              <td class="px-6 py-4">
                <div class="flex gap-4 items-center justify-end">
                  <button 
                    @click="deleteStudent(student.id)" 
                    class="text-red-600 hover:text-red-900 transition-colors duration-200 font-bold"
                  >
                    حذف
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <DeleteModal
      :show="showDeleteModal"
      title="حذف الطالب"
      message="هل أنت متأكد من حذف هذا الطالب؟ لا يمكن التراجع عن هذا الإجراء."
      @confirm="handleDeleteConfirm"
      @cancel="handleDeleteCancel"
    />
    
    <AddStudentModal
      :show="showAddModal"
      @close="showAddModal = false"
      @student-added="fetchStudents"
    />
    
    <DeletedStudentsModal
      :show="showDeletedModal"
      @close="showDeletedModal = false"
      @student-restored="fetchStudents"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import DeleteModal from '../../components/deleteModal.vue'
import AddStudentModal from '../../components/AddStudentModal.vue'
import DeletedStudentsModal from '../../components/DeletedStudentsModal.vue'

const BASE_API = 'https://mohammed-bin-alhanafia.com/api'
const students = ref([])
const showDeleteModal = ref(false)
const studentToDelete = ref(null)
const showAddModal = ref(false)
const showDeletedModal = ref(false)

const uniqueClasses = computed(() => {
  return [...new Set(allStudents.value.map(student => student.classBranch))]
})

const fetchStudents = async () => {
  try {
    const response = await axios.get(`${BASE_API}/Student/AllStudents`)
    students.value = response.data
  } catch (error) {
    console.error('Error fetching students:', error)
  }
}

const editStudent = async (student) => {
  try {
    await axios.put(`${BASE_API}/Student/${student.id}`, {
    await axios.put(`${BASE_API}/Student/${student.id}`, {
      id: student.id,
      name: student.name,
      classBranch: student.classBranch,
      absents: student.absents,
      isNerd: student.isNerd,
      imgpath: student.imgpath
    })
  } catch (error) {
    console.error('Error updating student:', error)
    // Revert the checkbox if the update fails
    student.isNerd = !student.isNerd
  }
}

const deleteStudent = async (id) => {
  studentToDelete.value = id
  showDeleteModal.value = true
}

const handleDeleteConfirm = async () => {
  try {
    await axios.delete(`${BASE_API}/Student/${studentToDelete.value}`)
    await fetchStudents()
  } catch (error) {
    console.error('Error deleting student:', error)
  } finally {
    showDeleteModal.value = false
    studentToDelete.value = null
  }
}

const handleDeleteCancel = () => {
  showDeleteModal.value = false
  studentToDelete.value = null
}

const handleClassChange = () => {
  if (selectedClass.value === '') {
    students.value = allStudents.value
  } else {
    students.value = allStudents.value.filter(
      student => student.classBranch === selectedClass.value
    )
  }
}

const showDeletedStudents = () => {
  showDeletedModal.value = true
}

onMounted(() => {
  fetchStudents()
})
</script>