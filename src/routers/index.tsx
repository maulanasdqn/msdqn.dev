import { SuspenseError } from "@/modules";
import { ETwitterEmbedModule } from "@/modules/challange/beginner/twitter-embed/error";
import { LTwitterEmbedModule } from "@/modules/challange/beginner/twitter-embed/loading";
import TwitterEmmbedPages from "@/pages/challenge/beginner/twitter-embed";
import { createBrowserRouter } from "react-router-dom";

const routes = [
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
