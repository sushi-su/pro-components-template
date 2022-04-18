import type { API } from '@/typings';
import { message, notification } from 'antd';
import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 4,
  REDIRECT = 9,
}

type Request = <D>(config: AxiosRequestConfig) => Promise<API.Response<D>>;

const handleRequestError = async (errorShowType: ErrorShowType, msg: string) => {
  const navigate = useNavigate();
  switch (errorShowType) {
    case ErrorShowType.SILENT:
      // do nothing
      break;

    case ErrorShowType.WARN_MESSAGE:
      message.warn(msg);
      break;

    case ErrorShowType.NOTIFICATION:
      notification.warn({
        message: msg,
      });
      break;

    case ErrorShowType.ERROR_MESSAGE:
      message.error(msg);
      break;

    case ErrorShowType.REDIRECT:
      message.error(msg);
      navigate('/login');
      break;

    default:
      break;
  }
};

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000 * 3,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export const request: Request = async (config) => {
  const { data } = await instance(config);

  return data;
};
