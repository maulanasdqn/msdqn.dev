import type { User } from "next-auth";

export type TLoginData = {
  // TODO fix temporary data type
  // data: any;
  user: TUser & { name: string };
  access_token: string;
  expires_at: string;
} & User;
