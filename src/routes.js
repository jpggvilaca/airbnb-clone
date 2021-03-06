import React from 'react';
import Loadable from 'react-loadable';

import Loading from './components/Loading';

const AsyncHome = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
});

const AsyncProfile = Loadable({
  loader: () => import('./pages/Profile'),
  loading: Loading,
});

const AsyncLoginForm = Loadable({
  loader: () => import('./components/LoginForm'),
  loading: Loading,
});

const AsyncHouses = Loadable({
  loader: () => import('./components/Houses'),
  loading: Loading,
});

export const routes = [
  {
    path: "/",
    exact: true,
    name: 'Home',
    isProtected: false,
    component: () => <AsyncHome />
  },
  {
    path: "/profile",
    exact: true,
    name: 'Profile',
    isProtected: true,
    component: () => <AsyncProfile />
  },
  {
    path: "/houses",
    exact: true,
    name: 'Houses',
    isProtected: false,
    component: () => <AsyncHouses />
  },

  // LOGIN ROUTE
  {
    path: "/login",
    exact: true,
    isProtected: false,
    component: () => <AsyncLoginForm />
  }
];