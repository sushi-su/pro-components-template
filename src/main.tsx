import React from 'react';
import { render } from 'react-dom';
import '@/styles/global.less';
import App from '@/pages/App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
