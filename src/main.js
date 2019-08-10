
// Vue
import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'

// PWA Only
import './registerServiceWorker'

// UI
import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import Datepicker from 'vuejs-datepicker'
//import PortalVue from 'portal-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
