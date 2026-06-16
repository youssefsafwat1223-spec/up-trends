import React from "react";
import { Utensils, Building2, HeartPulse, ShoppingBag, GraduationCap, Sparkles, Rocket, Wrench } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface IndustriesProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Industries: React.FC<IndustriesProps> = ({ t, lang }) => {
  // Map icons for all 8 industries
  const industryIcons = [
    <Utensils className="w-5 h-5 text-brand-cyan" />,
    <HeartPulse className="w-5 h-5 text-brand-red" />,
    <Building2 className="w-5 h-5 text-brand-blue" />,
    <ShoppingBag className="w-5 h-5 text-brand-cyan" />,
    <GraduationCap className="w-5 h-5 text-brand-blue" />,
    <Sparkles className="w-5 h-5 text-brand-red" />,
    <Rocket className="w-5 h-5 text-brand-cyan" />,
    <Wrench className="w-5 h-5 text-brand-blue" />
  ];

  return (
    <section className="relative py-24 border-t border-brand-surface/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-glow-blue opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Our Focus Areas" : "مجالات التركيز"}</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.industriesTitle}
          </h2>
          
          <p className={`text-base md:text-lg text-brand-muted leading-relaxed ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.industriesSubtitle}
          </p>
        </div>

        {/* Grid of 8 industries */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {t.industriesList.map((industry, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-brand-blue/10 flex flex-col items-center justify-center text-center gap-4 hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {/* Icon Container */}
              <div className="p-3 bg-brand-surface rounded-xl border border-brand-blue/15 group-hover:scale-110 transition-transform duration-300">
                {industryIcons[idx]}
              </div>

              {/* Title */}
              <h3 className={`text-sm md:text-base font-bold text-white group-hover:text-brand-cyan transition-colors ${
                lang === "ar" ? "font-arabic" : "font-sans"
              }`}>
                {industry}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
