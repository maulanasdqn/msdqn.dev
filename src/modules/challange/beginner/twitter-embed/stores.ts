import { atom, selector } from "recoil";

export const LikeAtom = atom<number>({
  key: "twiiter-like-number",
  default: 0,
});

export const LikeMutation = selector({
  key: "twitter-like-mutation",
  get: ({ get }) => get(LikeAtom),
  set: ({ set }, val) => set(LikeAtom, (val as number) + 1),
});
