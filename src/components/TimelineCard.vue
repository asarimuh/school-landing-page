<template>
  <div class="relative">
    <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div class="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white mb-6 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ item.title }}</h3>
      <p class="text-blue-600 font-semibold mb-3">{{ item.date }}</p>
      <p class="text-gray-600">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineCard',
  props: {
    item: { type: Object, required: true },
    index: { type: Number, required: false }
  }
}
</script>
