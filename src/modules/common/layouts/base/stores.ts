import { atom } from "recoil";

export const BGColorAtom = atom<string>({
  key: "bg-color-atom",
  default: "bg-white",
});

export const JustifyAtom = atom<string>({
  key: "justify-atom",
  default: "center",
});

export const PaddingAtom = atom<string>({
  key: "padding-atom",
  default: "p-0",
});

export const HeightAtom = atom<string>({
  key: "height-atom",
  default: "h-screen",
});
