export const getInitialState = () => {
  return {
    userName: '用户名',
    userId: '用户 ID',
  };
};

export const layout = {
  logout: () => {}, // do something
};

export { request } from '@/runtime';
