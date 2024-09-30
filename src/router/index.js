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
