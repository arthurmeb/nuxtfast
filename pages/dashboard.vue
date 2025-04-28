<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex">
      <!-- Sidebar -->
      <div class="w-64 h-screen bg-indigo-700 text-white fixed">
        <div class="p-4 border-b border-indigo-600">
          <h2 class="text-xl font-bold">YourSaaS</h2>
        </div>
        <nav class="p-4">
          <ul class="space-y-2">
            <li>
              <a href="#" class="flex items-center p-2 rounded-md bg-indigo-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 rounded-md hover:bg-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 rounded-md hover:bg-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Projects
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 rounded-md hover:bg-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Billing
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 rounded-md hover:bg-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </a>
            </li>
          </ul>

          <div class="mt-10 pt-10 border-t border-indigo-600">
            <a href="#" class="flex items-center p-2 rounded-md hover:bg-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </a>
          </div>
        </nav>
      </div>

      <!-- Main Content -->
      <div class="ml-64 flex-1 p-8">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-2xl font-bold">Dashboard</h1>
          
          <div class="flex items-center">
            <div class="relative mr-4">
              <input type="text" placeholder="Search..." class="bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64" />
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div class="relative">
              <button class="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" class="w-8 h-8 rounded-full" />
                <span class="ml-2 font-medium">John Doe</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h2 class="text-gray-500 text-sm">Total Users</h2>
                <p class="text-2xl font-bold">1,485</p>
              </div>
            </div>
            <div class="mt-4">
              <span class="text-green-500 text-sm font-semibold">↑ 12%</span>
              <span class="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div class="ml-4">
                <h2 class="text-gray-500 text-sm">Active Projects</h2>
                <p class="text-2xl font-bold">48</p>
              </div>
            </div>
            <div class="mt-4">
              <span class="text-green-500 text-sm font-semibold">↑ 8%</span>
              <span class="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h2 class="text-gray-500 text-sm">Revenue</h2>
                <p class="text-2xl font-bold">$24,835</p>
              </div>
            </div>
            <div class="mt-4">
              <span class="text-green-500 text-sm font-semibold">↑ 16%</span>
              <span class="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow p-6">
            <div class="flex items-center">
              <div class="bg-indigo-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div class="ml-4">
                <h2 class="text-gray-500 text-sm">Open Tickets</h2>
                <p class="text-2xl font-bold">23</p>
              </div>
            </div>
            <div class="mt-4">
              <span class="text-red-500 text-sm font-semibold">↑ 3%</span>
              <span class="text-gray-500 text-sm ml-2">from last month</span>
            </div>
          </div>
        </div>

        <!-- Main Content Areas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Recent Activities -->
          <div class="lg:col-span-2 bg-white rounded-lg shadow">
            <div class="p-6 border-b">
              <h2 class="text-lg font-semibold">Recent Activities</h2>
            </div>
            <div class="p-6">
              <div class="space-y-6">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium">New project "Dashboard UI" created</p>
                    <p class="text-sm text-gray-500">Jane Smith • 2h ago</p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium">Project "Landing Page Design" completed</p>
                    <p class="text-sm text-gray-500">Alex Johnson • 4h ago</p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium">New comment on project "Mobile App"</p>
                    <p class="text-sm text-gray-500">Sarah Lee • 8h ago</p>
                  </div>
                </div>
                
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium">New feedback on project "Analytics Dashboard"</p>
                    <p class="text-sm text-gray-500">Michael Brown • 1d ago</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-6">
                <button class="text-indigo-600 text-sm font-medium hover:text-indigo-800">View all activities</button>
              </div>
            </div>
          </div>
          
          <!-- Upcoming Tasks -->
          <div class="bg-white rounded-lg shadow">
            <div class="p-6 border-b">
              <h2 class="text-lg font-semibold">Upcoming Tasks</h2>
            </div>
            <div class="p-6">
              <ul class="space-y-4">
                <li class="flex items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span class="ml-3 text-sm">Finish project proposal</span>
                  <span class="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Today</span>
                </li>
                <li class="flex items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span class="ml-3 text-sm">Meeting with design team</span>
                  <span class="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Tomorrow</span>
                </li>
                <li class="flex items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span class="ml-3 text-sm">Review code changes</span>
                  <span class="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded">This week</span>
                </li>
                <li class="flex items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span class="ml-3 text-sm">Send project update</span>
                  <span class="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded">This week</span>
                </li>
                <li class="flex items-center">
                  <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span class="ml-3 text-sm">Prepare monthly report</span>
                  <span class="ml-auto text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Next week</span>
                </li>
              </ul>
              
              <div class="mt-6">
                <button class="text-indigo-600 text-sm font-medium hover:text-indigo-800">Add new task</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Dashboard logic can go here
definePageMeta({
  layout: 'default'
});
</script>

<style scoped>
/* Additional custom styles can go here */
</style> 