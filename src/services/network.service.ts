import { AxiosResponse } from 'axios';

interface ErrorResponse {
  message: string | string[];
  code?: number;
}

interface SerializedObject {
  [key: string]: string | number | boolean;
}

const serialize = (obj: SerializedObject): string =>
  Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

const handleResponse = async <T>(
  request: Promise<AxiosResponse<T>>,
  showError = true
): Promise<T> => {
  try {
    const response = await request;
    return response.data || response;
  } catch (error: unknown) {
    const err = (error as { response?: { data: ErrorResponse } })?.response?.data;

    if (showError && err?.message) {
      const errorMessage = Array.isArray(err.message)
        ? err.message.join(', ')
        : err.message;
      alert(errorMessage);
    }

    if (err?.code === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user_role');
      window.location.href = '/';
    }

    throw err;
  }
};

export const networkService = {
  serialize,
  handleResponse,
};