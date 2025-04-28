<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
    <div class="text-center max-w-md">
      <div class="relative mb-8">
        <svg class="h-32 w-32 text-indigo-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 border border-indigo-100 shadow-sm">
          <span class="text-indigo-600 font-medium">Error {{ error?.statusCode || '500' }}</span>
        </div>
      </div>
      
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ error?.statusCode === 404 ? 'Page Not Found' : 'Something went wrong' }}</h1>
      <p class="text-gray-600 mb-8">{{ error?.message || (error?.statusCode === 404 ? 'The page you\'re looking for doesn\'t exist or has been moved.' : 'An unexpected error occurred. Please try again later.') }}</p>
      
      <div class="space-y-4">
        <button @click="goBack" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Back
        </button>
        
        <NuxtLink to="/" class="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Return to Home
        </NuxtLink>
        
        <button @click="refreshPage" class="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
      </div>
      
      <div class="mt-8 text-gray-500">
        <p>If the problem persists, please contact our support team at</p>
        <a href="mailto:support@yoursaas.com" class="text-indigo-600 hover:text-indigo-800 font-medium">support@yoursaas.com</a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set the layout
definePageMeta({
  layout: 'default'
});

// Get the error object from Nuxt
const error = useError();

// Error handling methods
const goBack = () => {
  window.history.back();
};

const refreshPage = () => {
  // Clear the error and reload the page
  clearError();
  window.location.reload();
};
</script>

<style scoped>
/* Additional custom styles can go here */
</style>