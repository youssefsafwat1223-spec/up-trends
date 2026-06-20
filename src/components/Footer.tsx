import React from "react";
import { Mail, MapPin } from "lucide-react";
import logoDark from "../assets/logo_dark_bg.png";
import type { TranslationModel } from "../data/content";

interface FooterProps {
  t: TranslationModel;
  lang: "en" | "ar";
}

export const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  const quickLinks = [
    { name: t.navHome, href: "#home" },
    { name: t.navServices, href: "#services" },
    { name: t.navWork, href: "#work" },
    { name: t.navProcess, href: "#process" },
    { name: t.navPackages, href: "#packages" },
    { name: t.navFAQ, href: "#faq" },
    { name: t.navContact, href: "#contact" },
  ];

  const servicesLinks = [
    t.servicesList[0].title, // Social Media
    t.servicesList[1].title, // Paid Ads
    t.servicesList[2].title, // Branding
    t.servicesList[4].title, // Video Production
    t.servicesList[5].title, // Website Dev
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#03080e] border-t border-brand-blue/15 pt-20 pb-10 relative overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-brand-cyan" />
        <div className="absolute left-[30%] top-0 bottom-0 w-[1px] bg-brand-blue" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-brand-red" />
        <div className="absolute left-[70%] top-0 bottom-0 w-[1px] bg-brand-cyan" />
        <div className="absolute left-[90%] top-0 bottom-0 w-[1px] bg-brand-blue" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 relative">
        
        {/* Brand column */}
        <div className="lg:col-span-4 flex flex-col gap-6 items-start">
          <img src={logoDark} alt="UP TREND" className="h-10 w-auto object-contain" />
          <p className={`text-sm text-brand-muted leading-relaxed ${lang === "ar" ? "font-arabic text-right" : "font-sans"}`}>
            {t.footerDesc}
          </p>
        </div>


        {/* Quick links column */}
        <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6">
          <h3 className={`text-sm font-extrabold uppercase tracking-wider text-white ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
            {t.footerLinksTitle}
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm text-brand-muted hover:text-brand-cyan transition-colors ${lang === "ar" ? "font-arabic" : "font-sans"}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h3 className={`text-sm font-extrabold uppercase tracking-wider text-white ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
            {t.footerServicesTitle}
          </h3>
          <ul className="flex flex-col gap-3">
            {servicesLinks.map((name, idx) => (
              <li key={idx}>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className={`text-sm text-brand-muted hover:text-brand-cyan transition-colors ${lang === "ar" ? "font-arabic" : "font-sans"}`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info column */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <h3 className={`text-sm font-extrabold uppercase tracking-wider text-white ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
            {t.footerContactTitle}
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-brand-muted">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-cyan flex-shrink-0" />
              <span className={lang === "ar" ? "font-arabic" : "font-sans"}>
                {t.contactLocationVal}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-cyan flex-shrink-0" />
              <span>{t.contactEmailVal}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright bar */}
      <div className="border-t border-brand-blue/10 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className={`text-xs text-brand-muted ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
          {t.footerCopyright}
        </span>
        <span className={`text-[10px] text-brand-muted/40 uppercase tracking-widest ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
          {lang === "en" ? "Made for Iraqi Brands" : "صنع للعلامات التجارية العراقية"}
        </span>
      </div>

    </footer>
  );
};
