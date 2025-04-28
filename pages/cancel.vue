<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div class="text-center max-w-md">
      <div class="mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
      <p class="text-gray-600 mb-8">Your payment process was cancelled. No charges have been made to your account.</p>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4 text-gray-900">Why did this happen?</h2>
        <ul class="text-left text-gray-700 space-y-3">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>You may have cancelled the payment process yourself.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>There might have been an issue with your payment method.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>A temporary technical issue may have occurred.</span>
          </li>
        </ul>
      </div>
      
      <div class="space-y-4">
        <button @click="retryPayment" class="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
          Try Again
        </button>
        <a href="/" class="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300">
          Return to Home
        </a>
      </div>
      
      <div class="mt-8 text-gray-500">
        <p>Need help with your payment?</p>
        <p class="mt-2">Contact us at <a href="mailto:billing@yoursaas.com" class="text-indigo-600 hover:text-indigo-800">billing@yoursaas.com</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
// This function would typically redirect back to your checkout page
// or relaunch the payment flow
const retryPayment = () => {
  // In a real application, you might do something like:
  // - Redirect to checkout page
  // - Reopen Stripe Checkout
  // - Navigate to pricing page
  
  // For this example, we'll just navigate to a hypothetical pricing page
  window.location.href = '/pricing';
};

// In a real application, you might want to track payment cancellations
// for analytics or support purposes
</script>

<style  scoped>
/* Additional custom styles can go here */
</style>
