import { FC, ReactElement } from "react";
import { ICommonLayout } from "../types";
import { Outlet } from "react-router-dom";
import { useBGColor, useJustify } from "./hooks";

export const BaseLayout: FC<ICommonLayout> = ({
  children,
  bg,
  justify,
}): ReactElement => {
  const { getBGColor } = useBGColor();
  const { getJustify } = useJustify();
  console.log(getBGColor);
  return (
    <section
      className={`flex flex-col items-center w-full h-screen justify-${
        justify || getJustify
      } ${bg} ${getBGColor}`}
    >
      {children || <Outlet />}
    </section>
  );
};
