import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  disabled?: boolean;
  variant?: "ghost" | "solid" | "success" | "error" | "warning";
  type: "button" | "submit" | "reset";
}
