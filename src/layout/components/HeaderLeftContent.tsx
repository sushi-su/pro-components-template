import { Space } from 'antd';
import type { FC } from 'react';
import '@/utils/index';

import LogoSrc from '@/assets/logo.svg';

const HeaderLeftContent: FC = () => {
  return (
    <Space className="flex items-center" size="middle">
      <img src={LogoSrc} className="h-7" alt="logo" />

      <h1 className="font-medium text-lg font-sans">Vite React</h1>
    </Space>
  );
};

export default HeaderLeftContent;
