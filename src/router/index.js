import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Work from "../views/Work.vue";
import Project from "../views/Project.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "0",
    component: Home,
  },
  {
    path: "/about",
    name: "1",
    component: About,
  },
  {
    path: "/work",
    name: "2",
    component: Work,
  },
  {
    path: "/project",
    name: "3",
    component: Project,
  },
  {
    path: "/contact",
    name: "4",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
