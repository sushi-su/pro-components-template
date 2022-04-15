import { Button, Result } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const PagePermissionDenied: FC = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您无权访问此页面"
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          返回首页
        </Button>
      }
    />
  );
};

export default PagePermissionDenied;
