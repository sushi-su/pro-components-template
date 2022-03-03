import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Space>
        <Button type="link" onClick={() => navigate('/list')}>
          Page 1
        </Button>

        <Button type="link" onClick={() => navigate('/table')}>
          Page 2
        </Button>
      </Space>
      <Outlet />
    </>
  );
};

export default Layout;
