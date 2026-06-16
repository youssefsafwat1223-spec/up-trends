import React from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles, TrendingUp, ShieldCheck, Target, MessageSquare, ClipboardList, PenTool, CheckCircle } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface WhyChooseUsProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t, lang }) => {
  // Map icons for the trust pillars
  const trustIcons = [
    <MapPin className="w-8 h-8 text-brand-cyan" />,
    <Sparkles className="w-8 h-8 text-brand-blue" />,
    <TrendingUp className="w-8 h-8 text-brand-red" />
  ];

  // Map icons for the 6 why reasons
  const whyIcons = [
    <MapPin className="w-6 h-6 text-brand-cyan" />,
    <Target className="w-6 h-6 text-brand-blue" />,
    <PenTool className="w-6 h-6 text-brand-cyan" />,
    <TrendingUp className="w-6 h-6 text-brand-red" />,
    <ClipboardList className="w-6 h-6 text-brand-blue" />,
    <MessageSquare className="w-6 h-6 text-brand-cyan" />
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden border-t border-brand-surface/40">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] gradient-glow-blue opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- PART 1: Trust / Market Position --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-5 text-center lg:text-left rtl:lg:text-right">
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <ShieldCheck className="w-5 h-5 text-brand-cyan" />
              <span className="text-brand-cyan text-sm font-bold uppercase tracking-wider">
                {lang === "en" ? "Market Leader" : "ريادة السوق"}
              </span>
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight ${
              lang === "ar" ? "font-arabic" : "font-sans"
            }`}>
              {t.trustTitle}
            </h2>
            
            <p className={`text-base text-brand-muted leading-relaxed ${
              lang === "ar" ? "font-arabic" : "font-sans"
            }`}>
              {t.trustCopy}
            </p>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {t.trustCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl glow-border-blue flex flex-col gap-4 text-center sm:text-left rtl:sm:text-right"
                >
                  <div className="mx-auto sm:mx-0 w-fit p-3 bg-brand-surface rounded-xl border border-brand-blue/15">
                    {trustIcons[idx]}
                  </div>
                  <h3 className={`text-lg font-bold text-white leading-snug ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {card.title}
                  </h3>
                  <p className={`text-xs md:text-sm text-brand-muted leading-relaxed ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- PART 2: Why UP TREND --- */}
        <div className="border-t border-brand-blue/10 pt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red text-xs font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "Our Advantages" : "مميزاتنا"}</span>
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-extrabold text-white mb-4 ${
              lang === "ar" ? "font-arabic" : "font-sans"
            }`}>
              {t.whyTitle}
            </h2>
            
            <p className={`text-sm md:text-base text-brand-muted ${
              lang === "ar" ? "font-arabic" : "font-sans"
            }`}>
              {t.whySubtitle}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.whyList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-panel p-6 rounded-2xl flex gap-4 text-left rtl:text-right hover:border-brand-red/30 transition-all duration-300 relative group"
              >
                {/* Accent red top-edge line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-t-2xl" />

                <div className="flex-shrink-0 p-3 bg-brand-surface h-12 w-12 rounded-xl border border-brand-blue/10 flex items-center justify-center">
                  {whyIcons[idx]}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className={`text-base font-bold text-white group-hover:text-brand-cyan transition-colors ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs md:text-sm text-brand-muted leading-relaxed ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
