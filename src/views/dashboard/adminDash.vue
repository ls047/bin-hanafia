<template>
    <div class="min-h-screen bg-[#FEFAE1] p-8 font-item">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">Dashboard</h1>
        <h2 class="text-2xl">Admins</h2>
      </div>
  
      <div class="flex gap-4 justify-center mb-14">
        <button 
          @click="showBranchModal = true"
          class="bg-[#EC8A20] text-[#FEFAE1] text-xl px-14 py-2.5 rounded-3xl
           hover:bg-[#EC8A20]/90 transition-colors duration-200"
        >
          إضافة صف
        </button>
        <button 
          @click="showAddModal = true"
          class="bg-[#EC8A20] text-[#FEFAE1] text-xl px-14 py-2.5
           rounded-3xl hover:bg-[#EC8A20]/90 transition-colors duration-200"
        >
          انشاء حساب
        </button>
      </div>
  
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-right">
            <thead class="text-sm text-[#FEFAE1] uppercase bg-[#EC8A20]">
              <tr>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">Username</th>
                <th scope="col" class="px-6 py-4">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="admin in admins" 
                  :key="admin.id" 
                  class="bg-white border-b hover:bg-[#FEFAE1]/50 transition-colors duration-200">
                <td class="px-6 py-4 font-medium">{{ admin.name }}</td>
                <td class="px-6 py-4">{{ admin.username }}</td>
                <td class="px-6 py-4">{{ admin.password }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Add Admin Modal -->
      <AddAdminModal
        :show="showAddModal"
        @close="showAddModal = false"
        @admin-added="fetchAdmins"
      />
  
      <!-- Add Branch Modal -->
      <AddBranchModal
        :show="showBranchModal"
        @close="showBranchModal = false"
        @branch-added="handleBranchAdded"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import AddAdminModal from '../../components/AddAdminModal.vue'
  import AddBranchModal from '../../components/AddBranchModal.vue'
  
  const BASE_API = 'https://mohammed-bin-alhanafia.com/api'
  const admins = ref([])
  const showAddModal = ref(false)
  const showBranchModal = ref(false)
  
  const fetchAdmins = async () => {
    try {
      const response = await axios.get(`${BASE_API}/Admin/AllAdmins`)
      admins.value = response.data
    } catch (error) {
      console.error('Error fetching admins:', error)
    }
  }
  
  onMounted(() => {
    fetchAdmins()
  })
  
  const handleBranchAdded = (newBranch) => {
    console.log('New branch added:', newBranch);
    // You can add additional handling here if needed
  };
  </script>