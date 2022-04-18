import '@/mock';
import routes from '@/routes';
import '@/styles/global.css';
import ProProvider from '@ant-design/pro-provider';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';
import type { FC } from 'react';
import { StrictMode, useContext } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

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

const Container = document.getElementById('root');

if (Container) {
  const root = ReactDOMClient.createRoot(Container);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <App />

            <ReactQueryDevtools position="bottom-right" />
          </QueryClientProvider>
        </RecoilRoot>
      </BrowserRouter>
    </StrictMode>,
  );
}
