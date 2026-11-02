// Punto de entrada usado SOLO durante el build para pre-renderizar cada página en HTML.
import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { routes } from "./utils/routes";
import { LanguageProvider } from "./context/LanguageContext";
import { getPublicPaths, getSeo, renderHeadTags, SITE_URL } from "./seo/seo";

const handler = createStaticHandler(routes);

export async function render(path: string) {
  const context = await handler.query(new Request(`${SITE_URL}${path}`));
  if (context instanceof Response) throw new Error(`La ruta ${path} devolvió una redirección`);
  const router = createStaticRouter(handler.dataRoutes, context);
  const html = renderToString(
    <LanguageProvider>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </LanguageProvider>
  );
  return { html, head: renderHeadTags(getSeo(path, "es")) };
}

export { getPublicPaths, SITE_URL };
