<template>
  <div class="pb-36">

    <!-- Title -->
    <div class="pb-5 text-center">
      <p class="text-[20px] font-medium text-[#21386696]">Testimonial</p>

      <h4 class="text-[#213866] text-[38px] font-semibold leading-[52px] max-w-[600px] mx-auto">
        Dipercaya oleh Masyarakat dan Pemerintah
      </h4>

      <p class="pt-2 text-[18px] font-medium text-[#213866ad] max-w-[400px] mx-auto">
        Jutaan orang telah mempercayakan masa depan anak bangsa kepada kami.
      </p>
    </div>

    <!-- ROW 1 -->
    <div class="pt-4 h-[200px] mx-auto relative w-[90%] grid place-items-center overflow-hidden" @mouseenter="row1Paused = true" @mouseleave="row1Paused = false">
      <div :class="['flex', row1Paused ? 'animate-slide-paused' : 'animate-slide', 'w-[calc(340px*20)]']">

        <!-- SLIDES ROW 1 -->
        <ReviewCard name="Ibu Siti Nurhaliza" comment="Sekolahnya sangat bagus dan profesional. Anak saya senang belajar di sini." />
        <ReviewCard name="Bapak Ahmad Wijaya" comment="Guru-gurunya sangat peduli dan berdedikasi. Prestasi anak meningkat drastis." />
        <ReviewCard name="Ibu Ratna Sari" comment="Fasilitasnya lengkap dan mendukung pembelajaran. Sangat puas dengan pelayanannya." />
        <ReviewCard name="Bapak Hendra Kusuma" comment="Kurikulum yang diterapkan modern dan relevan. Anak siap menghadapi masa depan." />
        <ReviewCard name="Ibu Dewi Lestari" comment="Lingkungan sekolah aman dan nyaman. Staff yang ramah dan responsif." />
        <ReviewCard name="Bapak Rudi Hartono" comment="Ekstrakurikuler yang beragam membuat anak lebih berkembang. Investasi terbaik!" />
        <ReviewCard name="Ibu Eka Putri" comment="Komunikasi dengan orang tua sangat baik. Transparan dalam semua hal." />
        <ReviewCard name="Bapak Yanto Suryanto" comment="Metode pengajaran yang inovatif membuat belajar jadi menyenangkan." />
        <ReviewCard name="Ibu Maya Kusuma" comment="Anak saya lebih percaya diri dan mandiri setelah sekolah di sini." />
        <ReviewCard name="Bapak Fajar Rizki" comment="Kualitas pendidikan sebanding dengan biaya. Recommended untuk semua orang tua!" />

        <!-- duplicated for seamless scrolling -->
        <ReviewCard name="Ibu Siti Nurhaliza" comment="Sekolahnya sangat bagus dan profesional. Anak saya senang belajar di sini." />
        <ReviewCard name="Bapak Ahmad Wijaya" comment="Guru-gurunya sangat peduli dan berdedikasi. Prestasi anak meningkat drastis." />
        <ReviewCard name="Ibu Ratna Sari" comment="Fasilitasnya lengkap dan mendukung pembelajaran. Sangat puas dengan pelayanannya." />
        <ReviewCard name="Bapak Hendra Kusuma" comment="Kurikulum yang diterapkan modern dan relevan. Anak siap menghadapi masa depan." />
        <ReviewCard name="Ibu Dewi Lestari" comment="Lingkungan sekolah aman dan nyaman. Staff yang ramah dan responsif." />
        <ReviewCard name="Bapak Rudi Hartono" comment="Ekstrakurikuler yang beragam membuat anak lebih berkembang. Investasi terbaik!" />
        <ReviewCard name="Ibu Eka Putri" comment="Komunikasi dengan orang tua sangat baik. Transparan dalam semua hal." />
        <ReviewCard name="Bapak Yanto Suryanto" comment="Metode pengajaran yang inovatif membuat belajar jadi menyenangkan." />
        <ReviewCard name="Ibu Maya Kusuma" comment="Anak saya lebih percaya diri dan mandiri setelah sekolah di sini." />
        <ReviewCard name="Bapak Fajar Rizki" comment="Kualitas pendidikan sebanding dengan biaya. Recommended untuk semua orang tua!" />
      </div>
    </div>

    <!-- ROW 2 -->
    <div class="pt-8 h-[200px] mx-auto relative w-[90%] grid place-items-center overflow-hidden" @mouseenter="row2Paused = true" @mouseleave="row2Paused = false">
      <div :class="['flex', row2Paused ? 'animate-slide-reverse-paused' : 'animate-slide-reverse', 'w-[calc(340px*20)]']">

        <!-- SLIDES ROW 2 -->
        <ReviewCard name="Murid - Adit Pratama" comment="Sekolahnya asik, guru-gurunya keren dan sering ngajak diskusi." />
        <ReviewCard name="Ibu Sri Handayani" comment="Program bimbingan karir sangat membantu anak memilih masa depan." />
        <ReviewCard name="Murid - Nisa Amelia" comment="Teman-temanku di sini seperti keluarga. Suasana sekolahnya aman dan menyenangkan." />
        <ReviewCard name="Bapak Bambang Sutrisno" comment="Sistem pembelajaran yang holistik mengembangkan karakter anak dengan baik." />
        <ReviewCard name="Murid - Rafi Ikhsan" comment="Guru BK-nya sangat helpful, selalu siap mendengarkan keluhan siswa." />
        <ReviewCard name="Ibu Lina Widiastuti" comment="Nilai akademik anak meningkat, tapi juga dikembangkan soft skillnya." />
        <ReviewCard name="Murid - Fitria Nurhayati" comment="Fasilitas lab dan perpustakaan lengkap. Nyaman untuk belajar." />
        <ReviewCard name="Bapak Sudarmadi" comment="Sekolah ini benar-benar memperhatikan kesejahteraan siswa dan guru." />
        <ReviewCard name="Murid - Bayu Setiawan" comment="Program internasional membuat saya jadi lebih terbuka wawasan." />
        <ReviewCard name="Ibu Nunik Setyowati" comment="Investasi terbaik untuk masa depan anak. Semua worth it!" />

        <!-- duplicate for endless scroll -->
        <ReviewCard name="Murid - Adit Pratama" comment="Sekolahnya asik, guru-gurunya keren dan sering ngajak diskusi." />
        <ReviewCard name="Ibu Sri Handayani" comment="Program bimbingan karir sangat membantu anak memilih masa depan." />
        <ReviewCard name="Murid - Nisa Amelia" comment="Teman-temanku di sini seperti keluarga. Suasana sekolahnya aman dan menyenangkan." />
        <ReviewCard name="Bapak Bambang Sutrisno" comment="Sistem pembelajaran yang holistik mengembangkan karakter anak dengan baik." />
        <ReviewCard name="Murid - Rafi Ikhsan" comment="Guru BK-nya sangat helpful, selalu siap mendengarkan keluhan siswa." />
        <ReviewCard name="Ibu Lina Widiastuti" comment="Nilai akademik anak meningkat, tapi juga dikembangkan soft skillnya." />
        <ReviewCard name="Murid - Fitria Nurhayati" comment="Fasilitas lab dan perpustakaan lengkap. Nyaman untuk belajar." />
        <ReviewCard name="Bapak Sudarmadi" comment="Sekolah ini benar-benar memperhatikan kesejahteraan siswa dan guru." />
        <ReviewCard name="Murid - Bayu Setiawan" comment="Program internasional membuat saya jadi lebih terbuka wawasan." />
        <ReviewCard name="Ibu Nunik Setyowati" comment="Investasi terbaik untuk masa depan anak. Semua worth it!" />
      </div>
    </div>

  </div>
</template>

<script>
import ReviewCard from '../ReviewCard.vue'

export default {
  components: {
    ReviewCard
  },
  data() {
    return {
      row1Paused: false,
      row2Paused: false
    }
  }
}
</script>

<style scoped>
/* Row 1 scroll */
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-340px * 10)); }
}

.animate-slide {
  animation: slide 140s linear infinite;
}

.animate-slide-paused {
  animation: slide 140s linear infinite;
  animation-play-state: paused;
}

/* Row 2 reverse scroll */
@keyframes slideReverse {
  0% { transform: translateX(calc(-340px * 10)); }
  100% { transform: translateX(0); }
}

.animate-slide-reverse {
  animation: slideReverse 140s linear infinite;
}

.animate-slide-reverse-paused {
  animation: slideReverse 140s linear infinite;
  animation-play-state: paused;
}
</style>
