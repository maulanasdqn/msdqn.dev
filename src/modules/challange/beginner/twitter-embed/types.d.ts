import { MouseEventHandler } from "react";

export interface ITweetProps {
  contents: string;
  like_counts: number;
  comment_counts: number;
}

export type TIconsProps = {
  onClick: MouseEventHandler<SVGElement>;
};
