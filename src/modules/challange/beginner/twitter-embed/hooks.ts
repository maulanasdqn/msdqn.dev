import { LikeMutation } from "./stores";
import { useRecoilState } from "recoil";

export const useTwitterLike = () => {
  const [get, set] = useRecoilState(LikeMutation);
  return {
    getLike: get,
    setLike: () => set(get),
  };
};
