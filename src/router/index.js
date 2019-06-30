import Vue from 'vue';
import Router from 'vue-router';
import WelcomePage from '@/pages/WelcomePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage,
    },
  ],
});
