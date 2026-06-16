import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface FAQProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const FAQ: React.FC<FAQProps> = ({ t, lang }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 border-t border-brand-surface/40">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] gradient-glow-blue opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Common Questions" : "الأسئلة الشائعة"}</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.faqTitle}
          </h2>
          
          <p className={`text-base md:text-lg text-brand-muted leading-relaxed ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQ List Accordions (split into 2 columns on desktop for better readability) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
          
          {t.faqList.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-brand-blue/40 bg-brand-surface/85" : "border-brand-blue/10"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left rtl:text-right gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base md:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors ${
                    lang === "ar" ? "font-arabic" : "font-sans"
                  }`}>
                    {item.question}
                  </span>
                  
                  <span className="flex-shrink-0 p-1.5 rounded-lg bg-brand-surface border border-brand-blue/15 text-brand-cyan group-hover:bg-brand-blue/15 transition-all">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Accordion Expandable Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-brand-blue/5">
                        <p className={`text-sm md:text-base text-brand-muted leading-relaxed ${
                          lang === "ar" ? "font-arabic" : "font-sans"
                        }`}>
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
