<template>
  <SectionOne />

  <SectionTwo />
  <OurProject />
  <div class="donate-container">
    <RouterLink to="/donate" class="brutalist-button">Donate</RouterLink>
  </div>
</template>
<script setup>
import OurProject from "@/components/OurProject.vue";
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import { RouterView, RouterLink } from "vue-router";
</script>
