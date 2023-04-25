import { SuspenseError, useBaseLayout } from "@/modules";
import { FC, ReactElement, useLayoutEffect } from "react";
import { lazily } from "react-lazily";
import { LNavbarHoladok } from "./components";

const { NavbarHoladok } = lazily(() => import("./components"));

export const HoladokModule: FC = (): ReactElement => {
  return (
    <SuspenseError loading={<LNavbarHoladok />} error="Error saat memuat navbar">
      <NavbarHoladok />
    </SuspenseError>
  );
};
