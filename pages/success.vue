<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
    <div class="text-center max-w-lg">
      <div class="mb-8 flex justify-center">
        <div class="bg-green-100 p-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
      <p class="text-gray-600 mb-8">Thank you for your purchase. Your transaction has been completed successfully.</p>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-700 font-medium">Order Number:</span>
          <span class="text-gray-900 font-bold">{{ orderId }}</span>
        </div>
        
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-700 font-medium">Date:</span>
          <span class="text-gray-900">{{ formattedDate }}</span>
        </div>
        
        <div class="flex justify-between items-center mb-4 border-t pt-4">
          <span class="text-gray-700 font-medium">Subscription Plan:</span>
          <span class="text-gray-900">{{ plan }}</span>
        </div>
        
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-700 font-medium">Amount:</span>
          <span class="text-gray-900 font-bold">${{ amount }}</span>
        </div>
        
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-700 font-medium">Payment Method:</span>
          <div class="flex items-center">
            <svg class="h-6 w-6 mr-2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 5v22a3 3 0 01-3 3H3a3 3 0 01-3-3V5a3 3 0 013-3h26a3 3 0 013 3zm-2 0a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h26a1 1 0 001-1V5z" fill="#142688"/>
              <path d="M21.382 12.713l.943-1.106s-.943-.85-2.17-.85c-1.227 0-2.075.567-2.075 1.37 0 1.986 3.491 1.702 3.491 3.066 0 .284-.284.85-1.132.85-.944 0-1.654-.378-1.654-.378l-.378 1.086s.755.472 1.937.472c1.18 0 2.36-.662 2.36-1.748 0-1.986-3.492-1.796-3.492-3.114 0-.472.52-.756 1.039-.756.898 0 1.653.662 1.653.662z" fill="#142688"/>
            </svg>
            <span class="text-gray-900">•••• •••• •••• {{ lastFour }}</span>
          </div>
        </div>
      </div>
      
      <div class="space-y-4">
        <a href="/dashboard" class="block w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
          Go to Dashboard
        </a>
        <a href="/" class="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300">
          Return to Home
        </a>
      </div>
      
      <div class="mt-8 text-gray-500">
        <p>A receipt has been sent to your email address.</p>
        <p class="mt-2">If you have any questions, contact us at <a href="mailto:support@yoursaas.com" class="text-indigo-600 hover:text-indigo-800">support@yoursaas.com</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// These values would typically come from your payment processor (Stripe)
// and would be part of the redirect or available through API calls
const orderId = ref('ORD-3847293');
const date = ref(new Date());
const plan = ref('Professional Plan (Monthly)');
const amount = ref('49.00');
const lastFour = ref('4242');

// Format the date
const formattedDate = ref('');

onMounted(() => {
  // Format date
  formattedDate.value = new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date.value);
  
  // In a real application, you would:
  // 1. Extract session_id or payment_intent from URL parameters
  // 2. Validate the payment with Stripe API
  // 3. Update the UI based on the response
  
  // Example:
  // const route = useRoute();
  // const sessionId = route.query.session_id;
  // if (sessionId) {
  //   // Call your backend to verify the payment
  //   verifyPayment(sessionId);
  // }
});

// Function to verify payment with your backend
// const verifyPayment = async (sessionId) => {
//   try {
//     const response = await fetch(`/api/verify-payment?session_id=${sessionId}`);
//     const data = await response.json();
//     if (data.success) {
//       orderId.value = data.orderId;
//       plan.value = data.plan;
//       amount.value = data.amount;
//       lastFour.value = data.lastFour;
//     }
//   } catch (error) {
//     console.error('Error verifying payment:', error);
//   }
// };
</script>

<style  scoped>
/* Additional custom styles can go here */
</style>
