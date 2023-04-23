import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}
