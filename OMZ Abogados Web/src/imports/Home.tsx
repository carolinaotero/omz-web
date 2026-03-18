import svgPaths from "./svg-lw6jvuuza1";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuOverlay } from "../components/MenuOverlay";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import imgCompromiso from "figma:asset/7552bb98abb29689e30b36be11183a8fb459c082.png";
import imgEficacia from "figma:asset/2610c19b49bac2f2c5c7c85c82576acb8690beb0.png";

function OmzLogoSecundario() {
  return (
    <div className="h-[80px] relative shrink-0 w-[124px]" data-name="OMZ_LOGO SECUNDARIO">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 80">
        <g id="OMZ_LOGO SECUNDARIO">
          <path d={svgPaths.p2e8e9200} fill="var(--fill-0, #FDC82F)" id="Vector" />
          <path d={svgPaths.p3675fe70} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p14ff8180} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Group">
            <path d={svgPaths.p3fd9e940} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p2c036a80} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p69f0a80} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p27440880} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p3533f700} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p18576100} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.p167ecb00} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p3d954c00} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p1c23e4f0} fill="var(--fill-0, white)" id="Vector_12" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p19925100} fill="var(--fill-0, white)" id="Vector_13" />
            <path d={svgPaths.p1f8ec500} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.p375de500} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p3a1e8b80} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.p18578b80} fill="var(--fill-0, white)" id="Vector_17" />
          </g>
          <path d={svgPaths.p17e45000} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p30caa080} fill="var(--fill-0, #FDC82F)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function Frame({ isMenuOpen, onClick }: { isMenuOpen: boolean; onClick: () => void }) {
  // This component is no longer needed, but keeping it temporarily for reference
  return null;
}



