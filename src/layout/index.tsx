import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import SiderMenu from '@/layout/components/SiderMenu';
import BaseHeader from '@/layout/components/BaseHeader';
import BaseFooter from '@/layout/components/BaseFooter';
import BaseBreadcrumb from '@/layout/components/BaseBreadcrumb';

const { Content } = Layout;

const BaseLayout = () => {
  return (
    <Layout className="h-full">
      <BaseHeader />

      <Layout>
        <SiderMenu />

        <Layout>
          <Content className="overflow-auto p-4">
            <BaseBreadcrumb />

            <Outlet />

            <BaseFooter />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
