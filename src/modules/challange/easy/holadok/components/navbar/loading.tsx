import { FC, ReactElement } from "react";

export const LNavbarHoladok: FC = (): ReactElement => {
  return (
    <header className="flex items-center w-full h-auto py-[40px] px-16 bg-white justify-between">
      <div className="flex gap-x-16">
        <figure className="flex items-center gap-x-4 h-full justify-center">
          <div className="bg-gray-200 w-[60px] rounded-lg h-[30px]"></div>
          <figcaption className="text-1xl text-black-900 font-[700]">Holadok</figcaption>
        </figure>
        <nav className="flex gap-x-[50px]">
          {Array(6).map((nav, key) => (
            <span key={key}>{nav}</span>
          ))}
        </nav>
      </div>
      <nav className="flex gap-x-4 items-center font-medium">
        <span>Login</span>
        <span className="border-2 border-black rounded-sm p-2">Book Now</span>
      </nav>
    </header>
  );
};
