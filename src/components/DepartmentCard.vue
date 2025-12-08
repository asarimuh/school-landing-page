<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div class="h-3 bg-gradient-to-r" :class="department.color"></div>
    <div class="p-8">
      <div class="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r mb-6 text-white" :class="department.color">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="department.icon" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-4">{{ department.name }}</h3>
      <p class="text-gray-600 mb-6">{{ department.description }}</p>
      <a href="#" class="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
        Selengkapnya
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DepartmentCard',
  props: {
    department: { type: Object, required: true }
  }
}
</script>
