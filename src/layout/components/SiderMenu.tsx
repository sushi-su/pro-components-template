import type { FC } from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const SiderMenu: FC = () => {
  return (
    <Sider>
      <Menu
        className="h-full"
        onClick={(e) => {
          console.log(e);
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
