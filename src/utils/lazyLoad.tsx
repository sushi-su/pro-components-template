import { Loading } from '@/components';
import loadable from '@loadable/component';

type LazyLoadInput = string | (() => Promise<any>);

export const lazyLoad = (lazyLoadInput: LazyLoadInput) => {
  const load = typeof lazyLoadInput === 'string' ? () => import(`../pages/${lazyLoadInput}/index.tsx`) : lazyLoadInput;

  const Component = loadable(load, { fallback: <Loading /> });

  Component.preload = load;

  return <Component />;
};
