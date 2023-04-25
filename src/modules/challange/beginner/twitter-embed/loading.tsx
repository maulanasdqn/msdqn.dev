import { FC, ReactElement } from "react";

export const LTwitterEmbed: FC = (): ReactElement => {
  return (
    <section className="flex flex-col px-[31px] py-[35px] gap-y-4 bg-white my-6 rounded-lg shadow-gray-200 shadow-sm w-[601px] h-[228px]">
      <div className="flex w-full justify-between">
        <div className="flex gap-x-4 justify-center">
          <div className="rounded-full animate-pulse w-[50px] h-[50px] bg-gray-200" />
          <div className="flex flex-col gap-y-4 animate-pulse">
            <div className="bg-gray-200 h-[18px] rounded-lg w-[300px] animate-pulse" />
            <div className="bg-gray-200 h-[16px] roudned-lg w-[120px] animate-pulse" />
          </div>
        </div>
        <div className="bg-gray-200 rounded-full w-6 h-6" />
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="h-[16px] bg-gray-200 w-full animate-pulse" />
        <span className="h-[16px] bg-gray-200 w-1/2 animate-pulse" />
      </div>
      <div className="flex gap-x-4 text-[14px] text-gray-500 font-[500]">
        <span className="h-[16px] bg-gray-200 w-[18px] rounded-lg animate-pulse" />
        <span className="h-[16px] bg-gray-200 w-[10px] rounded-lg animate-pulse" />
        <span className="h-[16px] bg-gray-200 w-[60px] animate-pulse" />
        <span className="h-[16px] bg-gray-200 w-[60px] animate-pulse" />
      </div>
    </section>
  );
};
