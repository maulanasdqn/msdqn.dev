import { BaseLayout } from "@/modules";
import { FC, ReactElement } from "react";
import { useTwitterLike } from "./hooks";

export const TwitterEmbedModule: FC = (): ReactElement => {
  const { getLike, setLike } = useTwitterLike();
  return (
    <BaseLayout>
      <button onClick={setLike}>Re-Generate Tweet</button>
      <span>Twitter Emmbed {getLike}</span>
    </BaseLayout>
  );
};
