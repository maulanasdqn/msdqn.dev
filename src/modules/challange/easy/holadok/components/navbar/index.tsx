import { FC, ReactElement } from "react";

export const NavbarHoladok: FC = (): ReactElement => {
  return (
    <header className="flex items-center w-full h-auto py-4 px-16 bg-white justify-between">
      <figure>
        <img src="" alt="" />
        <figcaption className="text-1xl text-black-900 font-medium">Holadok</figcaption>
      </figure>
      <nav>Navbar</nav>
    </header>
  );
};
