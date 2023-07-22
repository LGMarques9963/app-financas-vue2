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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
      import(/* webpackChunkName: "login" */ "../views/RegisterView.vue"),
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
