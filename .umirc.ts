import { defineConfig } from '@umijs/max';
import routes from './config/routes';

export default defineConfig({
  npmClient: 'pnpm',
  tailwindcss: {},
  layout: {},
  antd: {},
  request: {},
  model: {},
  initialState: {},
  moment2dayjs: {},
  access: {},
  routes,
});
