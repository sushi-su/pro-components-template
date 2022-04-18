import UserAvatar from '@/layout/UserAvatar';
import { Space } from 'antd';

const HeaderContent = () => {
  return (
    <div className="float-right">
      <Space>
        <UserAvatar />
      </Space>
    </div>
  );
};

export default HeaderContent;
