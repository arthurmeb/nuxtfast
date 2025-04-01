<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-soft-beige text-gray-900 px-4 p-4">
    <h1 class="text-6xl font-extrabold mb-4 mt-10">MentionPing</h1>
    <p class="text-lg mb-6 text-center">Find relevant conversations about your niche, product, or service all across the internet.</p>
    
    <div class="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2 w-full max-w-md">
      <input 
        v-model="keywords"
        type="text" 
        placeholder="Enter keywords" 
        class="input input-bordered flex-grow text-black"
      />
      <button @click="submitKeywords" class="btn btn-primary">Submit</button>
    </div>


    <!-- Results Panel -->
    <div v-if="showResults" class="mt-8 w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Mention Results</h2>
      
      <!-- Loading State -->
      <div v-if="isLoading" class="flex flex-col items-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p class="text-lg font-medium">Results will be displayed here</p>
      </div>
      
      <!-- Results Cards -->
      <div v-else class="space-y-6">
        <!-- Reddit Results -->
        <div v-if="results.reddit && results.reddit.length" class="space-y-4">
          <h3 class="text-xl font-bold text-red-500">Reddit Mentions</h3>
          <div v-for="(result, index) in results.reddit" :key="`reddit-${index}`" 
               class="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div class="flex flex-col sm:flex-row justify-between items-start gap-2">
              <h3 class="text-xl font-semibold">{{ result.title }}</h3>
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-blue-500 text-white whitespace-nowrap">
                  {{ result.score ? Math.round(result.score * 100) : Math.round(result.similarity * 100) }}% Match
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-red-500 text-white">
                  Reddit
                </span>
              </div>
            </div>
            <p class="text-gray-600 mt-2">{{ result.body }}</p>
            <a :href="result.url" target="_blank" class="text-red-500 font-medium mt-2 inline-block hover:underline">
              View on Reddit →
            </a>
          </div>
        </div>

        <!-- HackerNews Results -->
        <div v-if="results.hackernews && results.hackernews.length" class="space-y-4">
          <h3 class="text-xl font-bold text-orange-500">Hacker News Mentions</h3>
          <div v-for="(result, index) in results.hackernews" :key="`hn-${index}`" 
               class="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div class="flex flex-col sm:flex-row justify-between items-start gap-2">
              <h3 class="text-xl font-semibold">{{ result.title }}</h3>
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-blue-500 text-white whitespace-nowrap">
                  {{ result.score ? Math.round(result.score * 100) : Math.round(result.similarity * 100) }}% Match
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-orange-500 text-white">
                  HN
                </span>
              </div>
            </div>
            <p class="text-gray-600 mt-2">{{ result.body }}</p>
            <a :href="result.url" target="_blank" class="text-orange-500 font-medium mt-2 inline-block hover:underline">
              View on Hacker News →
            </a>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="(!results.reddit || !results.reddit.length) && (!results.hackernews || !results.hackernews.length)" 
             class="text-center py-8 text-gray-500">
          No mentions found for your keywords.
        </div>
      </div>
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
const showResults = ref(false);
const isLoading = ref(false);
const results = ref([]);
const jobId = ref(null);
let pollInterval = null;

const submitKeywords = async () => {
  if (!keywords.value) return;
  
  // Show results panel and loading state
  showResults.value = true;
  isLoading.value = true;
  results.value = [];

  try {
    // Send search request
    const response = await fetch('http://localhost:8003/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ keywords: keywords.value })
    });
    
    const data = await response.json();
    jobId.value = data.job_id;
    
    // Start polling for results
    pollInterval = setInterval(checkJobStatus, 5000);
  } catch (error) {
    console.error('Error starting search:', error);
    isLoading.value = false;
  }
};

const checkJobStatus = async () => {
  console.log('Polling')
  if (!jobId.value) return;
  
  try {
    const response = await fetch(`http://localhost:8003/search/${jobId.value}`);
    const data = await response.json();
    
    if (data.status === 'completed') {
      clearInterval(pollInterval);
      results.value = data.results;
      console.log('results:', results.value)
      const dingSound = new Audio('/sounds/ding.mp3')
      dingSound.play()
      isLoading.value = false;
    } else if (data.status === 'running'){
      console.log('Still running...', data)
    } else if (data.status === 'failed') {
      clearInterval(pollInterval);
      console.error('Search failed:', data.error);
      isLoading.value = false;
    }
  } catch (error) {
    console.error('Error polling search status:', error);
  }
};
</script>


<style scoped>
.bg-soft-beige {
  background-color: #f8f1e4;
}
</style>