import { useState, useEffect } from "react";
import svgPaths from "../imports/svg-lw6jvuuza1";
import svgPathsSomos from "../imports/svg-esdi8rnfhr";
import { motion } from "motion/react";
import { Link } from "react-router";

interface OmzLogoProps {
  variant?: "light" | "dark";
  isMenuOpen?: boolean;
}

function OmzLogo({ variant = "light", isMenuOpen = false }: OmzLogoProps) {
  const effectiveVariant = isMenuOpen ? "light" : variant;
  const fillColor = effectiveVariant === "light" ? "white" : "#38313E";
  const paths = effectiveVariant === "light" ? svgPaths : svgPathsSomos;
  
  return (
    <Link to="/" className="h-[80px] relative shrink-0 w-[124px] cursor-pointer transition-opacity hover:opacity-80" data-name="OMZ_LOGO SECUNDARIO">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124 80">
        <g id="OMZ_LOGO SECUNDARIO">
          <path d={paths.p2e8e9200} fill="var(--fill-0, #FDC82F)" id="Vector" />
          <path d={paths.p3675fe70} fill={`var(--fill-0, ${fillColor})`} id="Vector_2" />
          <path d={paths.p14ff8180} fill={`var(--fill-0, ${fillColor})`} id="Vector_3" />
          <g id="Group">
            <path d={paths.p3fd9e940} fill={`var(--fill-0, ${fillColor})`} id="Vector_4" />
            <path d={paths.p2c036a80} fill={`var(--fill-0, ${fillColor})`} id="Vector_5" />
            <path d={paths.p69f0a80} fill={`var(--fill-0, ${fillColor})`} id="Vector_6" />
            <path d={paths.p27440880} fill={`var(--fill-0, ${fillColor})`} id="Vector_7" />
            <path d={paths.p3533f700} fill={`var(--fill-0, ${fillColor})`} id="Vector_8" />
          </g>
          <g id="Group_2">
            <path d={paths.p18576100} fill={`var(--fill-0, ${fillColor})`} id="Vector_9" />
            <path d={paths.p167ecb00} fill={`var(--fill-0, ${fillColor})`} id="Vector_10" />
            <path d={paths.p3d954c00} fill={`var(--fill-0, ${fillColor})`} id="Vector_11" />
            <path d={paths.p1c23e4f0} fill={`var(--fill-0, ${fillColor})`} id="Vector_12" />
          </g>
          <g id="Group_3">
            <path d={paths.p19925100} fill={`var(--fill-0, ${fillColor})`} id="Vector_13" />
            <path d={paths.p1f8ec500} fill={`var(--fill-0, ${fillColor})`} id="Vector_14" />
            <path d={paths.p375de500} fill={`var(--fill-0, ${fillColor})`} id="Vector_15" />
            <path d={paths.p3a1e8b80} fill={`var(--fill-0, ${fillColor})`} id="Vector_16" />
            <path d={paths.p18578b80} fill={`var(--fill-0, ${fillColor})`} id="Vector_17" />
          </g>
          <path d={paths.p17e45000} fill={`var(--fill-0, ${fillColor})`} id="Vector_18" />
          <path d={paths.p30caa080} fill="var(--fill-0, #FDC82F)" id="Vector_19" />
        </g>
      </svg>
    </Link>
  );
}

interface MenuIconProps {
  isMenuOpen: boolean;
  onClick: () => void;
  variant?: "light" | "dark";
}

function MenuIcon({ isMenuOpen, onClick, variant = "light" }: MenuIconProps) {
  const effectiveVariant = isMenuOpen ? "light" : variant;
  const strokeColor = effectiveVariant === "light" ? "white" : "#38313E";
  
  return (
    <button 
      onClick={onClick}
      className="h-[24px] relative shrink-0 w-[60px] cursor-pointer transition-opacity hover:opacity-70 flex flex-col justify-center items-center"
      aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <div className="relative w-full h-full">
        <motion.div 
          className="absolute left-0 h-[3px] w-full origin-center"
          style={{ backgroundColor: strokeColor, top: 0 }}
          animate={{
            top: isMenuOpen ? "50%" : 0,
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? "-50%" : "0%"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute left-0 h-[3px] w-full origin-center"
          style={{ backgroundColor: strokeColor, bottom: 0 }}
          animate={{
            bottom: isMenuOpen ? "50%" : 0,
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? "50%" : "0%"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </button>
  );
}

interface TopBarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  variant?: "light" | "dark";
  forceWhite?: boolean;
}

export function TopBar({ isMenuOpen, onMenuToggle, variant = "light", forceWhite = false }: TopBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayVariant = isScrolled || forceWhite ? "dark" : variant;
  const showWhiteBg = isScrolled || forceWhite;
  const bgClass = showWhiteBg && !isMenuOpen ? "bg-white" : "bg-transparent";
  const shadowClass = isScrolled && !isMenuOpen ? "shadow-md" : "";

  return (
    <div className={`fixed box-border flex items-center min-h-[112px] ${isMenuOpen ? 'justify-end' : 'justify-between'} left-4 right-4 top-4 lg:left-8 lg:right-8 lg:top-8 px-4 md:px-8 lg:px-[64px] py-[16px] z-[60] transition-all duration-300 rounded-xl ${bgClass} ${shadowClass}`} data-name="Top Bar">
      {!isMenuOpen && <OmzLogo variant={displayVariant} isMenuOpen={isMenuOpen} />}
      <MenuIcon isMenuOpen={isMenuOpen} onClick={onMenuToggle} variant={displayVariant} />
    </div>
  );
}
