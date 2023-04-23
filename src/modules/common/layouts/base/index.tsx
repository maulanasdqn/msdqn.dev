import { FC, ReactElement } from "react";
import { ICommonLayout } from "../types";

export const BaseLayout: FC<ICommonLayout> = ({
  children,
  bg = "bg-white",
}): ReactElement => {
  return (
    <section
      className={`flex flex-col items-center w-full h-screen justify-center ${bg}`}
    >
      {children}
    </section>
  );
};
