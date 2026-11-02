import svgPaths from "../imports/svg-gf9b854imq";
import svgPathsMobile from "../imports/svg-epbbhkuzhr";
import imgDesktop from "figma:asset/f44b342248fb40752909a01c79f37cdaea9d48e1.png";
import imgMobile from "figma:asset/3d6656b0d8f6fda4e5ca3f3e63948524ba50b535.png";
import { imgImage24 } from "../imports/svg-eevfy";
import Concepts from "../components/Concepts";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar";
import { MenuOverlay } from "../components/MenuOverlay";

const svgSmallDot = "M3.97605 5.7654e-05C-1.23831 0.0238066 -1.2851 7.65854 3.60702 7.98763C6.16687 8.15953 8.15244 6.5299 7.99079 3.68454C7.85678 1.32774 6.10732 -0.0101205 3.97712 5.7654e-05H3.97605Z";

function Dot() {
  return (
    <div className="relative shrink-0 h-[0.5em] w-auto flex items-center">
      {/* Desktop Dot */}
      <svg className="hidden min-[900px]:block h-full w-auto" fill="none" viewBox="0 0 17 32">
        <g id="Dot">
          <path d={svgPaths.pf062cf0} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </g>
      </svg>
      {/* Mobile Dot */}
      <svg className="min-[900px]:hidden h-full w-auto" fill="none" viewBox="0 0 17 16">
        <g id="Dot">
          <path d={svgPathsMobile.p3d75ce00} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

import { useLanguage } from "../context/LanguageContext";

function Title() {
  const { t } = useLanguage();
  return (
    <div className="absolute top-1/2 -translate-y-1/2 min-[900px]:top-[38px] min-[900px]:translate-y-0 left-[32px] right-[32px] min-[900px]:left-[48px] min-[900px]:right-[48px] lg:left-[96px] lg:right-[96px] z-10 pointer-events-none @container" data-name="Title">
      <div className="flex items-baseline justify-center min-[900px]:justify-start gap-[0.15em] w-full text-[min(36px,13cqw)] min-[900px]:text-[min(64px,13cqw)] text-white tracking-[0.1em]">
        <p className="font-aleo font-semibold leading-[normal] whitespace-nowrap">{t('nosotros.title')}</p>
        <div className="relative top-[0.25em]">
          <Dot />
        </div>
      </div>
    </div>
  );
}

function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="font-montserrat leading-[24px] text-black text-justify w-full max-w-[600px]">
      <span className="font-montserrat font-semibold text-[16px]">{title}</span><span className="font-montserrat font-semibold text-[#fdc82f] text-[40px] leading-none mx-[6px]">.</span><span className="text-[16px]">{text}</span>
    </div>
  );
}

function ContentSection() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-[1.5rem] items-center min-[900px]:items-start w-full pb-[2rem]">
      <TextBlock 
        title={t('nosotros.somos.title')} 
        text={t('nosotros.somos.text')} 
      />
      <TextBlock 
        title={t('nosotros.conformamos.title')} 
        text={t('nosotros.conformamos.text')} 
      />
      <TextBlock 
        title={t('nosotros.trabajamos.title')} 
        text={t('nosotros.trabajamos.text')} 
      />
      <div className="w-full max-w-[600px] mt-[2rem] mb-[1rem]">
        <Concepts />
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <>
      {/* Desktop Image */}
      <div className="absolute inset-0 w-full h-full hidden min-[900px]:block" data-name="image 18">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgDesktop} />
          <div className="absolute bg-[rgba(56,49,62,0.3)] inset-0" />
        </div>
      </div>

      {/* Mobile Image */}
      <div className="min-[900px]:hidden absolute inset-0 w-full h-full" data-name="image 19">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-center object-cover size-full" src={imgMobile} />
          <div className="absolute bg-[rgba(56,49,62,0.3)] inset-0" />
        </div>
      </div>
    </>
  );
}

export default function Nosotros() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col" data-name="Nosotros">
      <h1 style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>Nosotros: OMZ Abogados, estudio de abogados boutique en Santiago</h1>
      <TopBar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} variant="dark" />
      
      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col gap-0 min-[900px]:flex-row min-[900px]:gap-0 relative pt-[128px] lg:pt-[144px]">
        
        {/* Left Column: Image + Title */}
        <div className="relative w-full min-[900px]:w-1/3 h-[300px] min-[900px]:h-auto shrink-0">
          <HeroImage />
          <Title />
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 px-4 min-[900px]:pl-8 lg:pl-16 pt-[2rem] min-[900px]:pt-[38px]">
          <ContentSection />
        </div>

      </div>

      <Footer />
      <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
