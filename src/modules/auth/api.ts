import { TLoginPayload, TLoginResponse, TLoginByGooglePayload } from "./types";
import { api } from "@/modules";

export const loginRequest = async (payload: TLoginPayload): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>("/auth/login", payload);
  return data;
};

export const loginByGoogleRequest = async (
  payload: TLoginByGooglePayload,
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>("/auth/login-by-google", payload);
  return data;
};
