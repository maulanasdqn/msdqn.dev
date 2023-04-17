import { FC, ReactElement } from "react";
import { ILabelProps } from "./types";

export const Label: FC<ILabelProps> = ({ ...props }): ReactElement => {
  return <label {...props}>{props.children}</label>;
};
