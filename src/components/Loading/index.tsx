import type { CSSProperties, FC } from 'react';
import { Spin } from 'antd';

const style: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};

const Loading: FC = () => <Spin size="large" style={style} />;

export default Loading;
