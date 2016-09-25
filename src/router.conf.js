export default (router) => {
  router.map({
    '/': {
      name: 'home',
      component: require('./components/Home'),
    },
    // '/index': {
    //   name: 'index',
    //   component: require('./components/Hello2'),
    // },
  });
};
