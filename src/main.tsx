import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "@/routers";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
