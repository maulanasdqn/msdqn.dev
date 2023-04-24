import { FC, Fragment, ReactElement, useEffect, useState } from "react";
import { lazily } from "react-lazily";
import { useTwitterLike } from "./hooks";

import { faker } from "@faker-js/faker";
import { useBaseLayout } from "@/modules";

const { Button } = lazily(() => import("@/components"));
const { IconLove, TweeterLogo } = lazily(() => import("./icons"));

export const TwitterEmbedModule: FC = (): ReactElement => {
  const { getLike, setLike } = useTwitterLike();
  const { setBGColor, setJustify } = useBaseLayout();

  const [tweeter, setTweeter] = useState({
    name: faker.name.fullName(),
    tweet: faker.commerce.productDescription(),
    username: faker.internet.userName(),
    image: faker.internet.avatar(),
  });

  const generateTweet = () => {
    setTweeter({
      name: faker.name.fullName(),
      tweet: faker.commerce.productDescription(),
      username: faker.internet.userName(),
      image: faker.internet.avatar(),
    });
  };

  useEffect(() => {
    setBGColor("bg-[#ECF8FF]");
    setJustify("center");
  }, []);

  return (
    <Fragment>
      <div className="flex gap-x-4">
        <Button
          onClick={() => generateTweet()}
          className="bg-teal-400 shadow-teal-100 shadow-md text-white p-3 border-2 rounded-lg"
          type="button"
        >
          Re-Generate Tweet
        </Button>
        <Button
          onClick={() => generateTweet()}
          className="bg-yellow-400 font-[700] shadow-teal-100 shadow-md text-white p-3 border-2 rounded-lg"
          type="button"
        >
          Turn Dark Mode
        </Button>
      </div>
      <section className="flex flex-col justify-between px-[31px] py-[35px] gap-y-4 bg-white my-6 rounded-lg shadow-gray-200 shadow-sm w-[601px] h-[228px]">
        <div className="flex w-full justify-between">
          <div className="flex gap-x-4 justify-center">
            <img
              className="rounded-full w-[50px] h-[50px]"
              width={50}
              height={50}
              src={tweeter.image}
              alt="profile picture"
              loading="eager"
            />
            <div className="flex flex-col">
              <h1 className="text-black-900 font-[700] text-[18px]">{tweeter.name}</h1>
              <h2 className="text-gray-500 font-normal text-[16px]">@{tweeter.username}</h2>
            </div>
          </div>
          <TweeterLogo />
        </div>
        <p className="text-[16px] font-[400]">{tweeter.tweet}</p>
        <div className="flex gap-x-6 text-[14px] text-gray-500 font-[500]">
          <IconLove />
          <span className="cursor-pointer" onClick={setLike}>
            {getLike}
          </span>
          <span>3.30 PM - Feb 24, 2022</span>
        </div>
      </section>
    </Fragment>
  );
};
