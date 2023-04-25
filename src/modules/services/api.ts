import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { TokenService } from "./token";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

export const api = axios.create(config);

api.interceptors.request.use(
  async (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
