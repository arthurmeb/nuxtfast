<template>
  <div class="w-full bg-blue-600 text-white text-center "> This is an early beta. </div>
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
        <p class="text-lg font-medium">Your mentions will be displayed here</p>
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

    <!-- Waitlist Section -->
    <div v-if="showWaitlist" class="mt-8 w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-center">Join the Waitlist</h2>
      <p class="text-gray-600 mb-4 text-center">Be the first to know when MentionPing launches and get early access!</p>
      
      <form v-if="!waitlistSubmitted" @submit.prevent="submitWaitlist" class="space-y-4">
        <div class="form-control">
          <input 
            v-model="waitlistEmail"
            type="email" 
            placeholder="Enter your email" 
            class="input input-bordered w-full"
            required
          />
        </div>


        <div class="form-control">
          <select v-model="useCase" class="select select-bordered w-full" required>
            <option value="" disabled selected>What would you mostly use MentionPing for?</option>
            <option value="competitor">Tracking competitors</option>
            <option value="brand">Monitoring brand mentions</option>
            <option value="trends">Industry trend spotting</option>
            <option value="leads">Finding sales leads</option>
            <option value="feedback">Gathering product feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-control mb-6">
          <label class="label">
            <span class="label-text font-medium">Where would MentionPing fit in your budget?</span>
          </label>
          
          <div class="grid gap-4 mt-2">
            <label class="flex items-start p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" v-model="budgetTier" value="free" class="radio mt-1" />
              <div class="ml-3">
                <div class="font-medium">I wouldn't pay for this</div>
                <div class="text-sm text-gray-500">Interested, but not ready to commit financially</div>
              </div>
            </label>
            
            <label class="flex items-start p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" v-model="budgetTier" value="basic" class="radio mt-1" />
              <div class="ml-3">
                <div class="font-medium">$15/month</div>
                <div class="text-sm text-gray-500">
                  <ul class="list-disc pl-4">
                    <li>Daily notifications on selected keywords</li>
                    <li>1 project at a time</li>
                    <li>Up to 5 keyword monitors</li>
                    <li>Weekly summary reports</li>
                    <li>Basic sentiment analysis</li>
                  </ul>
                </div>
              </div>
            </label>
            
            <label class="flex items-start p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" v-model="budgetTier" value="premium" class="radio mt-1" />
              <div class="ml-3">
                <div class="font-medium">$30/month</div>
                <div class="text-sm text-gray-500">
                  <ul class="list-disc pl-4">
                    <li>Daily notifications on selected keywords</li>
                    <li>Live real-time notifications on new mentions</li>
                    <li>Up to 3 projects at a time</li>
                    <li>Market & competitor analysis</li>
                    <li>Unlimited keyword monitors</li>
                    <li>Advanced sentiment analysis</li>
                    <li>Exportable data & reports</li>
                  </ul>
                </div>
              </div>
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary w-full">Join Waitlist</button>
      </form>
      
      <div v-else class="text-center space-y-4">
        <div class="text-green-500 text-5xl mb-4">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3 class="text-xl text-green-500 font-bold">Thanks for Pre-registering!</h3>
        <p class="text-gray-600">We'll notify you as soon as MentionPing is ready for early access.</p>
      </div>
    </div>



  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const keywords = ref('');
const showResults = ref(false);
const isLoading = ref(false);
const results = ref([]);
const jobId = ref(null);
let pollInterval = null;
const config = useRuntimeConfig()

const apiBase = `http://${config.public.apiBase}`
// const apiBase = 'http://localhost:8003'


// Waitlist variables
const showWaitlist = ref(true);
const waitlistEmail = ref('');
const userNeeds = ref('')
const useCase = ref('');
const budgetTier = ref('');
const waitlistSubmitted = ref(false);

// Check localStorage on component mount
onMounted(() => {
  const submitted = localStorage.getItem('waitlistSubmitted');
  if (submitted === 'true') {
    waitlistSubmitted.value = true;
  }
});

const submitKeywords = async () => {
  if (!keywords.value) return;
  
  // Show results panel and loading state
  showResults.value = true;
  isLoading.value = true;
  results.value = [];

  try {
    // Send search request
    const response = await fetch(`${apiBase}/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
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
    const response = await fetch(`${apiBase}/search/${jobId.value}`);
    const data = await response.json();
    
    if (data.status === 'completed') {
      console.log('Succeeded!')
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
// Waitlist submission handler
const submitWaitlist = async () => {
  // Gather the form data
  const formData = {
    email: waitlistEmail.value,
    useCase: useCase.value,
    budgetTier: budgetTier.value,
    keywords: 'saas mrr, 10k mrr, saas growth' // You might want to make this dynamic
  };
  
  // Log the data locally
  console.log('Submitted waitlist data:', formData);
  
  // Format the Discord message
  const discordMessage = {
    embeds: [{
      title: "🎉 New Waitlist Signup!",
      color: 0x00FF00, // Cyan color
      fields: [
        {
          name: "📧 Email",
          value: formData.email || "bruh@duh.com",
          inline: true
        },
        {
          name: "👨‍💼 Founder Type",
          value: formData.useCase || "Not specified",
          inline: true
        },
        {
          name: "🚀 Product Stage",
          value: formData.budgetTier || "Not specified",
          inline: true
        },
        {
          name: "🔍 Search Keywords",
          value: "saas mrr, 10k mrr, saas growth",
          inline: false
        }
      ],
      footer: {
        text: `📅 ${new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}`
      }
    }]
  };
  
  try {
    // Send notification to Discord webhook
    const response = await fetch('https://discord.com/api/webhooks/1356692781875069190/Ctqjy_NZhdglgDH-MsEmLCcWmE1_KnvdO8x371Mib3ohBRp7-gPXEMwIAwI_nZeZYdUc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage)
    });
    
    if (!response.ok) {
      throw new Error(`Discord webhook error: ${response.status}`);
    }
    
    console.log('Discord notification sent successfully!');
    
    // Save submission status to localStorage
    localStorage.setItem('waitlistSubmitted', 'true');
    waitlistSubmitted.value = true;
    
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
    // You might want to handle this error more gracefully
  }
};
</script>

<style scoped>
.bg-soft-beige {
  background-color: #f8f1e4;
}
</style>