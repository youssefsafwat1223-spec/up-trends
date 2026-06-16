import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface ProcessProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Process: React.FC<ProcessProps> = ({ t, lang }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: lang === "ar" ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="process" className="relative py-24 border-t border-brand-surface/40">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] gradient-glow-blue opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit text-center lg:text-left rtl:lg:text-right">
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <TrendingUp className="w-5 h-5 text-brand-cyan" />
              <span className="text-brand-cyan text-sm font-bold uppercase tracking-wider">
                {lang === "en" ? "How We Work" : "منهجية العمل"}
              </span>
            </div>
            
            <h2 className={`text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight ${
              lang === "ar" ? "font-arabic" : "font-sans"
            }`}>
              {t.processTitle}
            </h2>
            
            <p className={`text-base text-brand-muted leading-relaxed mb-8 ${
              lang === "ar" ? "font-arabic" : "font-sans"
            }`}>
              {t.processSubtitle}
            </p>

            {/* UP TREND Logo Arrow Motif Line Decoration */}
            <div className="hidden lg:flex items-center gap-1.5 ltr:mt-10 rtl:mt-10 ltr:justify-start rtl:justify-end">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-brand-cyan"
                  style={{ opacity: 0.2 + i * 0.2 }}
                />
              ))}
              <div className="w-8 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full" />
            </div>
          </div>

          {/* Timeline Right Column */}
          <div className="lg:col-span-8 relative">
            
            {/* Timeline Vertical Connecting Bar */}
            <div className="absolute top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-red ltr:left-7 rtl:right-7" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-12"
            >
              {t.processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-6 relative ltr:pl-3 rtl:pr-3"
                >
                  {/* Glowing Step Number Badge on Timeline */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-surface border border-brand-blue/30 flex items-center justify-center text-sm font-bold text-white shadow-[0_0_15px_rgba(11,123,255,0.25)] group hover:border-brand-cyan/60 hover:shadow-brand-cyan/40 transition-all duration-300 z-10 ltr:translate-x-[-1px] rtl:translate-x-[1px]">
                    <span className="text-brand-cyan group-hover:text-white transition-colors">{step.number}</span>
                  </div>

                  {/* Step Content Card */}
                  <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl w-full">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className={`text-xl font-bold text-white flex items-center gap-2 ${
                        lang === "ar" ? "font-arabic" : "font-sans"
                      }`}>
                        <span>{step.title}</span>
                      </h3>
                      
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-cyan px-2 py-0.5 rounded bg-brand-blue/10 w-fit">
                        {lang === "en" ? `Phase ${idx + 1}` : `المرحلة ${idx + 1}`}
                      </span>
                    </div>
                    
                    <p className={`text-sm md:text-base text-brand-muted leading-relaxed ${
                      lang === "ar" ? "font-arabic" : "font-sans"
                    }`}>
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
