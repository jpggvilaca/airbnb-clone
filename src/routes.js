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

export const routes = [
  {
    path: "/",
    exact: true,
    name: 'Home',
    component: () => <AsyncHome />
  },
  {
    path: "/profile",
    exact: true,
    name: 'Profile',
    component: () => <AsyncProfile />
  }
];