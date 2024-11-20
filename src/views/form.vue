<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <h2 class="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h2>

      <div v-if="error" class="mb-4 rounded bg-red-100 p-3 text-red-700 dark:bg-red-900 dark:text-red-200">
        {{ error }}
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
          <input
            v-model="formData.username"
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
          <input
            v-model="formData.password"
            type="password"
            class="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Role</label>
          <select
            v-model="formData.role"
            class="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="">Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
        </div>

        <button
          type="submit"
          class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const error = ref("");
const formData = ref({
  username: "",
  password: "",
  role: "",
});

const handleSubmit = async () => {
  try {
    error.value = "";
    const response = await axios.post("/api/dash/signup", formData.value);

    if (response.data) {
      console.log(response.data);
      alert("Signup successful");
    }
  } catch (err) {
    error.value =
      err.response?.data?.message || "An error occurred during signup";
    console.error("Error:", err);
  }
};
</script>
