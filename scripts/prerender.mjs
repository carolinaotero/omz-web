// Se ejecuta después de "vite build": genera un HTML completo por cada página,
// además de sitemap.xml, robots.txt y la página 404.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const outDir = path.join(root, "build");
const ssrEntry = path.join(root, "build-ssr", "entry-server.mjs");

const { render, getPublicPaths, SITE_URL } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

function page(head, html) {
  return template
    .replace(/<html lang="[^"]*">/, '<html lang="es">')
    .replace(/\s*<meta name="description"[^>]*>/, "")
    .replace(/<title>[\s\S]*?<\/title>/, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

const paths = getPublicPaths();
const ok = [];
for (const p of paths) {
  try {
    const { html, head } = await render(p);
    const file = p === "/" ? path.join(outDir, "index.html") : path.join(outDir, p, "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page(head, html));
    ok.push(p);
    console.log(`  pre-renderizado ${p}`);
  } catch (err) {
    // Una ficha con datos incompletos del CMS no debe impedir publicar el resto del sitio:
    // esa página igual funciona en el navegador gracias a public/_redirects.
    console.warn(`  AVISO: no se pudo pre-renderizar ${p}: ${err?.message || err}`);
  }
}

// 404 real (Netlify sirve 404.html con código 404)
const notFound = await render("/pagina-no-existe");
fs.writeFileSync(path.join(outDir, "404.html"), page(notFound.head, notFound.html));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ok
  .map((p) => `  <url><loc>${SITE_URL}${encodeURI(p)}</loc><lastmod>${today}</lastmod><priority>${p === "/" ? "1.0" : p.startsWith("/equipo/") ? "0.8" : "0.7"}</priority></url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

fs.rmSync(path.join(root, "build-ssr"), { recursive: true, force: true });
console.log(`  sitemap.xml con ${ok.length} URLs, robots.txt y 404.html generados`);
