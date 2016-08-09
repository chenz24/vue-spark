import Vue from 'vue';
import App from './App';
import NProgress from 'nprogress';
import VueRouter from 'vue-router';
import configRouter from './router.conf';
import './transitions';

Vue.use(VueRouter);
const router = new VueRouter({
  hashbang: false,
});
configRouter(router);

router.beforeEach(({ next }) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

router.start(Vue.extend(App), 'app');
