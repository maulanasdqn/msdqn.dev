import { useRecoilState } from "recoil";
import { BGColorAtom, JustifyAtom, PaddingAtom, HeightAtom } from "./stores";

export const useBaseLayout = () => {
  const [getBGColor, setBGColor] = useRecoilState(BGColorAtom);
  const [getJustify, setJustify] = useRecoilState(JustifyAtom);
  const [getPadding, setPadding] = useRecoilState(PaddingAtom);
  const [getHeight, setHeight] = useRecoilState(HeightAtom);
  return {
    getJustify,
    setJustify: (val: string) => setJustify(val),
    getBGColor,
    setBGColor: (val: string) => setBGColor(val),
    getPadding,
    setPadding: (val: string) => setPadding(val),
    getHeight,
    setHeight: (val: string) => setHeight(val),
  };
};
