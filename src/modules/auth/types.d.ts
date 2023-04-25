import { TUser } from "@/modules";
import type { User } from "next-auth";

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginByGooglePayload = {
  access_token: string;
};

export type TLoginData = {
  user: TUser & { name: string };
  access_token: string;
  expires_at: string;
} & User;

export type TLoginResponse = {
  message: string;
  data: TLoginData;
};
