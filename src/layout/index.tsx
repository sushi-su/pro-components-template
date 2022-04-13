import { ProLayout } from '@ant-design/pro-layout';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <ProLayout layout="mix">
      <Outlet />
    </ProLayout>
  );
};

export default BaseLayout;
