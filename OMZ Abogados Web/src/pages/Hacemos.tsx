import svgPaths from "../imports/svg-ak83qockxr";
import imgDesktop from "figma:asset/9b68ac69d5e4af2e4b94546c55e926b6751f7dd0.png";
import imgMobile from "figma:asset/1e43c6bbf1f40c23d8f419cf011f8f3faead4467.png";
import { useState, useEffect, useRef } from "react";
import { Footer } from "../components/Footer";
import { TopBar } from "../components/TopBar";
import { MenuOverlay } from "../components/MenuOverlay";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router";

interface AreaProps {
  title: React.ReactNode;
  description: string;
  leaderName: string;
  leaderId: string;
  leaderPrefix: string;
}

interface DotProps {
  className?: string;
}

function Dot({ className }: DotProps) {
  // Default sizes are overridden if className provides w/h
  // Default: Desktop 12.25x11.38, Mobile 8.17x7.59
  const defaultClasses = "w-[8.17px] h-[7.59px] md:w-[12.25px] md:h-[11.38px]";
  
  return (
    <div className={className || defaultClasses}>
      <svg className="block w-full h-full" fill="none" viewBox="0 0 12.5 11.5">
        <path d={svgPaths.p39552d00} fill="#FDC82F" />
      </svg>
    </div>
  );
}

function AreaPractica({ title, description, leaderName, leaderId, leaderPrefix }: AreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(hover: none), (max-width: 1024px)').matches);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleHoverStart = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 200); // 200ms delay before showing description
  };

  const handleHoverEnd = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(false);
  };

  const isActive = isHovered || isTouch;

  return (
    <motion.div 
      className="flex flex-col items-center justify-center w-full max-w-[90%] md:max-w-[800px] mx-auto cursor-default py-4 md:py-2"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      layout
    >
      {/* Title Section */}
      <motion.div 
        layout="position"
        className="flex justify-center text-center leading-none transition-opacity duration-300 w-full"
        style={{ opacity: isActive ? 1 : 0.4 }}
      >
        <div className="font-aleo font-normal text-[#38313e] text-[32px] md:text-[48px] text-center leading-tight relative">
          {title}
          
          <span className="relative inline-flex w-0 h-0 align-baseline overflow-visible">
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-[6px] -bottom-[2px] md:left-[10px] md:bottom-[1px]"
                >
                  <Dot />
                </motion.div>
              )}
            </AnimatePresence>
          </span>
        </div>
      </motion.div>
      
      {/* Expanded Content - Desktop / Tablet */}
      <div className="hidden md:block overflow-hidden">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 32 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="flex flex-col items-center"
            >
              <div className="font-montserrat font-normal text-[#38313e] text-[16px] leading-[1.6] text-center w-[600px] whitespace-pre-wrap">
                {description}
                <div className="h-8" />
                <span className="font-montserrat font-bold block">
                  {leaderPrefix}
                  <Link 
                    to={`/equipo/${leaderId}`}
                    className="hover:text-[#FDC82F] transition-colors duration-200"
                  >
                    {leaderName}
                  </Link>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Content (< md) - Always Visible */}
      <div className="block md:hidden mt-4">
        <div className="font-montserrat font-normal text-[#38313e] text-[16px] leading-[1.6] text-center whitespace-pre-wrap px-4">
          {description}
          <div className="h-4" />
          <span className="font-montserrat font-bold block">
             {leaderPrefix}
             <Link 
               to={`/equipo/${leaderId}`}
               className="hover:text-[#FDC82F] transition-colors duration-200"
             >
               {leaderName}
             </Link>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function HacemosContent() {
  const { t, language } = useLanguage();
  
  const areasData = t('hacemos.areas') as Array<{ title: string; description: string }>;
  const leaderPrefix = t('hacemos.leaderPrefix');
  
  const leaders = [
    { name: "Nicolás Zisis B.", id: "nicolas-zisis" },
    { name: "Alfonso Mora D.", id: "alfonso-mora" },
    { name: "Gerardo Otero Vial", id: "gerardo-otero" }
  ];
  
  return (
    <div className="flex flex-col gap-8 md:gap-4 items-center justify-center w-full max-w-[1232px] mx-auto px-4 z-10 pb-[50px]">
      {areasData.map((area, index) => {
        let titleNode: React.ReactNode = area.title;
        
        // Special handling for "wealth management" italics
        if (index === 1) {
           if (language === 'es') {
             titleNode = (
                <>
                  Asesoría tributaria y <span className="italic">wealth management</span>
                </>
             );
           } else {
             titleNode = "Tax Advisory and Wealth Management";
           }
        }

        return (
          <AreaPractica 
            key={index}
            title={titleNode}
            description={area.description}
            leaderName={leaders[index].name}
            leaderId={leaders[index].id}
            leaderPrefix={leaderPrefix}
          />
        );
      })}
    </div>
  );
}

function BottomImage() {
  return (
    <div className="relative w-full h-[192px] md:h-[352px] overflow-hidden mt-10">
      {/* Desktop Image */}
      <img 
        src={imgDesktop} 
        alt="City View Desktop" 
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Mobile Image */}
      <img 
        src={imgMobile} 
        alt="City View Mobile" 
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  );
}

export default function Hacemos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col" data-name="Hacemos">
      <TopBar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} variant="dark" />
      
      <main className="flex-grow w-full flex flex-col items-center pt-[160px] md:pt-[176px]">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-montserrat font-bold text-[#38313e] text-[20px] md:text-[24px] text-center tracking-[4px] md:tracking-[4.8px] uppercase mb-8"
        >
          {t('hacemos.title')}
        </motion.h1>
        
        <HacemosContent />
        
        <BottomImage />
      </main>

      <Footer />
      <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
