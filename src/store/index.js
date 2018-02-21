import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import dashboardStore from '@/components/Dashboard/actions';
import anotherStore from '@/components/AnotherComponent/actions';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // should be unique for each application
  storage: window.localStorage, // or window.sessionStorage or localForage
})

const store = new Vuex.Store({
  modules: {
    dashboard: dashboardStore, // Dashboard/actions.js
    another: anotherStore // AnotherComponent/actions.js
  },
  plugins: [vuexLocalStorage.plugin]
});

export default store;
