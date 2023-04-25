import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "@/routers";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";
import { LoadingSpinner, SuspenseError } from "@/modules";
import { ServerErrorPages } from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SuspenseError loading={<LoadingSpinner />} error={<ServerErrorPages />}>
      <RecoilRoot>
        <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
      </RecoilRoot>
    </SuspenseError>
  </React.StrictMode>,
);
