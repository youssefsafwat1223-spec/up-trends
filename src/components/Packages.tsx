import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface PackagesProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Packages: React.FC<PackagesProps> = ({ t, lang }) => {
  const scrollIntoView = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
    <section id="packages" className="relative py-24 border-t border-brand-surface/40">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] gradient-glow-blue opacity-25 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Flexible Engagement" : "خطط التعاقد"}</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.packagesTitle}
          </h2>
          
          <p className={`text-base md:text-lg text-brand-muted leading-relaxed ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.packagesSubtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {t.packagesList.map((pkg, idx) => {
            const isFeatured = idx === 1; // Middle one is Growth Campaign (Featured)
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`glass-panel p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                  isFeatured
                    ? "border-brand-blue/50 shadow-[0_15px_40px_rgba(11,123,255,0.15)] md:scale-105 z-10"
                    : "border-brand-blue/10"
                } hover:border-brand-cyan/40 group`}
              >
                {/* Glow behind featured package */}
                {isFeatured && (
                  <div className="absolute inset-0 bg-brand-blue/5 rounded-3xl filter blur-xl -z-10" />
                )}

                {/* Card Header */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className={`text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors ${
                        lang === "ar" ? "font-arabic" : "font-sans"
                      }`}>
                        {pkg.title}
                      </h3>
                      <p className={`text-xs text-brand-muted mt-2 leading-relaxed ${
                        lang === "ar" ? "font-arabic" : "font-sans"
                      }`}>
                        {pkg.subtitle}
                      </p>
                    </div>

                    {/* Featured Ribbon / Badge */}
                    {isFeatured && (
                      <span className="px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-cyan text-[10px] font-black uppercase tracking-wider">
                        {lang === "en" ? "Popular" : "الأكثر طلباً"}
                      </span>
                    )}
                  </div>

                  {/* Pricing / Budget note */}
                  <div className="py-6 border-y border-brand-blue/10 mb-8 flex flex-col gap-1">
                    <span className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider text-brand-red ${
                      lang === "ar" ? "font-arabic" : "font-sans"
                    }`}>
                      {lang === "en" ? "Investment Range" : "حجم الاستثمار"}
                    </span>
                    <span className={`text-lg font-black text-white ${
                      lang === "ar" ? "font-arabic" : "font-sans"
                    }`}>
                      {pkg.pricingNote}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-brand-muted">
                        <Check className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className={lang === "ar" ? "font-arabic leading-snug" : "font-sans leading-snug"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => scrollIntoView("#contact")}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-center transition-all duration-300 cursor-pointer ${
                    isFeatured
                      ? "bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-[0_4px_15px_rgba(11,123,255,0.3)] hover:shadow-[0_6px_22px_rgba(37,217,255,0.5)] hover:-translate-y-0.5"
                      : "bg-brand-surface/80 hover:bg-brand-surface border border-brand-blue/20 hover:border-brand-cyan/40 text-white"
                  }`}
                >
                  {pkg.ctaText}
                </button>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
