import { createBrowserRouter } from "react-router-dom";
import { lazily } from "react-lazily";
import { SuspenseError } from "@/modules";

const { BaseLayout, LTwitterEmbed, ETwitterEmbed, EHoladok, LHoladok } = lazily(
  () => import("@/modules"),
);

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
          <SuspenseError loading={<LTwitterEmbed />} error={<ETwitterEmbed />}>
            <TwitterEmmbedPages />
          </SuspenseError>
        ),
      },
      {
        path: "/challange/easy/holadok",
        element: (
          <SuspenseError loading={<LHoladok />} error={<EHoladok />}>
            <HoladokPages />
          </SuspenseError>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
