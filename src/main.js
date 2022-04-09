import Vue from "vue";
import App from "./App.vue";
import "@/assets/app.css";

import VueParticles from "vue-particles";

import Notifications from "vue-notification";

Vue.use(Notifications);

Vue.use(VueParticles);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
