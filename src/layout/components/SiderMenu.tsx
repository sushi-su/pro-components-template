import type { FC } from 'react';
import { Layout, Menu } from 'antd';
import { menuRoutes } from '@/routes';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const { Item } = Menu;
const SiderMenu: FC = () => {
  const navigate = useNavigate();

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
        {menuRoutes.map(({ path, name }) => (
          <Item
            key={path}
            onClick={() => {
              if (path) navigate(path);
            }}
          >
            {name}
          </Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
