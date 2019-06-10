import Vue from 'vue'
import VueRouter from 'vue-router'

import apiService from './services/apiService'
import store from './store'
import notFound from './pages/404'
import login from './pages/Login'
import register from './pages/Register'
import forgotten from './pages/Forgotten'
import dashboard from './components/Dashboard'
import welcome from './pages/Welcome'
import lobby from './pages/Lobby'
import room from './pages/Room'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: dashboard,
      redirect: '/welcome',
      children: [
        { path: 'login', name: 'login', component: login },
        { path: 'register', name: 'register', component: register },
        { path: 'forgotten', name: 'forgotten', component: forgotten },
        { path: 'welcome', name: 'welcome', component: welcome },
        { path: 'lobby', name: 'lobby', component: lobby },
        { path: 'rooms/:id', name: 'room', component: room }
      ]
    },

    { path: '*', component: notFound }
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.path.match('/welcome|/login|/register')) {
    if (isAuthenticated()) {
      return next();
    } else {
      return next('/welcome');
    }
  } else {
    return next();
  }
});

const isAuthenticated = function() {
  return store.state.user !== null;
};

export default router;
