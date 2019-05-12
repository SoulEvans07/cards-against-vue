import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash'

import store from './store'
import notFound from './pages/404'
import login from './pages/Login'
import register from './pages/Register'
import forgotten from './pages/Forgotten'
import dashboard from './components/Dashboard'
import welcome from './pages/Welcome'
import lobby from './pages/Lobby'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/forgotten', component: forgotten },
    {
      path: '/',
      component: dashboard,
      redirect: '/welcome',
      children: [
        { path: 'welcome', component: welcome },
        { path: 'lobby', component: lobby }
      ]
    },

    { path: '*', component: notFound }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith('/dashboard')) {
//     if (!isAuthenticated()) {
//       next('/login');
//     } else {
//       next();
//     }
//   } else {
//     if (!to.path.startsWith('/dashboard') && isAuthenticated()) {
//       next('/dashboard');
//     } else {
//       next();
//     }
//   }
// });
//
// const isAuthenticated = () => {
//   let user = store.state.user;
//   if (_.isEmpty(user) || !user) {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) {
//       console.log("user logged in: " + JSON.stringify(user));
//       store.dispatch('login', user);
//     }
//   }
//
//   return !_.isEmpty(user) && user;
// };

export default router;
