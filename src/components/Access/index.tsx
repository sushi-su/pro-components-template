import { createElement, FC, Fragment, ReactElement, ReactNode } from 'react';

/**
 * @visibleName Access
 * @param accessible 权限判断
 * @param children 11
 * @param fallback 11
 */
export const Access: FC<{ accessible: boolean; children: ReactNode; fallback?: ReactElement }> = ({
  accessible = false,
  children,
  fallback,
}) => {
  if (accessible) return createElement(Fragment, null, children);

  if (fallback) return fallback;

  return null;
};
