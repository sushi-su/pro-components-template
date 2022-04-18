import { lazyLoad } from '@/utils';
import { ClearOutlined } from '@ant-design/icons';
import type { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';

export interface Route extends RouteObject {
  // 菜单上显示的名称，没有则不显示
  name?: string;
  // 菜单上显示的 Icon
  icon?: ReactNode;
  // 权限配置
  access?: string | string[];
  // 新页面打开
  target?: HTMLAttributeAnchorTarget;
  // 是否展示顶栏
  headerRender?: boolean;
  // 是否展示页脚
  footerRender?: boolean;
  // 是否展示菜单
  menuRender?: boolean;

  children?: Route[];
}

export const menuRoutes = [
  {
    path: 'login',
    element: lazyLoad('login'),
    headerRender: false,
    footerRender: false,
    menuRender: false,
  },
  { path: 'list', icon: <ClearOutlined />, name: '列表', element: lazyLoad('list') },
  {
    path: 'table',
    icon: <ClearOutlined />,
    name: '表格',
    children: [
      {
        index: true,
        path: 'table1',
        access: 'table1',
        name: '表格1',
        element: lazyLoad('table'),
      },
    ],
  },
];

const routes: Route[] = [
  {
    path: '/',
    element: lazyLoad(() => import('./layout/index')),
    children: [
      ...menuRoutes,
      {
        path: '403',
        element: lazyLoad('403'),
      },
      {
        path: '*',
        element: lazyLoad('404'),
      },
    ],
  },
];

export default routes;
