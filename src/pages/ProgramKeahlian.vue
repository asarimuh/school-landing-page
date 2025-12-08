<template>
    <!-- Jurusan Section -->
    <section ref="departmentsSection" class="py-16 md:py-20 mx-auto max-w-7xl px-6 md:px-8 lg:px-0 mt-10 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-[#213866] mb-4">Program Keahlian</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Pilih program keahlian yang sesuai dengan minat dan bakat Anda</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DepartmentCard 
            v-for="department in departments"
            :key="department.name"
            :department="department"
          />
        </div>
      </div>
    </section>
</template>

<script>
import DepartmentCard from '@/components/DepartmentCard.vue'

export default {
  name: 'ProgramKeahlianPage',
  components: { DepartmentCard },
  data() {
    return {
      departments: [
        {
          name: 'Rekayasa Perangkat Lunak (RPL)',
          description: 'Mempelajari pengembangan software, aplikasi mobile, web development, dan database management.',
          icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
          color: 'from-blue-500 to-blue-600'
        },
        {
          name: 'Multimedia (MM)',
          description: 'Belajar desain grafis, animasi, video editing, fotografi, dan produksi konten digital.',
          icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
          color: 'from-purple-500 to-purple-600'
        },
        {
          name: 'Teknik Komputer Jaringan (TKJ)',
          description: 'Fokus pada instalasi jaringan, administrasi server, keamanan jaringan, dan troubleshooting.',
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
          color: 'from-green-500 to-green-600'
        },
        {
          name: 'Akuntansi dan Keuangan Lembaga (AKL)',
          description: 'Mempelajari akuntansi dasar, perpajakan, pengelolaan keuangan, dan software akuntansi.',
          icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          color: 'from-yellow-500 to-yellow-600'
        },
        {
          name: 'Otomatisasi Tata Kelola Perkantoran (OTKP)',
          description: 'Belajar administrasi perkantoran, manajemen arsip, teknologi informasi perkantoran, dan public relations.',
          icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
          color: 'from-red-500 to-red-600'
        },
        {
          name: 'Bisnis Daring dan Pemasaran (BDP)',
          description: 'Fokus pada digital marketing, e-commerce, manajemen ritel, dan strategi pemasaran online.',
          icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
          color: 'from-indigo-500 to-indigo-600'
        }
      ]
    }
  }
}
</script>