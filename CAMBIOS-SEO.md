# Cambios de SEO – OMZ Abogados (noviembre 2026)

## Antes de publicar
- **Confirmar el dominio** en `src/seo/seo.ts`, constante `SITE_URL` (hoy: `https://www.omzabogados.cl`). Debe coincidir exactamente con el dominio principal configurado en Netlify (con o sin `www`).
- En Netlify, el comando de build sigue siendo `npm run build` y la carpeta publicada `build`.

## Qué cambió

| Archivo | Cambio |
|---|---|
| `src/seo/seo.ts` (nuevo) | Títulos, descripciones, canonical, Open Graph y datos estructurados (schema.org) de cada página. Ficha `Person` por abogado y `LegalService` para el estudio. |
| `src/entry-server.tsx` (nuevo) | Renderiza la aplicación en el build para generar el HTML de cada página. |
| `scripts/prerender.mjs` (nuevo) | Después del build genera un HTML completo por página (incluida una por abogado), `sitemap.xml`, `robots.txt` y `404.html`. |
| `package.json` | El build ahora incluye el pre-renderizado. |
| `src/App.tsx`, `src/utils/routes.ts` | Rutas separadas del router del navegador; título, descripción, canonical e idioma se actualizan al navegar o cambiar ES/EN. |
| `index.html` | `lang="es"`, título y descripción por defecto. |
| `src/imports/Home.tsx`, `src/pages/Nosotros.tsx` | Título principal `<h1>` (no visible) para Google y lectores de pantalla. |
| `src/pages/Equipo.tsx`, `src/pages/EquipoDetalle.tsx` | Texto alternativo de fotos con nombre completo y cargo; carga diferida de miniaturas. |
| `src/assets/9b68…jpg` + `vite.config.ts` | Imagen de "Qué hacemos" de 13 MB → 515 KB (JPEG, 2200 px). |
| `public/logo.png` | Logo para datos estructurados y vistas previas al compartir. |
| `public/admin/index.html` | `noindex` para que el panel del CMS no aparezca en Google. |
| `_redirects` → `public/_redirects` | Se movió a `public/` porque en la raíz no se publicaba. Las páginas pre-renderizadas tienen prioridad; la regla queda como red de seguridad. |
| `.nvmrc` (nuevo) | Fija Node 22 en Netlify (react-router 7 requiere Node 20 o superior). |

El diseño visual no cambió (verificado con capturas en escritorio y móvil, antes y después).

## Compatibilidad con Decap CMS (sitio autogestionable)
- **No se modificó nada del CMS**: `public/admin/config.yml`, los datos en `src/data/equipo/`, las fotos en `src/assets/fotos-equipo/` y el lector `src/utils/teamData.tsx` quedan idénticos. Solo se agregó `noindex` al panel `/admin/`.
- El flujo es el mismo de siempre: el cliente guarda en el CMS → se hace commit en GitHub → Netlify compila y publica. El SEO se regenera en cada publicación con los datos del CMS.
- **Abogados nuevos o editados**: su página, título, descripción, datos estructurados y entrada en el sitemap se generan solos. Probado con un abogado ficticio con tildes y "ñ" en el nombre, cargado solo en español, sin fotos y con formato en la biografía.
- **Tolerante a errores**: si una ficha tuviera datos que impidieran generar su HTML, el build muestra un AVISO y publica igual el resto del sitio; esa ficha sigue funcionando en el navegador.
- Recomendación para el cliente: completar en cada abogado "Áreas de práctica", "Educación" y "LinkedIn", porque alimentan lo que Google lee de cada perfil.

## Pasos después de publicar (manuales)
1. **Google Search Console** (search.google.com/search-console): verificar el dominio, enviar `https://www.omzabogados.cl/sitemap.xml` y usar "Inspección de URLs → Solicitar indexación" en la portada y en cada ficha de abogado.
2. **Google Business Profile**: crear o reclamar la ficha de "OMZ Abogados" con la dirección Av. Apoquindo 3669, piso 14, Las Condes, y el sitio web.
3. **LinkedIn**: que cada abogado ponga el enlace a su ficha (ej. `…/equipo/gerardo-otero`) en "Información de contacto → Sitio web", y que la página de empresa enlace al sitio.
4. Revisar con la **Prueba de resultados enriquecidos** de Google (search.google.com/test/rich-results) una ficha de abogado.
5. Pendiente opcional: en `src/assets/` hay tres PNG de 3–13 MB que no se usan en el sitio (`74b0…`, `88db…`, `c482…`); se pueden borrar para aligerar el repositorio.
