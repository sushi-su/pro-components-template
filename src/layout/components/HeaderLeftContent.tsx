import { Space } from 'antd';
import type { FC } from 'react';
import '@/utils/index';

import LogoSrc from '@/assets/logo.svg';

const HeaderLeftContent: FC = () => {
  return (
    <Space size="middle">
      <img src={LogoSrc} className="h-8" alt="logo" />

      <h1 className="font-medium text-xl font-sans mb-0">Vite React</h1>
    </Space>
  );
};

export default HeaderLeftContent;
