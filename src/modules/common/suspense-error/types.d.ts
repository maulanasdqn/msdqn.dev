import { ReactNode } from "react";

export interface ISuspenseError {
  children: ReactNode;
  loading: ReactNode;
  error: ReactNode;
}
