import { teamMembers, type TeamMember } from "../utils/teamData";

/**
 * Dominio público del sitio (sin "/" final).
 * Si el sitio se publica en otro dominio (por ejemplo sin "www"), cambiar SOLO esta línea.
 */
export const SITE_URL = "https://www.omzabogados.cl";

export const SITE_NAME = "OMZ Abogados";
const LOGO_PATH = "/logo.png";
const CONTACT_EMAIL = "contacto@omzabogados.cl";

export type Lang = "es" | "en";

export interface SeoData {
  title: string;
  description: string;
  path: string;
  canonical: string;
  image: string;
  noindex: boolean;
  jsonLd: object[];
}

/** Codifica tildes, ñ, espacios, etc. en la ruta sin tocar lo que ya viene codificado. */
const encodePath = (p: string) => encodeURI(decodeURI(p));
const abs = (p: string) => (/^https?:\/\//.test(p) ? p : `${SITE_URL}${p.startsWith("/") ? "" : "/"}${encodePath(p)}`);

/** Quita el formato Markdown que el CMS permite en la biografía. */
function plain(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/[*_`#>~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Recorta una descripción a ~158 caracteres sin cortar palabras. */
function clip(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:]$/, "") + "…";
}

const address = {
  "@type": "PostalAddress",
  streetAddress: "Av. Apoquindo 3669, piso 14",
  addressLocality: "Las Condes",
  addressRegion: "Región Metropolitana",
  addressCountry: "CL",
};

const practiceAreas = [
  "Resolución de disputas",
  "Litigación y arbitraje",
  "Asesoría tributaria",
  "Wealth management",
  "Asesoría corporativa",
  "Transacciones",
];

export function memberUrl(m: TeamMember) {
  return abs(`/equipo/${m.id}`);
}

function personRef(m: TeamMember) {
  return { "@type": "Person", "@id": `${memberUrl(m)}#person`, name: m.nombre_completo, url: memberUrl(m), jobTitle: m.role };
}

function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "OMZ",
    url: `${SITE_URL}/`,
    logo: abs(LOGO_PATH),
    image: abs(LOGO_PATH),
    email: CONTACT_EMAIL,
    description:
      "Estudio de abogados boutique en Santiago de Chile, especializado en resolución de disputas, asesoría tributaria y wealth management, y asesoría corporativa.",
    address,
    areaServed: { "@type": "Country", name: "Chile" },
    knowsAbout: practiceAreas,
    knowsLanguage: ["es", "en"],
    employee: teamMembers.map(personRef),
  };
}

function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "es-CL",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

function splitList(text: string): string[] {
  return text
    .split(/,| y | e | and /)
    .map((s) => s.replace(/\.$/, "").trim())
    .filter(Boolean);
}

