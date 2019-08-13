import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

import "./assets/style.scss";
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueAxios, Axios);
Vue.component('vue-draggable-resizable', VueDraggableResizable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
