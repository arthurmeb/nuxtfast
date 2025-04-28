<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-between h-16">
          <!-- Logo/Brand Name -->
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <span class="text-indigo-600 font-bold text-xl">YourSaaS</span>
            </a>
          </div>
          
          <!-- Right Side Navigation -->
          <div class="flex items-center space-x-4">
            <a href="/login" class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Login</a>
            <a href="/register" class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-50 border-t">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <span class="text-indigo-600 font-bold text-xl">YourSaaS</span>
            <p class="text-gray-600 text-sm mt-2">© 2023 YourSaaS, Inc. All rights reserved.</p>
          </div>
          
          <div class="flex space-x-6">
            <a href="/terms" class="text-gray-600 hover:text-indigo-600 text-sm">Terms</a>
            <a href="/privacy-policy" class="text-gray-600 hover:text-indigo-600 text-sm">Privacy</a>
            <a href="/contact" class="text-gray-600 hover:text-indigo-600 text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Layout logic can go here
</script>

<style scoped>
/* Additional custom styles can go here */
</style> 