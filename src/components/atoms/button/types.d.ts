import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  disabled?: boolean;
  variant?: "ghost" | "solid" | "success" | "error" | "warning";
  type: "button" | "submit" | "reset";
}
