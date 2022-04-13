import { ProLayout } from '@ant-design/pro-layout';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <ProLayout>
      <Outlet />
    </ProLayout>
  );
};

export default BaseLayout;
