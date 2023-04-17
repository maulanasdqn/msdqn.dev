import { FC, ReactElement } from "react";
import { IButton } from "./types";

export const Button: FC<IButton> = ({
  children,
  variant = "solid",
  loading,
  ...props
}): ReactElement => {
  return <button {...props}>{loading ? "Loading.." : children}</button>;
};
