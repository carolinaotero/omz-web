import { useState } from "react";
import { Link } from "react-router";
import { TopBar } from "../components/TopBar";
import { MenuOverlay } from "../components/MenuOverlay";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { AlertCircle, CheckCircle } from "lucide-react";
import imgDesktop from "figma:asset/d897483c1bb6b1fff73f8e5856bf821dd5a30350.png";
import imgMobile from "figma:asset/2b3f9b272bc0064eb399b5b3d6729c169baf9b9c.png";

// SVG Paths
const svgPaths = {
  p12094d00: "M13.7071 8.07107C14.0976 7.68054 14.0976 7.04738 13.7071 6.65685L7.34315 0.292893C6.95262 -0.0976309 6.31946 -0.0976309 5.92893 0.292893C5.53841 0.683418 5.53841 1.31658 5.92893 1.70711L11.5858 7.36396L5.92893 13.0208C5.53841 13.4113 5.53841 14.0445 5.92893 14.435C6.31946 14.8256 6.95262 14.8256 7.34315 14.435L13.7071 8.07107ZM0 7.36396V8.36396H13V7.36396V6.36396H0V7.36396Z",
  pf062cf0: "M8.44912 0.000115308C-2.63141 0.0476133 -2.73085 15.3171 7.66492 15.9753C13.1046 16.3191 17.3239 13.0598 16.9804 7.36909C16.6957 2.65548 12.9781 -0.020241 8.45138 0.000115308H8.44912Z",
};

// Mask SVGs
const maskDesktop = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%201440%20352%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20id%3D%22Rectangle%2012%22%20width%3D%221440%22%20height%3D%22352%22%20fill%3D%22var(--fill-0%2C%20%23D9D9D9)%22%2F%3E%0A%3C%2Fsvg%3E%0A";
const maskMobile = "data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%20513%20192%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20id%3D%22Rectangle%2012%22%20width%3D%22513%22%20height%3D%22192%22%20fill%3D%22var(--fill-0%2C%20%23D9D9D9)%22%2F%3E%0A%3C%2Fsvg%3E%0A";

