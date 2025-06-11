import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://staging.trektoo.com/api";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to headers if present
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, Promise.reject);

// Response interceptor for consistent error handling
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error)
);

export const apiService = {
  get: <T>(url: string, config: AxiosRequestConfig = {}) => 
    axiosInstance.get<T>(url, config),
  post: <T, D>(url: string, data: D, config: AxiosRequestConfig = {}) => 
    axiosInstance.post<T>(url, data, config),
  put: <T, D>(url: string, data: D, config: AxiosRequestConfig = {}) => 
    axiosInstance.put<T>(url, data, config),
  patch: <T, D>(url: string, data: D, config: AxiosRequestConfig = {}) => 
    axiosInstance.patch<T>(url, data, config),
  delete: <T>(url: string, config: AxiosRequestConfig = {}) => 
    axiosInstance.delete<T>(url, config),
};

export default axiosInstance;
