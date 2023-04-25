import { SuspenseError, useBaseLayout } from "@/modules";
import { FC, ReactElement, useLayoutEffect } from "react";
import { lazily } from "react-lazily";

const { NavbarHoladok } = lazily(() => import("./components"));

export const HoladokModule: FC = (): ReactElement => {
  return (
    <SuspenseError loading={"Memuat Navbar"} error="Error saat memuat navbar">
      <NavbarHoladok />
    </SuspenseError>
  );
};
