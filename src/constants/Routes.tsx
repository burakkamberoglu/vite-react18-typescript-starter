import Home from '@/pages/home';
import PrivateRoute from '@/helpers/PrivateRoute';
import Page404 from '@/pages/404/page404';
import Login from '@/pages/auth/login';
import TaskDetail from '@/pages/taskDetail';
import { ReactNode } from 'react';
import Layout from '@/components/Layout';

export interface RoutesModel {
  index?: boolean;
  path: string;
  name: string;
  element: ReactNode | null;
  children?: RoutesModel[];
  auth?: boolean;
  wrapper?: boolean;
}

const Routes: RoutesModel[] = [
  {
    path: '/',
    name: 'home',
    element: <Home />,
    auth: true,
    wrapper: true,
  },
  { path: '/task/:id', name: 'task', element: <TaskDetail />, auth: true, wrapper: true },
  {
    path: '/auth/login',
    name: 'login',
    element: <Login />,
  },
  {
    path: '*',
    name: 'notfound',
    element: <Page404 />,
  },
];

const authMap = (routes: RoutesModel[]) =>
  routes.map((route) => {
    if (route?.wrapper) {
      route.element = <Layout>{route.element}</Layout>;
    }
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(Routes);
