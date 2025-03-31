<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-soft-beige text-gray-900 px-4">
    <h1 class="text-4xl font-bold mb-4">MentionPing</h1>
    <p class="text-lg mb-6 text-center">Find and track conversations about your niche, product, or service.</p>
    
    <div class="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2 w-full max-w-md">
      <input 
        v-model="keywords"
        type="text" 
        placeholder="Enter keywords" 
        class="input input-bordered flex-grow text-black"
      />
      <button @click="submitKeywords" class="btn btn-primary">Submit</button>
    </div>

    <!-- Features Section -->
    <div class="mt-16 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div class="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
        <span class="text-4xl text-primary">📢</span>
        <h3 class="text-xl font-semibold mt-4">Real-time Notifications</h3>
        <p class="text-gray-600 mt-2">Get notified instantly via Email, Discord, WhatsApp, Telegram, or Slack.</p>
      </div>
      <div class="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
        <span class="text-4xl text-primary">🚀</span>
        <h3 class="text-xl font-semibold mt-4">Automated Lead Discovery</h3>
        <p class="text-gray-600 mt-2">Find potential customers automatically and promote your product with ease.</p>
      </div>
      <div class="p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
        <span class="text-4xl text-primary">📊</span>
        <h3 class="text-xl font-semibold mt-4">Market Insights</h3>
        <p class="text-gray-600 mt-2">Stay ahead of trends and monitor discussions about your industry.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const keywords = ref('');

const submitKeywords = async () => {
  if (!keywords.value) return;
  try {
    const response = await fetch('https://your-lambda-url.com/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keywords: keywords.value })
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style scoped>
.bg-soft-beige {
  background-color: #f8f1e4;
}
</style>
