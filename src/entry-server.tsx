import { StrictMode } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { RecoilRoot } from "recoil";

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <StrictMode>
      <RecoilRoot>
        <StaticRouter location={url} />
      </RecoilRoot>
    </StrictMode>,
  );
}
