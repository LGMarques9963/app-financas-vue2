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
      import(/* webpackChunkName: "Signup" */ "../views/Register.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "Signup" */ "../views/Register.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/HomeView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
  },
  {
    path: "/cards",
    name: "cards",
    component: () =>
      import(/* webpackChunkName: "Cards" */ "../views/CardView.vue"),
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
        //this.$store.dispatch("updateUserLoggedIn", true);
        return next();
      } else {
        //this.$store.dispatch("updateUserLoggedIn", false);
        return next({ name: "login" });
      }
    }).catch((error) => {
      //this.$store.dispatch("setUserLoggedIn", false);
      return next({ name: "login" });
    });
  }
  next();
});

export default router;
