import svgPaths from "./svg-wbsroxm9tg";

function Dot() {
  return (
    <div className="h-[23.375px] relative shrink-0 w-[12.25px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 24">
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
      <p className="font-aleo font-normal leading-[normal] relative shrink-0 text-[#38313e] text-[48px] text-center text-nowrap whitespace-pre">Derecho corporativo</p>
      <Dot />
    </div>
  );
}

function AreasPractica() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Areas practica">
      <Title />
      <p className="font-montserrat font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#38313e] text-[16px] text-center w-[min-content]">Asesoría integral en la estructuración y gestión de sociedades, gobierno corporativo y contratos comerciales.</p>
    </div>
  );
}

function AreasPractica1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[586px]" data-name="Areas practica">
      <p className="font-aleo font-normal leading-[normal] opacity-40 relative shrink-0 text-[#38313e] text-[48px] text-nowrap whitespace-pre">{`Fusiones & adquisiciones`}</p>
    </div>
  );
}

function AreasPractica2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[586px]" data-name="Areas practica">
      <p className="font-aleo font-normal leading-[normal] opacity-40 relative shrink-0 text-[#38313e] text-[48px] text-nowrap whitespace-pre">Tributario</p>
    </div>
  );
}

function AreasPractica3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-[586px]" data-name="Areas practica">
      <p className="font-aleo font-normal leading-[normal] opacity-40 relative shrink-0 text-[#38313e] text-[48px] text-nowrap whitespace-pre">{`Litigios & arbitrajes`}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative size-full">
      <AreasPractica />
      <AreasPractica1 />
      <AreasPractica2 />
      <AreasPractica3 />
    </div>
  );
}