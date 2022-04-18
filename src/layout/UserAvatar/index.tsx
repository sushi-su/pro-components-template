import { Avatar, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const UserAvatar = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item onClick={logout}>退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Avatar src="https://joeschmoe.io/api/v1/random" />
    </Dropdown>
  );
};

export default UserAvatar;
