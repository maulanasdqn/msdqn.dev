import { FC, ReactElement } from "react";
import { NAVBAR_MENU } from "../../constants";

export const LNavbarHoladok: FC = (): ReactElement => {
  return (
    <header className="flex items-center w-full h-auto py-[40px] px-16 bg-white justify-between">
      <div className="flex gap-x-16">
        <figure className="flex items-center gap-x-4 h-full justify-center">
          <div className="bg-gray-200 w-[40px] rounded-sm h-[40px] animate-pulse"></div>
          <figcaption className="h-[18px] bg-gray-200 font-[700] w-[80px] animate-pulse" />
        </figure>
        <nav className="flex gap-x-[50px] items-center">
          {NAVBAR_MENU.map((nav, key) => (
            <span
              className="bg-gray-200 h-[18px] text-black-900 w-[60px] animate-pulse rounded-sm"
              key={key}
            />
          ))}
        </nav>
      </div>
      <nav className="flex gap-x-4 items-center font-medium">
        <span className="w-[80px] h-[18px] bg-gray-200 animate-pulse" />
        <span className="border-2 border-gray-200 rounded-sm p-2 bg-gray-200 animate-pulse h-[40px] w-[100px]"></span>
      </nav>
    </header>
  );
};
