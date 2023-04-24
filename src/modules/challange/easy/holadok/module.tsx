import { SuspenseError, useBaseLayout } from "@/modules";
import { FC, ReactElement, useLayoutEffect } from "react";
import { lazily } from "react-lazily";

const { NavbarHoladok } = lazily(() => import("./components"));

export const HoladokModule: FC = (): ReactElement => {
  const { setJustify, setPadding } = useBaseLayout();
  useLayoutEffect(() => {
    setJustify("start");
    setPadding("pl-[150px] pr-[86px] pt-[18px] pb-[32px]");
  }, []);
  return (
    <SuspenseError loading={"Memuat Navbar"} error="Error saat memuat navbar">
      <NavbarHoladok />
    </SuspenseError>
  );
};
