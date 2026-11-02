import { useState } from "react";
import { TopBar } from "../components/TopBar";
import { MenuOverlay } from "../components/MenuOverlay";
import { Footer } from "../components/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { teamMembers } from "../utils/teamData";

const svgPaths = {
  pf062cf0: "M8.44912 0.000115308C-2.63141 0.0476133 -2.73085 15.3171 7.66492 15.9753C13.1046 16.3191 17.3239 13.0598 16.9804 7.36909C16.6957 2.65548 12.9781 -0.020241 8.45138 0.000115308H8.44912Z",
  p22503100: "M3.61423 4.65844e-05C-1.12562 0.0192358 -1.16816 6.1881 3.27878 6.45401C5.60569 6.5929 7.41057 5.27616 7.26363 2.97711C7.14182 1.07281 5.55155 -0.00817735 3.6152 4.65844e-05H3.61423Z",
  p34b08600: "M433.887 0.00584467C-135.131 2.4134 -140.237 776.385 393.616 809.746C672.96 827.173 889.635 661.968 871.995 373.521C857.372 134.6 666.461 -1.02596 434.003 0.00584467H433.887Z",
  p39552d00: "M6.16016 0.000183105C-1.74877 0.0340854 -1.81974 10.9329 5.60016 11.4028C9.48281 11.6482 12.4944 9.32168 12.2492 5.25946C12.0459 1.89476 9.39276 -0.0143472 6.16177 0.000183105H6.16016Z"
};

function Dot({ className }: { className?: string }) {
  return (
    <div className={`h-[24px] md:h-[32px] relative shrink-0 w-[13px] md:w-[17px] ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 32">
        <g id="Dot">
          <path d={svgPaths.pf062cf0} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Used for the dot next to the name in the card.
// We need it to be exactly proportional to the 48px font dot.
// 48px font -> 12.25w x 11.38h
// 24px font -> 6.125w x 5.69h
function CardNameDot() {
  return (
    <div className="w-[6.125px] h-[5.69px]">
      <svg className="block w-full h-full" fill="none" viewBox="0 0 12.5 11.5">
         {/* Using the same path as in Hacemos.tsx for consistency if possible, 
             but here I'm using the one that matches the shape. 
             The path p39552d00 is the one used in Hacemos.tsx for the yellow dot.
             I added it to svgPaths above. 
         */}
        <path d={svgPaths.p39552d00} fill="#FDC82F" />
      </svg>
    </div>
  );
}

function NameWithDot({ name }: { name: string }) {
  // Split text into words to wrap the last word and the dot together
  const words = name.trim().split(/\s+/);
  
  if (words.length === 0) return null;
  
  const lastWord = words.pop();
  const firstPart = words.join(' ');

  return (
    <span>
      {firstPart && <>{firstPart} </>}
      <span className="whitespace-nowrap relative">
        {lastWord}
        <span className="relative inline-flex w-0 h-0 align-baseline overflow-visible">
          {/* 
             Positioning:
             We want it at the baseline.
             For 24px font, Aleo font (slab serif) seems to need a lower position than Montserrat.
             Adjusted to bottom-[1px] to sit on baseline.
             Left offset: ~4-5px.
          */}
          <div className="absolute left-[5px] bottom-[1px]">
             <CardNameDot />
          </div>
        </span>
      </span>
    </span>
  );
}

function TeamMemberCard({ id, name, fullName, role, image, thumbnail }: { id: string, name: string, fullName?: string, role: string, image: string, thumbnail?: string }) {
  const imgSrc = thumbnail || image;
  const hasImage = Boolean(imgSrc);

  return (
    <Link to={`/equipo/${id}`} className="block relative w-full aspect-[304/304] md:aspect-[304/304] overflow-hidden group flex flex-col justify-end px-4 pb-4">
      {/* Image Container with Zoom and Grayscale effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {hasImage ? (
          <img 
            src={imgSrc} 
            alt={`${fullName || name}, ${role} en OMZ Abogados`}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-[#f2f2f2] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" opacity="0.3">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#38313e"/>
              <path d="M12.0002 14.5C6.99023 14.5 2.91023 17.92 2.11023 22H21.8902C21.0902 17.92 17.0102 14.5 12.0002 14.5Z" fill="#38313e"/>
            </svg>
          </div>
        )}
        {/* Overlay for inactive state (optional based on design, matching imported code) */}
        <div className="absolute inset-0 bg-[#38313e]/30 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col items-start gap-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-[8px] p-4 shadow-lg w-full">
          <div className="w-full">
             <h3 className="font-aleo font-bold text-white text-[24px] leading-none drop-shadow-md break-words">
               <NameWithDot name={name} />
             </h3>
          </div>
          <p className="font-montserrat font-normal text-white text-[14px] leading-tight drop-shadow-md">
            {role}
          </p>
        </div>
      </div>
    </Link>
  );
}

import { useLanguage } from "../context/LanguageContext";

export default function Equipo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const { t, getContent } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col" data-name="Equipo">
      <TopBar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} variant="dark" />
      
      {/* Background Vector - Desktop only */}
      <motion.div 
        style={{ scale }}
        className="hidden lg:block fixed right-[-72px] bottom-0 z-0 pointer-events-none w-[50vw] max-w-[873px] opacity-60 origin-bottom-right"
      >
        <svg className="w-full h-auto" viewBox="0 0 873 811" fill="none">
          <path d={svgPaths.p34b08600} fill="#FCF5DF" />
        </svg>
      </motion.div>

      <div className="flex-1 w-full relative pt-[168px] pb-[80px] px-[32px] md:px-[48px] lg:px-[96px] z-10">
        {/* Usamos flex-col hasta el breakpoint personalizado de 1356px (approx entre lg y xl), luego fila */}
        <div className="flex flex-col min-[1356px]:flex-row gap-[32px] min-[1356px]:gap-[80px] items-start">
          
          {/* Left Column: Title & Description */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-[16px] min-[1356px]:sticky min-[1356px]:top-[168px] min-[1356px]:max-w-[300px] w-full min-[1356px]:w-auto"
          >
            <div className="flex gap-[10px] items-baseline">
              <h1 className="font-aleo font-semibold text-[#38313e] text-[48px] md:text-[64px] tracking-[4.8px] md:tracking-[6.4px] leading-none">
                {t('equipo.title')}
              </h1>
              <div className="relative top-[12px] md:top-[16px]">
                <Dot />
              </div>
            </div>
            
            <p className="font-montserrat font-normal text-[20px] text-black tracking-[2px] leading-normal max-w-[400px]">
              {t('equipo.subtitle')}
            </p>
          </motion.div>

          {/* Right Column: Team Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[8px] md:gap-[16px]"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                id={member.id}
                name={member.nombre_corto}
                fullName={member.nombre_completo}
                role={getContent(member.role, member.role_en)}
                image={member.image}
                thumbnail={member.thumbnail}
              />
            ))}
          </motion.div>

        </div>
      </div>

      <Footer className="relative z-10" />
      <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
