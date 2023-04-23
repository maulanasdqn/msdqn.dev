import { BaseLayout } from "@/modules";
import { FC, ReactElement } from "react";
import { useTwitterLike } from "./hooks";
import { Button } from "@/components";

export const TwitterEmbedModule: FC = (): ReactElement => {
  const { getLike, setLike } = useTwitterLike();
  return (
    <BaseLayout bg="bg-[#ECF8FF]">
      <Button
        className="bg-red-600 p-3 border-2 rounded-lg"
        type="button"
        onClick={setLike}
      >
        Re-Generate Tweet
      </Button>
      <section className="flex p-6 w-30 bg-white"></section>
    </BaseLayout>
  );
};
