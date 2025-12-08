<template>
  <nav class="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-4">
          <img src="/img/Nav-logo.png" alt="logo" class="h-10" />
          <span class="font-semibold text-xl text-gray-800">Wikrama</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-6">

          <router-link
            to="/"
            class="text-gray-700 hover:text-blue-600 transition"
          >
            Beranda
          </router-link>

          <router-link
            to="/program-keahlian"
            class="text-gray-700 hover:text-blue-600 transition"
          >
            Program Keahlian
          </router-link>

          <router-link
            to="/ppdb"
            class="text-gray-700 hover:text-blue-600 transition"
          >
            PPDB 2024-2025
          </router-link>

         
        </div>

        <!-- CTA -->
        <div class="hidden md:block">
          <router-link
            to="/ppdb"
            class="btn btn-primary text-white px-4 py-2 rounded-lg transition"
          >
            Daftar
          </router-link>
        </div>

        <!-- Mobile Hamburger -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden focus:outline-none">
          <svg v-if="!mobileOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden bg-white border-t shadow-md">
      <div class="px-3 sm:px-4 py-4 flex flex-col gap-3">

        <router-link @click="closeMobile" to="/" class="text-gray-700 hover:text-blue-600 transition">Beranda</router-link>

        <!-- Mobile Dropdown -->
        <div>
          <button @click="mobileDropdown = !mobileDropdown"
            class="flex justify-between w-full text-gray-700 hover:text-blue-600 transition">
            Program Keahlian
            <span>
              <svg v-if="!mobileDropdown" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 9l-7 7-7-7" />
              </svg>
              <svg v-else class="w-4 h-4 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div v-if="mobileDropdown" class="mt-2 pl-4 flex flex-col gap-2">
            <a v-for="item in programList" :key="item" href="#" class="text-gray-600 hover:text-blue-600 transition">
              {{ item }}
            </a>
          </div>
        </div>

        <router-link @click="closeMobile" to="/ppdb" class="text-gray-700 hover:text-blue-600 transition">PPDB 2024-2025</router-link>

        <router-link
          @click="closeMobile"
          to="/ppdb"
          class="mt-2 text-center bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Daftar
        </router-link>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      mobileOpen: false,
      mobileDropdown: false,
      openDropdown: false,

      programList: ["PPLG", "TKJT", "KLN", "HTL", "PMN", "BDP", "DKV"],
    };
  },

  methods: {
    closeMobile() {
      this.mobileOpen = false;
      this.mobileDropdown = false;
    }
  }
};
</script>

<style scoped>
nav {
  font-family: "Poppins", sans-serif;
}
</style>
