import type { RouteObject } from 'react-router-dom';
import { lazyload } from '@/utils';
import type { HTMLAttributeAnchorTarget, Key, ReactNode } from 'react';
import { ClearOutlined } from '@ant-design/icons';

interface Route extends RouteObject {
  // 菜单上显示的名称，没有则不显示
  name?: string;
  // 菜单上显示的 Icon
  icon?: ReactNode;
  // 权限配置
  access?: Key | Key[];
  // 新页面打开
  target?: HTMLAttributeAnchorTarget;
  // 不展示顶栏
  headerRender?: boolean;
  // 不展示页脚
  footerRender?: boolean;
  // 不展示菜单
  menuRender?: boolean;
  // 不展示菜单顶栏
  menuHeaderRender?: boolean;
  // 不展示面包屑
  breadcrumbRender?: boolean;
  // 隐藏子菜单
  hideChildrenInMenu?: boolean;
  // 隐藏自己和子菜单
  hideInMenu?: boolean;
  children?: Route[];
}

export const menuRoutes: Route[] = [
  {
    path: '/login',
    element: lazyload(() => import('./pages/login')),
    headerRender: false,
    menuHeaderRender: false,
    footerRender: false,
    breadcrumbRender: true,
  },
  { path: '/list', icon: <ClearOutlined />, name: '列表', element: lazyload(() => import('./pages/list')) },
  { path: '/table', icon: <ClearOutlined />, name: '表格', element: lazyload(() => import('./pages/table')) },
];

export const routes: Route[] = [
  {
    path: '/',
    element: lazyload(() => import('./layout')),
    children: menuRoutes,
  },
];
