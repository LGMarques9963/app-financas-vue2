import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import http from "@/http";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/login",
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Register.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Register.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/HomeView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Profile.vue"),
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const authRequired = !to.meta.public;
  const token = localStorage.getItem("token");
  if (authRequired) {
    http.post("/login.php", { token: token }).then((response) => {
      if (response.status == 200) {
        return next();
      } else {
        return next({ name: "login" });
      }
    }).catch((error) => {
      return next({ name: "login" });
    });
  }
  next();
});

export default router;
