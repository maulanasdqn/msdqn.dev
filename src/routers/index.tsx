import { createBrowserRouter } from "react-router-dom";
import { lazily } from "react-lazily";

const { SuspenseError, BaseLayout, LTwitterEmbedModule, ETwitterEmbedModule, EHoladok, LHoladok } =
  lazily(() => import("@/modules"));

const { NotFoundErrorPages, ServerErrorPages, TwitterEmmbedPages, HoladokPages, HomePages } =
  lazily(() => import("@/pages"));

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
          <SuspenseError loading={<LTwitterEmbedModule />} error={<ETwitterEmbedModule />}>
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
