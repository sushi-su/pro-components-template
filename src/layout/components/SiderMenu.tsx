import type { FC } from 'react';
import { Layout, Menu } from 'antd';
import { menuRoutes } from '@/routes';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const { Item } = Menu;

const SiderMenu: FC = () => {
  const navigate = useNavigate();

  const menuItems = menuRoutes.map(({ path, name, icon }) => (
    <Item
      icon={icon}
      key={path}
      onClick={() => {
        if (path) navigate(path);
      }}
    >
      {name}
    </Item>
  ));

  return (
    <Sider className="w-[200px]">
      <Menu
        className="h-full w-[200px]"
        onClick={(e) => {
          console.log(e);
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {menuItems}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
