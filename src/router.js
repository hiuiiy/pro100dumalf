import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("./pages/Home.vue");
const list = () => import("./pages/list.vue");
const search = () => import("./pages/search.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/list", component: list },
  { path: "/search", component: search }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
