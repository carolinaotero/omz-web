import svgPaths from "./svg-chi6qkg1p6";

function Dot() {
  return (
    <div className="h-[25.375px] relative shrink-0 w-[12.25px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 25.375">
        <g id="Dot">
          <path d={svgPaths.p39552d00} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-center relative shrink-0" data-name="Title">
      <p className="font-['Aleo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#38313e] text-[48px] text-center text-nowrap">Gerardo Otero Vial</p>
      <Dot />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Title />
      <p className="font-['Montserrat:Light',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[20px] text-black tracking-[2px] w-[min-content]">SOCIO</p>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="LinkedIn_icon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a135b00} fill="var(--fill-0, #38313E)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p39cd72b0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <LinkedInIcon />
      <p className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[20px] text-nowrap underline">gerardo@omzabogados.cl</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-1.5px_0_-1.5px_-0.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 593.895 3">
            <path d={svgPaths.p323e5b00} fill="var(--stroke-0, #FDC82F)" id="Line 9" />
          </svg>
        </div>
      </div>
      <div className="h-[3.398px] relative shrink-0 w-[3.605px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.60469 3.39776">
          <path d={svgPaths.p28ba22f0} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#4a4a4b] text-[14px] w-full">
      <div className="basis-0 grow leading-[normal] min-h-px min-w-px relative shrink-0">
        <p className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] mb-0 not-italic text-[#4a4a4b] underline">Educación</p>
        <p className="mb-0">{`·      Harvard Law School, LL.M.(2016) - Beca Chile CONICYT `}</p>
        <p>{`·      Pontifica Universidad Católica de Chile, Licenciado en Derecho (2012) - Premio Luis Gutiérrez Allende (2011)`}</p>
      </div>
      <div className="basis-0 grow leading-[normal] min-h-px min-w-px relative shrink-0">
        <p className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] mb-0 not-italic text-[#4a4a4b] underline">Experiencia previa</p>
        <p className="mb-0">{`·      Claro y Cía. (2012-2015; 20217-2021)`}</p>
        <p>{`·      White & Case, oficina de Nueva York (2016-2017)`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#4a4a4b] text-[14px] w-full">
      <div className="basis-0 grow leading-[normal] min-h-px min-w-px relative shrink-0">
        <p className="mb-0">
          <span className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] not-italic text-[#4a4a4b] underline">Afiliaciones</span>{" "}
        </p>
        <p>Colegio de Abogados de Chile A.G. y State Bar of California</p>
      </div>
      <div className="basis-0 grow leading-[normal] min-h-px min-w-px relative shrink-0">
        <p className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] mb-0 not-italic text-[#4a4a4b] underline">Idiomas</p>
        <p>Español e inglés.</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Frame2 />
      <Frame1 />
      <div className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-full">
        <p className="mb-0">{`Gerardo es un abogado multidisciplinario con experiencia asesorando a empresas en gobierno corporativo, negociaciones y transacciones con aspectos comerciales y financieros relevantes. Además, cuenta con experiencia litigiosa en procedimientos administrativos sancionatorios y disputas comerciales frente a distintos órganos y tribunales.  `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Gerardo está habilitado para ejercer como abogado en Chile y fue admitido al Colegio de Abogados (State Bar) del Estado de California, EE.UU. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Además de abogado en OMZ, Gerardo es miembro del Departamento de Derecho Económico, Comercial y Tributario de la Facultad de Derecho de la Pontificia Universidad Católica de Chile y participa en directorios de empresas del rubro inmobiliario.  `}</p>
      </div>
      <Frame3 />
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4a4b] text-[14px] w-full">
        <span className="[text-underline-position:from-font] decoration-solid font-['Montserrat:Medium',sans-serif] underline">Áreas de práctica</span>
        <span className="font-['Montserrat:Medium',sans-serif]">
          <br aria-hidden="true" />
        </span>
        Corporativo y resolución de disputas.
      </p>
      <Frame4 />
      <Frame5 />
    </div>
  );
}