import React from "react";
import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Palette, Sparkles, Video, Globe, Search, Target, Users, BarChart3, HelpCircle } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface ServicesProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Services: React.FC<ServicesProps> = ({ t, lang }) => {
  // Array of icons corresponding to the 10 services
  const icons = [
    <Megaphone className="w-6 h-6 text-brand-cyan" />,
    <TrendingUp className="w-6 h-6 text-brand-red" />,
    <Palette className="w-6 h-6 text-brand-blue" />,
    <Sparkles className="w-6 h-6 text-brand-cyan" />,
    <Video className="w-6 h-6 text-brand-red" />,
    <Globe className="w-6 h-6 text-brand-blue" />,
    <Search className="w-6 h-6 text-brand-cyan" />,
    <Target className="w-6 h-6 text-brand-red" />,
    <Users className="w-6 h-6 text-brand-blue" />,
    <BarChart3 className="w-6 h-6 text-brand-cyan" />
  ];

  // Alternating accent styling classes
  const hoverStyles = [
    "hover:border-brand-blue/60 hover:shadow-brand-blue/10",
    "hover:border-brand-red/60 hover:shadow-brand-red/10",
    "hover:border-brand-cyan/60 hover:shadow-brand-cyan/10"
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="services" className="relative py-24 border-t border-brand-surface/40">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] gradient-glow-blue opacity-40 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] gradient-glow-red opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "What We Do" : "خدماتنا"}</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.servicesTitle}
          </h2>
          
          <p className={`text-base md:text-lg text-brand-muted leading-relaxed ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.servicesList.map((service, idx) => {
            const hStyle = hoverStyles[idx % hoverStyles.length];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`glass-panel p-8 rounded-2xl border border-brand-blue/10 flex flex-col justify-between transition-all duration-300 relative group cursor-default ${hStyle}`}
              >
                {/* Visual Accent Corner lines on hover */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-transparent group-hover:border-brand-cyan/50 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-transparent group-hover:border-brand-cyan/50 transition-all duration-300" />

                <div>
                  {/* Icon Wrapper */}
                  <div className="p-3 bg-brand-surface rounded-xl border border-brand-blue/15 w-fit mb-6 transition-all duration-300 group-hover:scale-110">
                    {icons[idx] || <HelpCircle className="w-6 h-6 text-brand-cyan" />}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm md:text-base text-brand-muted leading-relaxed mb-6 ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Micro Action Button - Visual Only for Premium Feel */}
                <a
                  href="#contact"
                  className={`text-xs font-semibold flex items-center gap-1 w-fit mt-auto transition-all duration-300 ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  } ${
                    idx % 2 === 0
                      ? "text-brand-cyan group-hover:text-white"
                      : "text-brand-red group-hover:text-white"
                  }`}
                >
                  <span>{lang === "en" ? "Discuss Project" : "ناقش مشروعك"}</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