function Dot() {
  return (
    <div className="h-[24px] md:h-[32px] relative shrink-0 w-[13px] md:w-[17px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 32">
        <g id="Dot">
          <path d={svgPaths.pf062cf0} fill="var(--fill-0, #FDC82F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactInfo() {
  const { t } = useLanguage();
  return (
    <div className="mt-[32px] md:mt-[40px] content-stretch flex flex-col font-montserrat font-normal gap-[8px] items-start leading-[32px] md:leading-[40px] not-italic relative shrink-0 text-[20px] text-black text-left w-full">
      <p className="relative shrink-0 w-full">{t('footer.address')}</p>
      <p className="relative shrink-0 w-full">contacto@omzabogados.cl</p>
    </div>
  );
}

export default function Hablemos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: ""
  });
  
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const validate = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = t('hablemos.form.errors.required');
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = t('hablemos.form.errors.email');
      }
    }
    return error;
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const error = validate(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(newTouched);

    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          setFormStatus('success');
        })
        .catch((error) => {
          console.error("Submission error:", error);
          setFormStatus('error');
        });
    }
  };

  const handleReset = () => {
    setFormStatus('idle');
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      mensaje: ""
    });
    setTouched({});
    setErrors({});
  };

  const handleRetry = () => {
    setFormStatus('idle');
    // Keep data, errors, and touched states so user can fix or retry
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validate(name, value)
      }));
    }
  };

  const getInputClass = (fieldName: string) => {
    const hasError = touched[fieldName] && errors[fieldName];
    return `absolute border border-solid inset-0 pointer-events-none rounded-[16px] transition-colors duration-200 ${
      hasError ? "border-[#D32F2F] border-2" : "border-[#38313e]"
    }`;
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex flex-col justify-between" data-name="Hablemos">
      <TopBar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} variant="dark" />
      
      <div className="flex-1 w-full relative pt-[168px] pb-[40px] px-[32px] md:px-[48px] lg:px-[96px]">
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[150px] items-start">
          
          {/* Left Column (Desktop) / Top (Mobile) - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:gap-4 w-full md:w-[491px] shrink-0"
          >
            <p className="font-montserrat font-medium uppercase tracking-[0.05em] leading-[30px] not-italic relative text-[20px] text-black text-left">
              {t('hablemos.subtitle')}
            </p>
            
            <div className="flex gap-[10px] items-baseline justify-start relative shrink-0">
              <h1 className="font-aleo font-semibold leading-[normal] relative shrink-0 text-[#38313e] text-[48px] md:text-[64px] text-nowrap tracking-[4.8px] md:tracking-[6.4px]">
                {t('hablemos.title')}
              </h1>
              <div className="relative top-[12px] md:top-[16px]">
                <Dot />
              </div>
            </div>
            
            <ContactInfo />
          </motion.div>

          {/* Right Column (Desktop) / Bottom (Mobile) - Form, Success, or Error State */}
          <div className="flex-1 w-full max-w-[682px] min-h-[400px] relative">
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-[24px] w-full items-start justify-center h-full bg-[#38313e] rounded-[16px] p-[32px] md:p-[48px] text-white"
                >
                  <div className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full bg-[#fdc82f] flex items-center justify-center text-[#38313e] mb-2">
                    <CheckCircle className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]" strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex flex-col gap-[16px]">
                    <h2 className="font-aleo font-semibold text-[32px] md:text-[40px] leading-tight tracking-[1.6px] text-[#fdc82f]">
                      {t('hablemos.success.title')}
                    </h2>
                    <p className="font-montserrat font-normal text-[18px] md:text-[20px] leading-[1.6] text-white/90 max-w-[500px]">
                      {t('hablemos.success.message')}
                    </p>
                  </div>
                  
                  <button
                    onClick={handleReset}
                    className="mt-[16px] font-aleo font-normal text-[18px] text-[#fdc82f] border-b border-[#fdc82f] pb-1 hover:text-white hover:border-white transition-colors self-start cursor-pointer"
                  >
                    {t('hablemos.success.button')}
                  </button>
                </motion.div>
              ) : formStatus === 'error' ? (
                 <motion.div
                  key="error"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-[24px] w-full items-start justify-center h-full bg-[#38313e] rounded-[16px] p-[32px] md:p-[48px] text-white"
                >
                  <div className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-full bg-[#D32F2F] flex items-center justify-center text-white mb-2">
                    <AlertCircle className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]" strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex flex-col gap-[16px]">
                    <h2 className="font-aleo font-semibold text-[32px] md:text-[40px] leading-tight tracking-[1.6px] text-[#D32F2F]">
                      {t('hablemos.error.title')}
                    </h2>
                    <p className="font-montserrat font-normal text-[18px] md:text-[20px] leading-[1.6] text-white/90 max-w-[500px]">
                      {t('hablemos.error.message')}
                    </p>
                  </div>
                  
                  <button
                    onClick={handleRetry}
                    className="mt-[16px] font-aleo font-normal text-[18px] text-[#D32F2F] border-b border-[#D32F2F] pb-1 hover:text-white hover:border-white transition-colors self-start cursor-pointer"
                  >
                    {t('hablemos.error.button')}
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-[16px] w-full"
                  noValidate
                  data-netlify="true"
                  name="contact"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="flex flex-col md:flex-row gap-[16px] w-full">
                    {/* Nombre */}
                    <div className="w-full flex flex-col gap-1">
                      <div className="relative rounded-[16px] w-full">
                        <div aria-hidden="true" className={getInputClass("nombre")} />
                        <input 
                          type="text"
                          name="nombre"
                          placeholder={t('hablemos.form.nombre')}
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full bg-transparent px-[16px] py-0 font-montserrat font-normal text-[20px] md:text-[24px] text-[#38313e] placeholder:text-[#898a8d] placeholder:text-[1rem] outline-none h-[56px] leading-[56px] pr-10"
                        />
                        {touched.nombre && errors.nombre && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#D32F2F]">
                            <AlertCircle size={24} />
                          </div>
                        )}
                      </div>
                      <AnimatePresence>
                        {touched.nombre && errors.nombre && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            className="text-[#D32F2F] text-[14px] font-montserrat font-normal ml-2 flex items-center gap-1 overflow-hidden"
                          >
                            {errors.nombre}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    {/* Apellido */}
                    <div className="w-full flex flex-col gap-1">
                      <div className="relative rounded-[16px] w-full">
                        <div aria-hidden="true" className={getInputClass("apellido")} />
                        <input 
                          type="text"
                          name="apellido"
                          placeholder={t('hablemos.form.apellido')}
                          value={formData.apellido}
                          onChange={handleChange}
                          className="w-full bg-transparent px-[16px] py-0 font-montserrat font-normal text-[20px] md:text-[24px] text-[#38313e] placeholder:text-[#898a8d] placeholder:text-[1rem] outline-none h-[56px] leading-[56px] pr-10"
                        />
                        {touched.apellido && errors.apellido && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#D32F2F]">
                            <AlertCircle size={24} />
                          </div>
                        )}
                      </div>
                      <AnimatePresence>
                        {touched.apellido && errors.apellido && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            className="text-[#D32F2F] text-[14px] font-montserrat font-normal ml-2 flex items-center gap-1 overflow-hidden"
                          >
                            {errors.apellido}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full flex flex-col gap-1">
                    <div className="relative rounded-[16px] w-full">
                      <div aria-hidden="true" className={getInputClass("email")} />
                      <input 
                        type="email"
                        name="email"
                        placeholder={t('hablemos.form.email')}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent px-[16px] py-0 font-montserrat font-normal text-[20px] md:text-[24px] text-[#38313e] placeholder:text-[#898a8d] placeholder:text-[1rem] outline-none h-[56px] leading-[56px] pr-10"
                      />
                      {touched.email && errors.email && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#D32F2F]">
                          <AlertCircle size={24} />
                        </div>
                      )}
                    </div>
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          className="text-[#D32F2F] text-[14px] font-montserrat font-normal ml-2 flex items-center gap-1 overflow-hidden"
                        >
                          {errors.email}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mensaje */}
                  <div className="w-full flex flex-col gap-1">
                    <div className="relative rounded-[16px] w-full h-[200px]">
                      <div aria-hidden="true" className={getInputClass("mensaje")} />
                      <textarea 
                        name="mensaje"
                        placeholder={t('hablemos.form.mensaje')}
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full h-full bg-transparent px-[16px] py-[16px] font-montserrat font-normal text-[20px] md:text-[24px] text-[#38313e] placeholder:text-[#898a8d] placeholder:text-[1rem] outline-none resize-none pr-10"
                      />
                      {touched.mensaje && errors.mensaje && (
                        <div className="absolute right-4 top-[16px] pointer-events-none text-[#D32F2F]">
                          <AlertCircle size={24} />
                        </div>
                      )}
                    </div>
                     <AnimatePresence>
                        {touched.mensaje && errors.mensaje && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            className="text-[#D32F2F] text-[14px] font-montserrat font-normal ml-2 flex items-center gap-1 overflow-hidden"
                          >
                            {errors.mensaje}
                          </motion.div>
                        )}
                      </AnimatePresence>
                  </div>

                  {/* Enviar Button */}
                  <button 
                    type="submit"
                    className="bg-[#fdc82f] flex gap-[10px] items-center justify-center px-[32px] py-[8px] rounded-[16px] self-end hover:bg-[#eebb20] transition-colors cursor-pointer"
                  >
                    <span className="font-aleo font-normal leading-[40px] text-[#38313e] text-[24px] text-nowrap">
                      {t('hablemos.form.enviar')}
                    </span>
                    <div className="h-[15px] relative w-[13px]">
                       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
                         <path d={svgPaths.p12094d00} fill="var(--stroke-0, black)" />
                       </svg>
                    </div>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* MaskGroup Images */}
      <div className="relative w-full overflow-hidden mt-10 md:mt-0">
        {/* Desktop Image */}
        <div className="hidden md:block relative h-[352px] w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute w-full h-full object-cover object-center" src={imgDesktop} />
            <div className="absolute bg-[rgba(56,49,62,0.2)] inset-0" />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden relative h-[192px] w-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute w-full h-full object-cover object-center" src={imgMobile} />
            <div className="absolute bg-[rgba(56,49,62,0.2)] inset-0" />
          </div>
        </div>
      </div>

      <Footer />
      <MenuOverlay isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
