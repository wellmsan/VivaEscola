import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { Icon } from "leaflet"
import store from './store/state'
import "leaflet.icon.glyph"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-loading-overlay/dist/vue-loading.css';

import VueGoogleCharts from "vue-google-charts";
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

Vue.use(BootstrapVue)
Vue.use(VueGoogleCharts)

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
