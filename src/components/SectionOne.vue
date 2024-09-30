<template>
  <div
    class="section-hero flex-column d-flex min-vh-100 w-100 justify-content-center align-items-center"
  >
    <!-- Image logo animation -->
    <div class="row">
      <div class="col d-flex justify-content-end align-items-center">
        <transition name="fade" mode="out-in">
          <img
            v-if="currentImage"
            :key="currentImage"
            :src="currentImage"
            alt="Animal Logo"
            width="200px"
            height="200px"
            class="object-fit-contain"
          />
        </transition>
      </div>
      <div class="col">
        <h1 class="fw-bold hero-title">Innovative Solutions for Animals</h1>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex flex-column align-items-center">
        <div class="description-container row">
          <p class="description">charity organization</p>
        </div>

        <div class="medsos-container row">
          <div class="medsos">
            <a href="#" class="fa-brands fa-youtube"></a>
            <a href="#" class="fa-brands fa-instagram"></a>
            <a href="#" class="fa-brands fa-facebook-f"></a>
            <a href="#"
              ><img
                src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg"
                loading="lazy"
                alt="Patreon Icon"
            /></a>
            <a href="#"
              ><img
                src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg"
                loading="lazy"
                alt="Telegram Icon"
                style="object-fit: cover"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div ref="lottieContainer" class="lottie-animation row"></div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import ScrollMagic from "scrollmagic";

export default {
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

    // Lottie animation
    lottie.loadAnimation({
      container: this.$refs.lottieContainer, // Use the container we referenced in the template
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264667375fa5a071b2e5cad_lottieflow-scroll-down-03-000000-easey.json", // Path to your Lottie JSON
    });
  },
};
</script>

<style>
.section-hero {
  background-color: #fcf944;
}

.animal-logo {
  width: 200px;
  height: 40vw;

  margin-bottom: 120px;
  object-fit: contain;
}

.hero-title {
  color: #000;

  width: 65%;
  font-size: 4.1vw;
}

.description {
  font-size: 1.5rem;
  color: #000;
  padding-top: 20px;
  margin-top: 10px;
  margin-left: 0.3em;
}

.medsos {
  margin-left: 10px;
  font-size: 40px;
}

.medsos a {
  margin: 0 10px;
  color: #000;
  text-decoration: none;
}

.lottie-animation {
  padding-top: 100px;
  width: 80px;
}
</style>
