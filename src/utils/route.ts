import { Route } from '@/routes';
import { Route as MenuRoute } from '@ant-design/pro-layout/lib/typings';
import { isArray } from 'lodash';

export type RouteSettings = Required<
  Pick<
    Route,
    | 'access'
    | 'target'
    | 'headerRender'
    | 'footerRender'
    | 'menuRender'
    | 'menuHeaderRender'
    | 'breadcrumbRender'
    | 'hideChildrenInMenu'
    | 'hideInMenu'
  >
>;

export const getRoutesSettingMap = (routes: Route[], path = ''): Record<string, RouteSettings> => {
  const result: Record<string, RouteSettings> = {};

  routes.forEach((item) => {
    let routePath = '';

    if (item.path) {
      routePath = `${path}/${item.path}`;

      const {
        access = '',
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
        access,
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

export const checkPermission = (routeAccess: string | string[], userAccess: Record<string, boolean>) => {
  if (!routeAccess) {
    return true;
  }

  return isArray(routeAccess)
    ? routeAccess.findIndex((accessItem) => userAccess?.[accessItem] ?? false) > 0
    : userAccess?.[routeAccess] ?? false;
};

export const getPermissionRoutes = (routes: Route[], access: Record<string, boolean>): MenuRoute[] => {
  const result: MenuRoute[] = [];

  routes.forEach((item) => {
    const { icon, name = '', path, children, access: menuAccess } = item;

    if (!name) {
      return;
    }

    const menuItem = {
      icon,
      name,
      path,
    };

    if (children) {
      if (menuAccess && !checkPermission(menuAccess, access)) {
        return;
      }

      const routes = getPermissionRoutes(children, access);

      if (routes.length) {
        result.push({
          ...menuItem,
          routes,
        });
      }
      return;
    }

    if (!menuAccess) {
      result.push(menuItem);
      return;
    }

    if (checkPermission(menuAccess, access)) {
      result.push(item);
      return;
    }
  });

  return result;
};
