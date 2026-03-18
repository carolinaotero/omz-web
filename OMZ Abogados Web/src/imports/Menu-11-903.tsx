import svgPaths from "./svg-aejflanid4";
import imgMenu from "figma:asset/c4826efa8130f8c82feb5335b31e788807fe2ae3.png";

function Frame9() {
  return (
    <div className="absolute h-[42.853px] left-[326px] top-[44px] w-[42.426px]">
      <div className="absolute inset-[-3.67%_-3.33%_-3.67%_-4.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <g id="Frame 86">
            <path d={svgPaths.p18fbd980} fill="var(--stroke-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#38313e] h-[874px] left-0 top-0 w-[765px]">
      <Frame9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-montserrat font-medium gap-[16px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[4px] whitespace-pre">
      <div className="relative shrink-0">
        <p className="mb-0">Av. Apoquindo 3669</p>
        <p className="mb-0">piso 14</p>
        <p>Las Condes</p>
      </div>
      <p className="relative shrink-0">+56 2 2123 4567</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[45px] top-[610px]">
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[52px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-aleo font-semibold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[40px] text-white tracking-[8px]">Home</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] h-[52px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-aleo font-semibold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[40px] text-white tracking-[8px]">Somos</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-aleo font-semibold leading-[normal] min-w-full relative shrink-0 text-[40px] text-white tracking-[8px] w-[min-content]">Hacemos</p>
      <div className="h-[4px] relative shrink-0 w-[220px]" data-name="Line 5 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 4">
          <path d={svgPaths.p148df00} fill="var(--fill-0, #FDC82F)" id="Line 5 (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] h-[52px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-aleo font-semibold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[40px] text-white tracking-[8px]">Talento</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] h-[52px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-aleo font-semibold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[40px] text-white tracking-[8px]">Hablemos</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[45px] top-[173px] w-[271px]">
      <Frame5 />
      <Frame6 />
      <Frame3 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="relative size-full" data-name="Menu">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgMenu} />
        <div className="absolute bg-[rgba(56,49,62,0.5)] inset-0" />
      </div>
      <p className="absolute font-montserrat font-light leading-[normal] left-[calc(50%-327px)] not-italic text-[24px] text-nowrap text-white top-[951px] tracking-[4.8px] whitespace-pre">{`Av. Apoquindo 3669, piso 14, Las Condes. `}</p>
      <Frame />
      <Frame4 />
      <Frame2 />
    </div>
  );
}