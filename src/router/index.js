import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsResultVue from "@/views/JobsResultVue.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobsResultVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
