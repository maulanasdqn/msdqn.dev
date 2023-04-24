import { FC, ReactElement } from "react";
import { lazily } from "react-lazily";

const { BaseLayout } = lazily(() => import("@/modules"));
const { Button } = lazily(() => import("@/components"));

export const ETwitterEmbedModule: FC = (): ReactElement => {
  return (
    <BaseLayout bg="bg-[#ECF8FF]" justify="center">
      <section className="flex flex-col justify-center items-center px-[31px] py-[35px] gap-y-4 bg-white my-6 rounded-lg shadow-gray-200 shadow-sm w-[601px] h-[228px]">
        <span className="text-red-400">Error when Generate Tweet</span>
        <Button
          onClick={() => location.reload()}
          type="button"
          className="bg-red-300 text-white p-2 rounded-lg font-[500]"
        >
          Refetch Data
        </Button>
      </section>
    </BaseLayout>
  );
};
