import type { FC } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const BaseHeader: FC = () => {
  return <Header className="h-[48px] leading-[48px] bg-white border-b">Header</Header>;
};

export default BaseHeader;
