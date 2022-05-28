import type { MenuDataItem } from '@ant-design/pro-layout';

const routes: MenuDataItem[] = [
  {
    exact: true,
    path: '/',
    component: '@/pages/home',
  },
  {
    exact: true,
    path: '/login',
    component: '@/pages/login',
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,
    // 不展示菜单顶栏
    menuHeaderRender: false,
    // 隐藏自己和子菜单
    hideInMenu: true,
  },
];

export default routes;
