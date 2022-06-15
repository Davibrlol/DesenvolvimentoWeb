import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CarrosView from "../views/CarrosView.vue";
import MotosView from "../views/MotosView.vue"
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/carros",
      name: "Carros",
      component: CarrosView,
    },
    {
      path: "/motos",
      name: "Motos",
      component: MotosView,
    },
  ],
});

export default router;
