import { FC, ReactElement } from "react";
import { IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({
  children,
  variant = "solid",
  loading,
  ...props
}): ReactElement => {
  return <button {...props}>{loading ? "Loading.." : children}</button>;
};
