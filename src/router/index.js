import Vue from "vue";
import VueRouter from "vue-router";

//Pages

import Home from "@/pages/Home";
import Characters from "@/pages/Characters";
import CharactersSingle from "@/pages/CharactersSingle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/characters/:id",
    name: "CharactersSingle",
    component: CharactersSingle,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
