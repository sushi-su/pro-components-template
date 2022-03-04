import type { FC } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const BaseFooter: FC = () => {
  return <Footer className="py-2 text-center">Power by 修行</Footer>;
};

export default BaseFooter;
