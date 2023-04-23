import { BaseLayout } from "@/modules";
import { FC, ReactElement } from "react";
import { useTwitterLike } from "./hooks";

export const TwitterEmbedModule: FC = (): ReactElement => {
  const { getLike, setLike } = useTwitterLike();
  return (
    <BaseLayout>
      <button onClick={setLike}>Re-Generate Tweet</button>
      <section className="flex p-6 w-30 bg-white"></section>
    </BaseLayout>
  );
};
