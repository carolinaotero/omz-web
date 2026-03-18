import svgPaths from "./svg-t7h85ik417";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end pb-[5px] pt-0 px-0 relative self-stretch shrink-0">
      <div className="relative shrink-0 size-[8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d={svgPaths.p31f48280} fill="var(--fill-0, #FDC82F)" id="Vector" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px]">COMPROMISO</p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end pb-[5px] pt-0 px-0 relative self-stretch shrink-0">
      <div className="relative shrink-0 size-[8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d={svgPaths.p31f48280} fill="var(--fill-0, #FDC82F)" id="Vector" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px]">MÉTODO</p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end pb-[5px] pt-0 px-0 relative self-stretch shrink-0">
      <div className="relative shrink-0 size-[8px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path d={svgPaths.p31f48280} fill="var(--fill-0, #FDC82F)" id="Vector" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px]">EFICACIA</p>
      <Frame2 />
    </div>
  );
}

export default function Concepts() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start justify-center relative size-full" data-name="Concepts">
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}