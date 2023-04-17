import { ChangeEventHandler, ReactNode } from "react";

export interface IInputTextProps {
  type?: "text" | "password" | "email";
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
  labelClassName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  status?: "success" | "error" | "warning" | "none";
  message?: string;
  variant: "lg" | "md" | "sm";
  icon?: ReactNode | StaticImageData;
  prepend?: ReactNode;
  append?: ReactNode;
  prependColor?: string;
  appendColor?: string;
  hint?: string;
}
