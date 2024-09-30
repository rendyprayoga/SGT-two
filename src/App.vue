<template>
  <RouterView />
  <!-- <div>
    <OurProject />
  </div> -->
</template>

<script>
<<<<<<< HEAD
import OurProject from "./components/OurProject.vue";
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    OurProject,
  },
};
=======
// import OurProject from "./components/OurProject.vue";
import { RouterView } from "vue-router";
// export default {
//   name: "App",
//   components: {
//     OurProject,
//   },
// };
>>>>>>> 0e45d9790a0c1a93f647d2af75c3c4aff3c5a7a0
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: "DM sans", sans-serif;
}

.donate-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
}
.brutalist-button {
  --bg: #fff;
  --text-color: black;
  --hover-text-color: black;

  color: var(--text-color);
  cursor: pointer;
  padding: 0.5em 1em;
  text-decoration: none;
  border: 3px solid var(--text-color);
  position: relative;
  font-size: 2vw;
  background-color: #fff;
  line-height: 1.5em;
  display: inline-block;
}

.brutalist-button:hover {
  color: var(--hover-text-color);
  transform: translate(0.25rem, -0.25rem);
  background-color: rgba(red, green, blue, 0);
  box-shadow: -0.25rem 0.25rem var(--bg);
}

.brutalist-button:active {
  transform: translate(10);
  box-shadow: none;
}
.big-text-work.quote {
  border-left-width: 0.25rem;
  border-left-color: #ff97d0;
  border-left-style: solid;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 4rem;
  padding: 1rem;
  font-style: italic;
  font-weight: 400;
  font-size: 2vw;
}
</style>
<!-- .button::after {
     
    } -->
