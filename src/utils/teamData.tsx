// Alfonso Mora Images
import imgAlfonsoVertical from "figma:asset/bb110c5b65e345f6bdb9216a5df2e9599ffce433.png";
import imgAlfonsoHorizontal from "figma:asset/484a16dc8b666b03390e859c6b328505ae841604.png";
// Square image (Thumbnail) - Updated
import imgAlfonsoSquare from "figma:asset/4154f994a6f3811aaf321580c6a36e599b025cb3.png";

// Gerardo Otero Images
import imgGerardoVertical from "figma:asset/2afa4e17b9fc335d5685aa9d3eb04bbf3f8f855c.png";
import imgGerardoHorizontal from "figma:asset/82ace8dd353b4ea4d1b678510d6be7c95fd94a99.png";
// Square image (Thumbnail) - Updated
import imgGerardoSquare from "figma:asset/b1df09582d9ad9e34e78d0a83142d276397c0005.png";

// Nicolás Zisis Images
import imgNicolasVertical from "figma:asset/0cab0ab4dcd3e20f3431fe623c2bc984eb2b89b0.png";
import imgNicolasHorizontal from "figma:asset/7847e3712cdc26a20be55351c2a792004efc3ba3.png";
import imgNicolasSquare from "figma:asset/38af54adbac42f51e3f19118f3877bd691c2ac9d.png";

// Ricardo Celedón Images
// Vertical image (Desktop)
import imgRicardoVertical from "figma:asset/61a4c838fa4f8672b88c41dd82b7a41762d7f95b.png";
import imgRicardoHorizontal from "figma:asset/06428280f9a85f3966654c23dd3924bb316630dd.png";
// Square image (Thumbnail) - Updated
import imgRicardoSquare from "figma:asset/95a5ee275ef6e1dfa1f046913db9252de2f42a4e.png";

// Pedro Pablo Otero Images
import imgPedroPabloVertical from "figma:asset/955ee5d3a782c00097d8f79f391e14c4860e15c1.png";
import imgPedroPabloHorizontal from "figma:asset/d917f977892f180cd11e2f362f885d92df7328d8.png";
// Square image (Thumbnail) - Updated
import imgPedroPabloSquare from "figma:asset/a1d7d79f1400b8d6523e7f19d85bb0e58fe10d75.png";

// Isidora Valenzuela Images
import imgIsidoraVertical from "figma:asset/4066f28514440de9c0b4e00753dd336fae318e37.png";
import imgIsidoraHorizontal from "figma:asset/4be39c076c67ecc7763011a983cdbd6fa6f977d7.png";
// Square image (Thumbnail) - Updated
import imgIsidoraSquare from "figma:asset/61ccdfa017bd92ada09b9a73a6f6f67de9362fe7.png";

// Jaime Zañartu Images
import imgJaimeVertical from "figma:asset/5fb9f660ba936dfb12738f2ce3f452b6b4e3ea38.png";
import imgJaimeHorizontal from "figma:asset/e2aae768bded4e9c2551e11adf4786669943098f.png";
import imgJaimeSquare from "figma:asset/e09c8fd8f411cbdd77b81ab0e6fa93df8c3af05f.png";


export interface TeamMember {
  id: string;
  name: string;
  fullName?: string;
  nombre_corto: string;
  nombre_completo: string;
  role: string;
  role_en: string;
  email: string;
  linkedin: string;
  image: string;
  mobileImage: string;
  thumbnail?: string;
  bio: string[];
  bio_en: string[];
  education: string[];
  education_en: string[];
  languages: string[];
  languages_en: string[];
  previousExperience: string[];
  previousExperience_en: string[];
  areasOfPractice?: string;
  areasOfPractice_en?: string;
  affiliations?: string;
  affiliations_en?: string;
  awards?: string[];
  awards_en?: string[];
}

// Load JSON files dynamically from Decap CMS
const esData = import.meta.glob('../data/equipo/*.es.json', { eager: true });
const enData = import.meta.glob('../data/equipo/*.en.json', { eager: true });

// Load images dynamically from Decap CMS folder to let Vite bundle them
const imageModules = import.meta.glob('/src/assets/fotos-equipo/*.{png,jpg,jpeg,webp,svg}', { eager: true });

