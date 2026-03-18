import { useState, useEffect, useRef } from "react";
import { useParams, Navigate, Link } from "react-router";
import { TopBar } from "../components/TopBar";
import { MenuOverlay } from "../components/MenuOverlay";
import { teamMembers } from "../utils/teamData";
import svgPaths from "../imports/svg-cuzj9al742";
import svgPathsNew from "../imports/svg-chi6qkg1p6";
import { Footer } from "../components/Footer";

function SmallDot() {
  return (
    <span className="inline-block h-[23.375px] md:h-[23.375px] relative shrink-0 w-[12.25px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 24">
        <path d={svgPaths.p39552d00} fill="#FDC82F" />
      </svg>
    </span>
  );
}

function LinkedInIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2a135b00} fill="currentColor" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p39cd72b0} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
        <path d={svgPaths.p34c76d00} fill="currentColor" />
      </svg>
    </div>
  );
}

import { useLanguage } from "../context/LanguageContext";

export default function EquipoDetalle() {
  const { slug } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const [dotBottomOffset, setDotBottomOffset] = useState(29);
  const { t, getContent } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate how much of the footer is visible
        const footerVisibleHeight = Math.max(0, windowHeight - footerRect.top);
        // Base bottom offset is 29px
        setDotBottomOffset(29 + footerVisibleHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initial check after a short delay to ensure layout is ready
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  
  const member = teamMembers.find(m => m.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!member) {
    return <Navigate to="/equipo" replace />;
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  const role = getContent(member.role, member.role_en);
  const bio = getContent(member.bio, member.bio_en);
  const education = getContent(member.education, member.education_en);
  const previousExperience = getContent(member.previousExperience, member.previousExperience_en);
  const areasOfPractice = getContent(member.areasOfPractice, member.areasOfPractice_en);
  const affiliations = getContent(member.affiliations, member.affiliations_en);
  const languages = getContent(member.languages, member.languages_en);
  const awards = getContent(member.awards, member.awards_en);

  // Split name to ensure the last word and dot stay together
  const fullDisplayName = member.fullName || member.name;
  const nameParts = fullDisplayName.trim().split(/\s+/);
  const lastName = nameParts.pop();
  const firstName = nameParts.join(" ");

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col">
      <TopBar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} forceWhite={true} />

      <div className="flex flex-col lg:flex-row w-full min-h-screen pt-[168px]">
        
        {/* Left Column: Scrollable Content */}
        <div className="w-full lg:w-[60%] flex flex-col relative z-10 bg-white">
          <div className="px-[32px] md:px-[48px] lg:pl-[96px] lg:pr-[64px] flex-1 pb-8">
            
            {/* Back Link */}
            <Link to="/equipo" className="inline-flex items-center gap-[16px] mb-[30px] lg:mb-[50px] group text-[#38313e] hover:text-[#fdc82f] transition-colors">
              <ArrowLeftIcon />
              <span className="font-montserrat font-medium text-[16px] tracking-[2.4px] uppercase">
                {t('equipo.back')}
              </span>
            </Link>

            {/* Title & Role */}
            <div className="mb-[30px] flex flex-col items-start w-full">
              <div className="relative shrink-0 w-full">
                <h1 className="font-aleo font-normal leading-[1.1] text-[#38313e] text-[40px] md:text-[48px] break-words">
                  {firstName && <span>{firstName} </span>}
                  <span className="whitespace-nowrap inline-block">
                    {lastName}
                    <span className="inline-block ml-[4px] relative top-[13px] md:top-[17px]">
                      <SmallDot />
                    </span>
                  </span>
                </h1>
              </div>
              <p className="font-montserrat font-light leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[2px] uppercase mt-2">
                {role}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-[16px] md:gap-[24px] items-center mb-[40px]">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#38313e] hover:text-[#fdc82f] transition-colors shrink-0">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${member.email}`} className="font-montserrat font-medium text-[#38313e] text-[20px] underline decoration-solid [text-underline-position:from-font] hover:text-[#fdc82f] transition-colors break-all">
                {member.email}
              </a>
            </div>

            {/* Bio */}
            <div className="font-montserrat font-normal text-[1rem] leading-normal text-black text-justify space-y-4 mb-[24px] max-w-[600px]">
              {Array.isArray(bio) ? (
                bio.map((paragraph, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))
              ) : (
                <p>{bio}</p>
              )}
            </div>

            {/* Details Section */}
            <div className="flex flex-col gap-[16px] w-full max-w-[600px] font-montserrat font-normal text-[14px] leading-normal text-[#4a4a4b]">
              
              {/* Separator */}
              <div className="flex gap-[4px] items-center w-full">
                <div className="basis-0 grow h-px bg-[#FDC82F] relative"></div>
                <div className="h-[3.4px] w-[3.6px] shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 4 4">
                     <path d={svgPathsNew.p28ba22f0} fill="#FDC82F" />
                  </svg>
                </div>
              </div>

              {/* Areas of Practice */}
              {areasOfPractice && (
                <div className="w-full">
                  <span className="font-montserrat font-medium underline decoration-solid [text-underline-position:from-font]">{t('equipo.details.areas')}</span>
                  <br />
                  {areasOfPractice}
                </div>
              )}

              {/* Row 1: Education & Experience */}
              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                {/* Education */}
                {education.length > 0 && (
                <div className="flex-1 w-full">
                   <p className="font-montserrat font-medium underline decoration-solid [text-underline-position:from-font] mb-0 text-[#4a4a4b]">{t('equipo.details.education')}</p>
                   {education.map((edu, idx) => (
                      <p key={idx} className="mb-0 mt-1">· {edu}</p>
                   ))}
                </div>
                )}

                {/* Experience */}
                {previousExperience.length > 0 && (
                <div className="flex-1 w-full">
                   <p className="font-montserrat font-medium underline decoration-solid [text-underline-position:from-font] mb-0 text-[#4a4a4b]">{t('equipo.details.experience')}</p>
                   {previousExperience.map((exp, idx) => (
                      <p key={idx} className="mb-0 mt-1">· {exp}</p>
                   ))}
                </div>
                )}
              </div>

              {/* Row 2: Affiliations & Languages */}
              <div className="flex flex-col md:flex-row gap-[16px] items-start w-full">
                {/* Affiliations */}
                {affiliations && (
                <div className="flex-1 w-full">
                   <p className="font-montserrat font-medium underline decoration-solid [text-underline-position:from-font] mb-0 text-[#4a4a4b]">{t('equipo.details.affiliations')}</p>
                   <p className="mt-1">{affiliations}</p>
                </div>
                )}

                {/* Languages */}
                {languages.length > 0 && (
                <div className="flex-1 w-full">
                   <p className="font-montserrat font-medium underline decoration-solid [text-underline-position:from-font] mb-0 text-[#4a4a4b]">{t('equipo.details.languages')}</p>
                   <p className="mt-1">
                     {new Intl.ListFormat(useLanguage().language, { style: 'long', type: 'conjunction' }).format(languages)}.
                   </p>
                </div>
                )}
              </div>
              
              {/* Awards if any */}
               {awards && (
                <div className="w-full mt-2">
                   <p className="font-montserrat font-medium underline decoration-solid [text-underline-position:from-font] mb-0 text-[#4a4a4b]">{t('equipo.details.awards')}</p>
                   <p className="mt-1">{awards}</p>
                </div>
                )}
            </div>

          </div>

        </div>

        {/* Right Column: Fixed Image */}
        <div className="hidden lg:flex w-[40%] h-[calc(100vh-128px)] fixed right-0 top-[128px] z-0 items-start justify-start pl-[2%]">
          <div className="relative h-full w-auto">
            <img 
              src={member.image} 
              alt={member.name} 
              className="h-full w-auto object-cover"
            />
            {/* Yellow Dot Overlay */}
            <div 
              className="absolute w-[70px] h-[65px] left-[100%] ml-[29px] z-20"
              style={{ bottom: `${dotBottomOffset}px` }}
            >
               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 65">
                  <path d={svgPaths.p28d64cf1} fill="#FDC82F" />
               </svg>
            </div>
          </div>
        </div>

        {/* Mobile Image (visible only on mobile) */}
        <div className="block lg:hidden w-full aspect-[3/2] relative shrink-0 order-first mb-8">
           <img 
              src={member.mobileImage} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
        </div>

      </div>

      <div className="relative z-30 w-full" ref={footerRef}>
        <Footer />
      </div>

      <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
