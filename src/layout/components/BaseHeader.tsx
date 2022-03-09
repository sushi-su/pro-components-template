import type { FC } from 'react';
import { Layout } from 'antd';
import HeaderRightContent from '@/layout/components/HeaderRightContent';
import HeaderLeftContent from '@/layout/components/HeaderLeftContent';

const { Header } = Layout;

const BaseHeader: FC = () => {
  return (
    <Header className="h-[60px] leading-[60px]  bg-white border-b flex justify-between items-center">
      <HeaderLeftContent />

      <HeaderRightContent />
    </Header>
  );
};

export default BaseHeader;
