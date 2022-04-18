import Footer from '@/layout/Footer';
import HeaderContent from '@/layout/HeaderContent';
import { menuRoutes } from '@/routes';
import { accessState } from '@/store';
import { checkAccess, getAccessMenuRoutes, getRoutesSettingMap } from '@/utils';
import { ProLayout } from '@ant-design/pro-layout';
import type { ProLayoutProps } from '@ant-design/pro-layout/es/ProLayout';
import type { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import type { ReactNode } from 'react';
import { useEffect, useMemo } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const routesSettingMap = getRoutesSettingMap(menuRoutes);

const menuItemRender: ProLayoutProps['menuItemRender'] = (menuItemProps: MenuDataItem, defaultDom: ReactNode) => {
  if (menuItemProps?.path) {
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }

  return defaultDom;
};

const footerRender: ProLayoutProps['footerRender'] = () => {
  return <Footer />;
};

const headerContentRender: ProLayoutProps['headerContentRender'] = () => {
  return <HeaderContent />;
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
      routes: getAccessMenuRoutes(menuRoutes, access),
    };
  }, [access]);

  const routeSetting = useMemo(() => {
    return routesSettingMap?.[pathname]
      ? { ...routesSettingMap[pathname], access: checkAccess(routesSettingMap[pathname]?.access ?? '', access) }
      : {
          access: true,
          target: '_self',
          headerRender: true,
          footerRender: true,
          menuRender: true,
        };
  }, [access, pathname]);

  useEffect(() => {
    if (!routeSetting.access) {
      navigate('/403');
    }
  }, [routeSetting]);

  return (
    <ProLayout
      layout="mix"
      route={route}
      onMenuHeaderClick={onMenuHeaderClick}
      menuItemRender={menuItemRender}
      headerContentRender={headerContentRender}
      menuRender={routeSetting.menuRender === false ? false : undefined}
      headerRender={routeSetting.headerRender === false ? false : undefined}
      footerRender={routeSetting.footerRender === false ? false : footerRender}
    >
      <Outlet />
    </ProLayout>
  );
};

export default BaseLayout;
