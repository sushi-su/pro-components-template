import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import SiderMenu from '@/layout/components/SiderMenu';
import BaseHeader from '@/layout/components/BaseHeader';
import BaseFooter from '@/layout/components/BaseFooter';
import BaseBreadcrumb from '@/layout/components/BaseBreadcrumb';
import classNames from 'classnames';

const { Content } = Layout;

const useLayoutSetting = () => {
  const route = useLocation();
  console.log(route);
  const headerRender = false;
  const footerRender = false;
  const menuRender = false;
  const breadcrumbRender = false;
  const padding = headerRender || footerRender || menuRender || breadcrumbRender;

  return { headerRender, footerRender, menuRender, breadcrumbRender, padding };
};

const BaseLayout = () => {
  const { headerRender, footerRender, menuRender, breadcrumbRender, padding } = useLayoutSetting();

  return (
    <Layout className="h-full">
      {headerRender && <BaseHeader />}

      <Layout>
        {menuRender && <SiderMenu />}

        <Layout>
          <Content className={classNames('overflow-auto', padding ? 'p-4' : '')}>
            {breadcrumbRender && <BaseBreadcrumb />}

            <Outlet />

            {footerRender && <BaseFooter />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
