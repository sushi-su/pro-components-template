import React from 'react';
import { render } from 'react-dom';
import '@/styles/global.less';
import App from '@/pages/App';
import 'antd/dist/antd.variable.min.css';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
