import AboutPages from "@/pages/about";
import HomePages from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/about",
        element: <AboutPages />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

declare module "react-router-dom" {
  interface Register {
    router: typeof router;
  }
}
