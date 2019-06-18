import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/list",
      name: "home",
      component: Home
    },
    {
      path: "*",
      redirect: function() {
        return "/list";
      }
    }
  ]
});
