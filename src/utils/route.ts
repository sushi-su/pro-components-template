import { Route } from '@/routes';

export type RouteSettings = Pick<
  Route,
  | 'target'
  | 'headerRender'
  | 'footerRender'
  | 'menuRender'
  | 'menuHeaderRender'
  | 'breadcrumbRender'
  | 'hideChildrenInMenu'
  | 'hideInMenu'
>;

export const getRoutesSettingMap = (routes: Route[], path = ''): Record<string, RouteSettings> => {
  const result: Record<string, RouteSettings> = {};

  routes.forEach((item) => {
    let routePath = '';

    if (item.path) {
      routePath = `${path}/${item.path}`;

      const {
        target = '_self',
        headerRender = true,
        footerRender = true,
        menuRender = true,
        menuHeaderRender = true,
        breadcrumbRender = true,
        hideChildrenInMenu = false,
        hideInMenu = false,
      } = item;

      result[routePath] = {
        target,
        headerRender,
        footerRender,
        menuRender,
        menuHeaderRender,
        breadcrumbRender,
        hideChildrenInMenu,
        hideInMenu,
      };
    }

    if (item.children) {
      Object.assign(result, getRoutesSettingMap(item.children, routePath));
    }
  });

  return result;
};
