import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { ReactNode } from 'react';
import { createElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

dayjs.locale('zh-cn');

const queryClient = new QueryClient();

export { request } from '@/runtime';

export const getInitialState = async () => {
  return {
    userName: '用户名',
    userId: '用户 ID',
  };
};

export function dataflowProvider(container: ReactNode) {
  return createElement(QueryClientProvider, { client: queryClient }, container);
}
