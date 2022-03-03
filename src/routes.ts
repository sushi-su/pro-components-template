import type { RouteObject } from 'react-router-dom';
import { lazyload } from '@/utils';

export const menuRoutes = [
  { path: 'list', element: lazyload(() => import('./pages/list')) },
  { path: 'table', element: lazyload(() => import('./pages/table')) },
];

export const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyload(() => import('./layout')),
    children: menuRoutes,
  },
];
