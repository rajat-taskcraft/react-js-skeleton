import React from 'react';
import loadable from '../utils/loadable';
import { SyncLoading } from '../components';

export const Dashboard = loadable(() => import('./Dashboard'), {
  fallback: <SyncLoading />,
});
export const Home = loadable(() => import('./Home'), {
  fallback: <SyncLoading />,
});
export const SignIn = loadable(() => import('./UserSignUp/SignIn'), {
  fallback: <SyncLoading />,
});
export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <SyncLoading />,
});
