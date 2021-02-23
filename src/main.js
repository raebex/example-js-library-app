import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import hljs from "highlight.js";

Vue.config.productionTip = false;
Vue.use(hljs.vuePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
