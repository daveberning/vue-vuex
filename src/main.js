import Vue from 'vue';
import App from './App';
import router from './router';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
