import { menuRoutes } from '@/routes';
import { accessState } from '@/store';
import { checkAccess, getAccessMenuRoutes, getRoutesSettingMap } from '@/utils';
import { PageContainer, ProLayout } from '@ant-design/pro-layout';
import { ProLayoutProps } from '@ant-design/pro-layout/es/ProLayout';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { ReactNode, useEffect, useMemo } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

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
          menuHeaderRender: true,
          breadcrumbRender: true,
          hideChildrenInMenu: false,
          hideInMenu: false,
        };
  }, [access, pathname]);

  useEffect(() => {
    if (!routeSetting.access) {
      navigate('/403');
    }
  }, [routeSetting]);

  return (
    <ProLayout layout="mix" route={route} onMenuHeaderClick={onMenuHeaderClick} menuItemRender={menuItemRender}>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ProLayout>
  );
};

export default BaseLayout;
