import { FC, ReactElement } from "react";
import { ILoadingSpinnerProps } from "./types";

export const LoadingSpinner: FC<ILoadingSpinnerProps> = ({ size = 8 }): ReactElement => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div
        className={`inline-block h-${size} w-${size} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      />
    </div>
  );
};
