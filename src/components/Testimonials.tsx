import React from "react";
import { MessageSquare, AlertCircle, Quote } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface TestimonialsProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t, lang }) => {
  return (
    <section className="relative py-20 border-t border-brand-surface/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] gradient-glow-red opacity-15 -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Reviews" : "آراء الشركاء"}</span>
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-extrabold text-white mb-2 ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.testimonialsTitle}
          </h2>
        </div>

        {/* Testimonial Placeholder Card */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-brand-blue/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
          
          {/* Quote decorative backdrop icon */}
          <Quote className="absolute top-6 left-6 w-16 h-16 text-brand-blue/5 transform -rotate-12" />
          <Quote className="absolute bottom-6 right-6 w-16 h-16 text-brand-cyan/5 transform rotate-180" />

          {/* Alert tag */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface border border-brand-red/25 text-brand-red text-xs font-semibold mb-6">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span className={lang === "ar" ? "font-arabic" : "font-sans"}>{t.testimonialsNote}</span>
          </div>

          {/* Muted placeholder statement */}
          <p className={`text-lg md:text-xl text-brand-muted italic leading-relaxed max-w-xl ${
            lang === "ar" ? "font-arabic font-medium" : "font-sans font-light"
          }`}>
            "{t.testimonialsPlaceholder}"
          </p>

          <div className="mt-8 flex items-center gap-1.5 justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse delay-150" />
            <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse delay-300" />
          </div>
        </div>

      </div>
    </section>
  );
};
