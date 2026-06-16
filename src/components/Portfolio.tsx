import React from "react";
import { motion } from "framer-motion";
import { Briefcase, AlertCircle, Building2, Utensils, HeartPulse, ShoppingBag } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface PortfolioProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Portfolio: React.FC<PortfolioProps> = ({ t, lang }) => {
  // Map icons for vertical visual branding
  const verticalIcons = [
    <Utensils className="w-5 h-5 text-brand-cyan" />,
    <Building2 className="w-5 h-5 text-brand-blue" />,
    <HeartPulse className="w-5 h-5 text-brand-red" />,
    <ShoppingBag className="w-5 h-5 text-brand-cyan" />
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="work" className="relative py-24 border-t border-brand-surface/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] gradient-glow-blue opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand-blue/25 bg-brand-blue/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Our Portfolio" : "أعمالنا"}</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.workTitle}
          </h2>
          
          <p className={`text-base md:text-lg text-brand-muted leading-relaxed ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.workSubtitle}
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {t.workCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel p-8 rounded-3xl border border-brand-blue/10 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300 relative overflow-hidden group cursor-default"
            >
              {/* Background gradient decorative glow */}
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-brand-blue/5 filter blur-3xl group-hover:bg-brand-cyan/10 transition-all duration-500" />
              
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-surface rounded-xl border border-brand-blue/15">
                      {verticalIcons[idx]}
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider text-brand-cyan ${
                      lang === "ar" ? "font-arabic" : "font-sans"
                    }`}>
                      {lang === "en" ? "Case Study" : "دراسة حالة"}
                    </span>
                  </div>
                  
                  {/* Placeholder Badge */}
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-surface border border-brand-red/25 text-brand-red text-[10px] font-bold uppercase tracking-wider">
                    <AlertCircle className="w-3 h-3" />
                    <span>{lang === "en" ? "Placeholder" : "توضيحي"}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors ${
                  lang === "ar" ? "font-arabic" : "font-sans"
                }`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className={`text-sm md:text-base text-brand-muted mb-8 leading-relaxed ${
                  lang === "ar" ? "font-arabic" : "font-sans"
                }`}>
                  {card.description}
                </p>

                {/* Metric Display */}
                <div className="p-5 bg-brand-surface/80 rounded-2xl border border-brand-blue/10 mb-6 group-hover:border-brand-cyan/20 transition-all duration-300">
                  <span className={`block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-brand-red mb-1.5 flex items-center gap-1.5 ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{card.metricLabel}</span>
                  </span>
                  <div className={`text-xl md:text-2xl font-black text-white ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {card.metricValue}
                  </div>
                </div>
              </div>

              {/* Note about customization */}
              <div className="flex items-center gap-2 text-xs text-brand-muted/70 italic border-t border-brand-blue/10 pt-4">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan/50" />
                <span className={lang === "ar" ? "font-arabic" : "font-sans"}>{card.placeholderNote}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
