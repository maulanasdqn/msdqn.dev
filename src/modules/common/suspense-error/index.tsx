import { FC, ReactElement, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ISuspenseError } from "./types";

export const SuspenseError: FC<ISuspenseError> = ({
  children,
  loading,
  error,
}): ReactElement => {
  return (
    <ErrorBoundary fallback={<>{error}</>}>
      <Suspense fallback={loading}>{children}</Suspense>
    </ErrorBoundary>
  );
};
