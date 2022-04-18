import { request } from '@/utils';

export const reqLogin = () => {
  return request({
    url: 'login',
    method: 'post',
  });
};
