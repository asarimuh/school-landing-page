<script>
export default {
  name: 'Section1',
}
</script>

<template>
  <section class="mt-20 py-10 bg-[#EEF1F7] w-full">
    <div class="mx-auto max-w-7xl px-6 md:px-8 lg:px-0">

      <!-- Title -->
      <h3 class="text-[#213866] text-[30px] font-semibold leading-[42px] w-full md:w-[372px] font-poppins">
        Sukses Bersama SMK Wikrama Bogor
      </h3>

      <!-- Subtitle -->
      <p class="text-[#213866]/80 text-[20px] mt-4 mb-6 w-full md:w-[660px]">
        Sejak 1996, Wikrama turut serta dalam membina masa depan bangsa dengan mendidik generasi muda Indonesia.
      </p>

      <!-- Flex Container -->
      <div class="flex flex-col md:flex-row md:justify-between gap-8">

        <!-- Visi -->
        <div class="md:w-1/2">
          <div class="flex items-center">
            <h5 class="font-poppins font-medium text-[20px]">Visi</h5>
            <hr class="ml-3 flex-grow border-t-2 border-[#213866]/80">
          </div>

          <ul class="text-[#213866]/80 text-[18px] pt-4 leading-[32px] font-raleway">
            <li>Menjadi sekolah kejuruan teladan nasional yang berbudaya lingkungan</li>
            <li>berkarakter sesuai profil pelajar pancasila</li>
            <li>berbasis teknologi informasi dan mampu memenuhi kebutuhan industri 4.0</li>
          </ul>
        </div>

        <!-- Misi -->
        <div class="md:w-1/2">
          <div class="flex items-center">
            <h5 class="font-poppins font-medium text-[20px]">Misi</h5>
            <hr class="ml-3 flex-grow border-t-2 border-[#213866]/80">
          </div>

          <ul class="text-[#213866]/80 text-[18px] pt-4 leading-[32px] font-raleway">
            <li>Mewujudkan sekolah sebagai benteng moralitas bangsa</li>
            <li>Mendidik anak bangsa dengan hati dan teknologi sehingga memenuhi kebutuhan mutu dunia kerja.</li>
            <li>Membangun kebersamaan sosial, jiwa kewirausahaan, dan gerakan cinta tanah air dan lingkungan.</li>
          </ul>
        </div>

      </div>

    </div>
  </section>
</template>
