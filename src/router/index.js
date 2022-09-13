import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const TeamsView = () => import("@/views/TeamsView.vue");
const JobsResultVue = () =>
  import(/* webpackChunkName: "jobs"*/ "@/views/JobsResultVue.vue");
const JobView = () =>
  import(/* webpackChunkName: "jobs"*/ "@/views/JobView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/teams",
    name: "TeamsView",
    component: TeamsView,
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: JobsResultVue,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
