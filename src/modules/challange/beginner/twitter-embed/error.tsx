import { FC, ReactElement } from "react";
import { lazily } from "react-lazily";

const { Button } = lazily(() => import("@/components"));

export const ETwitterEmbed: FC = (): ReactElement => {
  return (
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
  );
};
