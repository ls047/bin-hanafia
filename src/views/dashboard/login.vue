<template>
  <div class="min-h-screen bg-[#FEFAE1] flex items-center justify-center relative overflow-hidden">
    <div class="symbols-container absolute inset-0 z-10">
      <span v-for="n in 20" :key="n" class="symbol" :style="`--delay: ${n * 0.5}s`">
        {{ ['+', '-', '*', '%', '÷', '=','<', '>'][Math.floor(Math.random() * 11)] }}
      </span>
    </div>
    
    <div class="bg-[#DEA15FB2] rounded-3xl p-8 w-[20rem] shadow-lg relative z-20">
      <h2 class="text-center text-2xl font-bold mb-6">Login</h2>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">Username</label>
          <input 
            type="text"
            v-model="username"
            class="w-full px-3 py-2 rounded-2xl bg-[#FEFAE1] border-none focus:ring-2 focus:ring-[#EC8A20]"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Password</label>
          <input 
            type="password"
            v-model="password"
            class="w-full px-3 py-2 rounded-2xl bg-[#FEFAE1] border-none focus:ring-2 focus:ring-[#EC8A20]"
            required
          />
        </div>

        <button 
          type="submit"
          class="w-full bg-[#C98142] text-white py-2 rounded-2xl hover:bg-[#b77339] transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = async () => {
  // Add your login logic here
  // For example:
  if (username.value === 'admin' && password.value === 'password') {
    router.push('/dashboard');
  } else {
    alert('Invalid credentials');
  }
};
</script>

<style scoped>
.symbols-container {
  pointer-events: none;
}

.symbol {
  position: absolute;
  font-size: 3rem;
  color: rgba(201, 129, 66, 0.4);
  animation: float 15s linear infinite;
  animation-delay: calc(var(--delay) - 15s);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.symbol:nth-child(odd) {
  animation-duration: 20s;
  animation-delay: calc(var(--delay) - 7s);
}

@keyframes float {
  0% {
    transform: translate(0, -10vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 110vh) rotate(360deg);
    opacity: 0;
  }
}

/* Replace random positioning with fixed columns */
.symbol:nth-child(5n) { left: 10%; }
.symbol:nth-child(5n+1) { left: 30%; }
.symbol:nth-child(5n+2) { left: 50%; }
.symbol:nth-child(5n+3) { left: 70%; }
.symbol:nth-child(5n+4) { left: 90%; }
</style>