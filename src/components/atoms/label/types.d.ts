import { ReactNode, LabelHTMLAttributes } from "react";

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}
