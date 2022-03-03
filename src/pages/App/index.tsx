import { useState } from 'react';
import logo from '@/assets/logo.svg';
import classes from './index.module.less';
import { Button } from 'antd';

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Button type="link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Button>

          {' | '}

          <Button type="link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </Button>
        </p>
      </header>
    </div>
  );
}

export default Index;
