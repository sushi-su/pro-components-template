import type { FC } from 'react';
import React from 'react';
import { render } from 'react-dom';
import '@/styles/global.less';
import 'antd/dist/antd.variable.min.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';

const App: FC = () => {
  return useRoutes(routes);
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
