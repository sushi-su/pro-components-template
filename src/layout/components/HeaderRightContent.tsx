import { Avatar, Badge, Dropdown, Menu, Space } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import classes from './index.module.less';
import classNames from 'classnames';

const Notice: FC = () => {
  return (
    <Badge count={2} className="mt-[16px]">
      <Dropdown className={classNames(classes.iconWarp, 'w-[32px]')} overlay={<>11</>} overlayClassName="bg-white">
        <BellOutlined />
      </Dropdown>
    </Badge>
  );
};

const User: FC = () => {
  const menu = (
    <Menu>
      <Menu.Divider />

      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div className={classNames(classes.iconWarp, 'px-3')}>
        <Avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />

        <span className="ml-1.5">管理员</span>
      </div>
    </Dropdown>
  );
};

const HeaderRightContent = () => {
  return (
    <Space size="middle">
      <Notice />

      <User />
    </Space>
  );
};

export default HeaderRightContent;
