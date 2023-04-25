import axios from "axios";
import { getSession } from "next-auth/react";
import type { AxiosRequestConfig } from "axios";
import { Session } from "next-auth";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

export const api = axios.create(config);

api.interceptors.request.use(
  async (config) => {
    const session = (await getSession()) as Session & { access_token: string };
    const token = session?.access_token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
