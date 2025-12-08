<template>
  <section class="mt-24 flex flex-col items-center">
    <!-- TITLE -->
    <h3 class="text-3xl font-semibold text-[#213866] font-poppins mb-12 text-center">
      Layanan Kami
    </h3>

    <!-- PARENT -->
    <div class="flex flex-col items-center w-full max-w-6xl">

      <!-- ROW 1 → Cards 1,2,3 -->
      <div class="flex flex-wrap justify-center gap-8 w-full">
        <div
          v-for="(item, i) in services.slice(0, 3)"
          :key="i"
          class="text-center rounded-xl bg-white shadow-[0px_8px_48px_3px_rgba(45,146,140,0.13)] 
                 w-[300px] p-9 transition-transform hover:-translate-y-1"
        >
          <img :src="item.icon" class="w-[65px] h-[69px] mx-auto" />
          <h3 class="mt-6 text-[1.1rem] text-[#2b4780bd] font-semibold font-poppins tracking-wide mb-4">
            {{ item.title }}
          </h3>
          <p class="font-poppins text-[#2b488096] text-[16px] leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- ROW 2 → Cards 4,5 -->
      <div class="flex flex-wrap justify-center gap-8 mt-10 w-full">
        <div
          v-for="(item, i) in services.slice(3, 5)"
          :key="'row2-' + i"
          class="text-center rounded-xl bg-white shadow-[0px_8px_48px_3px_rgba(45,146,140,0.13)] 
                 w-[300px] p-9 transition-transform hover:-translate-y-1
                 sm:block hidden"
        >
          <img :src="item.icon" class="w-[65px] h-[69px] mx-auto" />
          <h3 class="mt-6 text-[1.1rem] text-[#2b4780bd] font-semibold font-poppins tracking-wide mb-4">
            {{ item.title }}
          </h3>
          <p class="font-poppins text-[#2b488096] text-[16px] leading-relaxed">
            {{ item.desc }}
          </p>
          <button
            v-if="item.button"
            class="mt-4 px-4 py-2 rounded-md bg-[#3a8bcd] text-white font-poppins
                   transition-colors duration-300 hover:bg-[#1f5f87]"
          >
            Klik disini
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "/img/headBookIcon.png",
    title: "Beragam Bidang Keahlian",
    desc: "Kami Menyediakan Pembelajaran dengan berbagai macam bidang keahlian.",
  },
  {
    icon: "/img/peopleUpArrowIcon.png",
    title: "Lingkungan Pembelajaran Optimal",
    desc: "Kami menyediakan lingkungan belajar unggul.",
  },
  {
    icon: "/img/smilerIcon.png",
    title: "Prestasi Internasional",
    desc: "Penghargaan global dalam pendidikan berkualitas.",
  },
  {
    icon: "/img/penToolIcon.png",
    title: "Pembelajaran Nasional",
    desc: "Tuntunan dari pendidik terbaik.",
  },
  {
    icon: "/img/handLoveIcon.png",
    title: "Masih Banyak Lagi",
    desc: "Tertarik untuk melihat lebih banyak?",
    button: true,
  },
];
</script>
