import { useState } from "react";
import { Link } from "react-router";
import { TopBar } from "../components/TopBar";
import { MenuOverlay } from "../components/MenuOverlay";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const svgPaths = {
  pf062cf0: "M8.44912 0.000115308C-2.63141 0.0476133 -2.73085 15.3171 7.66492 15.9753C13.1046 16.3191 17.3239 13.0598 16.9804 7.36909C16.6957 2.65548 12.9781 -0.020241 8.45138 0.000115308H8.44912Z",
  p34b08600: "M433.887 0.00584467C-135.131 2.4134 -140.237 776.385 393.616 809.746C672.96 827.173 889.635 661.968 871.995 373.521C857.372 134.6 666.461 -1.02596 434.003 0.00584467H433.887Z"
};

function Dot({ className }: { className?: string }) {
  return (
    <div className={`h-[24px] md:h-[32px] relative shrink-0 w-[13px] md:w-[17px] ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 32">
        <path d={svgPaths.pf062cf0} fill="var(--fill-0, #FDC82F)" />
      </svg>
    </div>
  );
}

export default function NotFound() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col">
      <TopBar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} variant="dark" />

      {/* Background Vector */}
      <div className="hidden lg:block fixed right-[-72px] bottom-0 z-0 pointer-events-none w-[50vw] max-w-[873px] opacity-60 origin-bottom-right">
        <svg className="w-full h-auto" viewBox="0 0 873 811" fill="none">
          <path d={svgPaths.p34b08600} fill="#FCF5DF" />
        </svg>
      </div>

      <div className="flex-1 w-full max-w-[1440px] mx-auto relative flex flex-col items-center justify-center p-4 z-10 text-center pt-[144px]">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
        >
            <h1 className="font-['Aleo:Bold',sans-serif] font-bold text-[#38313e] text-[120px] md:text-[200px] leading-none">
            404
            </h1>
            <div className="mt-8 md:mt-12">
                <Dot className="scale-150" />
            </div>
        </motion.div>
        
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Aleo:Bold',sans-serif] font-bold text-[#38313e] text-[24px] md:text-[32px] mb-4"
        >
            {t('notFound.title')}
        </motion.p>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-black mb-12 max-w-[400px]"
        >
            {t('notFound.description')}
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-['Montserrat:Bold',sans-serif] font-bold text-[#38313e] text-[16px] md:text-[18px] border-b-2 border-[#fdc82f] hover:text-[#fdc82f] transition-colors pb-1"
            >
            {t('notFound.button')}
            <ArrowRight size={20} />
            </Link>
        </motion.div>
      </div>

      <Footer />
      <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
