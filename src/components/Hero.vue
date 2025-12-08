<template>
  <section class="w-full mt-25">
    <!-- Text -->
    <div class="text-center max-w-xl mx-auto px-4">
      <h3 class="text-[32px] font-semibold text-[#213866]">Best of the best</h3>
      <p class="text-lg text-gray-600 mt-2">
        Sebuah lembaga pendidikan yang didedikasikan untuk memaksimalkan potensi anak bangsa.
      </p>
    </div>

    <!-- GRID -->
    <div class="hero-grid mt-8 relative mx-auto max-w-5xl px-4">
      <img src="/img/headerIcons-left.png" alt="left icon" class="left-header-icon">
      <!-- Desktop layout follows the EXACT grid: spans are controlled in CSS -->
      <div class="hero-box hero-box-1">
        <p>Dipercaya oleh industri dan masyarakat</p>
      </div>
      <div class="hero-box hero-box-2">
        <p>Menghasilkan lulusan yang diminati Industri</p>
      </div>
      <div class="hero-box hero-box-3">
        <p>Sekolah Ramah Anak</p>
      </div>
      <div class="hero-box hero-box-4">
        <p>Ekstrakulikuler Penunjang Bakat Pelajar</p>
      </div>
      <div class="hero-box hero-box-5">
        <p>Melahirkan Anak Bangsa Berprestasi</p>
      </div>
      <div class="hero-box hero-box-6">
        <p>Mempersiapkan Pelajar Untuk Masa Depan</p>
      </div>
       <img src="/img/headerIcons-right.png" alt="right icon" class="right-header-icon">
    </div>

    <!-- Buttons -->
    <div class="flex justify-center mt-10 gap-4">
      <button class="primary-button">Daftar Sekarang</button>
      <button class="secondary-button">Konsultasi</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
/* ------------------------------
   RESPONSIVE ICONS
--------------------------------*/
.left-header-icon {
  position: absolute;
  width: 150px;
  opacity: 0.9;
  left: -120px;
  top: -100px;
}

.right-header-icon {
  position: absolute;
  width: 150px;
  opacity: 0.9;
  right: -120px;
  top: -100px;
}

@media (max-width: 1300px) {
  .left-header-icon,
  .right-header-icon {
    display: none !important;
  }
}

/* ------------------------------
   HERO GRID (Hybrid Tailwind + CSS)
--------------------------------*/
.hero-grid {
  display: grid;
  gap: 8px;
  /* overflow-x: hidden; */
}

/* Desktop: ORIGINAL GRID SHAPE */
@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 35% 30% 5% auto;
    grid-template-rows: 186px 50px 120px;
  }

  .hero-box-1 {
    grid-row: 1 / 3;
    grid-column: 1;
  }

  .hero-box-2 {
    grid-row: 1;
    grid-column: 2 / 4;
  }

  .hero-box-3 {
    grid-row: 1;
    grid-column: 4;
  }

  .hero-box-4 {
    grid-row: 3;
    grid-column: 1;
  }

  .hero-box-5 {
    grid-row: 2 / 4;
    grid-column: 2;
  }

  .hero-box-6 {
    grid-row: 2 / 4;
    grid-column: 3 / 5;
  }
}

/* Tablet layout — simpler 3 column */
@media (min-width: 640px) and (max-width: 1023px) {
  .hero-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 160px;
  }
}

/* Mobile — 2 columns */
@media (max-width: 639px) {
  .hero-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }
}

/* ------------------------------
   CARD STYLES
--------------------------------*/
/* Replace slideUp with a simple fade-in and scale */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.hero-box {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 12px;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  opacity: 0;

  /* Fade-in Animation */
  animation: fadeInScale 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
  transition: all 0.3s ease;
  overflow: hidden; /* Required for gradient sheen */
}

/* OPTION B — gradient sheen hover */
.hero-box::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(255,255,255,0.28), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.hero-box:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 32px rgba(45, 146, 140, 0.25);
}

.hero-box:hover::before {
  opacity: 1;
}

.hero-box:active {
  transform: scale(0.98);
  box-shadow: 0 8px 18px rgba(45, 146, 140, 0.15);
}


/* Staggered animation delays for each box */
.hero-box-1 { animation-delay: 0.05s; }
.hero-box-2 { animation-delay: 0.15s; }
.hero-box-3 { animation-delay: 0.25s; }
.hero-box-4 { animation-delay: 0.35s; }
.hero-box-5 { animation-delay: 0.45s; }
.hero-box-6 { animation-delay: 0.55s; }

/* .hero-box:hover {
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 10px 32px rgba(45, 146, 140, 0.18);
} */

.hero-box p {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0;
  transition: all 0.3s ease;
}

/* Background images with gradient overlay */
.hero-box-1 {
  background-image:
    url('/img/headerCard-1.png');
}
.hero-box-2 {
  background-image:
    url('/img/headerCard-2.png');
}
.hero-box-3 {
  background-image:
    url('/img/headerCard-3.png');
}
.hero-box-4 {
  background-image:
    url('/img/headerCard-4.png');
}
.hero-box-5 {
  background-image:
    url('/img/headerCard-5.png');
}
.hero-box-6 {
  background-image:
    url('/img/headerCard-6.png');
}

/* ------------------------------
   BUTTONS
--------------------------------*/
.primary-button {
  background-color: #2D928C;
  color: white;
  font-weight: 600;
  font-size: 19px;
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0 10px 24px rgba(45, 146, 140, 0.25);
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.primary-button:hover {
  background-color: #257571;
  box-shadow: 0 15px 35px rgba(45, 146, 140, 0.4);
  transform: translateY(-2px);
}

.primary-button:active {
  transform: translateY(0);
}

.secondary-button {
  background-color: #D7DFDF;
  color: #62646B;
  font-weight: 600;
  font-size: 19px;
  padding: 8px 36px;
  border-radius: 6px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.secondary-button:hover {
  background-color: #C5CED0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.secondary-button:active {
  transform: translateY(0);
}
</style>
