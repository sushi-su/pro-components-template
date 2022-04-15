import { lazyLoad } from '@/utils';
import { ClearOutlined } from '@ant-design/icons';
import type { HTMLAttributeAnchorTarget, Key, ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';

export interface Route extends RouteObject {
  // 菜单上显示的名称，没有则不显示
  name?: string;
  // 菜单上显示的 Icon
  icon?: ReactNode;
  // 权限配置
  access?: Key | Key[];
  // 新页面打开
  target?: HTMLAttributeAnchorTarget;
  // 是否展示顶栏
  headerRender?: boolean;
  // 是否展示页脚
  footerRender?: boolean;
  // 是否展示菜单
  menuRender?: boolean;
  // 是否展示菜单顶栏
  menuHeaderRender?: boolean;
  // 是否展示面包屑
  breadcrumbRender?: boolean;
  // 是否隐藏子菜单
  hideChildrenInMenu?: boolean;
  // 是否隐藏自己和子菜单
  hideInMenu?: boolean;
  children?: Route[];
}

export const menuRoutes = [
  {
    path: 'login',
    element: lazyLoad('login'),
    headerRender: false,
    menuHeaderRender: false,
    footerRender: false,
    breadcrumbRender: true,
  },
  { path: 'list', icon: <ClearOutlined />, name: '列表', element: lazyLoad('list') },
  {
    path: 'table',
    icon: <ClearOutlined />,
    name: '表格',
    children: [{ index: true, path: 'table1', icon: <ClearOutlined />, name: '表格1', element: lazyLoad('table') }],
  },
  {
    path: '403',
    element: lazyLoad('403'),
  },
  {
    path: '*',
    element: lazyLoad('404'),
  },
];

const routes: Route[] = [
  {
    path: '/',
    element: lazyLoad(() => import('./layout/index')),
    children: menuRoutes,
  },
];

export default routes;
