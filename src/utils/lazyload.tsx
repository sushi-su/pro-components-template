import loadable from '@loadable/component';
import { Loading } from '@/components';

type loadableProps = Parameters<typeof loadable>;

export const lazyload = (fn: any, options?: loadableProps[1]) => {
  const Component = loadable(fn, { ...options, fallback: <Loading /> });

  Component.preload = fn.requireAsync || fn;

  return <Component />;
};
