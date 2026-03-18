import svgPaths from "./svg-epbbhkuzhr";
import imgImage25 from "figma:asset/88db2b1410273635cd5e6fa427852e8e38421a22.png";
import imgImage19 from "figma:asset/fdeeccd17f5f03d0c33c48930da6d0a9b03974ae.png";
import { imgImage24 } from "./svg-eevfy";

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

function Frame() {
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

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 p-[16px] top-0 w-[402px]">
      <OmzLogoSecundario />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] content-start flex flex-wrap font-montserrat font-medium gap-[4px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[2.4px] whitespace-pre">
      <p className="relative shrink-0">{`Av. Apoquindo 3669, piso 14, Las Condes. `}</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">+56 2 2123 4567</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex font-aleo font-black gap-[16px] items-center justify-center leading-[normal] place-self-stretch relative shrink-0 text-[14px] text-nowrap tracking-[2.8px] whitespace-pre">
      <p className="relative shrink-0 text-[#fdc82f]">ES</p>
      <p className="relative shrink-0 text-[#fdc82f]">EN</p>
      <p className="relative shrink-0 text-white">|</p>
      <p className="relative shrink-0 text-[#fdc82f]">CONTACTO</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#38313e] bottom-0 box-border gap-[16px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[99px] left-0 overflow-clip px-[16px] py-[8px] w-[402px]" data-name="Footer">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[-56px] top-[112px]" data-name="Mask group">
      <div className="absolute h-[590.25px] left-[-445.86px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[389.864px_151.766px] mask-size-[513px_192px] top-[-39.77px] w-[1049.33px]" data-name="image 24" style={{ maskImage: `url('${imgImage24}')` }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage25} />
          <div className="absolute bg-[rgba(56,49,62,0.2)] inset-0" />
        </div>
      </div>
      <div className="absolute h-[710px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3px_172px] mask-size-[513px_192px] top-[-60px] translate-x-[-50%] w-[520px]" data-name="image 19" style={{ maskImage: `url('${imgImage24}')` }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage19} />
          <div className="absolute bg-[rgba(56,49,62,0.3)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g id="Dot">
          <path d={svgPaths.p3d75ce00} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] items-end justify-center left-[126px] p-[10px] top-[150px]" data-name="Title">
      <p className="font-aleo font-semibold leading-[normal] relative shrink-0 text-[36px] text-nowrap text-white tracking-[3.6px] whitespace-pre">Somos</p>
      <Dot />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-56px] top-[112px]">
      <MaskGroup />
      <Title />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-0 px-[16px] py-[10px] top-[320px]">
      <div className="font-montserrat font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black text-justify w-[370px]">
        <p className="leading-[30px] mb-0 text-[24px]">Combinamos el rigor de la ciencia legal con el arte de la estrategia personalizada.</p>
        <p className="leading-[40px] mb-0 text-[24px]">&nbsp;</p>
        <p className="leading-[20px] mb-0 text-[14px]">Sabemos que cada caso es un universo distinto, por lo que actuamos con ética y precisión para alinear el derecho con sus objetivos comerciales o personales.</p>
        <p className="leading-[40px] mb-0 text-[14px]">&nbsp;</p>
        <p className="leading-[20px] text-[14px]">Somos un estudio moderno que evita la burocracia tradicional. Nuestra prioridad es la agilidad, la cercanía y la pasión por entregar resultados que superan las expectativas.</p>
      </div>
    </div>
  );
}

function Frame3() {
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
    <div className="absolute content-start flex flex-wrap gap-[8px] items-start justify-center left-[16px] top-[666px] w-[370px]" data-name="Concepts">
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px] whitespace-pre">ARTE</p>
      <Frame3 />
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px] whitespace-pre">CIENCIA</p>
      <Frame3 />
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px] whitespace-pre">PASIÓN</p>
      <Frame3 />
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px] whitespace-pre">EXCELENCIA</p>
      <Frame3 />
    </div>
  );
}

export default function IPhone16Pro() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 Pro - 2">
      <Frame4 />
      <Footer />
      <Group />
      <Frame5 />
      <Concepts />
    </div>
  );
}