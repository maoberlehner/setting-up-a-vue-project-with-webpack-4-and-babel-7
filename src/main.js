import Vue from 'vue';

import router from './router';

import App from './components/App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount(`#app`);
