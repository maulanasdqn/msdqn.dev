import { FC, Fragment, ReactElement } from "react";
import { lazily } from "react-lazily";
import { useTwitterLike } from "./hooks";

const { IconLove, TweeterLogo } = lazily(() => import("./icons"));

export const TwitterEmbedModule: FC = (): ReactElement => {
  const { getLike, setLike } = useTwitterLike();

  return (
    <Fragment>
      <section className="flex flex-col justify-between px-[31px] pt-[35px] pb-[20px] gap-y-4 bg-white my-6 rounded-lg shadow-gray-200 shadow-sm w-[601px] h-[228px]">
        <div className="flex w-full justify-between">
          <div className="flex gap-x-4 justify-center">
            <img
              className="rounded-full w-[50px] h-[50px]"
              width={50}
              height={50}
              src={"/avatar.png"}
              alt="profile picture"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h1 className="text-black-900 font-[700] text-[18px]">Anjay Mabar</h1>
              <h2 className="text-gray-500 font-normal text-[16px]">@anjay_mabar_bosqu</h2>
            </div>
          </div>
          <TweeterLogo />
        </div>
        <p className="text-[16px] font-[400]">Angin bawalah jiwaku melayang</p>
        <div className="flex gap-x-6 text-[14px] text-gray-500 font-[500]">
          <div className="flex gap-x-3">
            <IconLove onClick={setLike} />
            <span className="cursor-pointer">{getLike}</span>
          </div>
          <span>3.30 PM - Feb 24, 2022</span>
        </div>
      </section>
    </Fragment>
  );
};
