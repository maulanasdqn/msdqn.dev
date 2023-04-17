import { BaseLayout } from "@/modules";
import { FC, ReactElement } from "react";
import { useTwitterLike } from "./hooks";

export const TwitterEmbedModule: FC = (): ReactElement => {
  const { getLike, setLike } = useTwitterLike();
  return (
    <BaseLayout>
      <button>Re-Generate Tweet</button>
      <span onClick={setLike}>Twitter Emmbed {getLike}</span>
    </BaseLayout>
  );
};