function getImageUrl(cmsPath: string | undefined): string {
  if (!cmsPath) return '';
  const srcPath = cmsPath.replace('/assets/fotos-equipo/', '/src/assets/fotos-equipo/');
  const mod = imageModules[srcPath] as any;
  return mod ? (mod.default || mod) : cmsPath;
}

function formatText(text: string | undefined): string[] {
  if (!text) return [];
  // Split by newline and filter out empty lines
  return text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
}

const rawMembers = Object.keys(esData).map(path => {
  const moduleEs = esData[path] as any;
  const esRecord = moduleEs.default || moduleEs;

  const fileName = path.split('/').pop() || "";
  const id = fileName.replace('.es.json', '');

  const enPath = path.replace('.es.json', '.en.json');
  const moduleEn = enData[enPath] as any;
  const enRecord = moduleEn ? (moduleEn.default || moduleEn) : esRecord;

  const nombre = esRecord.nombre || '';
  const primer = esRecord.primer_apellido || '';
  const segundo = esRecord.segundo_apellido || '';
  const nombreCorto = `${nombre} ${primer}`.trim();
  const nombreCompleto = `${nombre} ${primer} ${segundo}`.trim().replace(/\s+/g, ' ');

  return {
    id,
    name: nombreCorto, // Keep for backward compatibility
    fullName: nombreCompleto, // Keep for backward compatibility
    nombre_corto: nombreCorto,
    nombre_completo: nombreCompleto,
    _primer_apellido: primer, // Used strictly for sorting
    role: esRecord.cargo || '',
    role_en: enRecord.cargo || '',
    email: esRecord.mail || '',
    linkedin: esRecord.linkedin || '',
    image: getImageUrl(esRecord.foto_desktop),
    mobileImage: getImageUrl(esRecord.foto_mobile),
    thumbnail: getImageUrl(esRecord.foto_thumbnail),
    bio: formatText(esRecord.bio),
    bio_en: formatText(enRecord.bio),
    education: formatText(esRecord.educacion),
    education_en: formatText(enRecord.educacion),
    languages: (esRecord.idiomas_hablados || '').split(',').map((l: string) => l.trim()),
    languages_en: (enRecord.idiomas_hablados || '').split(',').map((l: string) => l.trim()),
    previousExperience: formatText(esRecord.experiencia_previa),
    previousExperience_en: formatText(enRecord.experiencia_previa),
    areasOfPractice: esRecord.areas_practica || '',
    areasOfPractice_en: enRecord.areas_practica || '',
    affiliations: esRecord.afiliaciones || '',
    affiliations_en: enRecord.afiliaciones || '',
    awards: formatText(esRecord.premios),
    awards_en: formatText(enRecord.premios)
  };
});

// Implementacion de Lógica de Ordenamiento Jerárquico
const hierarchyMap: Record<string, number> = {
  "Socio": 1,
  "Socia": 1,
  "Consejero": 2,
  "Consejera": 2,
  "Asociado Senior": 3,
  "Asociada Senior": 3,
  "Asociado": 4,
  "Asociada": 4,
};

const fixedSocioOrder = ["gerardo-otero", "alfonso-mora", "nicolas-zisis"];

export const teamMembers: TeamMember[] = rawMembers.sort((a, b) => {
  const rankA = hierarchyMap[a.role] || 99;
  const rankB = hierarchyMap[b.role] || 99;

  // 1. Sort by Hierarchy (Socio -> Consejero -> Asociado Senior -> Asociado)
  if (rankA !== rankB) {
    return rankA - rankB;
  }

  // 2. Handle Socios (rank 1) specifically for the Podium
  if (rankA === 1) {
    let indexA = fixedSocioOrder.indexOf(a.id);
    let indexB = fixedSocioOrder.indexOf(b.id);

    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;

    // If their fixed order rank differs, sort by that rank (pos order vs 999 fallback)
    if (indexA !== indexB) {
      return indexA - indexB;
    }
    // If both are 999 (not in podium), let it fall through to the alphabetical sort
  }

  // 3. Alphabetical Sort for everyone else inside their own rank
  return a._primer_apellido.localeCompare(b._primer_apellido);
}).map(({ _primer_apellido, ...cleanMember }) => cleanMember);
