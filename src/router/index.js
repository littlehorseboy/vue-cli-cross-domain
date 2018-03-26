import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/pages/Hello';
import CtoF from '@/pages/C2F';
import LearnComponent from '@/pages/LearnComponent';
import Count from '@/pages/Count';
import Todo from '@/pages/Todo';
import Shop from '@/pages/Shop';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/c2f',
      name: 'CtoF',
      component: CtoF,
    },
    {
      path: '/learnComponent',
      name: 'LearnComponent',
      component: LearnComponent,
    },
    {
      path: '/count',
      name: 'Count',
      component: Count,
    },
    {
      path: '/todo-list',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/*',
      redirect: '/hello',
    },
  ],
});
