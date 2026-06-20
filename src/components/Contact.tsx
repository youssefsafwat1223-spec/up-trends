import React from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import type { TranslationModel } from "../data/content";

interface ContactProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Contact: React.FC<ContactProps> = ({ t, lang }) => {
  return (
    <section id="contact" className="relative py-24 border-t border-brand-surface/40 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-glow-red opacity-20 -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <MessageSquare className="w-6 h-6 text-brand-cyan" />
            <span className="text-brand-cyan text-sm font-bold uppercase tracking-wider">
              {lang === "en" ? "Let's Connect" : "تواصل معنا"}
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.contactTitle}
          </h2>
          
          <p className={`text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl mx-auto ${
            lang === "ar" ? "font-arabic" : "font-sans"
          }`}>
            {t.contactSubtitle}
          </p>
        </div>

        {/* Visual info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left rtl:text-right">
          <a
            href="mailto:uptrendmarketing@gmail.com"
            className="flex items-center gap-5 p-6 rounded-3xl glass-panel border border-brand-blue/10 hover:border-brand-blue/30 hover:bg-brand-surface/60 transition-all duration-300"
          >
            <div className="p-4 bg-brand-surface rounded-2xl border border-brand-blue/15 text-brand-cyan shadow-inner">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className={`block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1 ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                {lang === "en" ? "Email Address" : "البريد الإلكتروني"}
              </span>
              <span className="text-base font-bold text-white tracking-wide">{t.contactEmailVal}</span>
            </div>
          </a>

          <div className="flex items-center gap-5 p-6 rounded-3xl glass-panel border border-brand-blue/10">
            <div className="p-4 bg-brand-surface rounded-2xl border border-brand-blue/15 text-brand-cyan shadow-inner">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className={`block text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1 ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                {lang === "en" ? "Headquarters" : "الموقع الرئيسي"}
              </span>
              <span className={`text-base font-bold text-white tracking-wide ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
                {t.contactLocationVal}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
