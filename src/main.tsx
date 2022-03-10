import type { FC } from 'react';
import { useContext } from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.variable.min.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ProProvider from '@ant-design/pro-provider';
import './styles/global.css';

const queryClient = new QueryClient();

const Element: FC = () => useRoutes(routes);

const App: FC = () => {
  const proComponentContext = useContext(ProProvider);

  return (
    <ConfigProvider>
      <ProProvider.Provider value={proComponentContext}>
        <Element />
      </ProProvider.Provider>
    </ConfigProvider>
  );
};

render(
  <BrowserRouter>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />

        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root'),
);
