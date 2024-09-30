<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import Donate from "../components/Donate.vue";
// import OurProject from "../views/WeAre.vue";

const routes = [
  {
    path: "/",
    name: "Section",
    component: async () => await import("../views/Section.vue"),
  },

  { path: "/donate", name: "Donate", component: async () => await Donate },
  //   {
  //     path: "/sectionthree",
  //     name: "SectionThree",
  //     component: async () => import("../views/SectionThree.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
=======
import { createRouter, createWebHistory } from "vue-router";
import Donate from "../components/Donate.vue";
// import OurProject from "../views/WeAre.vue";

const routes = [
  {
    path: "/",
    name: "Section",
    component: async () => await import("../views/Section.vue"),
  },

  { path: "/donate", name: "Donate", component: async () => await Donate },
  //   {
  //     path: "/sectionthree",
  //     name: "SectionThree",
  //     component: async () => import("../views/SectionThree.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
>>>>>>> 0e45d9790a0c1a93f647d2af75c3c4aff3c5a7a0
