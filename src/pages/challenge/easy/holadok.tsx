import { HoladokModule, useBaseLayout } from "@/modules";
import { FC, ReactElement, useEffect } from "react";

export const HoladokPages: FC = (): ReactElement => {
  const { setJustify, setPadding } = useBaseLayout();
  useEffect(() => {
    setJustify("start");
    setPadding("pl-[150px] pr-[86px] pt-[18px] pb-[32px]");
  }, []);
  return <HoladokModule />;
};
