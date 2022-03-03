import type { FC } from 'react';
import { useContext } from 'react';
import { render } from 'react-dom';
import '@/styles/global.less';
import 'antd/dist/antd.variable.min.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ProProvider from '@ant-design/pro-provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000, initialDataUpdatedAt: 200 },
  },
});

const Element: FC = () => {
  return useRoutes(routes);
};

const App: FC = () => {
  const values = useContext(ProProvider);

  return (
    <ProProvider.Provider value={values}>
      <Element />
    </ProProvider.Provider>
  );
};

render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </BrowserRouter>

      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById('root'),
);
