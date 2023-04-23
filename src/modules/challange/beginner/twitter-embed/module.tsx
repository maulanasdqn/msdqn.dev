import { BaseLayout } from "@/modules";
import { FC, ReactElement } from "react";
import { useTwitterLike } from "./hooks";
import { Button } from "@/components";

export const TwitterEmbedModule: FC = (): ReactElement => {
  const { getLike, setLike } = useTwitterLike();
  return (
    <BaseLayout bg="bg-[#ECF8FF]">
      <Button
        className="bg-teal-400 shadow-teal-100 shadow-md text-white p-3 border-2 rounded-lg"
        type="button"
        onClick={setLike}
      >
        Re-Generate Tweet
      </Button>
      <section className="flex flex-col px-[31px] py-[35px] gap-y-4 bg-white my-6 rounded-lg shadow-gray-200 shadow-sm w-[601px] h-[228px]">
        <div className="flex w-full justify-between">
          <div className="flex gap-x-4 justify-center">
            <img
              className="rounded-full w-[50px] h-[50px]"
              width={50}
              height={50}
              src="/beginner/twitter-embed/profile.jpg"
              alt="profile picture"
              loading="eager"
            />
            <div className="flex flex-col">
              <h1 className="text-black-900 font-[700] text-[18px]">
                Jhon Doe
              </h1>
              <h2 className="text-gray-500 font-normal text-[16px]">
                @realjhondoe
              </h2>
            </div>
          </div>
          <img src="" alt="twitter icon" />
        </div>
        <p className="text-[16px] font-[400]">
          Why do they call it 'debugging' when it feels more like 'wildly
          guessing and hoping for the best'? #programming #coding #debugging
        </p>
      </section>
    </BaseLayout>
  );
};
