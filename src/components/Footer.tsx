import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

function ContactInfo() {
  const { t } = useLanguage();
  return (
    <div className="content-stretch flex flex-col md:flex-row font-montserrat font-medium gap-1 md:gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-[14px] text-center md:text-left text-white tracking-[2.4px] md:tracking-[3.2px]" data-name="Contact info">
      <p className="relative shrink-0">{t('footer.address')}</p>
    </div>
  );
}

function ButtonsDiv() {
  const { setLanguage, language, t } = useLanguage();
  
  return (
    <div className="content-stretch flex font-aleo font-black gap-[16px] items-center justify-center leading-[normal] relative shrink-0 text-[14px] text-nowrap tracking-[2.8px] md:tracking-[3.2px] whitespace-pre" data-name="Buttons div">
      <button 
        onClick={() => setLanguage('es')}
        className={`relative shrink-0 transition-colors ${language === 'es' ? 'text-white' : 'text-[#fdc82f] hover:text-white'}`}
      >
        ES
      </button>
      <button 
        onClick={() => setLanguage('en')}
        className={`relative shrink-0 transition-colors ${language === 'en' ? 'text-white' : 'text-[#fdc82f] hover:text-white'}`}
      >
        EN
      </button>
      <p className="relative shrink-0 text-white">|</p>
      <div className="w-[140px] relative shrink-0 flex justify-center md:justify-start">
        <Link to="/hablemos" className="text-[#fdc82f] hover:text-white transition-colors">{t('footer.contact')}</Link>
      </div>
    </div>
  );
}

export function Footer({ className }: { className?: string }) {
  return (
    <div className={`bg-[#38313e] box-border content-stretch flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between overflow-clip px-4 md:px-8 lg:px-[64px] py-2 md:py-[16px] w-full ${className || ""}`} data-name="Footer">
      <ContactInfo />
      <ButtonsDiv />
    </div>
  );
}
