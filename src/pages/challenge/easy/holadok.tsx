import { HoladokModule, LoadingSpinner, useBaseLayout } from "@/modules";
import { FC, ReactElement, useLayoutEffect, useState } from "react";

export const HoladokPages: FC = (): ReactElement => {
  const { setJustify, setPadding } = useBaseLayout();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setJustify("start");
    setPadding("pl-[150px] pr-[86px] pt-[18px] pb-[32px]");
  }, []);

  return <HoladokModule />;
};
