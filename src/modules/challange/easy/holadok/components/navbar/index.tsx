import { FC, ReactElement } from "react";
import { lazily } from "react-lazily";
import { NAVBAR_MENU, SuspenseError } from "@/modules";

const { HoladokLogo } = lazily(() => import("@/modules"));

export const NavbarHoladok: FC = (): ReactElement => {
  return (
    <header className="flex items-center w-full h-auto py-[40px] px-16 bg-white justify-between">
      <div className="flex gap-x-16">
        <SuspenseError loading="memuat logo" error="Error saat memuat logo">
          <figure className="flex items-center gap-x-4 h-full justify-center">
            <HoladokLogo />
            <figcaption className="text-1xl text-black-900 font-[700]">Holadok</figcaption>
          </figure>
        </SuspenseError>
        <nav className="flex gap-x-[50px]">
          {NAVBAR_MENU.map((nav, key) => (
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
