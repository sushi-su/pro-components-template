import { menuRoutes } from '@/routes';
import { accessState } from '@/store';
import { getRoutesSettingMap } from '@/utils';
import { PageContainer, ProLayout } from '@ant-design/pro-layout';
import { MenuDataItem } from '@ant-design/pro-layout/lib/typings';
import { cloneDeep } from 'lodash';
import { ReactNode, useEffect, useMemo } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const onMenuHeaderClick = () => {
    navigate('/');
  };

  const route = useMemo(() => {
    console.log(access);

    return {
      path: '/',
      routes: _menuRoutes,
    };
  }, [access]);

  useEffect(() => {
    console.log(routesSettingMap);
  }, [routesSettingMap]);

  return (
    <ProLayout layout="mix" route={route} onMenuHeaderClick={onMenuHeaderClick} menuItemRender={menuItemRender}>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ProLayout>
  );
};

export default BaseLayout;
