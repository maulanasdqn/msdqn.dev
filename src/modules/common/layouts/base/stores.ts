import { atom, selector } from "recoil";

export const BGColorAtom = atom<string>({
  key: "bg-color-atom",
  default: "white",
});

export const BGColorMutation = selector({
  key: "bg-color-mutation",
  get: ({ get }) => get(BGColorAtom),
  set: ({ set }, val) => set(BGColorAtom, val),
});

export const JustifyAtom = atom<string>({
  key: "justify-atom",
  default: "white",
});

export const JustifyMutation = selector({
  key: "justify-mutation",
  get: ({ get }) => get(JustifyAtom),
  set: ({ set }, val) => set(JustifyAtom, val),
});
