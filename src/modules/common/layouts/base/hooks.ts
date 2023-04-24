import { BGColorMutation, JustifyMutation } from "./stores";
import { useRecoilState } from "recoil";

export const useBaseLayout = () => {
  const [getBGColor, setBGColor] = useRecoilState(BGColorMutation);
  const [getJustify, setJustify] = useRecoilState(JustifyMutation);
  return {
    getJustify,
    setJustify: (val: string) => setJustify(val),
    getBGColor,
    setBGColor: (val: string) => setBGColor(val),
  };
};
