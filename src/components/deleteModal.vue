<template>
  <div
    v-if="show"
    dir="rtl"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
  >
    <div class="w-[90%] max-w-md rounded-lg bg-light p-6 shadow-xl">
      <h3 class="mb-4 text-xl font-bold text-gray-900">{{ title }}</h3>
      <p class="mb-6 text-gray-600">
        {{ message }}
      </p>
      <div class="flex w-full justify-end gap-3">
        <button
          @click="$emit('cancel')"
          class="w-1/2 rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300"
        >
          إلغاء
        </button>
        <button
          @click="$emit('confirm')"
          class="w-1/2 rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          حذف
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  show: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'تأكيد الحذف'
  },
  message: {
    type: String,
    default: 'هل أنت متأكد من الحذف؟ لا يمكن التراجع عن هذا الإجراء.'
  }
});

defineEmits(['confirm', 'cancel']);
</script>
