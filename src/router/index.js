import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard/Dashboard';
import AnotherComponent from  '@/components/AnotherComponent/AnotherComponent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/another-component',
      name: 'AnotherComponent',
      component: AnotherComponent
    }
  ]
});
