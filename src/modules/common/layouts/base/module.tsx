import { FC, ReactElement } from "react";
import { ICommonLayout } from "../types";
import { Outlet } from "react-router-dom";
import { useBaseLayout } from "./hooks";

export const BaseLayout: FC<ICommonLayout> = ({ children, bg, justify }): ReactElement => {
  const { getBGColor, getJustify, getPadding, getHeight } = useBaseLayout();
  return (
    <section
      className={`flex flex-col items-center w-full ${getHeight} justify-${
        justify || getJustify
      } ${bg} ${getBGColor} ${getPadding}`}
    >
      {children || <Outlet />}
    </section>
  );
};
