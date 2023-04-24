import { BaseLayout, EHoladok, LHoladok, SuspenseError } from "@/modules";
import { ETwitterEmbedModule, LTwitterEmbedModule } from "@/modules";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const TwitterEmmbedPages = lazy(
  () => import("@/pages/challenge/beginner/twitter-embed")
);
const HoladokPages = lazy(() => import("@/pages/challenge/easy/holadok"));
const HomePages = lazy(() => import("@/pages"));
const ServerErrorPages = lazy(() => import("@/pages/error/server-error"));
const NotFoundErrorPages = lazy(() => import("@/pages/error/not-found"));

const routes = [
  {
    path: "*",
    element: <NotFoundErrorPages />,
    errorElement: <ServerErrorPages />,
  },
  {
    path: "/",
    element: <HomePages />,
    errorElement: <ServerErrorPages />,
  },
  {
    path: "/challange",
    element: <BaseLayout />,
    errorElement: <ServerErrorPages />,
    children: [
      {
        path: "/challange/beginner/twitter-embed",
        element: (
          <SuspenseError
            loading={<LTwitterEmbedModule />}
            error={<ETwitterEmbedModule />}
          >
            <TwitterEmmbedPages />
          </SuspenseError>
        ),
        errorElement: <ServerErrorPages />,
      },
      {
        path: "/challange/easy/holadok",
        element: (
          <SuspenseError loading={<LHoladok />} error={<EHoladok />}>
            <HoladokPages />
          </SuspenseError>
        ),
        errorElement: <ServerErrorPages />,
      },
    ],
  },
];

declare module "react-router-dom" {
  interface Register {
    router: typeof router;
  }
}

export const router = createBrowserRouter(routes);
