import { menuRoutes } from '@/routes';
import { accessState } from '@/store';
import { checkPermission, getPermissionRoutes, getRoutesSettingMap } from '@/utils';
import { PageContainer, ProLayout } from '@ant-design/pro-layout';
import { ProLayoutProps } from '@ant-design/pro-layout/es/ProLayout';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { cloneDeep } from 'lodash';
import { ReactNode, useMemo } from 'react';
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const _menuRoutes = cloneDeep(menuRoutes);

const routesSettingMap = getRoutesSettingMap(menuRoutes);

const menuItemRender = (menuItemProps: MenuDataItem, defaultDom: ReactNode) => {
  if (menuItemProps?.path) {
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }

  return defaultDom;
};

const BaseLayout = () => {
  const access = useRecoilValue(accessState);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onMenuHeaderClick = () => {
    navigate('/');
  };

  const route: ProLayoutProps['route'] = useMemo(() => {
    return {
      path: '/',
      routes: getPermissionRoutes(_menuRoutes, access),
    };
  }, [access]);

  const routeSetting = useMemo(() => {
    return routesSettingMap?.[pathname]
      ? { ...routesSettingMap[pathname], access: checkPermission(routesSettingMap[pathname]?.access ?? '', access) }
      : {
          access: false,
          target: '_self',
          headerRender: true,
          footerRender: true,
          menuRender: true,
          menuHeaderRender: true,
          breadcrumbRender: true,
          hideChildrenInMenu: false,
          hideInMenu: false,
        };
  }, [access, pathname]);

  return (
    <ProLayout layout="mix" route={route} onMenuHeaderClick={onMenuHeaderClick} menuItemRender={menuItemRender}>
      <PageContainer>{routeSetting.access ? <Outlet /> : <Navigate to="/403" />}</PageContainer>
    </ProLayout>
  );
};

export default BaseLayout;
