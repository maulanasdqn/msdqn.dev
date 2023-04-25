import type { AxiosError } from "axios";

export type TUser = {
  name: string;
  email: string;
  phone: string;
  role: string;
};

export type TCommonErrorData = {
  code: number;
  message: string;
};

export type TCommonError = AxiosError<TCommonErrorData>;

export type TSession = {
  accessToken: string;
  user: TUser & {
    isLoggedIn: boolean;
  };
};

export interface IBaseEntity {
  id?: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
  deletedAt?: Date;
}
