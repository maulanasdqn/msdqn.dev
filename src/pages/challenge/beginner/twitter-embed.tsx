import { TwitterEmbedModule, useBaseLayout } from "@/modules";
import { FC, ReactElement, useLayoutEffect } from "react";

export const TwitterEmmbedPages: FC = (): ReactElement => {
  const { setBGColor, setJustify } = useBaseLayout();

  useLayoutEffect(() => {
    setBGColor("bg-[#ECF8FF]");
    setJustify("center");
  }, []);

  return <TwitterEmbedModule />;
};
