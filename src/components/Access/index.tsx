import { FC, Fragment, ReactElement, ReactNode } from 'react';

export const Access: FC<{ accessible: boolean; children: ReactNode; fallback?: ReactElement }> = ({
  accessible,
  children,
  fallback,
}) => {
  if (accessible) return <Fragment key="accessible">{children}</Fragment>;

  if (fallback) return fallback;

  return null;
};
