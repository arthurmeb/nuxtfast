<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div class="text-center max-w-md">
      <div class="mb-8">
        <svg class="h-24 w-24 text-indigo-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Something went wrong</h1>
      <p class="text-gray-600 mb-8">The page you're looking for doesn't exist or an error occurred.</p>
      
      <div class="space-y-4">
        <button @click="goBack" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
          Go Back
        </button>
        <a href="/" class="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300">
          Return to Home
        </a>
        <button @click="refresh" class="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300">
          Try Again
        </button>
      </div>
      
      <div class="mt-8 text-gray-500">
        <p>If the problem persists, please contact support at</p>
        <a href="mailto:support@yoursaas.com" class="text-indigo-600 hover:text-indigo-800">support@yoursaas.com</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const goBack = () => {
  window.history.back();
};

const refresh = () => {
  window.location.reload();
};
</script>

<style  scoped>
/* Additional custom styles can go here */
</style> 