function personLd(m: TeamMember) {
  const education = m.education
    .map((line) => line.split(",")[0].trim())
    .filter(Boolean)
    .map((name) => ({ "@type": "EducationalOrganization", name }));
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${memberUrl(m)}#person`,
    name: m.nombre_completo,
    givenName: m.nombre_completo.split(" ")[0],
    familyName: m.nombre_completo.split(" ").slice(1).join(" "),
    jobTitle: m.role,
    description: plain(m.bio[0] || "") || undefined,
    image: m.image ? abs(m.image) : undefined,
    url: memberUrl(m),
    email: m.email ? `mailto:${m.email}` : undefined,
    knowsLanguage: m.languages.flatMap(splitList),
    knowsAbout: splitList(plain(m.areasOfPractice)),
    alumniOf: education.length ? education : undefined,
    sameAs: m.linkedin ? [m.linkedin] : undefined,
    worksFor: { "@type": "LegalService", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/` },
    workLocation: { "@type": "Place", address },
  };
}

function profilePageLd(m: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: memberUrl(m),
    name: `${m.nombre_completo} – ${m.role} | ${SITE_NAME}`,
    inLanguage: "es-CL",
    mainEntity: { "@id": `${memberUrl(m)}#person` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

/** Rutas públicas que van al sitemap y se pre-renderizan. */
export function getPublicPaths(): string[] {
  return ["/", "/nosotros", "/que-hacemos", "/equipo", ...teamMembers.map((m) => `/equipo/${m.id}`), "/hablemos"];
}

export function findMember(pathname: string): TeamMember | undefined {
  let decoded = pathname;
  try {
    decoded = decodeURI(pathname);
  } catch {
    /* sin cambios */
  }
  const match = decoded.match(/^\/equipo\/([^/]+)\/?$/);
  return match ? teamMembers.find((m) => m.id === match[1]) : undefined;
}

export function getSeo(rawPath: string, lang: Lang = "es"): SeoData {
  let decoded = rawPath;
  try {
    decoded = decodeURI(rawPath);
  } catch {
    /* URL mal formada: se usa tal cual */
  }
  const path = decoded.length > 1 ? decoded.replace(/\/+$/, "") : "/";
  const en = lang === "en";
  const base = { path, canonical: abs(path), image: abs(LOGO_PATH), noindex: false };
  const site = [organizationLd(), websiteLd()];

  switch (path) {
    case "/":
      return {
        ...base,
        title: en
          ? "OMZ Abogados | Boutique Law Firm in Santiago, Chile"
          : "OMZ Abogados | Estudio de abogados en Santiago, Chile",
        description: en
          ? "Boutique law firm in Santiago, Chile, focused on high-complexity dispute resolution, tax and wealth management, and corporate advice."
          : "Estudio de abogados boutique en Santiago, Chile. Resolución de disputas de alta complejidad, asesoría tributaria, wealth management y asesoría corporativa.",
        jsonLd: site,
      };
    case "/nosotros":
      return {
        ...base,
        title: en ? "About Us | OMZ Abogados" : "Nosotros | OMZ Abogados, estudio de abogados en Santiago",
        description: en
          ? "A modern boutique law firm backed by more than 15 years of experience in some of Chile's most relevant transactions and litigation."
          : "Estudio boutique moderno y cercano, con más de 15 años de experiencia en algunas de las transacciones y juicios más relevantes de Chile.",
        jsonLd: [...site, breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Nosotros", path: "/nosotros" }])],
      };
    case "/que-hacemos":
      return {
        ...base,
        title: en
          ? "Practice Areas: Disputes, Tax & Corporate | OMZ Abogados"
          : "Áreas de práctica: disputas, tributario y corporativo | OMZ Abogados",
        description: en
          ? "Litigation and arbitration, tax advice and wealth management, and corporate and transactional advice for companies and family offices in Chile."
          : "Litigación y arbitraje, asesoría tributaria y wealth management, y asesoría corporativa y transaccional para empresas y family offices en Chile.",
        jsonLd: [...site, breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Qué hacemos", path: "/que-hacemos" }])],
      };
    case "/equipo": {
      const names = teamMembers.map((m) => m.nombre_corto).join(", ");
      return {
        ...base,
        title: en ? "Our Team of Lawyers | OMZ Abogados" : "Equipo de abogados | OMZ Abogados",
        description: clip(en ? `Meet the lawyers of OMZ Abogados: ${names}.` : `Conoce a los abogados de OMZ Abogados: ${names}.`),
        jsonLd: [
          ...site,
          breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Equipo", path: "/equipo" }]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Equipo de OMZ Abogados",
            itemListElement: teamMembers.map((m, i) => ({ "@type": "ListItem", position: i + 1, url: memberUrl(m), name: m.nombre_completo })),
          },
        ],
      };
    }
    case "/hablemos":
      return {
        ...base,
        title: en ? "Contact | OMZ Abogados" : "Contacto | OMZ Abogados",
        description: en
          ? "Contact OMZ Abogados. Av. Apoquindo 3669, 14th floor, Las Condes, Santiago, Chile. contacto@omzabogados.cl"
          : "Contacta a OMZ Abogados. Av. Apoquindo 3669, piso 14, Las Condes, Santiago, Chile. contacto@omzabogados.cl",
        jsonLd: [...site, breadcrumbLd([{ name: "Inicio", path: "/" }, { name: "Hablemos", path: "/hablemos" }])],
      };
  }

  const m = findMember(path);
  if (m) {
    const role = en ? m.role_en : m.role;
    const areas = plain(en ? m.areasOfPractice_en : m.areasOfPractice).replace(/\.$/, "");
    const intro = plain((en ? m.bio_en[0] : m.bio[0]) || "");
    return {
      ...base,
      title: `${m.nombre_completo} – ${role} | ${SITE_NAME}`,
      description: clip(
        en
          ? `${m.nombre_completo}, ${role} at OMZ Abogados, Santiago, Chile.${areas ? ` Practice areas: ${areas}.` : ""} ${intro}`
          : `${m.nombre_completo}, ${role} de OMZ Abogados, Santiago.${areas ? ` Áreas de práctica: ${areas}.` : ""} ${intro}`
      ),
      image: m.image ? abs(m.image) : base.image,
      jsonLd: [
        organizationLd(),
        personLd(m),
        profilePageLd(m),
        breadcrumbLd([
          { name: "Inicio", path: "/" },
          { name: "Equipo", path: "/equipo" },
          { name: m.nombre_completo, path: `/equipo/${m.id}` },
        ]),
      ],
    };
  }

  return {
    ...base,
    title: en ? "Page not found | OMZ Abogados" : "Página no encontrada | OMZ Abogados",
    description: en ? "The page you are looking for does not exist." : "La página que buscas no existe o ha sido movida.",
    noindex: true,
    jsonLd: [],
  };
}

/** Etiquetas <head> como HTML (para el pre-renderizado). */
export function renderHeadTags(seo: SeoData): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const json = (o: object) => JSON.stringify(o).replace(/</g, "\\u003c");
  return [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    seo.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${seo.canonical}" />`,
    `<meta property="og:type" content="${findMember(seo.path) ? "profile" : "website"}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="es_CL" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${seo.canonical}" />`,
    `<meta property="og:image" content="${seo.image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${seo.image}" />`,
    ...seo.jsonLd.map((o) => `<script type="application/ld+json">${json(o)}</script>`),
  ].join("\n    ");
}

/** Actualiza el <head> al navegar dentro del sitio (lado navegador). */
export function applySeoToDocument(pathname: string, lang: Lang) {
  const seo = getSeo(pathname, lang);
  document.documentElement.lang = lang;
  document.title = seo.title;
  const setMeta = (attr: "name" | "property", key: string, value: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = value;
  };
  setMeta("name", "description", seo.description);
  setMeta("property", "og:title", seo.title);
  setMeta("property", "og:description", seo.description);
  setMeta("property", "og:url", seo.canonical);
  setMeta("property", "og:image", seo.image);
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (seo.noindex) {
    canonical?.remove();
  } else {
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seo.canonical;
  }
}
