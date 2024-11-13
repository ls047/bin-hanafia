<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-right text-gray-500 dark:text-gray-400" dir="rtl">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">صورة الطالب</th>
            <th scope="col" class="px-6 py-3">اسم الطالب</th>
            <th scope="col" class="px-6 py-3">الصف</th>
            <th scope="col" class="px-6 py-3">الغيابات</th>
            <th scope="col" class="px-6 py-3">الطالب المتفوق</th>
            <th scope="col" class="px-6 py-3">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">
              <img :src="student.imgpath" alt="صورة الطالب" class="w-12 h-12 rounded-full object-cover"/>
            </td>
            <td class="px-6 py-4">{{ student.name }}</td>
            <td class="px-6 py-4">{{ student.classBranch }}</td>
            <td class="px-6 py-4">{{ student.absents }}</td>
            <td class="px-6 py-4">
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="student.isNerd" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </td>
            <td class="px-6 py-4 flex gap-2">
              <button @click="editStudent(student)" class="text-blue-600 hover:text-blue-900">تعديل</button>
              <button @click="deleteStudent(student.id)" class="text-red-600 hover:text-red-900">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const students = ref([])

const fetchStudents = async () => {
  try {
    const response = await axios.get('https://mohammed-bin-alhanafia.com/api/Student/AllStudents')
    students.value = response.data
  } catch (error) {
    console.error('Error fetching students:', error)
  }
}

const editStudent = async (student) => {
  try {
    await axios.put(`https://mohammed-bin-alhanafia.com/api/Student/${student.id}`, {
      id: student.id,
      name: student.name,
      classBranch: student.classBranch,
      absents: student.absents,
      isNerd: student.isNerd,
      imgpath: student.imgpath
    })
    // Refresh the students list after successful update
    await fetchStudents()
  } catch (error) {
    console.error('Error updating student:', error)
  }
}

const deleteStudent = async (id) => {
  // Implement delete functionality
  console.log('Delete student:', id)
}

onMounted(() => {
  fetchStudents()
})
</script>