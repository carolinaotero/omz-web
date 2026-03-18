import svgPaths from "../imports/svg-t7h85ik417";

import { useLanguage } from "../context/LanguageContext";

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

function ConceptItem({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-montserrat font-normal leading-[normal] not-italic relative shrink-0 text-[#38313e] text-[24px] text-nowrap tracking-[2.4px] uppercase">{text}</p>
      <Frame />
    </div>
  );
}

export default function Concepts() {
  const { t } = useLanguage();
  const slides = t('home.slides') as Array<{ title: string; description: string }>;

  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start justify-center relative w-full" data-name="Concepts">
      <ConceptItem text={slides[0].title} />
      <ConceptItem text={slides[1].title} />
      <ConceptItem text={slides[2].title} />
    </div>
  );
}
