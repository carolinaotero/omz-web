import svgPaths from "./svg-1r7ah13gbj";
import imgHacemos1 from "figma:asset/9b68ac69d5e4af2e4b94546c55e926b6751f7dd0.png";

function AreasPractica() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[586px]" data-name="Areas practica">
      <p className="css-ew64yg font-['Aleo:Regular',sans-serif] font-normal leading-[normal] opacity-40 relative shrink-0 text-[#38313e] text-[48px]">Resolución de disputas</p>
    </div>
  );
}

function AreasPractica1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[586px]" data-name="Areas practica">
      <p className="css-ew64yg font-['Aleo:Regular',sans-serif] font-normal leading-[normal] opacity-40 relative shrink-0 text-[#38313e] text-[48px]">Asesoría tributaria y wealth management</p>
    </div>
  );
}

function AreasPractica2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[586px]" data-name="Areas practica">
      <p className="css-ew64yg font-['Aleo:Regular',sans-serif] font-normal leading-[normal] opacity-40 relative shrink-0 text-[#38313e] text-[48px]">Asesoría corporativa</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[97px] top-[205px] w-[1232px]">
      <AreasPractica />
      <AreasPractica1 />
      <AreasPractica2 />
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
      <div className="absolute inset-[-8.33%_0_-8.33%_-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 28">
          <g id="Frame 37">
            <path d={svgPaths.p1a35cf80} fill="var(--stroke-0, #38313E)" id="Line 2" />
            <path d={svgPaths.p38e2f300} fill="var(--stroke-0, #38313E)" id="Line 4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[64px] py-[16px] top-0 w-[1440px]" data-name="Top Bar">
      <OmzLogoSecundario />
      <Frame1 />
    </div>
  );
}

function QueHacemosDesktop() {
  return (
    <div className="absolute bg-white h-[352px] left-[-247px] overflow-clip top-[535px] w-[1920px]" data-name="Qué Hacemos Desktop">
      <div className="absolute h-[1280px] left-0 top-[-430px] w-[1920px]" data-name="Hacemos 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHacemos1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Montserrat:Medium',sans-serif] gap-[16px] items-center not-italic relative shrink-0 text-white">
      <p className="css-ew64yg relative shrink-0">{`Av. Apoquindo 3669, piso 14, Las Condes. `}</p>
      <p className="css-ew64yg relative shrink-0">|</p>
      <p className="css-ew64yg relative shrink-0">+56 2 2123 4567</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Aleo:Black',sans-serif] font-black gap-[16px] items-center relative shrink-0">
      <p className="css-ew64yg relative shrink-0 text-[#fdc82f]">ES</p>
      <p className="css-ew64yg relative shrink-0 text-[#fdc82f]">EN</p>
      <p className="css-ew64yg relative shrink-0 text-white">|</p>
      <p className="css-ew64yg relative shrink-0 text-[#fdc82f]">CONTACTO</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#38313e] bottom-0 content-stretch flex items-center justify-between leading-[normal] left-0 overflow-clip px-[64px] py-[16px] text-[16px] tracking-[3.2px] w-[1440px]" data-name="Footer">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function Hacemos() {
  return (
    <div className="bg-white relative size-full" data-name="Hacemos">
      <p className="absolute css-4hzbpn font-['Montserrat:Bold',sans-serif] leading-[normal] left-[713px] not-italic text-[#38313e] text-[24px] text-center top-[144px] tracking-[4.8px] translate-x-[-50%] uppercase w-[1232px]">HACEMOS</p>
      <Frame />
      <TopBar />
      <QueHacemosDesktop />
      <Footer />
    </div>
  );
}