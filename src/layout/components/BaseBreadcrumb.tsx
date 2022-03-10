import { Breadcrumb } from 'antd';

const { Item } = Breadcrumb;

const BaseBreadcrumb = () => {
  return (
    <Breadcrumb className="mb-4">
      <Item>Home</Item>

      <Item>
        <a href="">Application Center</a>
      </Item>

      <Item>
        <a href="">Application List</a>
      </Item>

      <Item>An Application</Item>
    </Breadcrumb>
  );
};

export default BaseBreadcrumb;
