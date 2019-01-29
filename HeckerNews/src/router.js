import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top,
    },
    {
      path: '/News',
      name: 'News',
      component: () => import(/* webpackChunkName: "News" */ './views/News.vue'),
    },
    {
      path: '/Best',
      name: 'Best',
      component: () => import(/* webpackChunkName: "Best" */ './views/Best.vue'),
    },
    {
      path: '/Ask',
      name: 'Ask',
      component: () => import(/* webpackChunkName: "Ask" */ './views/Ask.vue'),
    },
    {
      path: '/Job',
      name: 'Job',
      component: () => import(/* webpackChunkName: "Job" */ './views/Job.vue'),
    },
    {
      path: '/Show',
      name: 'Show',
      component: () => import(/* webpackChunkName: "Show" */ './views/Show.vue'),
    },
  ],
});
