import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Axios from 'axios'
import VueFetch from 'vue-fetch'

Vue.prototype.$http = Axios;
 
Vue.use(VueFetch, {
  polyfill: true   //should vue-fetch load promise polyfill, set to false to use customer polyfill
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
  