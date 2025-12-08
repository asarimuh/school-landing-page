<template>
  <section ref="section3"
    class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-24 mb-20 px-6">
    <!-- LEFT: CAROUSEL -->
    <div class="relative w-full max-w-md overflow-hidden rounded-t-[120px] bg-[#EEF1F7] pt-10">
      <div class="whitespace-nowrap transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(m, index) in majors" :key="index" class="inline-block w-full text-center">
          <img :src="`/img/${m.image}`" class="w-full select-none pointer-events-none" />
        </div>
      </div>
    </div>

    <!-- RIGHT: TEXT CONTENT -->
    <div class="max-w-lg flex flex-col gap-5">
      <h3 class="text-3xl font-semibold text-[#213866]">Program Keahlian</h3>

      <!-- SUB-TITLE LIST (clickable) -->
      <div class="relative overflow-hidden mt-3">
        <!-- Height lock -->
        <p class="invisible text-[24px] font-semibold">MPLB</p>

        <!-- Actual items -->
        <div class="absolute inset-0 flex items-center gap-5 flex-wrap">
          <button v-for="(m, index) in majors" :key="m.code" @click="selectMajor(index)"
            class="font-semibold transition-all duration-300" :class="index === currentIndex
                ? 'text-[24px] text-[#213866E6]'
                : 'text-[19px] text-[#21386699] hover:text-[#213866E6]'
              ">
            {{ m.code }}
          </button>
        </div>
      </div>

      <hr class="border-[1.5px] border-[#7281a0cc] rounded mt-1" />

      <!-- DESCRIPTION (dynamic) -->
      <div class="text-[#213866A6] text-[16px] leading-relaxed">
        <p>{{ majors[currentIndex].desc }}</p>
      </div>

      <button
        class="mt-4 self-start bg-[#80A4ED] text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg shadow-blue-300/30 hover:bg-[#6E96E8] transition">
        Baca Detail
      </button>
    </div>
  </section>
</template>


<script>
export default {
  name: "Section3",

  data() {
    return {
      currentIndex: 0,
      currentSlide: 0,

      autoPlay: null,
      resumeTimeout: null, // <-- NEW (delay before autoplay resumes)

      majors: [
        {
          code: "KLN",
          name: "Kuliner",
          desc:
            "Jurusan KLN membekali siswa dengan keterampilan memasak, pengolahan makanan, pastry, hygiene, serta manajemen dapur profesional.",
          image: "people-kln.png",
        },
        {
          code: "HTL",
          name: "Perhotelan",
          desc:
            "Jurusan HTL mempersiapkan siswa untuk bekerja di industri perhotelan: front office, housekeeping, pelayanan tamu, hingga hospitality management.",
          image: "people-htl.png",
        },
        {
          code: "TKJ",
          name: "Teknik Komputer & Jaringan",
          desc:
            "TKJ fokus pada jaringan komputer, hardware, server, administrasi jaringan, serta keamanan jaringan.",
          image: "people-tkj.png",
        },
        {
          code: "RPL",
          name: "Rekayasa Perangkat Lunak",
          desc:
            "RPL mempelajari pemrograman, pembuatan aplikasi web & mobile, database, UI/UX, dan software engineering.",
          image: "people-rpl.png",
        },
        {
          code: "MMD",
          name: "Multimedia",
          desc:
            "MMD mengajarkan desain grafis, animasi, fotografi, videografi, editing, serta konten kreatif digital.",
          image: "people-mmd.png",
        },
        {
          code: "MPLB",
          name: "Manajemen Perkantoran",
          desc:
            "MPLB fokus pada administrasi perkantoran, pengarsipan digital, pelayanan publik, dan tata kelola dokumen.",
          image: "people-mplb.png",
        },
        {
          code: "PMN",
          name: "Pemasaran",
          desc:
            "PMN membekali siswa dengan keterampilan bisnis, promosi, digital marketing, analisis pasar, dan komunikasi pemasaran.",
          image: "people-pmn.png",
        },
      ],
    };
  },

  methods: {
    selectMajor(index) {
      this.currentIndex = index;
      this.currentSlide = index;

      // Stop autoplay immediately when user interacts
      this.stopAutoPlay();

      // Clear previous resume timer if user clicks repeatedly
      clearTimeout(this.resumeTimeout);

      // Resume autoplay after 10 seconds
      this.resumeTimeout = setTimeout(() => {
        this.startAutoPlay();
      }, 10000);
    },

    nextSlide() {
      const next = (this.currentSlide + 1) % this.majors.length;
      this.currentSlide = next;
      this.currentIndex = next;
    },

    startAutoPlay() {
      // Avoid duplicate timers
      if (this.autoPlay) return;

      this.autoPlay = setInterval(() => {
        this.nextSlide();
      }, 8000);
    },

    stopAutoPlay() {
      clearInterval(this.autoPlay);
      this.autoPlay = null;
    },
  },

  mounted() {
    const section = this.$refs.section3;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Section is visible → start autoplay
          this.startAutoPlay();
        } else {
          // Section not visible → stop autoplay
          this.stopAutoPlay();
        }
      },
      {
        threshold: 0.4, // start when 40% of section is visible
      }
    );

    observer.observe(section);

    this.sectionObserver = observer;
  },


  beforeUnmount() {
    clearInterval(this.autoPlay);
    clearTimeout(this.resumeTimeout);

    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
  }

};

</script>
