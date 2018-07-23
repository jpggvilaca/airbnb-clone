import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';

export const routes = [
  {
    path: "/",
    exact: true,
    name: 'Home',
    component: () => <Home />
  },
  {
    path: "/profile",
    exact: true,
    name: 'Profile',
    component: () => <Profile />
  }
];