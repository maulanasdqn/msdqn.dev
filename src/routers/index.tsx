import { SuspenseError } from "@/modules";
import { ETwitterEmbedModule } from "@/modules/challange/beginner/twitter-embed/error";
import { LTwitterEmbedModule } from "@/modules/challange/beginner/twitter-embed/loading";
import HomePages from "@/pages";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const TwitterEmmbedPages = lazy(
  () => import("@/pages/challenge/beginner/twitter-embed")
);

const routes = [
  {
    path: "/",
    element: <HomePages />,
  },
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
  },
];

declare module "react-router-dom" {
  interface Register {
    router: typeof router;
  }
}

export const router = createBrowserRouter(routes);
