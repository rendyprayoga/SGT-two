<template>
  <div class="section-hero">
    <transition name="fade" mode="out-in">
      <img
        v-if="currentImage"
        :key="currentImage"
        :src="currentImage"
        alt="Animal Logo"
        class="animal-logo"
      />
    </transition>

    <div class="text-content">
      <h1 class="hero-title">
        Innovative<br />Solutions<br />for<br />Animals
      </h1>
      <div class="description-container">
        <p class="description">charity organization</p>
      </div>
      <div class="medsos-container">
        <div class="medsos">
          <a href="#" class="fa-brands fa-youtube"></a>
          <a href="#" class="fa-brands fa-instagram"></a>
          <a href="#" class="fa-brands fa-facebook-f"></a>
          <a href="#">
            <img
              src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg"
              loading="lazy"
              alt="Patreon Icon"
              class="social-icon-image"
          /></a>
          <a href="#"
            ><img
              src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg"
              loading="lazy"
              alt="Telegram Icon"
              class="social-icon-image"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      images: [
        "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg",
        "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg",
      ],
      currentIndex: 0,
      currentImage: null,
    };
  },
  mounted() {
    this.currentImage = this.images[this.currentIndex];

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 3000);

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: "#app",
      duration: 200,
    })
      .setClassToggle(".animal-logo", "active")
      .addTo(controller);
  },
};
</script>
