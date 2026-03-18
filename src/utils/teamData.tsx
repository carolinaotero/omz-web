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
  awards?: string;
  awards_en?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "gerardo-otero",
    name: "Gerardo Otero",
    fullName: "Gerardo Otero Vial",
    role: "Socio",
    role_en: "Partner",
    email: "gerardo@omzabogados.cl",
    linkedin: "https://www.linkedin.com/in/gerardo-otero-a8513b127/",
    image: imgGerardoVertical,
    mobileImage: imgGerardoHorizontal,
    thumbnail: imgGerardoSquare,
    bio: [
      "Gerardo es un abogado multidisciplinario con experiencia asesorando a empresas en gobierno corporativo, negociaciones y transacciones con aspectos comerciales y financieros relevantes. Además, cuenta con experiencia litigiosa en procedimientos administrativos sancionatorios y disputas comerciales frente a distintos órganos y tribunales.",
      "Gerardo está habilitado para ejercer como abogado en Chile y fue admitido al Colegio de Abogados (State Bar) del Estado de California, EE.UU.",
      "Además de abogado en OMZ, Gerardo es miembro del Departamento de Derecho Económico, Comercial y Tributario de la Facultad de Derecho de la Pontificia Universidad Católica de Chile y participa en directorios de empresas del rubro inmobiliario."
    ],
    bio_en: [
      "Gerardo is a multidisciplinary lawyer with experience advising companies on corporate governance, negotiations, and transactions with relevant commercial and financial aspects. He also has litigation experience in administrative sanctioning proceedings and commercial disputes before various bodies and courts.",
      "Gerardo is admitted to practice as a lawyer in Chile and was admitted to the State Bar of California, USA.",
      "In addition to being a lawyer at OMZ, Gerardo is a member of the Department of Economic, Commercial, and Tax Law of the Faculty of Law of the Pontificia Universidad Católica de Chile and participates in boards of companies in the real estate sector."
    ],
    education: [
      "Harvard Law School, LL.M.(2016) - Beca Chile CONICYT",
      "Pontifica Universidad Católica de Chile, Licenciado en Derecho (2012) - Premio Luis Gutiérrez Allende (2011)"
    ],
    education_en: [
      "Harvard Law School, LL.M. (2016) - Chile CONICYT Scholarship",
      "Pontifica Universidad Católica de Chile, Law Degree (2012) - Luis Gutiérrez Allende Award (2011)"
    ],
    languages: ["Español", "Inglés"],
    languages_en: ["Spanish", "English"],
    previousExperience: [
      "Claro y Cía. (2012-2015; 2017-2021)",
      "White & Case, oficina de Nueva York (2016-2017)"
    ],
    previousExperience_en: [
      "Claro y Cía. (2012-2015; 2017-2021)",
      "White & Case, New York office (2016-2017)"
    ],
    areasOfPractice: "Corporativo y resolución de disputas.",
    areasOfPractice_en: "Corporate and dispute resolution.",
    affiliations: "Colegio de Abogados de Chile A.G. y State Bar of California",
    affiliations_en: "Chilean Bar Association and State Bar of California"
  },
  {
    id: "alfonso-mora",
    name: "Alfonso Mora",
    fullName: "Alfonso Mora Domínguez",
    role: "Socio",
    role_en: "Partner",
    email: "alfonso@omzabogados.cl",
    linkedin: "https://www.linkedin.com/in/alfonso-mora-dom%C3%ADnguez-91948b33/",
    image: imgAlfonsoVertical,
    mobileImage: imgAlfonsoHorizontal,
    thumbnail: imgAlfonsoSquare,
    bio: [
      "Alfonso lidera la práctica de tributación y gestión patrimonial del estudio. Asesora a grupos empresariales, family offices y personas de alto patrimonio en materias tributarias nacionales e internacionales, incluyendo tributación internacional, planificación sucesoria y estructuración patrimonial.",
      "Su práctica se centra en la estructuración de inversiones y patrimonios familiares, con foco en eficiencia fiscal, sucesiones y reorganizaciones de holdings. Además, Alfonso representa los intereses de sus clientes ante el Servicio de Impuestos Internos y los Tribunales Tributarios y Aduaneros, en procesos de fiscalización y en controversias y litigios.",
      "Junto con sus actividades como socio en OMZ, Alfonso participa activamente en iniciativas vinculadas al arte contemporáneo y la filantropía. Integra el directorio de la Fundación Colección de Arte Contemporáneo Ca.Sa y es consejero de Fundación Antenna."
    ],
    bio_en: [
      "Alfonso leads the firm's tax and wealth management practice. He advises business groups, family offices, and high-net-worth individuals on domestic and international tax matters, including international taxation, succession planning, and estate structuring.",
      "His practice focuses on the structuring of investments and family assets, with a focus on tax efficiency, successions, and holding reorganizations. In addition, Alfonso represents his clients' interests before the Internal Revenue Service and the Tax and Customs Courts, in audit processes and in controversies and litigation.",
      "Along with his activities as a partner at OMZ, Alfonso actively participates in initiatives linked to contemporary art and philanthropy. He is a member of the board of the Ca.Sa Contemporary Art Collection Foundation and is a counselor of the Antenna Foundation."
    ],
    education: [
      "Maastricht University (Holanda), Máster en Derecho Tributario Internacional y Europeo (2020).",
      "Pontificia Universidad Católica de Chile, Licenciado en Derecho (2012)."
    ],
    education_en: [
      "Maastricht University (Netherlands), Master in International and European Tax Law (2020).",
      "Pontificia Universidad Católica de Chile, Law Degree (2012)."
    ],
    languages: ["Español", "Inglés"],
    languages_en: ["Spanish", "English"],
    previousExperience: [
      "Montero, Silva y Valdés (2021 – 2023)",
      "Baker McKenzie (2012 – 2019)"
    ],
    previousExperience_en: [
      "Montero, Silva y Valdés (2021 – 2023)",
      "Baker McKenzie (2012 – 2019)"
    ],
    areasOfPractice: "Tributario, gestión patrimonial y corporativo.",
    areasOfPractice_en: "Tax, wealth management, and corporate.",
    affiliations: "Miembro del International Fiscal Association (IFA).",
    affiliations_en: "Member of the International Fiscal Association (IFA)."
  },
  {
    id: "nicolas-zisis",
    name: "Nicolás Zisis",
    fullName: "Nicolás Zisis Banz",
    role: "Socio",
    role_en: "Partner",
    email: "nicolas@omzabogados.cl",
    linkedin: "https://www.linkedin.com/in/nicolas-zisis-banz-300b7a196/",
    image: imgNicolasVertical,
    mobileImage: imgNicolasHorizontal,
    thumbnail: imgNicolasSquare,
    bio: [
      "Nicolás es especialista en la resolución de controversias complejas. Con más de 15 años de experiencia, ha asesorado y representado a organismos públicos y empresas privadas en disputas nacionales e internacionales, actuando en diversas jurisdicciones y centros arbitrales.",
      "Cuenta con reconocida experiencia en los sectores de construcción e infraestructura, proyectos mineros, recursos naturales y en litigios societarios, acompañando a sus clientes en todas las etapas del conflicto, desde su prevención hasta su representación en juicio.",
      "Nicolás es árbitro del Centro de Arbitraje y Mediación de la Cámara de Comercio de Santiago (CAM Santiago). Actualmente, integra su lista de árbitros jóvenes.",
      "Además de su trabajo en OMZ, Nicolás es profesor part-time de Derecho Civil en la Universidad Diego Portales y ha sido invitado a dictar clases sobre arbitraje internacional en programas de pregrado y posgrado de la Universidad de Chile."
    ],
    bio_en: [
      "Nicolás is a specialist in the resolution of complex disputes. With over 15 years of experience, he has advised and represented public bodies and private companies in domestic and international disputes, acting in various jurisdictions and arbitration centers.",
      "He has recognized experience in the construction and infrastructure sectors, mining projects, natural resources, and corporate litigation, accompanying his clients in all stages of the conflict, from its prevention to its representation in court.",
      "Nicolás is an arbitrator of the Arbitration and Mediation Center of the Santiago Chamber of Commerce (CAM Santiago). Currently, he is on its list of young arbitrators.",
      "In addition to his work at OMZ, Nicolás is a part-time professor of Civil Law at Diego Portales University and has been invited to lecture on international arbitration in undergraduate and graduate programs at the University of Chile."
    ],
    education: [
      "Universidad de Oxford, Magister Juris (2017) Beca Chile CONICYT",
      "Universidad de Chile, Licenciado en Ciencias Jurídicas y Sociales (2012) Ranking licenciatura 1°/287"
    ],
    education_en: [
      "University of Oxford, Magister Juris (2017) Chile CONICYT Scholarship",
      "University of Chile, Law Degree (2012) Ranking 1st/287"
    ],
    languages: ["Español", "Inglés"],
    languages_en: ["Spanish", "English"],
    previousExperience: [
      "Bofill, Mir & Álvarez Jana (2018-2021)",
      "Freshfields Bruckhaus Deringer, oficina de Londres (2017-2018)",
      "Claro & Cía. (2010-2016)"
    ],
    previousExperience_en: [
      "Bofill, Mir & Álvarez Jana (2018-2021)",
      "Freshfields Bruckhaus Deringer, London office (2017-2018)",
      "Claro & Cía. (2010-2016)"
    ],
    areasOfPractice: "Resolución de disputas.",
    areasOfPractice_en: "Dispute resolution.",
    affiliations: "Colegio de Abogados de Chile A.G.",
    affiliations_en: "Chilean Bar Association"
  },
  {
    id: "ricardo-celedon",
    name: "Ricardo Celedón",
    fullName: "Ricardo Celedón Otero",
    role: "Consejero",
    role_en: "Counsel",
    email: "ricardo@omzabogados.cl",
    linkedin: "https://www.linkedin.com/in/ricardo-celedon-otero/",
    image: imgRicardoVertical,
    mobileImage: imgRicardoHorizontal,
    thumbnail: imgRicardoSquare,
    bio: [
      "Ricardo centra su práctica en derecho corporativo, transacciones complejas, tecnología e infraestructura. Su especialización en derecho y tecnología lo ha posicionado como asesor recurrente de startups, fondos de venture capital y compañías que desarrollan soluciones basadas en inteligencia artificial.",
      "Con más de una década de experiencia, Ricardo ha participado en procesos de fusiones y adquisiciones, rondas de financiamiento, estructuración de joint ventures y contratación tecnológica. Asimismo, ha acompañado a sus clientes en la obtención de permisos administrativos y en la negociación de contratos vinculados a obras públicas y proyectos de infraestructura."
    ],
    bio_en: [
      "Ricardo focuses his practice on corporate law, complex transactions, technology, and infrastructure. His specialization in law and technology has positioned him as a recurring advisor to startups, venture capital funds, and companies that develop solutions based on artificial intelligence.",
      "With more than a decade of experience, Ricardo has participated in mergers and acquisitions, financing rounds, joint venture structuring, and technology contracting. Likewise, he has accompanied his clients in obtaining administrative permits and in negotiating contracts linked to public works and infrastructure projects."
    ],
    education: [
      "University of California, Berkeley, Master of Laws (LL.M.) con Certificado en Derecho y Tecnología (2020). Beca Chile CONICYT",
      "Pontificia Universidad Católica de Chile, Licenciado en Derecho (2014)"
    ],
    education_en: [
      "University of California, Berkeley, Master of Laws (LL.M.) with Certificate in Law and Technology (2020). Chile CONICYT Scholarship",
      "Pontificia Universidad Católica de Chile, Law Degree (2014)"
    ],
    languages: ["Español", "Inglés"],
    languages_en: ["Spanish", "English"],
    previousExperience: [
      "Echeverría Ilharreborde Scagliotti (2021-2024)",
      "CMS Carey & Allende (2014-2021)"
    ],
    previousExperience_en: [
      "Echeverría Ilharreborde Scagliotti (2021-2024)",
      "CMS Carey & Allende (2014-2021)"
    ],
    areasOfPractice: "Corporativo, M&A, tecnología, venture capital, infraestructura y proyectos, y derecho administrativo.",
    areasOfPractice_en: "Corporate, M&A, technology, venture capital, infrastructure and projects, and administrative law.",
    affiliations: "Colegio de Abogados de Chile A.G.",
    affiliations_en: "Chilean Bar Association"
  },
  {
    id: "pedro-pablo-otero",
    name: "Pedro Pablo Otero",
    fullName: "Pedro Pablo Otero Vial",
    role: "Asociado Senior",
    role_en: "Senior Associate",
    email: "pedropablo@omzabogados.cl",
    linkedin: "https://www.linkedin.com/in/pedro-pablo-otero-vial-114b08202/",
    image: imgPedroPabloVertical,
    mobileImage: imgPedroPabloHorizontal,
    thumbnail: imgPedroPabloSquare,
    bio: [
      "Pedro Pablo es especialista en materias tributarias. Tiene experiencia asesorando operaciones locales e internacionales, en distintas industrias. Su práctica incluye planificación tributaria, realización de auditorías y representación de clientes en procedimientos administrativos ante autoridades fiscales, entre otras.",
      "Actualmente cursa el Master of Science in Taxation en la Universidad de Oxford, con enfoque en tributación internacional y política fiscal. Previamente obtuvo el LL.M. con especialización en tributación en la London School of Economics and Political Science (LSE), con énfasis en tributación transfronteriza, sistemas fiscales comparados y contabilidad en la economía global.",
      "Pedro Pablo ha sido ayudante de Derecho Comercial, Derecho Civil y Derecho Tributario en la Universidad Católica."
    ],
    bio_en: [
      "Pedro Pablo is a specialist in tax matters. He has experience advising local and international operations in different industries. His practice includes tax planning, conducting audits, and representing clients in administrative proceedings before tax authorities, among others.",
      "He is currently studying for the Master of Science in Taxation at the University of Oxford, focusing on international taxation and fiscal policy. He previously obtained an LL.M. with a specialization in taxation at the London School of Economics and Political Science (LSE), with an emphasis on cross-border taxation, comparative tax systems, and accounting in the global economy.",
      "Pedro Pablo has been a teaching assistant in Commercial Law, Civil Law, and Tax Law at the Catholic University."
    ],
    education: [
      "University of Oxford, MSc in Taxation (candidato). Beca Field Court Tax Chambers.",
      "The London School of Economics and Political Science (LSE), LL.M. con especialización en Derecho Tributario (2025).",
      "Pontificia Universidad Católica de Chile, Licenciado en Derecho (2019). Distinción máxima."
    ],
    education_en: [
      "University of Oxford, MSc in Taxation (candidate). Field Court Tax Chambers Scholarship.",
      "The London School of Economics and Political Science (LSE), LL.M. with specialization in Tax Law (2025).",
      "Pontificia Universidad Católica de Chile, Law Degree (2019). Maximum distinction."
    ],
    languages: ["Español", "Inglés"],
    languages_en: ["Spanish", "English"],
    previousExperience: [
      "MBC Abogados (2021–2024)",
      "Fiscalía del Ministerio de Bienes Nacionales (2020)"
    ],
    previousExperience_en: [
      "MBC Abogados (2021–2024)",
      "Ministry of National Assets Prosecutor's Office (2020)"
    ],
    areasOfPractice: "Tributario, corporativo y gestión patrimonial.",
    areasOfPractice_en: "Tax, corporate, and wealth management."
  },
  {
    id: "isidora-valenzuela",
    name: "Isidora Valenzuela",
    fullName: "Isidora Valenzuela González",
    role: "Asociada",
    role_en: "Associate",
    email: "isidora@omzabogados.cl",
    linkedin: "https://www.linkedin.com/in/isidora-valenzuela-40ba19211/",
    image: imgIsidoraVertical,
    mobileImage: imgIsidoraHorizontal,
    thumbnail: imgIsidoraSquare,
    bio: [
      "Isidora es parte de nuestra área de resolución de disputas. Además, cuenta con experiencia en derecho corporativo, financiamiento de proyectos inmobiliarios y de infraestructura, y en asuntos de carácter transaccional.",
      "Isidora es ayudante de Derecho Civil en la Universidad de Chile. Anteriormente, fue ayudante de los cursos de Introducción al Derecho y Derecho Constitucional en la misma universidad."
    ],
    bio_en: [
      "Isidora is part of our dispute resolution area. In addition, she has experience in corporate law, real estate and infrastructure project financing, and transactional matters.",
      "Isidora is a teaching assistant in Civil Law at the University of Chile. Previously, she was a teaching assistant for the Introduction to Law and Constitutional Law courses at the same university."
    ],
    education: [
      "Universidad de Chile, Licenciada en Ciencias Jurídicas y Sociales (2024). Distinción máxima."
    ],
    education_en: [
      "University of Chile, Law Degree (2024). Maximum distinction."
    ],
    languages: ["Español", "Inglés"],
    languages_en: ["Spanish", "English"],
    previousExperience: [],
    previousExperience_en: [],
    areasOfPractice: "Resolución de disputas.",
    areasOfPractice_en: "Dispute resolution.",
    awards: "Premio Excelencia Académica “Facultad de Derecho Universidad de Chile” (2022), al mejor promedio de notas de su generación.",
    awards_en: "“University of Chile Law School” Academic Excellence Award (2022), for the best grade point average of her generation."
  },
  {
    id: "jaime-zanartu",
    name: "Jaime Zañartu",
    fullName: "Jaime Zañartu Baeza",
    role: "Asociado",
    role_en: "Associate",
    email: "jaime@omzabogados.cl",
    linkedin: "https://www.linkedin.com/in/jaime-za%C3%B1artu-baeza-43390a291",
    image: imgJaimeVertical,
    mobileImage: imgJaimeHorizontal,
    thumbnail: imgJaimeSquare,
    bio: [
      "Jaime enfoca su práctica en materias de derecho tributario, derecho corporativo y de gestión patrimonial.",
      "Realizó un intercambio académico en la Vrije Universiteit Amsterdam (Países Bajos), con énfasis en ciencias sociales."
    ],
    bio_en: [
      "Jaime focuses his practice on tax law, corporate law, and wealth management.",
      "He completed an academic exchange at Vrije Universiteit Amsterdam (Netherlands), with an emphasis on social sciences."
    ],
    education: [
      "Pontificia Universidad Católica de Chile. Licenciado en Derecho, con especialidad en Derecho Privado (2024)."
    ],
    education_en: [
      "Pontificia Universidad Católica de Chile. Law Degree, with a specialty in Private Law (2024)."
    ],
    languages: ["Español", "Inglés"],
    languages_en: ["Spanish", "English"],
    previousExperience: [],
    previousExperience_en: [],
    areasOfPractice: "Tributario, corporativo y gestión patrimonial.",
    areasOfPractice_en: "Tax, corporate, and wealth management."
  }
];
