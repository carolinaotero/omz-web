import svgPaths from "./svg-esdi8rnfhr";
import imgImage18 from "figma:asset/fdeeccd17f5f03d0c33c48930da6d0a9b03974ae.png";

function Dot() {
  return (
    <div className="h-[32px] relative shrink-0 w-[17px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 32">
        <g id="Dot">
          <path d={svgPaths.pf062cf0} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-end justify-center left-[64px] p-[10px] top-[150px]" data-name="Title">
      <p className="font-aleo font-semibold leading-[normal] relative shrink-0 text-[64px] text-nowrap text-white tracking-[6.4px] whitespace-pre">Somos</p>
      <Dot />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[39px] relative shrink-0 w-[8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 39">
        <g id="Frame 45">
          <path d={svgPaths.p1db50400} fill="var(--fill-0, #FDC82F)" id="Vector" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Concepts() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[16px] items-start left-[601px] top-[566px]" data-name="Concepts">
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[32px] text-nowrap tracking-[3.2px] whitespace-pre">ARTE</p>
      <Frame4 />
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[32px] text-nowrap tracking-[3.2px] whitespace-pre">CIENCIA</p>
      <Frame4 />
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[32px] text-nowrap tracking-[3.2px] whitespace-pre">PASIÓN</p>
      <Frame4 />
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[32px] text-nowrap tracking-[3.2px] whitespace-pre">EXCELENCIA</p>
    </div>
  );
}

function OmzLogoSecundario() {
  return (
    <div className="h-[80px] relative shrink-0 w-[124px]" data-name="OMZ_LOGO SECUNDARIO">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 80">
        <g id="OMZ_LOGO SECUNDARIO">
          <path d={svgPaths.p2e8e9200} fill="var(--fill-0, #FDC82F)" id="Vector" />
          <path d={svgPaths.p3675fe70} fill="var(--fill-0, #38313E)" id="Vector_2" />
          <path d={svgPaths.p14ff8180} fill="var(--fill-0, #38313E)" id="Vector_3" />
          <g id="Group">
            <path d={svgPaths.p3fd9e940} fill="var(--fill-0, #38313E)" id="Vector_4" />
            <path d={svgPaths.p2c036a80} fill="var(--fill-0, #38313E)" id="Vector_5" />
            <path d={svgPaths.p69f0a80} fill="var(--fill-0, #38313E)" id="Vector_6" />
            <path d={svgPaths.p27440880} fill="var(--fill-0, #38313E)" id="Vector_7" />
            <path d={svgPaths.p3533f700} fill="var(--fill-0, #38313E)" id="Vector_8" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p18576100} fill="var(--fill-0, #38313E)" id="Vector_9" />
            <path d={svgPaths.p167ecb00} fill="var(--fill-0, #38313E)" id="Vector_10" />
            <path d={svgPaths.p3d954c00} fill="var(--fill-0, #38313E)" id="Vector_11" />
            <path d={svgPaths.p1c23e4f0} fill="var(--fill-0, #38313E)" id="Vector_12" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p19925100} fill="var(--fill-0, #38313E)" id="Vector_13" />
            <path d={svgPaths.p1f8ec500} fill="var(--fill-0, #38313E)" id="Vector_14" />
            <path d={svgPaths.p375de500} fill="var(--fill-0, #38313E)" id="Vector_15" />
            <path d={svgPaths.p3a1e8b80} fill="var(--fill-0, #38313E)" id="Vector_16" />
            <path d={svgPaths.p18578b80} fill="var(--fill-0, #38313E)" id="Vector_17" />
          </g>
          <path d={svgPaths.p17e45000} fill="var(--fill-0, #38313E)" id="Vector_18" />
          <path d={svgPaths.p30caa080} fill="var(--fill-0, #FDC82F)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60px]">
      <div className="absolute bottom-[-8.33%] left-[-3.33%] right-0 top-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 28">
          <g id="Frame 37">
            <path d={svgPaths.p23b99580} fill="var(--stroke-0, #38313E)" id="Line 2" />
            <path d={svgPaths.p33a0aa00} fill="var(--stroke-0, #38313E)" id="Line 4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[64px] py-[16px] top-0 w-[1440px]">
      <OmzLogoSecundario />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-montserrat font-medium gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[3.2px] whitespace-pre">
      <p className="relative shrink-0">{`Av. Apoquindo 3669, piso 14, Las Condes. `}</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">+56 2 2123 4567</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-aleo font-black gap-[16px] items-center leading-[normal] relative shrink-0 text-[16px] text-nowrap tracking-[3.2px] whitespace-pre">
      <p className="relative shrink-0 text-[#fdc82f]">ES</p>
      <p className="relative shrink-0 text-[#fdc82f]">EN</p>
      <p className="relative shrink-0 text-white">|</p>
      <p className="relative shrink-0 text-[#fdc82f]">CONTACTO</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#38313e] bottom-0 box-border content-stretch flex items-center justify-between left-0 overflow-clip px-[64px] py-[16px] w-[1440px]" data-name="Footer">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function Somos() {
  return (
    <div className="bg-white relative size-full" data-name="Somos">
      <div className="absolute h-[768px] left-0 top-[112px] w-[562px]" data-name="image 18">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage18} />
          <div className="absolute bg-[rgba(56,49,62,0.3)] inset-0" />
        </div>
      </div>
      <Title />
      <div className="absolute font-montserrat font-normal leading-[0] left-[704px] not-italic text-[0px] text-black text-justify top-[152px] w-[600px]">
        <p className="leading-[40px] mb-0 text-[24px]">Combinamos el rigor de la ciencia legal con el arte de la estrategia personalizada.</p>
        <p className="leading-[40px] mb-0 text-[24px]">&nbsp;</p>
        <p className="leading-[30px] mb-0 text-[16px]">Sabemos que cada caso es un universo distinto, por lo que actuamos con ética y precisión para alinear el derecho con sus objetivos comerciales o personales.</p>
        <p className="leading-[40px] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[30px] text-[16px]">Somos un estudio moderno que evita la burocracia tradicional. Nuestra prioridad es la agilidad, la cercanía y la pasión por entregar resultados que superan las expectativas.</p>
      </div>
      <Concepts />
      <Frame />
      <Footer />
    </div>
  );
}