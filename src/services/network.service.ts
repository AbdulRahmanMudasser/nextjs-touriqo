// services/networkService.ts

import { apiService } from "./api.service";

const serialize = (obj: Record<string, any>): string =>
  Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");

const handleResponse = async (
  request: Promise<any>,
  showError = true
): Promise<any> => {
  try {
    const response = await request;
    return response.data.data || response.data || response;
  } catch (error: any) {
    const err = error.response?.data;

    if (showError && err?.message) {
      const errorMessage = Array.isArray(err.message)
        ? err.message.join(", ")
        : err.message;
      alert(errorMessage);
    }

    if (error.response?.code === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user_role");
      window.location.href = "/";
    }

    throw err;
  }
};

// 🔄 Export higher-level API
export const networkService = {
 
  serialize,
};