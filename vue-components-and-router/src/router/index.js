import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Counter from '@/components/Counter';
import Greeting from '@/components/Greeting';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/greet',
      name: 'Greeting',
      component: Greeting,
    },
  ],
});