function ServiceCard({ title, description, isActive }: { title: string; description: string; isActive: boolean }) {
  return (
    <motion.div 
      className="flex-1 content-stretch flex flex-col gap-[16px] items-start min-h-px min-w-0 relative shrink-0"
      animate={{ opacity: isActive ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 325 1">
            {/* Línea base gris (1px) */}
            <line 
              x2="324.5" 
              y1="0.5" 
              y2="0.5"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Línea amarilla progresiva (4px) */}
            {isActive && (
              <motion.line 
                key={`progress-${isActive}`}
                x2="324.5" 
                y1="0.5" 
                y2="0.5"
                stroke="#FDC82F"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="324.5"
                initial={{ strokeDashoffset: 324.5 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ 
                  duration: 5,
                  ease: "linear"
                }}
              />
            )}
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-0 pr-[6px] py-0 relative w-full">
            <motion.p 
              className="basis-0 font-montserrat font-semibold grow leading-[normal] min-h-[48px] md:min-h-[60px] not-italic relative shrink-0 text-[16px] md:text-[20px] tracking-[0.2em]"
              style={{ fontVariant: "small-caps" }}
              animate={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { useLanguage } from "../context/LanguageContext";

function Frame5({ activeIndex }: { activeIndex: number }) {
  const { t } = useLanguage();
  const slides = t('home.slides') as Array<{ title: string; description: string }>;

  return (
    <div className="content-stretch flex items-start px-4 md:px-8 lg:px-[78px] w-full">
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;
        
        // Determinar visibilidad: el activo siempre se ve
        // Los inactivos se ven a partir de md (desktop) para mostrar las 3 columnas
        let visibilityClass = '';
        if (isActive) {
          visibilityClass = 'block'; 
        } else {
          visibilityClass = 'hidden md:block';
        }
        
        return (
          <div 
            key={index}
            className={`flex-1 ${visibilityClass}`}
          >
            <ServiceCard 
              title={slide.title}
              description={slide.description}
              isActive={isActive}
            />
          </div>
        );
      })}
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Chevron left">
          <path d="M30 36L18 24L30 12" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Word({ word }: { word: string }) {
  return (
    <div className="bg-[#fdc82f] box-border content-stretch flex gap-[10px] h-full items-center justify-center pl-[16px] md:pl-[24px] pr-[12px] md:pr-[16px] py-[6px] md:py-[8px] relative rounded-bl-[40px] md:rounded-bl-[50px] rounded-tl-[40px] md:rounded-tl-[50px] shrink-0 w-[240px] sm:w-[300px] md:w-[360px] lg:w-[414px] overflow-hidden" data-name="Word">
      <AnimatePresence mode="wait">
        <motion.p 
          key={word}
          className="font-aleo font-semibold leading-[normal] relative shrink-0 text-[#38313e] text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-nowrap tracking-[4px] sm:tracking-[5.6px] md:tracking-[6.8px] lg:tracking-[8px] whitespace-pre mt-[4px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {word}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function HeroCenterDiv({ word }: { word: string }) {
  return (
    <div className="content-stretch flex gap-[16px] md:gap-[32px] lg:gap-[44px] items-end justify-end relative shrink-0" data-name="Hero Center div">
      <div className="flex flex-row items-end self-stretch">
        <Word word={word} />
      </div>
      <div className="h-[40px] md:h-[52px] lg:h-[65px] relative shrink-0 w-[43px] md:w-[56px] lg:w-[70px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 65">
          <path d={svgPaths.p28d64cf1} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Chevron right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Chevron right">
          <path d="M18 36L30 24L18 12" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame10({ activeIndex, onPrev, onNext }: { activeIndex: number; onPrev: () => void; onNext: () => void }) {
  const { t } = useLanguage();
  const slides = t('home.slides') as Array<{ title: string; description: string }>;
  const words = slides.map(s => s.title);
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between m-auto h-fit w-full px-4 md:px-8 lg:px-[64px]">
      {/* Chevron izquierdo - alineado con el logo */}
      <button onClick={onPrev} className="hidden md:block cursor-pointer transition-opacity hover:opacity-70">
        <ChevronLeft />
      </button>
      
      {/* Div amarillo centrado */}
      <HeroCenterDiv word={words[activeIndex]} />
      
      {/* Chevron derecho - alineado con el menú */}
      <button onClick={onNext} className="hidden md:block cursor-pointer transition-opacity hover:opacity-70">
        <ChevronRight />
      </button>
      
      {/* Flechas debajo en mobile */}
      <div className="flex md:hidden items-center justify-center gap-[80px] mt-[32px]">
        <button onClick={onPrev} className="cursor-pointer transition-opacity hover:opacity-70">
          <ChevronLeft />
        </button>
        <button onClick={onNext} className="cursor-pointer transition-opacity hover:opacity-70">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgroundImages = [
    { 
      src: imgCompromiso, 
      position: "object-top" 
    }, // COMPROMISO
    { 
      src: "https://images.unsplash.com/photo-1759495683438-28670547dc8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBzY2llbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ3OTMxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      position: "object-center" 
    }, // MÉTODO
    { 
      src: imgEficacia, 
      position: "object-[50%_75%]" 
    }  // EFICACIA
  ];

  // Preload images once
  useEffect(() => {
    backgroundImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  // Autoplay: cambiar de slide automáticamente cada 5 segundos
  // Se reinicia el timer cada vez que cambia el slide (automática o manualmente)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000); // 5 segundos por slide

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col" data-name="Home">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence>
          <motion.img 
            key={activeIndex}
            alt="" 
            className={`absolute max-w-none object-cover size-full ${backgroundImages[activeIndex].position}`} 
            src={backgroundImages[activeIndex].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            loading="eager"
            fetchpriority={activeIndex === 0 ? "high" : "auto"}
          />
        </AnimatePresence>
        <div className="absolute bg-[rgba(56,49,62,0.3)] inset-0" />
      </div>

      <TopBar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />

      <div className="relative z-10 flex flex-col size-full pointer-events-none">
        {/* Spacer for TopBar (approx 144px) */}
        <div className="shrink-0 h-[144px]" />
        
        {/* Upper Flexible Spacer */}
        <div className="flex-1 min-h-0" />
        
        {/* Frame10 (Center) */}
        <div className="shrink-0 w-full flex justify-center pointer-events-auto">
          <Frame10 activeIndex={activeIndex} onPrev={handlePrev} onNext={handleNext} />
        </div>
        
        {/* Lower Flexible Spacer */}
        <div className="flex-1 min-h-0" />
        
        {/* Frame5 (Bottom) */}
        <div className="shrink-0 w-full pointer-events-auto">
          <Frame5 activeIndex={activeIndex} />
        </div>
        
        {/* Spacer between Bajadas and Footer (3rem) */}
        <div className="shrink-0 h-[3rem]" />

        {/* Footer */}
        <div className="shrink-0 w-full pointer-events-auto">
          <Footer className="" />
        </div>
      </div>

      <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}