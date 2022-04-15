import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect: FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  });

  return null;
};
