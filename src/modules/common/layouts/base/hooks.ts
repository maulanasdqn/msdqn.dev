import { BGColorMutation, JustifyAtom } from "./stores";
import { useRecoilState } from "recoil";

export const useBGColor = () => {
  const [get, set] = useRecoilState(BGColorMutation);
  return {
    getBGColor: get,
    setBGColor: (val: string) => set(val),
  };
};

export const useJustify = () => {
  const [get, set] = useRecoilState(JustifyAtom);
  return {
    getJustify: get,
    setJustify: (val: string) => set(val),
  };
};
