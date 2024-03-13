import { createRouter, createWebHashHistory } from "vue-router";
import About from "./view/About.vue";
import Client from "./view/Client.vue";
import Contact from "./view/Contact.vue";
import Home from "./view/Home.vue";
import Porfolio from "./view/Porfolio.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/porfolio",
    name: "porfolio",
    component: Porfolio,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/client",
    name: "client",
    component: Client,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
