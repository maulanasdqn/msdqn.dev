import { SuspenseError } from "@/modules";
import { FC, Fragment, ReactElement } from "react";
import { lazily } from "react-lazily";

const { NavbarHoladok } = lazily(() => import("./components"));

export const HoladokModule: FC = (): ReactElement => {
  return (
    <SuspenseError loading={"Memuat Navbar"} error="Error saat memuat navbar">
      <NavbarHoladok />
    </SuspenseError>
  );
};
