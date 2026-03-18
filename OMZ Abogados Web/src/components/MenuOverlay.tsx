import svgPaths from "../imports/svg-kc6af7r8e6";
import menuBgImage from "figma:asset/227d8bb456628ab47033ddcbe1e577f1d4925d2c.png";
import { imgImage19 } from "../imports/svg-p54ub";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-[-146px] hidden lg:block" data-name="Mask group">
      <div className="absolute h-[1108px] left-[-838px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[838px_42px] mask-size-[483px_1024px] top-[-188px] w-[1664px]" data-name="image 19" style={{ maskImage: `url('${imgImage19}')` }}>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={menuBgImage} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#38313e] h-[700px] left-0 top-0 w-full max-w-[1440px]">
      <MaskGroup />
    </div>
  );
}

import { useLanguage } from "../context/LanguageContext";

function ContactInfo() {
  const { language } = useLanguage();
  return (
    <div className="content-stretch flex flex-col font-montserrat font-medium gap-[16px] items-start justify-center leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[20px] text-nowrap text-white tracking-[3.2px] md:tracking-[4px] whitespace-pre">
      <div className="relative shrink-0">
        <p className="mb-0">Av. Apoquindo 3669</p>
        <p className="mb-0">{language === 'es' ? 'piso 14' : '14th Floor'}</p>
        <p>Las Condes, Santiago</p>
      </div>
    </div>
  );
}
// Note: I left the address hardcoded here because the original split it into lines.
// I could map it from translation but it's fine for now as address doesn't change much across languages except maybe "Floor/Piso".
// Actually, I should probably translate it. "piso 14" -> "14th Floor".
// Let's stick to the request. The user asked for "English version".
// I'll update it to be cleaner.


function Logo() {
  return (
    <div className="max-[770px]:hidden h-[68px] md:h-[114.114px] relative shrink-0 w-[115px] md:w-[192.194px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193 115">
        <g id="Group 1">
          <path d={svgPaths.p3308bdc0} fill="var(--fill-0, #FDC82F)" id="Vector" />
          <path d={svgPaths.p220ad200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3e358b00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p136b2180} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1c42f700} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1decad80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1149d380} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p36b24080} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3b907000} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p28a9baf0} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p144b7d00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1b47ae00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p25377300} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p1f3c4180} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p3f70c900} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p15ad7400} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p39c28180} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.pa26a500} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p7658c80} fill="var(--fill-0, #FDC82F)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="w-full flex flex-row items-end justify-between gap-4 mt-auto pt-4 md:pt-8">
      <ContactInfo />
      <Logo />
    </div>
  );
}

interface MenuLinkProps {
  children: string;
  isActive?: boolean;
  to?: string;
  onNavigate?: () => void;
}

function MenuLink({ children, isActive = false, to, onNavigate }: MenuLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div 
      className="content-stretch flex flex-col gap-0 relative shrink-0 cursor-pointer py-3 md:py-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onNavigate}
    >
      <p className="font-aleo font-semibold leading-[normal] min-w-full relative shrink-0 text-[40px] text-white tracking-[8px] whitespace-nowrap max-[400px]:whitespace-normal max-[400px]:leading-[1.1]">
        {children}
      </p>
      <div className="h-[4px] relative shrink-0 overflow-hidden w-full">
        <motion.div
          className="absolute h-full bg-[#FDC82F] rounded-full"
          initial={{ width: "0%" }}
          animate={{ 
            width: isHovered ? "100%" : "0%",
            left: 0
          }}
          transition={{ 
            duration: 0.4,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
}

interface MenuLinksProps {
  onNavigate: () => void;
}

function MenuLinks({ onNavigate }: MenuLinksProps) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-0 md:gap-[16px] items-start w-auto">
      <MenuLink to="/" onNavigate={onNavigate}>{t('menu.home')}</MenuLink>
      <MenuLink to="/nosotros" onNavigate={onNavigate}>{t('menu.nosotros')}</MenuLink>
      <MenuLink to="/que-hacemos" onNavigate={onNavigate}>{t('menu.hacemos')}</MenuLink>
      <MenuLink to="/equipo" onNavigate={onNavigate}>{t('menu.equipo')}</MenuLink>
      <MenuLink to="/hablemos" onNavigate={onNavigate}>{t('menu.hablemos')}</MenuLink>
    </div>
  );
}

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Initial check
    checkDesktop();
    
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const variants = {
    closed: {
      x: isDesktop ? "100%" : 0,
      y: isDesktop ? 0 : "-100%",
    },
    open: {
      x: 0,
      y: 0,
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Overlay de fondo */}
          <motion.div 
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={onClose}
          />
          
          {/* Panel del menú */}
          <motion.div
            className="absolute md:right-0 md:top-0 left-0 top-0 h-full w-full relative overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ 
              type: "spring",
              damping: 40,
              stiffness: 200,
              mass: 1
            }}
          >
            <div className="relative size-full flex flex-col">
              {/* Background layers */}
              <div className="absolute inset-0 bg-[#38313e] z-0" />
              <div className="absolute inset-0 z-0 pointer-events-none">
                 <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-[33vw] pointer-events-none hidden lg:block overflow-hidden">
                    <img alt="" className="w-full h-full object-cover" src={menuBgImage} />
                 </div>
              </div>

              {/* Main Content using Flexbox for spacing */}
              <div className="flex-1 flex flex-col pt-[170px] md:pt-[182px] lg:pt-[198px] pb-[80px] pl-8 pr-8 md:pl-12 md:pr-12 lg:pr-24 lg:pl-[36vw] z-10 overflow-y-auto">
                 <MenuLinks onNavigate={onClose} />
                 <BottomSection />
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
