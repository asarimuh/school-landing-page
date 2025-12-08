<template>
    <!-- Informasi PPDB -->
    <section class="py-16 md:py-20 mx-auto max-w-7xl px-6 md:px-8 lg:px-0 mt-10 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Syarat Pendaftaran -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Syarat Pendaftaran
            </h3>
            
            <ul class="space-y-4">
              <li v-for="(requirement, index) in requirements" :key="index" 
                class="flex items-start p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  {{ index + 1 }}
                </span>
                <span class="text-gray-700">{{ requirement }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Alur Pendaftaran -->
          <div class="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              Alur Pendaftaran
            </h3>
            
            <div class="space-y-6">
              <div v-for="(step, index) in registrationSteps" :key="index" 
                class="flex items-start p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div class="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform duration-300" style="background: linear-gradient(to right, #2D928C, #1f5f5b);">
                  {{ step.step }}
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cara Mendaftar -->
    <section ref="registrationSection" class="py-16 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Cara Mendaftar</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Panduan lengkap untuk melakukan pendaftaran secara online maupun offline</p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Online Registration -->
          <div class="bg-white rounded-2xl p-8 shadow-xl">
            <div class="flex items-center mb-8">
              <div class="flex items-center justify-center w-14 h-14 rounded-xl text-white mr-4" style="background: linear-gradient(to right, #2D928C, #1f5f5b);">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800">Pendaftaran Online</h3>
            </div>
            
            <div class="space-y-6">
              <div v-for="(step, index) in onlineRegistrationSteps" :key="index" class="flex">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4 mt-0.5">
                  {{ index + 1 }}
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="mt-10 pt-6 border-t border-gray-200">
              <h4 class="font-bold text-gray-800 mb-4">Dokumen yang Diperlukan:</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="(doc, index) in requiredDocuments" :key="index" 
                  class="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  {{ doc }}
                </span>
              </div>
            </div>
          </div>
          
          <!-- Offline Registration -->
          <div class="bg-white rounded-2xl p-8 shadow-xl">
            <div class="flex items-center mb-8">
              <div class="flex items-center justify-center w-14 h-14 rounded-xl text-white mr-4" style="background: linear-gradient(to right, #2D928C, #1f5f5b);">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800">Pendaftaran Offline</h3>
            </div>
            
            <div class="space-y-6">
              <div v-for="(step, index) in offlineRegistrationSteps" :key="index" class="flex">
                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mr-4 mt-0.5">
                  {{ index + 1 }}
                </div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">{{ step.title }}</h4>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <h4 class="font-bold text-gray-800 mb-2">Lokasi Pendaftaran:</h4>
              <p class="text-gray-700 mb-2">
                SMK Wikrama Bogor<br>
                Jl. Pendidikan No. 123, Kota Pendidikan<br>
                Telp: (021) 5555-1234
              </p>
              <p class="text-gray-600 text-sm">
                <span class="font-semibold">Jam Operasional:</span> Senin - Jumat, 08:00 - 16:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PpdbPage',

  setup() {
    const registrationSection = ref(null)
    
    // Requirements data
    const requirements = ref([
      'Fotokopi akta kelahiran dan Kartu Keluarga (KK)',
      'Fotokopi ijazah dan SKHUN SMP/MTs (legalisir)',
      'Pas foto berwarna 3x4 (4 lembar) dan 2x3 (2 lembar)',
      'Surat keterangan sehat dari dokter',
      'Fotokopi rapor SMP/MTs semester 1-5 (legalisir)',
      'Surat pernyataan kesanggupan mengikuti program sekolah',
      'Fotokopi KTP orang tua/wali'
    ])
    
    // Registration steps data
    const registrationSteps = ref([
      {
        step: '01',
        title: 'Pendaftaran',
        description: 'Isi formulir pendaftaran online atau datang langsung ke sekolah'
      },
      {
        step: '02',
        title: 'Verifikasi Berkas',
        description: 'Verifikasi kelengkapan dan keaslian dokumen yang diserahkan'
      },
      {
        step: '03',
        title: 'Tes Seleksi',
        description: 'Mengikuti tes akademik dan wawancara (jika diperlukan)'
      },
      {
        step: '04',
        title: 'Pengumuman',
        description: 'Cek pengumuman hasil seleksi melalui website atau pengumuman di sekolah'
      },
      {
        step: '05',
        title: 'Daftar Ulang',
        description: 'Melakukan daftar ulang bagi yang diterima'
      }
    ])
    
    // Online registration steps
    const onlineRegistrationSteps = ref([
      {
        title: 'Akses Website PPDB',
        description: 'Kunjungi website spmb.smkwikrama.sch.id/ dan klik tombol "Daftar Sekarang"'
      },
      {
        title: 'Isi Formulir Online',
        description: 'Lengkapi formulir pendaftaran dengan data yang benar dan valid'
      },
      {
        title: 'Unggah Dokumen',
        description: 'Upload dokumen persyaratan dalam format PDF/JPG dengan ukuran maksimal 2MB per file'
      },
      {
        title: 'Konfirmasi Pendaftaran',
        description: 'Simpan dan cetak bukti pendaftaran yang akan dikirimkan ke email Anda'
      }
    ])
    
    const offlineRegistrationSteps = ref([
      {
        title: 'Kunjungi Sekolah',
        description: 'Datang langsung ke SMK Wikrama Bogor pada jam kerja'
      },
      {
        title: 'Ambil Formulir',
        description: 'Ambil formulir pendaftaran di loket pendaftaran'
      },
      {
        title: 'Lengkapi dan Serahkan',
        description: 'Isi formulir dan serahkan beserta dokumen persyaratan'
      },
      {
        title: 'Terima Bukti Pendaftaran',
        description: 'Simpan bukti pendaftaran yang diberikan oleh panitia'
      }
    ])
    
    // Required documents
    const requiredDocuments = ref([
      'Fotokopi Ijazah',
      'Fotokopi Akta Kelahiran',
      'Fotokopi KK',
      'Pas Foto',
      'Rapor SMP',
      'SKHUN',
      'KTP Orang Tua'
    ])
    
    
    return {
      requirements,
      registrationSteps,
      onlineRegistrationSteps,
      offlineRegistrationSteps,
      requiredDocuments,
      registrationSection,
    }
  }
}

</script>

<style scoped>
/* Custom animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #6366f1);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #4f46e5);
}
</style>