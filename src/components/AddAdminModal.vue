<template>
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="relative w-[90%] max-w-sm rounded-[30px] bg-white p-8 shadow-xl">
        <button 
          @click="$emit('close')"
          class="absolute -top-3 -right-3 text-white bg-[#CE8849] hover:bg-[#d67b15] p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 class="mb-8 text-xl font-bold text-center">Add Admin</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-14">
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <label class="block text-gray-600 w-24">Name</label>
              <input 
                v-model="formData.name"
                type="text"
                class="flex-1 px-4 py-2 rounded-full bg-[#F5F5F5] border-none focus:ring-2 focus:ring-[#CE8849]"
                required
              />
            </div>
  
            <div class="flex items-center gap-4">
              <label class="block text-gray-600 w-24">Username</label>
              <input 
                v-model="formData.username"
                type="text"
                class="flex-1 px-4 py-2 rounded-full bg-[#F5F5F5] border-none focus:ring-2 focus:ring-[#CE8849]"
                required
              />
            </div>
  
            <div class="flex items-center gap-4">
              <label class="block text-gray-600 w-24">Password</label>
              <input 
                v-model="formData.password"
                type="password"
                class="flex-1 px-4 py-2 rounded-full bg-[#F5F5F5] border-none focus:ring-2 focus:ring-[#CE8849]"
                required
              />
            </div>
          </div>
  
          <div class="flex justify-center">
            <button 
              type="submit"
              class="w-[50%] bg-[#CE8849] text-white py-2 rounded-full text-lg font-medium
               hover:bg-[#d67b15] transition-colors duration-200"
            >
              اضافة
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close', 'admin-added'])

const formData = ref({
  name: '',
  username: '',
  password: ''
})

const handleSubmit = async () => {
  try {
    await axios.post('https://mohammed-bin-alhanafia.com/api/Admin', formData.value)
    emit('admin-added')
    emit('close')
    formData.value = { name: '', username: '', password: '' }
  } catch (error) {
    console.error('Error adding admin:', error)
  }
}
</script> 